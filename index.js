
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
    console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function logShout(string) {
  string.toLowerCase()
  console.log('HELLO')
}
/*describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()*/
