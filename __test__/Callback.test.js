import { callbackHell } from '../src/Callback'

describe('Probando un callback', () => {
  test('Callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Hola JavaScripters')
      done()
    }
    callbackHell(otherCallback)
  })
})
