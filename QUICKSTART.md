# ⚡ GUÍA RÁPIDA - PRIMEROS 5 MINUTOS

## 🚀 Empezar en 5 minutos

### Paso 1: Cambiar número de WhatsApp (1 min)

Abre `app.js` (línea 14) y cambia:

```javascript
const TELEFONO_DESTINO = "51999999999";  // AQUÍ VA TU NÚMERO
```

Usa el código de país sin "+" ni espacios:
- Perú: 51
- Colombia: 57  
- Argentina: 54
- México: 52
- España: 34
- Brasil: 55

**Ejemplo Perú**:
```javascript
const TELEFONO_DESTINO = "51987654321";
```

### Paso 2: Crear carpeta de imágenes (1 min)

1. Haz clic derecho en VS Code > New Folder
2. Nombre: `img`
3. Dentro, copia tus 10 fotos de jabones

**Los nombres deben ser exactos**:
- lavanda.jpg
- avena_miel.jpg
- calendula.jpg
- carbon.jpg
- coco.jpg
- manzanilla.jpg
- aloe_vera.jpg
- romero.jpg
- arcilla_rosa.jpg
- cafe.jpg

### Paso 3: Subir a GitHub (2 min)

```bash
# En terminal, dentro de tu carpeta del proyecto
git init
git add .
git commit -m "Primera versión de Esencia Pura"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/Esencia-Pura.git
git push -u origin main
```

### Paso 4: Activar GitHub Pages (1 min)

1. Ve a `github.com/tu-usuario/Esencia-Pura`
2. Settings > Pages
3. Selecciona "main" como rama
4. ¡Listo! Tu sitio estará en:
   ```
   https://tu-usuario.github.io/Esencia-Pura/
   ```

## ✅ Verificar que funciona

Visita tu sitio en el navegador y verifica:

- [ ] Se ve bien en celular
- [ ] Los productos aparecen
- [ ] Puedes agregar productos al carrito
- [ ] El botón de WhatsApp abre el chat
- [ ] El mensaje tiene el total correcto

## 🎨 Cambios Mínimos Recomendados

### Solo los números son obligatorios:

**OBLIGATORIO:**
1. ✅ Cambiar número WhatsApp
2. ✅ Agregar 10 imágenes

**RECOMENDADO (5 min extra):**
1. 🎯 Cambiar el nombre de "Esencia Pura" a tu marca
2. 🎨 Cambiar el emoji del logo
3. 📝 Actualizar descripción en index.html

## 🔧 Cambios Básicos

### Cambiar nombre de marca

En `index.html` línea 39:

```html
<h1 class="logo">🧼 MI MARCA</h1>
<p class="tagline">Mi descripción</p>
```

### Cambiar colores

En `style.css` línea 6:

```css
:root {
    --color-primary: #4a5d3a;      /* Cambiar este */
    --color-secondary: #7ba588;    /* Y este */
}
```

Colores sugeridos:
- Verde: #2d5016 (oscuro), #6ba66b (claro)
- Azul: #003d82, #0066cc
- Rosa: #d4639f, #f0b5d6
- Naranja: #e67e22, #f39c12

## 📋 Checklist Pre-Lanzamiento

### Antes de compartir públicamente:

- [ ] Número WhatsApp funciona
- [ ] Todas las imágenes cargan
- [ ] Mensajes de WhatsApp son correctos
- [ ] Precios están bien
- [ ] Categorías están bien
- [ ] Se ve bien en celular
- [ ] Se ve bien en desktop
- [ ] Puedo agregar/quitar productos

## 💬 Mensaje de Prueba

Haz un pedido de prueba:

1. Agrega algunos productos
2. Haz clic en "Enviar Pedido a WhatsApp"
3. Se abrirá WhatsApp con tu número
4. **NO ENVÍES** (es solo prueba)
5. Verifica que el mensaje sea correcto

## 🐛 Si algo no funciona

### Sitio no se ve
- Espera 2 minutos para que GitHub Pages actualice
- Recarga la página (Ctrl+F5)

### Imágenes no aparecen
- Verifica que la carpeta sea `img/` (minúscula)
- Los nombres deben ser exactos (sin espacios)
- Formato: jpg, png, webp

### WhatsApp no abre
- Asegúrate de tener WhatsApp instalado
- Verifica el número: debe incluir código de país
- Prueba en celular (mejor que en web)

### Los precios no se ven
- Revisa que todos los productos tengan precio
- Asegúrate de que sea un número válido

## 📱 Prueba en Celular

**Mejor forma**: Usa tu celular real

1. Busca tu sitio: `https://tu-usuario.github.io/Esencia-Pura/`
2. Prueba agregar productos
3. Prueba el botón de WhatsApp
4. Verifica que se vea bien

## 🎯 Próximas Acciones (Después del Lanzamiento)

### Primeros días:
1. Prueba con amigos/familia
2. Pide feedback
3. Haz cambios mínimos basado en feedback

### Primera semana:
1. Comparte en redes sociales
2. Pide que compartan con otros
3. Agrega algunos testimonios

### Primer mes:
1. Analiza qué funciona
2. Optimize descripción de productos
3. Agrega nuevos productos si necesario

## 📞 Contacto de Emergencia

Si necesitas ayuda rápida:

1. **Revisa**: INSTRUCCIONES.md
2. **Personaliza**: PERSONALIZACION.md
3. **Marketing**: SEO_MARKETING.md

Todos los archivos tienen comentarios detallados en español.

## 🎉 ¡Estás Listo!

Ya puedes vender jabones. 

**Lo más importante**: Empieza hoy, no mañana.

El 80% de los emprendedores que ganan dinero son los que lanzaron primero y optimizaron después.

---

**Recuerda**: Este catálogo no tiene costo. GitHub Pages es gratis. 
**Tu único costo es el tiempo.**

¡Que tengas mucho éxito con Esencia Pura! 🎉

