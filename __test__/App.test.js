import { sumar, multiplicar, restar, dividir } from '../src/App'

describe('Cálculos matemáticos', () => {
  test('Suma', () => {
    expect(sumar(1, 1)).toBe(2)
  })
  test('Multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4)
  })
  test('Restar', () => {
    expect(restar(1, 1)).toBe(0)
  })
  test('Dividir', () => {
    expect(dividir(4, 2)).toBe(2)
  })
})
