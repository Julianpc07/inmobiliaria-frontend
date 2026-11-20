import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, expect, it, vi } from 'vitest'
import * as api from '../api'
import Catalogo from './Catalogo'

vi.mock('../api')

const inmuebles = [
  {
    id: 1,
    titulo: 'Casa campestre en La Calera',
    tipo: 'casa',
    operacion: 'venta',
    ciudad: 'Bogotá',
    precio: 320000000,
    habitaciones: 3,
    banos: 2,
    area_m2: 120,
  },
  {
    id: 2,
    titulo: 'Apartamento cerca al parque',
    tipo: 'apartamento',
    operacion: 'arriendo',
    ciudad: 'Medellín',
    precio: 2500000,
    habitaciones: 2,
    banos: 1,
    area_m2: 70,
  },
]

beforeEach(() => {
  vi.resetAllMocks()
})

it('CA1: muestra cargando mientras llegan los datos', () => {
  api.listarInmuebles.mockReturnValue(new Promise(() => {}))
  render(<Catalogo />)
  expect(screen.getByText('Cargando inmuebles…')).toBeInTheDocument()
})

it('CA2: una tarjeta por inmueble con precio en pesos', async () => {
  api.listarInmuebles.mockResolvedValue(inmuebles)
  render(<Catalogo />)
  expect(await screen.findByText('Casa campestre en La Calera')).toBeInTheDocument()
  expect(screen.getByText('Apartamento cerca al parque')).toBeInTheDocument()
  expect(screen.getByText(/Bogotá/)).toBeInTheDocument()
  expect(screen.getByText(/Medellín/)).toBeInTheDocument()
  expect(screen.getByText(/Venta/)).toBeInTheDocument()
  expect(screen.getByText(/Arriendo/)).toBeInTheDocument()
  expect(screen.getByText(/320\.000\.000/)).toBeInTheDocument()
})

it('CA3: el filtro por tipo llama a la API con tipo=casa', async () => {
  api.listarInmuebles.mockResolvedValue(inmuebles)
  render(<Catalogo />)
  const select = await screen.findByLabelText('Tipo de inmueble')
  const opciones = screen.getAllByRole('option').map((o) => o.textContent)
  expect(opciones).toEqual(['Todos', 'Casa', 'Apartamento', 'Local'])
  await userEvent.selectOptions(select, 'Casa')
  expect(api.listarInmuebles).toHaveBeenLastCalledWith({ tipo: 'casa' })
})

it('CA4: mensaje cuando no hay inmuebles', async () => {
  api.listarInmuebles.mockResolvedValue([])
  render(<Catalogo />)
  expect(await screen.findByText('No hay inmuebles con esos filtros')).toBeInTheDocument()
})

it('CA5: mensaje cuando la API falla', async () => {
  api.listarInmuebles.mockRejectedValue(new Error('fallo'))
  render(<Catalogo />)
  expect(
    await screen.findByText('No pudimos cargar los inmuebles. Intenta de nuevo.'),
  ).toBeInTheDocument()
})
