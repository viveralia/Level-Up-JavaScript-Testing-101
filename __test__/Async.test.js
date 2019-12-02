import { getDataFromApi } from '../src/Promise'

describe('Probar async-await', () => {
  test('Obtener un array con al menos 1 dato', async () => {
    const api = 'https://rickandmortyapi.com/api/character'
    const { results } = await getDataFromApi(api)
    expect(results.length).toBeGreaterThan(0)
  })

  test('Obtener a Rick', async () => {
    const api = 'https://rickandmortyapi.com/api/character/1'
    const { name } = await getDataFromApi(api)
    expect(name).toEqual('Rick Sanchez')
  })

  test('Realizando una petición a una API con error', async () => {
    const apiError = 'https://httpstat.us/404'
    const peticion = getDataFromApi(apiError)
    await expect(peticion).rejects.toEqual(
      Error('Request failed with status code 404')
    )
  })

  test('Resuelve un hola', async () => {
    await expect(Promise.resolve('Hola')).resolves.toEqual('Hola')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
