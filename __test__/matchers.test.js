describe('Comparadores comunes', () => {
  // Matchers
  const user = {
    name: 'oscar',
    lastName: 'barajas'
  }

  const user2 = {
    name: 'oscar',
    lastName: 'barajas2'
  }

  // // Test
  // test('Igualdad de elementos', () => {
  //   expect(user).toEqual(user2)
  // })

  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2)
  })
})
