/* ============================================================================
   ESENCIA PURA - CATÁLOGO DE JABONES ARTESANALES
   Aplicación SPA - JavaScript Vanilla con Protecciones de Seguridad
   ============================================================================ */

/* ============================================================================
   CONFIGURACIÓN GLOBAL
   ============================================================================ */

/**
 * NÚMERO DE TELÉFONO DE DESTINO PARA WHATSAPP
 * Reemplaza "51999999999" con tu número completo incluyendo código de país
 * Ejemplo para Perú: "51987654321"
 * Ejemplo para Colombia: "573001234567"
 * Ejemplo para Argentina: "542281234567"
 */
const TELEFONO_DESTINO = "51993754272";

/**
 * TIEMPO DE BLOQUEO ANTI-SPAM EN MILISEGUNDOS
 * Previene clicks masivos/bot attacks en el botón de envío
 */
const RATE_LIMIT_MS = 3000;

/* ============================================================================
   BASE DE DATOS DE PRODUCTOS
   ============================================================================ */

/**
 * Array de objetos con todos los productos
 * Estructura de cada objeto:
 * - id: número único identificador
 * - nombre: nombre del jabón
 * - precio: precio en SOLES PERUANOS (número)
 * - descripcion: texto descriptivo corto
 * - categoria: clasificación del producto
 * - ruta_imagen: ruta del archivo imagen relativa a la carpeta 'img/'
 * - emoji: emoji para usar como placeholder si la imagen no carga
 */
const BD_PRODUCTOS = [
    {
        id: 1,
        nombre: "Jabón Aloe Vera + Vitamina E",
        precio: 8.00,
        descripcion: "Hidratación profunda con vitamina E. Regenera y suaviza la piel sensible.",
        categoria: "Cuidado Diario",
        ruta_imagen: "img/aloe_vitamina_e.jpg",
        emoji: "🌿"
    },
    {
        id: 2,
        nombre: "Jabón Carbón Activado + Vitaminas",
        precio: 8.00,
        descripcion: "Limpieza profunda y desintoxicante. Controla el exceso de grasa con vitaminas.",
        categoria: "Limpieza Profunda",
        ruta_imagen: "img/carbon_vitaminas.jpg",
        emoji: "🖤"
    },
    {
        id: 3,
        nombre: "Jabón Miel + Leche de Cabra",
        precio: 8.50,
        descripcion: "Fórmula premium suavizante. Hidrata y regenera la piel delicada.",
        categoria: "Cuidado Diario",
        ruta_imagen: "img/miel_leche_cabra.jpg",
        emoji: "🍯"
    },
    {
        id: 4,
        nombre: "Jabón Aclarante Arroz + Vitaminas",
        precio: 8.50,
        descripcion: "Aclarante natural a base de arroz con vitaminas. Unifica el tono de piel.",
        categoria: "Aclarante",
        ruta_imagen: "img/arroz_aclarante.jpg",
        emoji: "✨"
    },
    {
        id: 5,
        nombre: "Jabón Cúrcuma",
        precio: 7.50,
        descripcion: "Antiinflamatorio y cicatrizante. Ideal para piel con imperfecciones.",
        categoria: "Limpieza Profunda",
        ruta_imagen: "img/curcuma.jpg",
        emoji: "🟡"
    },
    {
        id: 6,
        nombre: "Jabón Café + Aclarante",
        precio: 7.50,
        descripcion: "Exfoliante natural con efecto aclarante. Revitaliza la piel cansada.",
        categoria: "Exfoliante",
        ruta_imagen: "img/cafe_aclarante.jpg",
        emoji: "☕"
    },
    {
        id: 7,
        nombre: "Jabón Avena + Miel Premium",
        precio: 7.00,
        descripcion: "Exfoliación suave y nutritiva. Perfecto para piel sensible.",
        categoria: "Exfoliante",
        ruta_imagen: "img/avena_miel.jpg",
        emoji: "🍯"
    },
    {
        id: 8,
        nombre: "Jabón Manzanilla Relajante",
        precio: 6.00,
        descripcion: "Calma y relaja. Perfecto para antes de dormir. Alivia la irritación.",
        categoria: "Relajante",
        ruta_imagen: "img/manzanilla.jpg",
        emoji: "🌼"
    },
    {
        id: 9,
        nombre: "Jabón Arcilla Rosa Detox",
        precio: 7.50,
        descripcion: "Desintoxicación profunda. Extrae impurezas y revitaliza.",
        categoria: "Limpieza Profunda",
        ruta_imagen: "img/arcilla_rosa.jpg",
        emoji: "🌸"
    },
    {
        id: 10,
        nombre: "Jabón Lavanda Pura",
        precio: 6.00,
        descripcion: "Relajante y desestresante. Aroma natural calmante para toda la familia.",
        categoria: "Relajante",
        ruta_imagen: "img/lavanda.jpg",
        emoji: "💜"
    }
];

/* ============================================================================
   ESTADO GLOBAL DE LA APLICACIÓN
   ============================================================================ */

/**
 * Estado reactivo de la aplicación
 * carrito: { id_producto: cantidad, ... }
 * categoriaActiva: categoría actualmente seleccionada
 * ultimoClick: timestamp del último click en botón para rate limiting
 */
const appState = {
    carrito: {},
    categoriaActiva: "todas",
    ultimoClick: 0
};

/* ============================================================================
   FUNCIONES DE SEGURIDAD
   ============================================================================ */

/**
 * FUNCIÓN DE SANITIZACIÓN ANTI-XSS
 * Limpia strings de caracteres especiales HTML que podrían usarse para ataques
 * @param {string} texto - Texto a sanitizar
 * @return {string} - Texto seguro para insertar en HTML
 */
function sanitizarTexto(texto) {
    if (typeof texto !== 'string') {
        return '';
    }
    
    // Crear elemento temporal para escapar caracteres especiales
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

/**
 * FUNCIÓN DE RATE LIMITING (ANTI-SPAM)
 * Previene clics masivos en botones de forma automática
 * @param {HTMLElement} boton - Referencia al elemento botón
 * @return {boolean} - true si se permite la acción, false si está en cooldown
 */
function verificarRateLimit(boton) {
    const ahoraMs = Date.now();
    const tiempoTranscurrido = ahoraMs - appState.ultimoClick;
    
    if (tiempoTranscurrido < RATE_LIMIT_MS) {
        // Mostrar mensaje visual al usuario
        const tiempoRestante = Math.ceil((RATE_LIMIT_MS - tiempoTranscurrido) / 1000);
        mostrarModal(`Por favor espera ${tiempoRestante} segundo(s)...`);
        return false;
    }
    
    // Actualizar timestamp y activar bloqueo temporal
    appState.ultimoClick = ahoraMs;
    boton.disabled = true;
    
    // Desbloquear después del período de espera
    setTimeout(() => {
        boton.disabled = false;
    }, RATE_LIMIT_MS);
    
    return true;
}

/**
 * PROTECCIÓN ANTI-SPOOFING
 * Recalcula los precios directamente desde BD_PRODUCTOS
 * Impide que usuarios manipulen precios desde consola del navegador
 * @param {number} idProducto - ID del producto
 * @param {number} cantidad - Cantidad de unidades
 * @return {number} - Subtotal verificado (cantidad * precio real)
 */
function calcularSubtotalSeguro(idProducto, cantidad) {
    // Buscar el producto ORIGINAL en la BD
    const producto = BD_PRODUCTOS.find(p => p.id === idProducto);
    
    if (!producto) {
        console.error(`Producto no encontrado: ${idProducto}`);
        return 0;
    }
    
    // El precio siempre viene de la BD, nunca del DOM
    const precioReal = producto.precio;
    const subtotal = precioReal * cantidad;
    
    return Math.round(subtotal * 100) / 100; // Redondear a 2 decimales
}

/**
 * CÁLCULO SEGURO DEL TOTAL DEL CARRITO
 * Recalcula desde BD sin confiar en datos del usuario
 * @return {number} - Total del carrito en soles peruanos
 */
function calcularTotalSeguro() {
    let total = 0;
    
    // Iterar sobre cada producto en el carrito
    for (const idProducto in appState.carrito) {
        const cantidad = appState.carrito[idProducto];
        
        // Validar que cantidad sea un número positivo
        if (cantidad > 0 && Number.isInteger(cantidad)) {
            const subtotal = calcularSubtotalSeguro(Number(idProducto), cantidad);
            total += subtotal;
        }
    }
    
    return Math.round(total * 100) / 100; // Redondear a 2 decimales
}

/**
 * CÁLCULO SEGURO DEL CONTEO TOTAL DE ARTÍCULOS
 * @return {number} - Total de artículos en el carrito
 */
function calcularConteoSeguro() {
    let conteo = 0;
    
    for (const idProducto in appState.carrito) {
        const cantidad = appState.carrito[idProducto];
        if (cantidad > 0 && Number.isInteger(cantidad)) {
            conteo += cantidad;
        }
    }
    
    return conteo;
}

/* ============================================================================
   FUNCIONES DE MANIPULACIÓN DEL CARRITO
   ============================================================================ */

/**
 * Aumentar cantidad de un producto en el carrito
 * @param {number} idProducto - ID del producto a aumentar
 */
function aumentarCantidad(idProducto) {
    if (!appState.carrito[idProducto]) {
        appState.carrito[idProducto] = 0;
    }
    appState.carrito[idProducto]++;
    actualizarUI();
}

/**
 * Disminuir cantidad de un producto en el carrito
 * @param {number} idProducto - ID del producto a disminuir
 */
function disminuirCantidad(idProducto) {
    if (!appState.carrito[idProducto] || appState.carrito[idProducto] <= 0) {
        return;
    }
    appState.carrito[idProducto]--;
    
    // Si la cantidad llega a 0, eliminar del carrito
    if (appState.carrito[idProducto] === 0) {
        delete appState.carrito[idProducto];
    }
    
    actualizarUI();
}

/**
 * Obtener cantidad actual de un producto
 * @param {number} idProducto - ID del producto
 * @return {number} - Cantidad actual (0 si no existe)
 */
function obtenerCantidad(idProducto) {
    return appState.carrito[idProducto] || 0;
}

/**
 * Verificar si el carrito tiene productos
 * @return {boolean} - true si hay productos en el carrito
 */
function carritoTieneProductos() {
    return Object.keys(appState.carrito).length > 0;
}

/* ============================================================================
   FUNCIONES DE INTERFAZ DE USUARIO (RENDERING)
   ============================================================================ */

/**
 * Renderizar todos los productos en el grid
 * Filtra por categoría activa y genera el HTML dinámicamente
 */
function renderizarProductos() {
    const container = document.getElementById('productosContainer');
    
    if (!container) {
        console.error('Contenedor de productos no encontrado');
        return;
    }
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Obtener categorías únicas
    const categoriasUnicas = [...new Set(BD_PRODUCTOS.map(p => p.categoria))];
    
    // Agrupar productos por categoría
    const productosPorCategoria = {};
    categoriasUnicas.forEach(cat => {
        productosPorCategoria[cat] = BD_PRODUCTOS.filter(p => p.categoria === cat);
    });
    
    // Renderizar productos (filtrados por categoría activa)
    const productosAMostrar = appState.categoriaActiva === 'todas' 
        ? BD_PRODUCTOS 
        : productosPorCategoria[appState.categoriaActiva] || [];
    
    productosAMostrar.forEach(producto => {
        const cantidadActual = obtenerCantidad(producto.id);
        const tarjeta = crearTarjetaProducto(producto, cantidadActual);
        container.appendChild(tarjeta);
    });
    
    // Si no hay productos (nunca debería pasar)
    if (productosAMostrar.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No hay productos en esta categoría.</p>';
    }
}

/**
 * Crear elemento HTML de tarjeta de producto
 * @param {Object} producto - Objeto de producto de BD_PRODUCTOS
 * @param {number} cantidad - Cantidad actual en carrito
 * @return {HTMLElement} - Elemento div con la tarjeta
 */
function crearTarjetaProducto(producto, cantidad) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Sanitizar datos antes de insertar en HTML
    const nombreSanitizado = sanitizarTexto(producto.nombre);
    const descSanitizada = sanitizarTexto(producto.descripcion);
    const categoriaSanitizada = sanitizarTexto(producto.categoria);
    
    card.innerHTML = `
        <div class="product-image placeholder">
            ${producto.emoji}
        </div>
        <div class="product-content">
            <span class="product-category">${categoriaSanitizada}</span>
            <h3 class="product-title">${nombreSanitizado}</h3>
            <p class="product-description">${descSanitizada}</p>
            <p class="product-price">S/ ${producto.precio.toFixed(2)}</p>
            <div class="product-controls">
                <button class="quantity-btn minus-btn" data-id="${producto.id}" aria-label="Disminuir cantidad">−</button>
                <div class="quantity-display">${cantidad}</div>
                <button class="quantity-btn plus-btn" data-id="${producto.id}" aria-label="Aumentar cantidad">+</button>
            </div>
        </div>
    `;
    
    // Asignar event listeners a botones
    const btnMenos = card.querySelector('.minus-btn');
    const btnMas = card.querySelector('.plus-btn');
    
    btnMenos.addEventListener('click', () => disminuirCantidad(producto.id));
    btnMas.addEventListener('click', () => aumentarCantidad(producto.id));
    
    return card;
}

/**
 * Actualizar elementos dinámicos en la interfaz (total, conteo)
 * Esta función es llamada cada vez que cambia el carrito
 */
function actualizarUI() {
    // Recalcular valores de forma segura
    const conteoTotal = calcularConteoSeguro();
    const totalCarrito = calcularTotalSeguro();
    
    // Actualizar elementos en el DOM
    const elementoConteo = document.getElementById('cartCount');
    const elementoTotal = document.getElementById('cartTotal');
    const botonWhatsApp = document.getElementById('whatsappBtn');
    
    if (elementoConteo) {
        elementoConteo.textContent = conteoTotal;
    }
    
    if (elementoTotal) {
        elementoTotal.textContent = totalCarrito.toFixed(2);
    }
    
    // Habilitar/deshabilitar botón según si hay productos
    if (botonWhatsApp) {
        botonWhatsApp.disabled = !carritoTieneProductos();
    }
    
    // Re-renderizar tarjetas para actualizar cantidades visuales
    renderizarProductos();
}

/**
 * Mostrar modal con mensaje
 * @param {string} mensaje - Texto a mostrar en el modal
 */
function mostrarModal(mensaje) {
    const modal = document.getElementById('loadingModal');
    const mensajeEl = document.getElementById('modalMessage');
    
    if (modal && mensajeEl) {
        mensajeEl.textContent = sanitizarTexto(mensaje);
        modal.classList.remove('hidden');
        
        // Auto-cerrar modal después de 3 segundos
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 3000);
    }
}

/* ============================================================================
   GENERACIÓN DE ENLACE WHATSAPP Y ENVÍO DEL PEDIDO
   ============================================================================ */

/**
 * Genera el mensaje formateado para WhatsApp
 * @return {string} - Mensaje estructurado listo para enviar
 */
function generarMensajePedido() {
    const conteoTotal = calcularConteoSeguro();
    const totalCarrito = calcularTotalSeguro();
    
    let mensaje = "¡Hola! Me gustaría hacer el siguiente pedido de jabones artesanales:\n";
    mensaje += "\n";
    
    // Iterar sobre cada producto en el carrito
    for (const idProducto in appState.carrito) {
        const cantidad = appState.carrito[idProducto];
        
        // Obtener datos del producto desde BD (SEGURIDAD: anti-spoofing)
        const producto = BD_PRODUCTOS.find(p => p.id === Number(idProducto));
        
        if (producto && cantidad > 0) {
            const subtotal = calcularSubtotalSeguro(producto.id, cantidad);
            const nombreSanitizado = sanitizarTexto(producto.nombre);
            
            mensaje += `🧼 ${cantidad}x *${nombreSanitizado}* - (S/ ${subtotal.toFixed(2)})\n`;
        }
    }
    
    mensaje += "\n";
    mensaje += `💰 *Total estimado: S/ ${totalCarrito.toFixed(2)}*\n`;
    mensaje += "\n";
    mensaje += "¿Me confirman disponibilidad para coordinar el pago y envío?";
    
    return mensaje;
}

/**
 * Generar enlace WhatsApp con mensaje codificado
 * @return {string} - URL de WhatsApp con mensaje
 */
function generarEnlaceWhatsApp() {
    const mensaje = generarMensajePedido();
    
    // Codificar el mensaje para URL (reemplaza caracteres especiales)
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Construir enlace wa.me con API oficial de WhatsApp
    const enlace = `https://wa.me/${TELEFONO_DESTINO}?text=${mensajeCodificado}`;
    
    return enlace;
}

/**
 * Manejar click en botón de envío a WhatsApp
 */
function enviarPedidoWhatsApp() {
    // Verificar rate limit (anti-spam)
    if (!verificarRateLimit(document.getElementById('whatsappBtn'))) {
        return;
    }
    
    // Verificar que hay productos en el carrito
    if (!carritoTieneProductos()) {
        mostrarModal("Por favor agrega productos al carrito primero.");
        return;
    }
    
    // Mostrar estado de envío
    mostrarModal("Preparando tu pedido...");
    
    // Generar enlace seguro
    const enlace = generarEnlaceWhatsApp();
    
    // Abrir WhatsApp después de 500ms (para que el usuario vea el modal)
    setTimeout(() => {
        window.open(enlace, '_blank');
    }, 500);
}

/* ============================================================================
   MANEJO DE FILTROS POR CATEGORÍA
   ============================================================================ */

/**
 * Cambiar categoría activa y actualizar vista
 * @param {string} categoria - Nombre de la categoría a filtrar
 */
function cambiarCategoria(categoria) {
    appState.categoriaActiva = categoria;
    
    // Actualizar estado visual de botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === categoria) {
            btn.classList.add('active');
        }
    });
    
    // Re-renderizar productos
    renderizarProductos();
}

/* ============================================================================
   INICIALIZACIÓN DE LA APLICACIÓN
   ============================================================================ */

/**
 * Función principal de inicialización
 * Se ejecuta cuando el DOM está completamente cargado
 */
function inicializarApp() {
    console.log('🧼 Esencia Pura - Catálogo de Jabones Artesanales');
    console.log('Número de productos en BD:', BD_PRODUCTOS.length);
    console.log('Teléfono destino:', TELEFONO_DESTINO);
    
    // Renderizar productos por primera vez
    renderizarProductos();
    
    // Asignar event listeners a botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            cambiarCategoria(e.target.dataset.category);
        });
    });
    
    // Asignar event listener a botón de WhatsApp
    const botonWhatsApp = document.getElementById('whatsappBtn');
    if (botonWhatsApp) {
        botonWhatsApp.addEventListener('click', enviarPedidoWhatsApp);
    }
    
    // Inicializar UI
    actualizarUI();
    
    console.log('✅ Aplicación inicializada correctamente');
}

/**
 * Ejecutar inicialización cuando el DOM esté listo
 * Soporta tanto el evento DOMContentLoaded como si el script se carga diferido
 */
if (document.readyState === 'loading') {
    // El documento aún se está cargando
    document.addEventListener('DOMContentLoaded', inicializarApp);
} else {
    // El documento ya está cargado
    inicializarApp();
}

/* ============================================================================
   SERVICIO WORKER (OPCIONAL - Para PWA en GitHub Pages)
   Descomenta si quieres soporte offline
   ============================================================================ */

/*
// Registrar Service Worker para offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
            console.log('Service Worker registrado');
        }).catch(err => {
            console.log('Error registrando Service Worker:', err);
        });
    });
}
*/
