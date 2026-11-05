# PL-400 Quiz

![Static web app](https://img.shields.io/badge/app-static%20web-0b6e79)
![Offline ready](https://img.shields.io/badge/offline-service%20worker-12703a)
![Exam data](https://img.shields.io/badge/exams-1.0%20%2B%202.1-335c67)

Banco de práctica PL-400 para navegador, móvil y uso sin conexión. No requiere backend ni Node para ejecutarse.

## Funcionalidades

- Modo práctica con corrección inmediata y modo examen con corrección al finalizar.
- Historial local, reanudación, comparación y exportación/importación JSON.
- Preguntas 1.0 originales y preguntas 2.1 con controles interactivos.
- Aplicación estática con caché offline mediante service worker.

## Uso

Abre el sitio publicado. La primera visita necesita conexión para descargar la app y su caché. Después, se puede usar sin internet.

También puedes abrir `index.html` directamente como `file://`. La versión 2.0 se carga desde `exams-v2.bundle.js`, así que no hace falta servidor local. Los JSON de `exams/` son la fuente editable; tras cambiarlos, regenera el bundle con:

```sh
node build-exams.js
```

Node solo se necesita para regenerar el bundle, no para ejecutar la web. En el sitio publicado, los JSON se cargan por separado y el service worker los guarda en caché.

## Datos

- **1.0 Original:** banco existente en `questions.js`; se conserva sin modificar durante la migración.
- **2.0 Migrado:** un fichero por examen en `exams/a.json`, `exams/b.json`, etc.
- El bundle `exams-v2.bundle.js` permite cargar los exámenes 2.0 directamente desde disco.
- Las claves de pregunta y respuesta deben ser estables y estar versionadas para no mezclar historiales.

## Cómo contribuir

1. Elige un examen 2.0 en `exams/` y revisa el enunciado, las opciones y la solución originales.
2. Edita solo el fichero JSON de ese examen. Conserva `exam`, `n`, `sourceId`, `version` e IDs estables; no edites `questions.js` para añadir contenido 2.0.
3. Elige el control que pide el ejercicio: `select-grid`, `boolean`, `assign` o `order`. Para `assign`, define `reuse` como `once` o `multiple` de acuerdo con el enunciado o la evidencia de la zona de respuestas.
4. Comprueba que cada `answer` existe en las opciones de su fila. No deduzcas claves si la fuente no es legible; deja el caso pendiente de revisión.
5. Para fórmulas, usa `layout: "code"` y coloca filas seleccionables con partes `{ "row": "id" }` dentro de `interaction.code`. Conserva el contexto relevante en el enunciado o en `contextCode`.
6. Ejecuta `node build-exams.js` y prueba el examen en práctica, revisión y modo offline.
7. Si agregas imágenes de contexto, comprueba que son necesarias y actualiza la lista del service worker cuando el archivo no esté ya precargado.

La guía detallada para agentes está en [EXAMS_V2_AGENT_GUIDE.md](EXAMS_V2_AGENT_GUIDE.md).

## Roadmap

- [x] Migrar A, B y C a la estructura JSON 2.0.
- [ ] Migrar D–V a ficheros JSON independientes y convertir las preguntas visuales en controles revisados.
- [ ] Añadir traducciones ES/EN revisadas para enunciados, opciones y explicaciones.
- [ ] Marcar 1.0 como obsoleta cuando la 2.0 esté completa y validar la compatibilidad de intentos e importaciones.
- [ ] Eliminar 1.0 y `questions.js` únicamente después de migrar todo el contenido y conservar los historiales existentes.

## Publicación

La carpeta es un sitio estático. Puedes publicarla en GitHub Pages desde la raíz del repositorio o en cualquier hosting HTTPS. El modo PWA/offline requiere HTTPS en el sitio publicado.
