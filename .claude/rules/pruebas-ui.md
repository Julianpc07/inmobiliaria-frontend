---
paths:
  - "src/**/*.test.jsx"
---

# Reglas para pruebas del frontend

- Se busca por lo que ve el usuario: `getByRole`, `getByText`, `getByLabelText`. Nada de clases CSS.
- Solo se simula `src/api.js` con `vi.mock('../api')`.
- El nombre de cada prueba empieza con el criterio: `it('CA2: muestra el precio en pesos', ...)`.
