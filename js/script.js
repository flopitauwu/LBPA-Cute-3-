document.addEventListener("DOMContentLoaded", function () {
    mostrarArticulosDestacados();
});

const inputBuscador = document.querySelector("#inputBuscador");
const contenedorResultados = document.querySelector("#resultadosBusqueda");
const contenedorCapitulos = document.querySelector(".capitulos");

// Muestra tarjetas con todos los artículos
function mostrarArticulosDestacados() {
    contenedorCapitulos.innerHTML = "";
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
        contenedorCapitulos.appendChild(tarjeta);
    });
}

// --- BUSCADOR ---
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

// Devuelve solo el primer inciso de un texto (los incisos se separan con \n)
function obtenerPrimerInciso(texto) {
    return texto.split("\n")[0].trim();
}

// Convierte un texto con \n entre incisos en párrafos HTML separados
function formatearIncisos(texto) {
    return texto
        .split("\n")
        .map(function (inciso) {
            return `<p class="resultado-texto">${inciso.trim()}</p>`;
        })
        .join("");
}

// Convierte un arreglo de numerales en una lista ordenada
function formatearNumerales(numerales) {
    if (!numerales || numerales.length === 0) return "";
    const items = numerales.map(function (n) {
        return `<li>${n}</li>`;
    }).join("");
    return `<ol class="resultado-numerales">${items}</ol>`;
}

// Vista RESUMIDA para resultados de búsqueda: solo título + primer inciso
function renderResumenArticulo(articulo) {
    const primerInciso = obtenerPrimerInciso(articulo.texto);
    return `
        <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
        <span class="resultado-etiqueta">Texto oficial (primer inciso)</span>
        <p class="resultado-texto">${primerInciso}</p>
        <span class="resultado-ver-mas">Ver artículo completo →</span>
    `;
}

// Vista COMPLETA: todos los incisos + numerales + continuación + comentario
function renderArticuloCompleto(articulo) {
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
        item.classList.add("resultado-item", "resultado-clicable");
        item.innerHTML = renderResumenArticulo(articulo);
        item.addEventListener("click", function () {
            mostrarArticuloIndividual(articulo, consulta);
        });
        contenedorResultados.appendChild(item);
    });
}

// Muestra un artículo completo. Si viene de una búsqueda, "origenConsulta"
// guarda lo que se buscó para poder volver a esos mismos resultados.
function mostrarArticuloIndividual(articulo, origenConsulta) {
    contenedorCapitulos.style.display = "none";
    contenedorResultados.innerHTML = `
        <button id="btnVolver" class="btn-volver">← Volver</button>
        <div class="resultado-item">${renderArticuloCompleto(articulo)}</div>
    `;
    document.querySelector("#btnVolver").addEventListener("click", function () {
        if (origenConsulta) {
            inputBuscador.value = origenConsulta;
            inputBuscador.dispatchEvent(new Event("input"));
        } else {
            inputBuscador.value = "";
            contenedorResultados.innerHTML = "";
            contenedorCapitulos.style.display = "grid";
        }
    });
}
