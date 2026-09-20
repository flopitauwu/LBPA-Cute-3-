document.addEventListener("DOMContentLoaded", function () {
    mostrarArticulosDestacados();
});

// Muestra tarjetas con los artículos que definen los principios (4 al 16)
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
        return coincideNumero || coincideTitulo || coincideTexto || coincideConcepto;
    });

    mostrarResultados(resultados, consulta);
});

function mostrarResultados(resultados, consulta) {
    contenedorResultados.innerHTML = "";

    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `<p class="sin-resultados">No se encontraron resultados para "${consulta}".</p>`;
        return;
    }

    resultados.forEach(function (articulo) {
        const item = document.createElement("div");
        item.classList.add("resultado-item");

        const comentarioHTML = articulo.comentarioProfesor
            ? `<span class="resultado-etiqueta">Según Bermúdez</span>
               <p class="resultado-comentario">${articulo.comentarioProfesor}</p>`
            : "";

        item.innerHTML = `
            <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
            <span class="resultado-etiqueta">Texto oficial</span>
            <p class="resultado-texto">${articulo.texto}</p>
            ${comentarioHTML}
        `;

        contenedorResultados.appendChild(item);
    });
}
