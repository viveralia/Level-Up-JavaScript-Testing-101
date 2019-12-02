import { isFalse, isTrue, isNull, isUndefined } from '../src/True'

describe('Probar resultados nulos', () => {
  test('Null', () => {
    expect(isNull()).toBeNull()
  })
})

describe('Probar resultados verdaderos', () => {
  test('Verdadero', () => {
    expect(isTrue()).toBeTruthy()
  })
})

describe('Probar resultados falsos', () => {
  test('Falsos', () => {
    expect(isFalse()).toBeFalsy()
  })
})

describe('Probar resultados indefinidos', () => {
  test('Indefinido', () => {
    expect(isUndefined()).toBeUndefined()
  })
})

describe('Probar resultados no verdaderos', () => {
  test('Falso o verdadero', () => {
    expect(isFalse()).not.toBeTruthy()
  })
})

describe('Probar resultados no falsos', () => {
  test('Verdadero o falso', () => {
    expect(isTrue()).not.toBeFalsy()
  })
})
