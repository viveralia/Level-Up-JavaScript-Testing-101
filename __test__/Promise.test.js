import { getDataFromApi } from '../src/Promise'

describe('Probando promesas', () => {
  test('Comprobando que se están recibiendo al menos un objeto como resultado de la petición', done => {
    const url = 'https://rickandmortyapi.com/api/character/'
    getDataFromApi(url).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
      done()
    })
  })

  // Resolve - Reject
  test('Resulve un hola', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
  })
  test('Rechaza con error', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
