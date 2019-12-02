import { getCharacter } from '../src/snapshot/Snapshot'
import rick from '../src/snapshot/rick.json'

describe('Es hora de las instantáneas', () => {
  // La primera vez que se ejecuta este código, se guardará el resultado de la petición como un snapshot. Posteriormente, se comparará el snapshot con nuevas peticiones para asegurarse de que la respuesta no ha cambiado. Para actualizar el snapshot es necesario correr el comando: jest -u
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  })

  // Estos valores siempre estarán cambiando porque son aleatorios, al igual que sería un updatedAt
  test('Siempre fallará la instantánea', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20)
    }
    expect(user).toMatchSnapshot()
  })

  test('Tenemos una exepción', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Iván Viveros'
    }

    // Dentro de los parámetros se puede especificar que algún valor va a cambiar especificando el tipo de valor que esperamos recibir (no funcionó, lol)
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    })
  })
})
