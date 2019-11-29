import { sumar, multiplicar } from './App'

describe('Cálculos matemáticos', () => {
  test('Suma', () => {
    expect(sumar(1, 1)).toBe(2)
  })
  test('Multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4)
  })
})
