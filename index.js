function theBeatlesPlay(musicians, instruments) {
  var yes = []
  for(var i = 0; i < musicians.length; i++) {
    var results = console.log(`"${musicians[i]} plays ${instruments[i]}"`)
    var yes= yes.push(results)
    }
  return yes
}

/* var music = ["John", "Andy", "Bob"]
var instru = ["guitar", "violin", "banjo"]

theBeatlesPlay(music,instru)
*/
