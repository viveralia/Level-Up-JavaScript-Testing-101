// Después
afterEach(() => console.log('Después de cada prueba'))
afterAll(() => console.log('Después de todas las pruebas'))

// Antes
beforeEach(() => console.log('Antes de cada prueba'))
beforeAll(() => console.log('Antes de todas las pruebas'))

describe('Preparar antes de ejecutar', () => {
  test('Un test de verdadero o falso', () => {
    expect(true).toBeTruthy()
  })
})
