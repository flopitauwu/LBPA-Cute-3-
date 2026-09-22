document.addEventListener("DOMContentLoaded", function () {
    mostrarArticulosDestacados();
   function poblarIndiceFlor() {
    const listaIndice = document.querySelector("#listaIndice");
    if (!listaIndice) return;
    listaIndice.innerHTML = "";
    
    // Agrupación automática directa para evitar errores
    const capitulosMap = {};
    
    lbpa.forEach(articulo => {
        const capNum = articulo.capitulo || "1";
        const capTit = articulo.capituloTitulo || "DISPOSICIONES GENERALES";
        
        if (!capitulosMap[capNum]) {
            capitulosMap[capNum] = { titulo: capTit, parrafos: {} };
        }
        
        const parrKey = (articulo.parrafo && articulo.parrafo !== "Sin Párrafo") 
            ? `${articulo.parrafo} — ${articulo.parrafoTitulo}` 
            : "Artículos Sueltos";
            
        if (!capitulosMap[capNum].parrafos[parrKey]) {
            capitulosMap[capNum].parrafos[parrKey] = [];
        }
        
        capitulosMap[capNum].parrafos[parrKey].push(articulo);
    });

    // Dibujar en pantalla
    for (const [capNum, capData] of Object.entries(capitulosMap)) {
        const hCap = document.createElement("h2");
        hCap.classList.add("indice-capitulo");
        hCap.textContent = `CAPÍTULO ${capNum} ${capData.titulo}`;
        listaIndice.appendChild(hCap);
        
        for (const [parrKey, articulos] of Object.entries(capData.parrafos)) {
            if (parrKey !== "Artículos Sueltos") {
                const hParr = document.createElement("h4");
                hParr.classList.add("indice-parrafo");
                hParr.textContent = parrKey;
                listaIndice.appendChild(hParr);
            }
            
            const ul = document.createElement("ul");
            if (parrKey !== "Artículos Sueltos") {
                ul.classList.add("indice-con-sangria");
            }
            
            articulos.forEach(articulo => {
                const li = document.createElement("li");
                li.textContent = `ARTÍCULO ${articulo.numero} - ${articulo.titulo}`;
                li.addEventListener("click", function () {
                    cerrarModalIndice();
                    mostrarArticuloIndividual(articulo);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
                ul.appendChild(li);
            });
            listaIndice.appendChild(ul);
        }
    }
}

// --- ÍNDICE FLOR ---
function renderArticuloCompleto(articulo, consulta) {
    const comentarioHTML = articulo.comentarioProfesor
        ? `<div style="margin-top: 25px;"><span class="resultado-etiqueta">Según Bermúdez</span><p class="resultado-comentario">${resaltar(articulo.comentarioProfesor, consulta)}</p></div>`
        : "";
        
    // Lógica para mostrar el Párrafo arriba solo si el artículo lo tiene
    const subtituloParrafo = (articulo.parrafo && articulo.parrafo !== "Sin Párrafo")
        ? `<div class="articulo-jerarquia-parrafo">${articulo.parrafo} — ${articulo.parrafoTitulo}</div>`
        : "";
        
    return `
        <!-- Nuevo encabezado jerárquico -->
        <div class="articulo-encabezado-oficial">
            <div class="articulo-jerarquia-capitulo">CAPÍTULO ${articulo.capitulo} — ${articulo.capituloTitulo}</div>
            ${subtituloParrafo}
            <h3 class="articulo-titulo-principal">Art. ${articulo.numero} — ${articulo.titulo}</h3>
        </div>
        
        <div class="barra-anotacion">
            <button class="btn-anotacion" data-tool="lapiz" title="Lápiz">✏️</button>
            <button class="btn-anotacion" data-tool="destacador" title="Destacador">🖍️</button>
            <button class="btn-anotacion" data-tool="borrador" title="Borrador">🧹</button>
            <button class="btn-anotacion" id="btnDeshacer" title="Deshacer (Volver atrás)">↩️</button>
            <button class="btn-anotacion" id="btnRehacer" title="Rehacer">↪️</button>
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
            <div id="opcionesBorrador" class="opciones-anotacion oculto">
                <button class="btn-modo-borrador activo" data-modo="preciso">Preciso</button>
                <button class="btn-modo-borrador" data-modo="trazo">Por trazo</button>
            </div>
        </div>
        
        <div class="contenedor-anotable" id="contenedorAnotable">
            <div class="texto-anotable">
                <span class="resultado-etiqueta">Texto oficial</span>
                ${formatearIncisos(articulo.texto, consulta)}
                ${formatearNumerales(articulo.numerales, consulta)}
                ${articulo.textoContinuacion ? formatearIncisos(articulo.textoContinuacion, consulta) : ""}
                ${comentarioHTML}
            </div>
            <canvas id="lienzoAnotacion" class="lienzo-anotacion"></canvas>
        </div>
    `;
}

function abrirModalIndice() { document.querySelector("#modalIndice")?.classList.remove("oculto"); }
function cerrarModalIndice() { document.querySelector("#modalIndice")?.classList.add("oculto"); }
document.querySelector("#btnIndiceFlor")?.addEventListener("click", abrirModalIndice);
document.querySelector("#btnCerrarIndice")?.addEventListener("click", cerrarModalIndice);
document.querySelector("#modalIndice")?.addEventListener("click", function (evento) {
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

function mostrarResultados(resultados, consulta) {
    contenedorResultados.innerHTML = "";
    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `<p class="sin-resultados">No se encontraron resultados para "${consulta}".</p>`;
        return;
    }
    const grupos = agruparDatos(resultados);
    grupos.forEach(function (grupo) {
        contenedorResultados.appendChild(crearEncabezadoCapitulo(grupo));
        
        grupo.parrafos.forEach(function(parrafo) {
            if (parrafo.parrafo !== "Sin Párrafo") {
                contenedorResultados.appendChild(crearEncabezadoParrafo(parrafo));
            }
            
            parrafo.articulos.forEach(function (articulo) {
                const item = document.createElement("div");
                item.classList.add("resultado-item", "resultado-clicable");
                item.innerHTML = renderResumenArticulo(articulo, consulta);
                item.addEventListener("click", function () { mostrarArticuloIndividual(articulo, consulta); });
                contenedorResultados.appendChild(item);
            });
        });
    });
}

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

function renderArticuloCompleto(articulo, consulta) {
    // Hemos modificado cómo se genera el comentario para darle un margen superior
    const comentarioHTML = articulo.comentarioProfesor
        ? `<div style="margin-top: 25px;"><span class="resultado-etiqueta">Según Bermúdez</span><p class="resultado-comentario">${resaltar(articulo.comentarioProfesor, consulta)}</p></div>`
        : "";
        
    return `
        <h4>Art. ${articulo.numero} — ${articulo.titulo}</h4>
        
        <div class="barra-anotacion">
            <button class="btn-anotacion" data-tool="lapiz" title="Lápiz">✏️</button>
            <button class="btn-anotacion" data-tool="destacador" title="Destacador">🖍️</button>
            <button class="btn-anotacion" data-tool="borrador" title="Borrador">🧹</button>
            <button class="btn-anotacion" id="btnDeshacer" title="Deshacer (Volver atrás)">↩️</button>
            <button class="btn-anotacion" id="btnRehacer" title="Rehacer">↪️</button>
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
            <div id="opcionesBorrador" class="opciones-anotacion oculto">
                <button class="btn-modo-borrador activo" data-modo="preciso">Preciso</button>
                <button class="btn-modo-borrador" data-modo="trazo">Por trazo</button>
            </div>
        </div>
        
        <div class="contenedor-anotable" id="contenedorAnotable">
            <div class="texto-anotable">
                <span class="resultado-etiqueta">Texto oficial</span>
                ${formatearIncisos(articulo.texto, consulta)}
                ${formatearNumerales(articulo.numerales, consulta)}
                ${articulo.textoContinuacion ? formatearIncisos(articulo.textoContinuacion, consulta) : ""}
                
                <!-- ¡El comentario ahora vive aquí adentro, bajo el lienzo! -->
                ${comentarioHTML}
            </div>
            <canvas id="lienzoAnotacion" class="lienzo-anotacion"></canvas>
        </div>
    `;
}
// --- NOTAS (LocalStorage) ---
function obtenerNotas(numero) {
    try {
        const datos = localStorage.getItem(`notas-art-${numero}`);
        return datos ? JSON.parse(datos) : [];
    } catch (error) { return []; }
}
function guardarNotas(numero, notas) {
    try { localStorage.setItem(`notas-art-${numero}`, JSON.stringify(notas)); }
    catch (error) { console.log("Error:", error); }
}
function renderizarListaNotas(numero) {
    const contenedorNotas = document.querySelector("#listaNotasGuardadas");
    if (!contenedorNotas) return;
    const notas = obtenerNotas(numero);
    if (notas.length === 0) {
        contenedorNotas.innerHTML = `<p class="nota-guardada-vacia">Aún no has agregado notas.</p>`;
        return;
    }
    contenedorNotas.innerHTML = notas.map(function (nota) {
        return `
            <div class="tarjeta-nota">
                <p class="tarjeta-nota-texto">${nota.texto}</p>
                <button class="btn-eliminar-nota" data-id="${nota.id}">🗑</button>
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
                <textarea id="notaTexto" class="nota-textarea" placeholder="Escribe una nota..."></textarea>
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
        mensajeNota.textContent = "✓ Agregada";
        setTimeout(function () { mensajeNota.textContent = ""; }, 2000);
    });

    setTimeout(() => { inicializarAnotacion(articulo.numero); }, 50);
}

// --- ANOTACIÓN Y LIENZO ---
function inicializarAnotacion(numeroArticulo) {
    const contenedorAnotable = document.querySelector("#contenedorAnotable");
    const canvas = document.querySelector("#lienzoAnotacion");
    if (!canvas || !contenedorAnotable) return;
    
    const ctx = canvas.getContext("2d");
    function redimensionarLienzo() {
        canvas.width = contenedorAnotable.offsetWidth;
        canvas.height = contenedorAnotable.offsetHeight;
        redibujarTodo();
    }
    
    const claveTrazos = `trazos-art-${numeroArticulo}`;
    let trazos = [];
    let historial = [];
    let pasoHistorial = -1;

    try {
        const guardado = localStorage.getItem(claveTrazos);
        trazos = guardado ? JSON.parse(guardado) : [];
    } catch (error) { trazos = []; }

    function guardarEstadoHistorial() {
        historial = historial.slice(0, pasoHistorial + 1);
        historial.push(JSON.stringify(trazos));
        pasoHistorial++;
        try { localStorage.setItem(claveTrazos, JSON.stringify(trazos)); }
        catch (error) {}
    }

    if (historial.length === 0) guardarEstadoHistorial();

    function dibujarTrazo(trazo) {
        if (!trazo.puntos || trazo.puntos.length < 2) return;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalCompositeOperation = "source-over";

        if (trazo.herramienta === "lapiz") {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = trazo.color;
            ctx.lineWidth = trazo.grosor;
            ctx.beginPath();
            ctx.moveTo(trazo.puntos[0].x, trazo.puntos[0].y);
            for (let i = 1; i < trazo.puntos.length; i++) ctx.lineTo(trazo.puntos[i].x, trazo.puntos[i].y);
            ctx.stroke();
      } else if (trazo.herramienta === "destacador") {
            ctx.globalAlpha = 0.45;
            ctx.strokeStyle = trazo.color;
            ctx.lineWidth = 18;
            ctx.beginPath();
            
            // Punto de inicio
            ctx.moveTo(trazo.puntos[0].x, trazo.puntos[0].y);
            
            // Punto final (ignora el pulso intermedio para crear una línea recta)
            const ultimoPunto = trazo.puntos[trazo.puntos.length - 1];
            ctx.lineTo(ultimoPunto.x, ultimoPunto.y);
            
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }

    function redibujarTodo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        trazos.forEach(dibujarTrazo);
    }

    redimensionarLienzo();

    let herramientaActiva = null;
    let colorLapiz = "#1a1a1a";
    let tamañoLapiz = 4;
    let colorDestacador = "#FFC1D9";
    let modoBorrador = "preciso";

    const botonesHerramienta = document.querySelectorAll(".btn-anotacion[data-tool]");
    const opcionesLapiz = document.querySelector("#opcionesLapiz");
    const opcionesDestacador = document.querySelector("#opcionesDestacador");
    const opcionesBorrador = document.querySelector("#opcionesBorrador");

    function activarHerramienta(herramienta) {
        herramientaActiva = (herramientaActiva === herramienta) ? null : herramienta;
        botonesHerramienta.forEach(b => b.classList.toggle("activo", b.dataset.tool === herramientaActiva));
        opcionesLapiz.classList.toggle("oculto", herramientaActiva !== "lapiz");
        opcionesDestacador.classList.toggle("oculto", herramientaActiva !== "destacador");
        opcionesBorrador.classList.toggle("oculto", herramientaActiva !== "borrador");
        herramientaActiva ? contenedorAnotable.classList.add("modo-dibujo") : contenedorAnotable.classList.remove("modo-dibujo");
    }

    botonesHerramienta.forEach(boton => { boton.addEventListener("click", () => activarHerramienta(boton.dataset.tool)); });
    opcionesLapiz.querySelectorAll(".color-swatch").forEach(swatch => { swatch.addEventListener("click", () => colorLapiz = swatch.dataset.color); });
    opcionesLapiz.querySelectorAll(".btn-tamano").forEach(boton => { boton.addEventListener("click", () => tamañoLapiz = Number(boton.dataset.size)); });
    opcionesDestacador.querySelectorAll(".color-swatch").forEach(swatch => { swatch.addEventListener("click", () => colorDestacador = swatch.dataset.color); });
    opcionesBorrador.querySelectorAll(".btn-modo-borrador").forEach(boton => {
        boton.addEventListener("click", () => {
            modoBorrador = boton.dataset.modo;
            opcionesBorrador.querySelectorAll(".btn-modo-borrador").forEach(b => b.classList.remove("activo"));
            boton.classList.add("activo");
        });
    });

    document.querySelector("#btnDeshacer")?.addEventListener("click", () => {
        if (pasoHistorial > 0) {
            pasoHistorial--;
            trazos = JSON.parse(historial[pasoHistorial]);
            redibujarTodo();
            localStorage.setItem(claveTrazos, JSON.stringify(trazos));
        }
    });

    document.querySelector("#btnRehacer")?.addEventListener("click", () => {
        if (pasoHistorial < historial.length - 1) {
            pasoHistorial++;
            trazos = JSON.parse(historial[pasoHistorial]);
            redibujarTodo();
            localStorage.setItem(claveTrazos, JSON.stringify(trazos));
        }
    });

    document.querySelector("#btnLimpiarDibujo")?.addEventListener("click", () => {
        trazos = [];
        redibujarTodo();
        guardarEstadoHistorial();
    });

    function distanciaPuntoSegmento(p, a, b) {
        const dx = b.x - a.x, dy = b.y - a.y;
        const largo2 = dx * dx + dy * dy;
        let t = largo2 === 0 ? 0 : ((p.x - a.x) * dx + (p.y - a.y) * dy) / largo2;
        t = Math.max(0, Math.min(1, t));
        return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
    }

    function borrarTrazoCompleto(p) {
        const umbral = 14;
        const antes = trazos.length;
        trazos = trazos.filter(trazo => {
            for (let i = 0; i < trazo.puntos.length - 1; i++) {
                if (distanciaPuntoSegmento(p, trazo.puntos[i], trazo.puntos[i + 1]) <= umbral) return false;
            }
            return true;
        });
        return trazos.length !== antes;
    }

    function borrarPreciso(p) {
        const radio = 12;
        const nuevosTrazos = [];
        let huboCambio = false;

        trazos.forEach(trazo => {
            let segmentoActual = [];
            trazo.puntos.forEach(punto => {
                if (Math.hypot(punto.x - p.x, punto.y - p.y) <= radio) {
                    huboCambio = true;
                    if (segmentoActual.length >= 2) nuevosTrazos.push({ herramienta: trazo.herramienta, color: trazo.color, grosor: trazo.grosor, puntos: segmentoActual });
                    segmentoActual = [];
                } else {
                    segmentoActual.push(punto);
                }
            });
            if (segmentoActual.length >= 2) nuevosTrazos.push({ herramienta: trazo.herramienta, color: trazo.color, grosor: trazo.grosor, puntos: segmentoActual });
        });
        trazos = nuevosTrazos;
        return huboCambio;
    }

    let dibujando = false;
    let trazoActual = null;

    function obtenerPosicion(evento) {
        const rect = canvas.getBoundingClientRect();
        return { x: evento.clientX - rect.left, y: evento.clientY - rect.top };
    }

    canvas.addEventListener("pointerdown", function (evento) {
        if (!herramientaActiva) return;
        if (evento.pointerType === "touch" && herramientaActiva !== "borrador") return;
        evento.preventDefault(); 
        
        dibujando = true;
        const punto = obtenerPosicion(evento);

        if (herramientaActiva === "lapiz" || herramientaActiva === "destacador") {
            trazoActual = { herramienta: herramientaActiva, color: herramientaActiva === "lapiz" ? colorLapiz : colorDestacador, grosor: tamañoLapiz, puntos: [punto] };
        } else if (herramientaActiva === "borrador") {
            const cambio = modoBorrador === "trazo" ? borrarTrazoCompleto(punto) : borrarPreciso(punto);
            if (cambio) redibujarTodo();
        }
    });

    canvas.addEventListener("pointermove", function (evento) {
        if (!dibujando || !herramientaActiva) return;
        evento.preventDefault();
        const punto = obtenerPosicion(evento);

        if (herramientaActiva === "lapiz" || herramientaActiva === "destacador") {
            trazoActual.puntos.push(punto);
            redibujarTodo();
            dibujarTrazo(trazoActual);
        } else if (herramientaActiva === "borrador") {
            const cambio = modoBorrador === "trazo" ? borrarTrazoCompleto(punto) : borrarPreciso(punto);
            if (cambio) redibujarTodo();
        }
    });

    ["pointerup", "pointerleave", "pointercancel"].forEach(evt => {
        canvas.addEventListener(evt, function () {
            if (!dibujando) return;
            dibujando = false;
            
            if (trazoActual && (herramientaActiva === "lapiz" || herramientaActiva === "destacador")) {
                trazos.push(trazoActual);
                trazoActual = null;
                redibujarTodo();
            }
            guardarEstadoHistorial();
        });
    });
}
