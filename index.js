
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

function sayHiToGrandma(string) {
var uppercase = 'HELLO';
uppercase.toUpperCase() === uppercase
var lowercase = 'hello';
lowercase.toLowerCase() === lowercase
var mixedCase = 'YES INDEED!';
mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
}

/*describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})*/
