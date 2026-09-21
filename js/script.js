document.addEventListener("DOMContentLoaded", function () {
    mostrarArticulosDestacados();
});

const inputBuscador = document.querySelector("#inputBuscador");
const contenedorResultados = document.querySelector("#resultadosBusqueda");
const contenedorCapitulos = document.querySelector(".capitulos");

// Agrupa una lista de artículos en bloques por capítulo, respetando el orden
function agruparPorCapitulo(articulos) {
    const grupos = [];
    let capituloActual = null;
    articulos.forEach(function (articulo) {
        if (articulo.capitulo !== capituloActual) {
            capituloActual = articulo.capitulo;
            grupos.push({
                capitulo: articulo.capitulo,
                capituloTitulo: articulo.capituloTitulo,
                articulos: []
            });
        }
        grupos[grupos.length - 1].articulos.push(articulo);
    });
    return grupos;
}

function crearEncabezadoCapitulo(grupo) {
    const encabezado = document.createElement("h2");
    encabezado.classList.add("titulo-capitulo");
    encabezado.textContent = `Capítulo ${grupo.capitulo} — ${grupo.capituloTitulo}`;
    return encabezado;
}

// Muestra la grilla principal, agrupada por capítulo
function mostrarArticulosDestacados() {
    contenedorCapitulos.innerHTML = "";
    contenedorCapitulos.style.display = ""; // Elimina inline styles que interfieran con el CSS

    const grupos = agruparPorCapitulo(lbpa);
    grupos.forEach(function (grupo) {
        // Envolvemos todo el capítulo en una sección individual
        const bloqueCapitulo = document.createElement("div");
        bloqueCapitulo.classList.add("bloque-capitulo");

        bloqueCapitulo.appendChild(crearEncabezadoCapitulo(grupo));

        const fila = document.createElement("div");
        fila.classList.add("fila-capitulo");

        grupo.articulos.forEach(function (articulo) {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta-capitulo");
            tarjeta.innerHTML = `
                <h3>Art. ${articulo.numero}</h3>
                <p>${articulo.titulo}</p>
            `;
            tarjeta.addEventListener("click", function () {
                mostrarArticuloIndividual(articulo);
            });
            fila.appendChild(tarjeta);
        });

        bloqueCapitulo.appendChild(fila);
        contenedorCapitulos.appendChild(bloqueCapitulo);
    });
}

// --- BUSCADOR ---
inputBuscador.addEventListener("input", function () {
    const consulta = inputBuscador.value.trim().toLowerCase();
    if (consulta === "") {
        contenedorResultados.innerHTML = "";
        contenedorCapitulos.style.display = ""; // Muestra el contenedor respetando CSS
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

function obtenerPrimerInciso(texto) {
    return texto.split("\n")[0].trim();
}

function formatearIncisos(texto) {
    return texto
        .split("\n")
        .map(function (inciso) {
            return `<p class="resultado-texto">${inciso.trim()}</p>`;
        })
        .join("");
}

function formatearNumerales(numerales) {
    if (!numerales || numerales.length === 0) return "";
    const items = numerales.map(function (n) {
        return `<li>${n}</li>`;
    }).join("");
    return `<ol class="resultado-numerales">${items}</ol>`;
}

function renderResumenArticulo(articulo) {
    const primerInciso = obtenerPrimerInciso(articulo.texto);
    return `
        <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
        <span class="resultado-etiqueta">Texto oficial (primer inciso)</span>
        <p class="resultado-texto">${primerInciso}</p>
        <span class="resultado-ver-mas">Ver artículo completo →</span>
    `;
}

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

// Resultados del buscador, agrupados por capítulo
function mostrarResultados(resultados, consulta) {
    contenedorResultados.innerHTML = "";
    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `<p class="sin-resultados">No se encontraron resultados para "${consulta}".</p>`;
        return;
    }
    const grupos = agruparPorCapitulo(resultados);
    grupos.forEach(function (grupo) {
        contenedorResultados.appendChild(crearEncabezadoCapitulo(grupo));
        grupo.articulos.forEach(function (articulo) {
            const item = document.createElement("div");
            item.classList.add("resultado-item", "resultado-clicable");
            item.innerHTML = renderResumenArticulo(articulo);
            item.addEventListener("click", function () {
                mostrarArticuloIndividual(articulo, consulta);
            });
            contenedorResultados.appendChild(item);
        });
    });
}

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
            contenedorCapitulos.style.display = "";
        }
    });
}
