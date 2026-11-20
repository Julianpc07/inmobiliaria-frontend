import { afterEach, expect, it, vi } from 'vitest'
import { listarInmuebles } from './api'

afterEach(() => {
  vi.restoreAllMocks()
})

it('CA6: listarInmuebles arma la URL con tipo=casa', async () => {
  const spy = vi
    .spyOn(globalThis, 'fetch')
    .mockResolvedValue({ ok: true, json: async () => [] })
  await listarInmuebles({ tipo: 'casa' })
  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy.mock.calls[0][0]).toBe('http://localhost:8000/inmuebles?tipo=casa')
})

it('CA6: listarInmuebles arma la URL sin tipo', async () => {
  const spy = vi
    .spyOn(globalThis, 'fetch')
    .mockResolvedValue({ ok: true, json: async () => [] })
  await listarInmuebles({})
  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy.mock.calls[0][0]).toBe('http://localhost:8000/inmuebles')
})
