<!-- 
ESENCIA PURA - GUÍA DE PERSONALIZACIÓN Y EJEMPLOS
Este archivo contiene ejemplos de cómo personalizar el catálogo
-->

## CAMBIAR COLORES DE LA MARCA

En `style.css`, encuentra las variables CSS al inicio y cámbia los valores:

```css
:root {
    /* CAMBIAR ESTOS COLORES SEGÚN TU MARCA */
    --color-primary: #4a5d3a;        /* Color principal - Verde oscuro */
    --color-secondary: #7ba588;      /* Color secundario - Verde claro */
    --color-accent: #e8dcc8;         /* Color de acentos - Crema */
    --color-light-bg: #faf8f3;       /* Fondo ligero - Blanco cálido */
    --color-white: #ffffff;          /* Blanco puro */
    --color-text-dark: #2d2d2d;      /* Texto oscuro */
    --color-border: #e0ddd5;         /* Bordes */
    --color-success: #25d366;        /* Verde WhatsApp - NO CAMBIAR */
}
```

### Ejemplo 1: Tema Minimalista Negro-Blanco

```css
:root {
    --color-primary: #000000;
    --color-secondary: #404040;
    --color-accent: #f0f0f0;
    --color-light-bg: #ffffff;
}
```

### Ejemplo 2: Tema Rosa y Oro

```css
:root {
    --color-primary: #d4639f;        /* Rosa oscuro */
    --color-secondary: #f0b5d6;      /* Rosa claro */
    --color-accent: #ffd700;         /* Oro */
    --color-light-bg: #fff9e6;       /* Fondo marfil */
}
```

### Ejemplo 3: Tema Azul Marina

```css
:root {
    --color-primary: #1a5f7a;        /* Azul marino */
    --color-secondary: #3d9ab5;      /* Azul agua */
    --color-accent: #e0f2f7;         /* Celeste claro */
    --color-light-bg: #f8fbfc;       /* Blanco azulado */
}
```

## AGREGAR NUEVOS PRODUCTOS

Abre `app.js` y encuentra el array `BD_PRODUCTOS`. Para agregar un nuevo jabón:

```javascript
{
    id: 11,                                        // ID único (incrementar)
    nombre: "Jabón de Rosa Silvestre",            // Nombre exacto
    precio: 5.75,                                  // Precio en USD
    descripcion: "Fragancia delicada y suave.",   // Descripción corta
    categoria: "Cuidado Diario",                  // Una de las 5 categorías
    ruta_imagen: "img/rosa.jpg",                  // Ruta del archivo
    emoji: "🌹"                                   // Emoji fallback
}
```

### CATEGORÍAS DISPONIBLES

Puedes usar estas categorías o crear nuevas:

- **Relajante** - Jabones calmantes para relajación
- **Exfoliante** - Jabones con poder de limpieza/exfoliación
- **Cuidado Diario** - Hidratación y cuidado general
- **Limpieza Profunda** - Desintoxicación intensiva
- **Energizante** - Estimulantes y refrescantes

Para crear una nueva categoría:

1. Agrégala al producto en `BD_PRODUCTOS`
2. El botón de filtro se generará automáticamente

Ejemplo:

```javascript
{
    id: 12,
    nombre: "Jabón de Miel y Avena Premium",
    precio: 7.50,
    descripcion: "Fórmula Premium de lujo.",
    categoria: "Premium",  // ← Nueva categoría
    ruta_imagen: "img/premium.jpg",
    emoji: "👑"
}
```

## CAMBIAR EL MENSAJE DE WHATSAPP

En `app.js`, busca la función `generarMensajePedido()` y personalízala:

### Ejemplo 1: Agregar nombre de negocio

```javascript
function generarMensajePedido() {
    // ...código...
    let mensaje = "¡Hola Esencia Pura! Me gustaría hacer el siguiente pedido:\n\n";
    // ...resto del código...
}
```

### Ejemplo 2: Agregar opciones de envío

```javascript
mensaje += "\n";
mensaje += `💰 *Total estimado: $${totalCarrito.toFixed(2)}*\n`;
mensaje += "\n";
mensaje += "📍 Opciones de envío:\n";
mensaje += "• Retiro en tienda\n";
mensaje += "• Envío a domicilio (+$3.00)\n";
mensaje += "\n";
mensaje += "¿Me confirman disponibilidad y costo de envío?";
```

### Ejemplo 3: Agregar nota de agradecimiento

```javascript
mensaje += "\n\n";
mensaje += "Gracias por confiar en Esencia Pura 🙏";
```

## CAMBIAR LOGO Y NOMBRE

En `index.html`, busca el header:

```html
<div class="header-content">
    <h1 class="logo">🧼 Esencia Pura</h1>
    <p class="tagline">Jabones Artesanales Naturales</p>
</div>
```

### Ejemplo 1: Cambiar solo el texto

```html
<h1 class="logo">🌿 Mi Negocio de Jabones</h1>
<p class="tagline">Productos 100% Orgánicos</p>
```

### Ejemplo 2: Cambiar emoji del logo

```html
<h1 class="logo">🌸 Jabones del Paraíso</h1>
<p class="tagline">Hecho a mano con amor</p>
```

## CAMBIAR DIMENSIONES Y ESPACIADO

En `style.css`, las variables principales son:

```css
:root {
    /* ESPACIADO */
    --spacing-xs: 4px;      /* Extra pequeño */
    --spacing-sm: 8px;      /* Pequeño */
    --spacing-md: 16px;     /* Medio (ESTÁNDAR) */
    --spacing-lg: 24px;     /* Grande */
    --spacing-xl: 32px;     /* Extra grande */
    
    /* TAMAÑOS DE FUENTE */
    --font-size-base: 16px; /* Texto normal */
    --font-size-small: 14px;
    --font-size-large: 18px;
    
    /* BORDES */
    --border-radius: 12px;  /* Esquinas redondeadas */
    --border-radius-sm: 8px;
    
    /* SOMBRAS */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
}
```

### Ejemplo: Diseño más "cómodo"

```css
:root {
    --spacing-md: 20px;      /* Más espacioso */
    --spacing-lg: 30px;
    --font-size-base: 18px;  /* Fuente más grande */
    --border-radius: 16px;   /* Esquinas más redondeadas */
}
```

## CAMBIAR NÚMERO DE WHATSAPP

En `app.js`, línea 14:

```javascript
const TELEFONO_DESTINO = "51999999999";  // ← CAMBIA AQUÍ
```

### Ejemplos por país:

```javascript
// PERÚ
const TELEFONO_DESTINO = "51987654321";

// COLOMBIA  
const TELEFONO_DESTINO = "573001234567";

// ARGENTINA
const TELEFONO_DESTINO = "542281234567";

// MÉXICO
const TELEFONO_DESTINO = "525512345678";

// ESPAÑA
const TELEFONO_DESTINO = "34612345678";

// BRASIL
const TELEFONO_DESTINO = "5511987654321";
```

**IMPORTANTE**: Incluye el código de país sin el signo "+" y sin espacios.

## CAMBIAR TIEMPO DE ANTI-SPAM

En `app.js`, línea 18:

```javascript
const RATE_LIMIT_MS = 3000;  // 3 segundos (por defecto)
```

Puedes cambiar a:

```javascript
const RATE_LIMIT_MS = 2000;  // 2 segundos (más rápido)
const RATE_LIMIT_MS = 5000;  // 5 segundos (más seguro)
```

## AGREGAR FILTRO DE PRECIO

En `style.css`, antes de cerrar, agrega:

```css
/* Filtro de rango de precios */
.price-filter {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    padding: var(--spacing-md);
    background-color: var(--color-accent);
    border-radius: var(--border-radius);
}

.price-filter input[type="range"] {
    flex-grow: 1;
}

.price-filter span {
    font-weight: 700;
    color: var(--color-primary);
}
```

## AGREGAR BUSCADOR

En `index.html`, después del filtro de categorías:

```html
<div class="search-box">
    <input 
        type="text" 
        id="searchInput" 
        placeholder="Buscar jabón..."
        class="search-input"
    >
</div>
```

En `app.js`, agregar función:

```javascript
function buscarProductos(termino) {
    const terminoMin = termino.toLowerCase();
    const resultados = BD_PRODUCTOS.filter(p => 
        p.nombre.toLowerCase().includes(terminoMin) ||
        p.descripcion.toLowerCase().includes(terminoMin)
    );
    // Mostrar resultados...
}
```

## MODO OSCURO AUTOMÁTICO

El CSS ya incluye soporte para modo oscuro. El sistema detecta automáticamente las preferencias del usuario:

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #f0f0f0;
    }
    /* ... más estilos oscuros ... */
}
```

## AGREGAR EFECTOS DE ANIMACIÓN

En `style.css`, usa estas animaciones existentes o crea nuevas:

```css
/* Animación de entrada */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Animación de escala */
@keyframes scaleUp {
    from { 
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Animación de deslizamiento */
@keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
}
```

Aplícalas:

```css
.producto {
    animation: fadeIn 0.5s ease-out;
}
```

## AGREGAR DESCUENTOS EN PRECIOS

En `app.js`, después de `calcularSubtotalSeguro()`:

```javascript
const DESCUENTO_PORCENTAJE = 10; // 10% de descuento

function calcularSubtotalConDescuento(idProducto, cantidad) {
    const subtotal = calcularSubtotalSeguro(idProducto, cantidad);
    const descuento = subtotal * (DESCUENTO_PORCENTAJE / 100);
    return subtotal - descuento;
}
```

## AGREGAR CÓDIGO DE CUPÓN

En `app.js`, agrega:

```javascript
const CUPONES = {
    "PRIMERA10": 0.10,    // 10% de descuento
    "AMIGO5": 0.05,       // 5% de descuento
    "VIP20": 0.20         // 20% de descuento
};

function validarCupon(codigo) {
    return CUPONES[codigo.toUpperCase()] || 0;
}
```

## CAMBIAR POSICIÓN DEL FOOTER

El footer es "sticky" (pegado al fondo). Para hacerlo flotante:

En `style.css`:

```css
.sticky-footer {
    position: fixed;        /* Cambiar a: */
    /* position: relative; */ /* Para que siga el scroll */
    
    /* O usar position absolute */
    /* position: absolute;
    bottom: 0; */
}
```

## CAMBIAR ANCHURA MÁXIMA

En `style.css`:

```css
.container {
    max-width: 1200px;  /* Actual */
    /* Cambiar a: */
    /* max-width: 100%; */ /* Sin límite */
    /* max-width: 900px; */ /* Más estrecho */
}
```

## RECURSOS ÚTILES

- **Colores**: https://colorhunt.co/
- **Emojis**: https://emojipedia.org/
- **Iconos**: https://www.flaticon.com/
- **Tipografía**: https://fonts.google.com/

---

**Todas las personalizaciones son opcionales. El proyecto funciona perfectamente con los valores por defecto.**
