describe('Comprobar cadenas de texto', () => {
  const text = 'un bonito texto'

  // Format: Strings or regex
  test('Debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonito/)
  })

  test('No contiene el siguiente texto', () => {
    expect(text).not.toMatch(/es/)
  })

  test('Comprobar la langitud del string', () => {
    expect(text).toHaveLength(15)
  })
})
