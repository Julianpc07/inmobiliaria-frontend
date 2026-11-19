---
paths:
  - "src/**/*.jsx"
---

# Reglas para componentes

- Un componente por archivo. Los datos llegan por props o desde `src/api.js`, nunca con `fetch` directo.
- Cada imagen o ícono con texto alternativo; cada campo de formulario con su `<label>`.
- Botones y selects que se puedan usar con teclado (nada de `div` con `onClick`).
- Siempre hay estado de carga, de error y de lista vacía cuando se piden datos.
