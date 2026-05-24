# 🧼 Esencia Pura - Catálogo de Jabones Artesanales

**Aplicación web minimalista, ultra rápida y Mobile-First para vender 10 tipos de jabones artesanales**

## 🚀 Características Principales

- ✨ **Single Page Application (SPA)** con HTML5, CSS3 y JavaScript vanilla
- 📱 **Mobile-First** completamente responsive
- ⚡ **Ultra rápido** - Carga instantánea (< 1 segundo)
- 🔒 **Seguro** - Protecciones anti-spoofing, anti-XSS y anti-spam
- 💬 **Integración WhatsApp** - Pedidos directos sin APIs de pago
- 🏗️ **GitHub Pages** - Hospedaje 100% gratuito
- 🎨 **Diseño orgánico** - Paleta de colores naturales

## 📁 Estructura del Proyecto

```
├── index.html              # Estructura HTML5
├── style.css               # Estilos CSS3 mobile-first
├── app.js                  # Lógica SPA + seguridad
├── INSTRUCCIONES.md        # Guía completa de configuración
├── .gitignore              # Archivos a ignorar en Git
└── img/                    # Carpeta para imágenes de productos
    ├── lavanda.jpg
    ├── avena_miel.jpg
    ├── ... (10 jabones total)
```

## ⚙️ Configuración Rápida

### 1️⃣ Configurar tu número de WhatsApp

Abre `app.js` y reemplaza:

```javascript
const TELEFONO_DESTINO = "51999999999";  // ← Cambia esto
```

Con tu número incluyendo código de país (ej: 51 para Perú, 57 para Colombia).

### 2️⃣ Agregar imágenes

Crea carpeta `img/` y coloca las 10 fotos de jabones.

### 3️⃣ Desplegar en GitHub Pages

1. Sube archivos a repositorio GitHub
2. Ve a Settings > Pages
3. Selecciona rama como source
4. ¡Listo!

## 📊 10 Productos Incluidos

| Jabón | Precio | Categoría |
|-------|--------|-----------|
| Aloe Vera + Vitamina E | S/ 8.00 | Cuidado Diario |
| Carbón Activado + Vitaminas | S/ 8.00 | Limpieza Profunda |
| Miel + Leche de Cabra | S/ 8.50 | Cuidado Diario |
| Aclarante Arroz + Vitaminas | S/ 8.50 | Aclarante |
| Cúrcuma | S/ 7.50 | Limpieza Profunda |
| Café + Aclarante | S/ 7.50 | Exfoliante |
| Avena + Miel Premium | S/ 7.00 | Exfoliante |
| Manzanilla Relajante | S/ 6.00 | Relajante |
| Arcilla Rosa Detox | S/ 7.50 | Limpieza Profunda |
| Lavanda Pura | S/ 6.00 | Relajante |

## 🔐 Seguridad Implementada

✅ **Anti-Spoofing** - Precios recalculados desde BD
✅ **Anti-XSS** - Sanitización automática de textos
✅ **Anti-Spam** - Rate limiting en botón (3 segundos)

## 💬 Mensaje WhatsApp Automático

```
¡Hola! Me gustaría hacer el siguiente pedido de jabones artesanales:

🧼 2x Jabón de Lavanda - ($10.00)
🧼 1x Jabón de Avena y Miel - ($5.50)

💰 Total estimado: $15.50

¿Me confirman disponibilidad para coordinar el pago y envío?
```

## 📖 Documentación Completa

Consulta [INSTRUCCIONES.md](INSTRUCCIONES.md) para:
- Configuración detallada
- Estructura de datos
- Personalización
- Troubleshooting

## 💡 Ventajas

- 🎯 $0 de costo (GitHub Pages gratis)
- ⚡ Carga en < 1 segundo
- 📱 100% responsive
- 🔒 Seguro contra manipulación
- 💬 Pedidos directos al WhatsApp

---

**Creado con ❤️ para emprendedores de jabones artesanales**