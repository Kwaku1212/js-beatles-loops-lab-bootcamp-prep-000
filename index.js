function theBeatlesPlay(musicians, instruments) {
  var yes = []
  for(var i = 0; i < musicians.length; i++) {
    var results = (`${musicians[i]} plays ${instruments[i]}`)
    yes.push(results)
    }
  return yes
}

/* var music = ["John", "Andy", "Bob"]
var instru = ["guitar", "violin", "banjo"]

theBeatlesPlay(music,instru)
*/

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    return (`${facts[i]}!!!`)
  }
  i++
}