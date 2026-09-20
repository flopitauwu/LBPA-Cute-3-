document.addEventListener("DOMContentLoaded", function () {
    mostrarArticulosDestacados();
});

// Muestra tarjetas con todos los artículos
function mostrarArticulosDestacados() {
    const contenedor = document.querySelector(".capitulos");
    contenedor.innerHTML = "";
    lbpa.forEach(function (articulo) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-capitulo");
        tarjeta.innerHTML = `
            <h3>Art. ${articulo.numero}</h3>
            <p>${articulo.titulo}</p>
        `;
        tarjeta.addEventListener("click", function () {
            mostrarArticuloIndividual(articulo);
        });
        contenedor.appendChild(tarjeta);
    });
}

// --- BUSCADOR ---
const inputBuscador = document.querySelector("#inputBuscador");
const contenedorResultados = document.querySelector("#resultadosBusqueda");
const contenedorCapitulos = document.querySelector(".capitulos");

inputBuscador.addEventListener("input", function () {
    const consulta = inputBuscador.value.trim().toLowerCase();
    if (consulta === "") {
        contenedorResultados.innerHTML = "";
        contenedorCapitulos.style.display = "grid";
        return;
    }
    contenedorCapitulos.style.display = "none";
    const resultados = lbpa.filter(function (articulo) {
        const coincideNumero = String(articulo.numero) === consulta;
        const coincideTitulo = articulo.titulo.toLowerCase().includes(consulta);
        const coincideTexto = articulo.texto.toLowerCase().includes(consulta);
        const coincideConcepto = (articulo.conceptos || []).some(c => c.toLowerCase().includes(consulta));
        const coincideNumerales = (articulo.numerales || []).some(n => n.toLowerCase().includes(consulta));
        const coincideContinuacion = articulo.textoContinuacion
            ? articulo.textoContinuacion.toLowerCase().includes(consulta)
            : false;
        return coincideNumero || coincideTitulo || coincideTexto || coincideConcepto || coincideNumerales || coincideContinuacion;
    });
    mostrarResultados(resultados, consulta);
});

// Convierte un texto con \n entre incisos en párrafos HTML separados
function formatearIncisos(texto) {
    return texto
        .split("\n")
        .map(function (inciso) {
            return `<p class="resultado-texto">${inciso.trim()}</p>`;
        })
        .join("");
}

// Convierte un arreglo de numerales (a), b)... o 1., 2....) en una lista ordenada
function formatearNumerales(numerales) {
    if (!numerales || numerales.length === 0) return "";
    const items = numerales.map(function (n) {
        return `<li>${n}</li>`;
    }).join("");
    return `<ol class="resultado-numerales">${items}</ol>`;
}

// Arma el HTML completo de un artículo: texto + numerales + continuación + comentario
function renderArticulo(articulo) {
    const comentarioHTML = articulo.comentarioProfesor
        ? `<span class="resultado-etiqueta">Según Bermúdez</span>
           <p class="resultado-comentario">${articulo.comentarioProfesor}</p>`
        : "";
    return `
        <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
        <span class="resultado-etiqueta">Texto oficial</span>
        ${formatearIncisos(articulo.texto)}
        ${formatearNumerales(articulo.numerales)}
        ${articulo.textoContinuacion ? formatearIncisos(articulo.textoContinuacion) : ""}
        ${comentarioHTML}
    `;
}

function mostrarResultados(resultados, consulta) {
    contenedorResultados.innerHTML = "";
    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `<p class="sin-resultados">No se encontraron resultados para "${consulta}".</p>`;
        return;
    }
    resultados.forEach(function (articulo) {
        const item = document.createElement("div");
        item.classList.add("resultado-item");
        item.innerHTML = renderArticulo(articulo);
        contenedorResultados.appendChild(item);
    });
}

// Muestra un solo artículo completo al presionar su tarjeta
function mostrarArticuloIndividual(articulo) {
    contenedorCapitulos.style.display = "none";
    inputBuscador.value = "";
    contenedorResultados.innerHTML = `
        <button id="btnVolver" class="btn-volver">← Volver a todos los artículos</button>
        <div class="resultado-item">${renderArticulo(articulo)}</div>
    `;
    document.querySelector("#btnVolver").addEventListener("click", function () {
        contenedorResultados.innerHTML = "";
        contenedorCapitulos.style.display = "grid";
    });
}
