function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return beatles;
}

function johnLennonFacts(facts) {
  for (var i=0; i<facts.length; i++) {
    facts[i] = facts[i] + '!!!'
  }
  return facts;
}