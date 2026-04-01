## Plan: Agrupar y reordenar servicios por tipo

TL;DR - Reorganizar la sección de servicios en grupos visuales (categorías fijas) con orden predefinido. Cambios en `index.html`, `main.js` y `style.css` para mantener consistencia y experiencia.

**Pasos**
1. Revisar los servicios actuales en `index.html` y `main.js` (ya completado).
2. Definir categorías fijas y orden, p.ej.:
   - Animaciones (Animación Clásica, Animación Temática, Combo Completo)
   - Creative (Maquillaje Artístico, Taller de Tote Bags, Glitter Bar, Stand de Peinados, Slime Party, Spa Party)
   - Experiencias extra (Fiesta Kermés, Fiesta Acuática, Show de Burbujas, Barra de Jugos, Stand de Gomitas, Eventos Especiales)
3. Cambiar el HTML: crear contenedores de grupo dentro de `#servicios` y mover/duplicar las `service-card` en orden por categoría.
4. Cambiar CSS (`style.css`): agregar estilos de título/descripción de grupo, espacio entre bloques de categoría, tal vez color codificado de cards y un separador.
5. Ajustar `main.js` si necesitas que `servicesData` respete el mismo orden (para modal/extra-items mantener key y tipo). Agregar `category` a cada servicio si quieres usarlo dinámicamente.
6. Probar:
   - Render visual en navegador de las tres secciones.
   - Click en cada `extra-item` sigue abriendo modal correcto.
   - Sin pérdida de función actual (WhatsApp links, animaciones fade-in).

**Archivos relevantes**
- `/Users/fedelopez/Documents/web-micalu/micalu-web/index.html`
- `/Users/fedelopez/Documents/web-micalu/micalu-web/main.js`
- `/Users/fedelopez/Documents/web-micalu/micalu-web/style.css`

**Verificación**
1. Abrir página y verificar 3 grupos con títulos, en el orden definido.
2. Confirmar que los botones/links de cada servicio siguen funcionando.
3. Verificar en móvil (responsive) que el layout no rompe.

**Decisiones**
- Se implementa orden fijo; no se incluyen drag & drop ni reordenamiento runtime.
- Se prioriza categorización visual, sin cambiar el comportamiento de modal existente.

**Consideraciones**
1. Si el proyecto crece, conviene normalizar los servicios en un JSON + render dinámico el tema siguiente vez.
2. Si se requiere filtro por botón, agregar variable `category` indicado en `servicesData` y usar renderización en JS.
