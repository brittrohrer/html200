let suits = ['hearts', 'spades', 'diamonds', 'clubs'];
let value = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

for (let s = 0; s < 4; s++) {
  for (let v = 0; v < 13; v++) {
    console.log(`${value[v]} of ${suits[s]}`);
  }
}