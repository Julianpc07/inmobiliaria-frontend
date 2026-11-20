const URL_BASE = 'http://localhost:8000'

export async function listarInmuebles({ tipo } = {}) {
  const params = new URLSearchParams()
  if (tipo) params.set('tipo', tipo)
  const consulta = params.toString()
  const url = `${URL_BASE}/inmuebles${consulta ? `?${consulta}` : ''}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error ${response.status} al listar inmuebles`)
  }
  return response.json()
}
