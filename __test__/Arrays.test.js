import { arrayColors, arrayFruits } from '../src/Arrays'

describe('Comprobaremos que existe un elemento', () => {
  test('Tiene una banana', () => {
    expect(arrayFruits()).toContain('banana')
  })
  test('No contiene fresa', () => {
    expect(arrayFruits()).not.toContain('fresa')
  })
  test('Comprobar el tamaño de un arreglo', () => {
    expect(arrayFruits()).toHaveLength(6)
  })
  test('Comprobar que existe un color', () => {
    expect(arrayColors()).toContain('azul')
  })
})
