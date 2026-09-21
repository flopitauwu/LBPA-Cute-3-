document.addEventListener("DOMContentLoaded", function () {
    mostrarArticulosDestacados();
    poblarIndiceFlor();
});
const inputBuscador = document.querySelector("#inputBuscador");
const contenedorResultados = document.querySelector("#resultadosBusqueda");
const contenedorVistaArticulo = document.querySelector("#vistaArticulo");
const contenedorCapitulos = document.querySelector(".capitulos");

function agruparPorCapitulo(articulos) {
    const grupos = [];
    let capituloActual = null;
    articulos.forEach(function (articulo) {
        if (articulo.capitulo !== capituloActual) {
            capituloActual = articulo.capitulo;
            grupos.push({ capitulo: articulo.capitulo, capituloTitulo: articulo.capituloTitulo, articulos: [] });
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
function mostrarArticulosDestacados() {
    contenedorVistaArticulo.innerHTML = "";
    contenedorCapitulos.innerHTML = "";
    contenedorCapitulos.style.display = "";
    const grupos = agruparPorCapitulo(lbpa);
    grupos.forEach(function (grupo) {
        const bloqueCapitulo = document.createElement("div");
        bloqueCapitulo.classList.add("bloque-capitulo");
        bloqueCapitulo.appendChild(crearEncabezadoCapitulo(grupo));
        const fila = document.createElement("div");
        fila.classList.add("fila-capitulo");
        grupo.articulos.forEach(function (articulo) {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta-capitulo");
            tarjeta.innerHTML = `<h3>Art. ${articulo.numero}</h3><p>${articulo.titulo}</p>`;
            tarjeta.addEventListener("click", function () { mostrarArticuloIndividual(articulo); });
            fila.appendChild(tarjeta);
        });
        bloqueCapitulo.appendChild(fila);
        contenedorCapitulos.appendChild(bloqueCapitulo);
    });
}

// --- ÍNDICE FLOR ---
function poblarIndiceFlor() {
    const listaIndice = document.querySelector("#listaIndice");
    const grupos = agruparPorCapitulo(lbpa);
    grupos.forEach(function (grupo) {
        listaIndice.appendChild(crearEncabezadoCapitulo(grupo));
        const ul = document.createElement("ul");
        grupo.articulos.forEach(function (articulo) {
            const li = document.createElement("li");
            li.textContent = `Art. ${articulo.numero} — ${articulo.titulo}`;
            li.addEventListener("click", function () {
                cerrarModalIndice();
                mostrarArticuloIndividual(articulo);
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
            ul.appendChild(li);
        });
        listaIndice.appendChild(ul);
    });
}
function abrirModalIndice() { document.querySelector("#modalIndice").classList.remove("oculto"); }
function cerrarModalIndice() { document.querySelector("#modalIndice").classList.add("oculto"); }
document.querySelector("#btnIndiceFlor").addEventListener("click", abrirModalIndice);
document.querySelector("#btnCerrarIndice").addEventListener("click", cerrarModalIndice);
document.querySelector("#modalIndice").addEventListener("click", function (evento) {
    if (evento.target.id === "modalIndice") cerrarModalIndice();
});

// --- BUSCADOR ---
inputBuscador.addEventListener("input", function () {
    contenedorVistaArticulo.innerHTML = "";
    const consulta = inputBuscador.value.trim().toLowerCase();
    if (consulta === "") {
        contenedorResultados.innerHTML = "";
        contenedorCapitulos.style.display = "";
        return;
    }
    contenedorCapitulos.style.display = "none";
    const resultados = lbpa.filter(function (articulo) {
        const coincideNumero = String(articulo.numero) === consulta;
        const coincideTitulo = articulo.titulo.toLowerCase().includes(consulta);
        const coincideTexto = articulo.texto.toLowerCase().includes(consulta);
        const coincideConcepto = (articulo.conceptos || []).some(c => c.toLowerCase().includes(consulta));
        const coincideNumerales = (articulo.numerales || []).some(n => n.toLowerCase().includes(consulta));
        const coincideContinuacion = articulo.textoContinuacion ? articulo.textoContinuacion.toLowerCase().includes(consulta) : false;
        return coincideNumero || coincideTitulo || coincideTexto || coincideConcepto || coincideNumerales || coincideContinuacion;
    });
    mostrarResultados(resultados, consulta);
});

// --- RESALTADO ---
function escaparRegex(texto) { return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function resaltar(texto, consulta) {
    if (!consulta) return texto;
    const regex = new RegExp(`(${escaparRegex(consulta)})`, "gi");
    return texto.replace(regex, '<mark class="resaltado">$1</mark>');
}
function obtenerPrimerInciso(texto) { return texto.split("\n")[0].trim(); }
function formatearIncisos(texto, consulta) {
    return texto.split("\n").map(function (inciso) {
        return `<p class="resultado-texto">${resaltar(inciso.trim(), consulta)}</p>`;
    }).join("");
}
function formatearNumerales(numerales, consulta) {
    if (!numerales || numerales.length === 0) return "";
    const items = numerales.map(function (n) { return `<li>${resaltar(n, consulta)}</li>`; }).join("");
    return `<ol class="resultado-numerales">${items}</ol>`;
}
function renderResumenArticulo(articulo, consulta) {
    const primerInciso = obtenerPrimerInciso(articulo.texto);
    return `
        <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
        <span class="resultado-etiqueta">Texto oficial (primer inciso)</span>
        <p class="resultado-texto">${resaltar(primerInciso, consulta)}</p>
        <span class="resultado-ver-mas">Ver artículo completo →</span>
    `;
}

// --- Texto oficial + barra de anotación (lápiz/destacador/borrador) ---
function renderArticuloCompleto(articulo, consulta) {
    const comentarioHTML = articulo.comentarioProfesor
        ? `<span class="resultado-etiqueta">Según Bermúdez</span><p class="resultado-comentario">${resaltar(articulo.comentarioProfesor, consulta)}</p>`
        : "";
    return `
        <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
        <span class="resultado-etiqueta">Texto oficial</span>

        <div class="barra-anotacion">
            <button class="btn-anotacion" data-tool="lapiz" title="Lápiz">✏️</button>
            <button class="btn-anotacion" data-tool="destacador" title="Destacador">🖍️</button>
            <button class="btn-anotacion" data-tool="borrador" title="Borrador">🧹</button>
            <button class="btn-anotacion" id="btnLimpiarDibujo" title="Borrar todo">🗑️</button>

            <div id="opcionesLapiz" class="opciones-anotacion oculto">
                <span class="color-swatch" data-color="#1a1a1a" style="background:#1a1a1a"></span>
                <span class="color-swatch" data-color="#E03131" style="background:#E03131"></span>
                <span class="color-swatch" data-color="#1971C2" style="background:#1971C2"></span>
                <button class="btn-tamano" data-size="2">Fina</button>
                <button class="btn-tamano" data-size="4">Media</button>
                <button class="btn-tamano" data-size="7">Grande</button>
            </div>

            <div id="opcionesDestacador" class="opciones-anotacion oculto">
                <span class="color-swatch" data-color="#FFC1D9" style="background:#FFC1D9"></span>
                <span class="color-swatch" data-color="#D9C9E8" style="background:#D9C9E8"></span>
                <span class="color-swatch" data-color="#AEE1F5" style="background:#AEE1F5"></span>
                <span class="color-swatch" data-color="#FFB3B3" style="background:#FFB3B3"></span>
                <span class="color-swatch" data-color="#FFD3A5" style="background:#FFD3A5"></span>
                <span class="color-swatch" data-color="#FFF3A0" style="background:#FFF3A0"></span>
            </div>
        </div>

        <div class="contenedor-anotable" id="contenedorAnotable">
            <div class="texto-anotable">
                ${formatearIncisos(articulo.texto, consulta)}
                ${formatearNumerales(articulo.numerales, consulta)}
                ${articulo.textoContinuacion ? formatearIncisos(articulo.textoContinuacion, consulta) : ""}
            </div>
            <canvas id="lienzoAnotacion" class="lienzo-anotacion"></canvas>
        </div>

        ${comentarioHTML}
    `;
}

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
            item.innerHTML = renderResumenArticulo(articulo, consulta);
            item.addEventListener("click", function () { mostrarArticuloIndividual(articulo, consulta); });
            contenedorResultados.appendChild(item);
        });
    });
}

// --- NOTAS (varias por artículo, con opción de eliminar) ---
function obtenerNotas(numero) {
    try {
        const datos = localStorage.getItem(`notas-art-${numero}`);
        return datos ? JSON.parse(datos) : [];
    } catch (error) {
        return [];
    }
}
function guardarNotas(numero, notas) {
    try {
        localStorage.setItem(`notas-art-${numero}`, JSON.stringify(notas));
    } catch (error) {
        console.log("No se pudieron guardar las notas:", error);
    }
}
function renderizarListaNotas(numero) {
    const contenedorNotas = document.querySelector("#listaNotasGuardadas");
    const notas = obtenerNotas(numero);
    if (notas.length === 0) {
        contenedorNotas.innerHTML = `<p class="nota-guardada-vacia">Aún no has agregado notas para este artículo.</p>`;
        return;
    }
    contenedorNotas.innerHTML = notas.map(function (nota) {
        return `
            <div class="tarjeta-nota">
                <p class="tarjeta-nota-texto">${nota.texto}</p>
                <button class="btn-eliminar-nota" data-id="${nota.id}" title="Eliminar nota">🗑</button>
            </div>
        `;
    }).join("");
    contenedorNotas.querySelectorAll(".btn-eliminar-nota").forEach(function (boton) {
        boton.addEventListener("click", function () {
            const id = boton.getAttribute("data-id");
            const restantes = obtenerNotas(numero).filter(function (n) { return String(n.id) !== id; });
            guardarNotas(numero, restantes);
            renderizarListaNotas(numero);
        });
    });
}

function mostrarArticuloIndividual(articulo, origenConsulta) {
    contenedorCapitulos.style.display = "none";
    contenedorResultados.innerHTML = "";
    contenedorVistaArticulo.innerHTML = `
        <button id="btnVolver" class="btn-volver">← Volver</button>
        <div class="vista-articulo">
            <aside class="panel-nota-editar">
                <span class="resultado-etiqueta">✎ Agregar nota</span>
                <textarea id="notaTexto" class="nota-textarea" placeholder="Escribe una nota nueva sobre este artículo..."></textarea>
                <div class="nota-acciones">
                    <button id="btnAgregarNota" class="btn-guardar-nota">Agregar nota</button>
                    <span id="notaGuardadaMsg" class="nota-guardada-msg"></span>
                </div>
            </aside>
            <div class="resultado-item">${renderArticuloCompleto(articulo, origenConsulta)}</div>
            <aside class="panel-nota-ver">
                <span class="resultado-etiqueta">♡ Mis notas</span>
                <div id="listaNotasGuardadas" class="lista-notas-guardadas"></div>
            </aside>
        </div>
    `;
    document.querySelector("#btnVolver").addEventListener("click", function () {
        contenedorVistaArticulo.innerHTML = "";
        if (origenConsulta) {
            inputBuscador.value = origenConsulta;
            inputBuscador.dispatchEvent(new Event("input"));
        } else {
            inputBuscador.value = "";
            contenedorResultados.innerHTML = "";
            contenedorCapitulos.style.display = "";
        }
    });

    const textareaNota = document.querySelector("#notaTexto");
    const mensajeNota = document.querySelector("#notaGuardadaMsg");
    renderizarListaNotas(articulo.numero);

    document.querySelector("#btnAgregarNota").addEventListener("click", function () {
        const texto = textareaNota.value.trim();
        if (texto === "") return;
        const notas = obtenerNotas(articulo.numero);
        notas.push({ id: Date.now(), texto: texto });
        guardarNotas(articulo.numero, notas);
        textareaNota.value = "";
        renderizarListaNotas(articulo.numero);
        mensajeNota.textContent = "✓ Nota agregada";
        setTimeout(function () { mensajeNota.textContent = ""; }, 2000);
    });

    inicializarAnotacion(articulo.numero);
}

// --- ANOTACIÓN A MANO (lápiz, destacador, borrador) ---
function inicializarAnotacion(numeroArticulo) {
    const textoAnotable = document.querySelector("#contenedorAnotable .texto-anotable");
    const canvas = document.querySelector("#lienzoAnotacion");
    const ctx = canvas.getContext("2d");

    canvas.width = textoAnotable.offsetWidth;
    canvas.height = textoAnotable.offsetHeight;

    const claveDibujo = `dibujo-art-${numeroArticulo}`;
    try {
        const dibujoGuardado = localStorage.getItem(claveDibujo);
        if (dibujoGuardado) {
            const img = new Image();
            img.onload = function () { ctx.drawImage(img, 0, 0); };
            img.src = dibujoGuardado;
        }
    } catch (error) {
        console.log("No se pudo cargar el dibujo guardado:", error);
    }

    function guardarDibujo() {
        try { localStorage.setItem(claveDibujo, canvas.toDataURL()); }
        catch (error) { console.log("No se pudo guardar el dibujo:", error); }
    }

    let herramientaActiva = null;
    let colorLapiz = "#1a1a1a";
    let tamañoLapiz = 4;
    let colorDestacador = "#FFC1D9";
    let dibujando = false;
    let ultimoPunto = null;

    const botonesHerramienta = document.querySelectorAll(".btn-anotacion[data-tool]");
    const opcionesLapiz = document.querySelector("#opcionesLapiz");
    const opcionesDestacador = document.querySelector("#opcionesDestacador");

    function activarHerramienta(herramienta) {
        herramientaActiva = (herramientaActiva === herramienta) ? null : herramienta;
        botonesHerramienta.forEach(function (b) { b.classList.toggle("activo", b.dataset.tool === herramientaActiva); });
        opcionesLapiz.classList.toggle("oculto", herramientaActiva !== "lapiz");
        opcionesDestacador.classList.toggle("oculto", herramientaActiva !== "destacador");
        canvas.style.pointerEvents = herramientaActiva ? "auto" : "none";
        canvas.style.cursor = herramientaActiva ? "crosshair" : "default";
    }

    botonesHerramienta.forEach(function (boton) {
        boton.addEventListener("click", function () { activarHerramienta(boton.dataset.tool); });
    });

    opcionesLapiz.querySelectorAll(".color-swatch").forEach(function (swatch) {
        swatch.addEventListener("click", function () { colorLapiz = swatch.dataset.color; });
    });
    opcionesLapiz.querySelectorAll(".btn-tamano").forEach(function (boton) {
        boton.addEventListener("click", function () { tamañoLapiz = Number(boton.dataset.size); });
    });
    opcionesDestacador.querySelectorAll(".color-swatch").forEach(function (swatch) {
        swatch.addEventListener("click", function () { colorDestacador = swatch.dataset.color; });
    });

    document.querySelector("#btnLimpiarDibujo").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        try { localStorage.removeItem(claveDibujo); } catch (error) {}
    });

    function obtenerPosicion(evento) {
        const rect = canvas.getBoundingClientRect();
        return { x: evento.clientX - rect.left, y: evento.clientY - rect.top };
    }

    canvas.addEventListener("pointerdown", function (evento) {
        if (!herramientaActiva) return;
        dibujando = true;
        ultimoPunto = obtenerPosicion(evento);
    });

    canvas.addEventListener("pointermove", function (evento) {
        if (!dibujando || !herramientaActiva) return;
        const puntoActual = obtenerPosicion(evento);
        ctx.beginPath();
        ctx.moveTo(ultimoPunto.x, ultimoPunto.y);
        ctx.lineTo(puntoActual.x, puntoActual.y);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        if (herramientaActiva === "lapiz") {
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1;
            ctx.strokeStyle = colorLapiz;
            ctx.lineWidth = tamañoLapiz;
        } else if (herramientaActiva === "destacador") {
            ctx.globalCompositeOperation = "multiply";
            ctx.globalAlpha = 0.55;
            ctx.strokeStyle = colorDestacador;
            ctx.lineWidth = 16;
        } else if (herramientaActiva === "borrador") {
            ctx.globalCompositeOperation = "destination-out";
            ctx.globalAlpha = 1;
            ctx.lineWidth = 20;
        }
        ctx.stroke();
        ultimoPunto = puntoActual;
    });

    ["pointerup", "pointerleave", "pointercancel"].forEach(function (evt) {
        canvas.addEventListener(evt, function () {
            if (dibujando) {
                dibujando = false;
                ctx.globalCompositeOperation = "source-over";
                ctx.globalAlpha = 1;
                guardarDibujo();
            }
        });
    });
}
