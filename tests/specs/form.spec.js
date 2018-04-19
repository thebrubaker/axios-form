import Form from '../../src'

test('Form', () => {
  const form = new Form()
  expect(form.output()).toEqual('Hello world.')
})
