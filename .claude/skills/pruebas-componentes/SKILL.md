---
name: pruebas-componentes
description: Convierte los criterios de una spec del frontend en pruebas con Vitest y Testing Library, simulando solo src/api.js. La usa el probador-ui.
---

# Pruebas de componentes

1. Lee `specs/NNN-*/spec.md` y lista los criterios.
2. Por cada criterio, una prueba en el `.test.jsx` del componente:
   ```jsx
   import { render, screen } from '@testing-library/react'
   import userEvent from '@testing-library/user-event'
   import { vi } from 'vitest'
   import * as api from '../api'
   vi.mock('../api')
   it('CA1: ...', async () => {
     api.listarInmuebles.mockResolvedValue([...])
     render(<Catalogo />)
     expect(await screen.findByText('...')).toBeInTheDocument()
   })
   ```
3. Para `api.js` mismo, prueba con `vi.spyOn(globalThis, 'fetch')` que arma bien la URL.
4. Corre `npm test -- --run` y muestra que fallan porque el componente o la función no existe.
5. Entrega la matriz criterio → prueba.
