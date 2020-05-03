
/*describe('shout(string)', function shout(string) {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})*/

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  const spy = expect.spyOn(console, 'log').andCallThrough()

  logShout('hello')

  expect(spy).toHaveBeenCalledWith('HELLO')

  console.log.restore()
}
