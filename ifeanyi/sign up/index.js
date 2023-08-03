const cards = document.getElementsByClassName('mcard');
const subbtn = document.getElementById('sub-btn');
for (let s = 0; s < cards.length; s++) {

    cards[s].style.display = 'none';
}
let n = 0;
cards[n].style.display = 'block';
function nextCard() {
    n += 1;
    cards[n].style.display = 'block';
    cards[n - 1].style.display = 'none';

}
function prevCard() {
    n -= 1;
    cards[n].style.display = 'block';
    cards[n + 1].style.display = 'none';

}
// if (n = cards.length) {
//     subbtn.style.display = 'block';
// }

