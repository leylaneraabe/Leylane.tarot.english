function card(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}

var deck = [
  new card(
    "Temperance",
    "Practice balance, patience and moderation. Take the middle road, avoiding extremes to maintain a sense of calm.",
    "temperance"
  ),
  new card(
    "The Lovers",
    "You are facing a decision about an existing relationship, a tempation of the heart or a choice of potential partners. Something may be sacrificed in order for something else to be gained. Whatever the choice, do not make it lightly.",
    "lovers"
  ),
  new card(
    "The High Priestess",
    "It is time to retreat and reflect upon the situation and trust your intuition to guide you through it.",
    "priestess"
  ),
  new card(
    "Three of Swords",
    "A warning: rejection, sadness, loneliness, heartbreak, betrayal, separation or grief may be on the horizon.",
    "three-swords"
  ),
  new card(
    "Three of Pentacles",
    "You have all the skills to accomplish your goals in life. You have the ability to succeed in all your ventures.",
    "pentacles"
  ),
  new card(
    "The Devil",
    "Be wary of seductions of the material world.",
    "devil"
  ),
  new card(
    "King of Wands",
    "You are leading the charge toward a new accomplishment. Relish the spotlight, but be wary of loneliness and isolation at the top.",
    "wands"
  ),
  new card(
    "Nine of Swords",
    "You are worrying obsessively about the situation at hand. Be aware of fear and nightmares.",
    "nine-swords"
  )
];

function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onclick = function() {
  var index = getRandom(8);
  var currentCard = deck[index];

  document.getElementById("display").innerHTML =
    '<img src="../img/cards-spread/' +
    currentCard.image +
    '.jpg"><h3>' +
    currentCard.name +
    "</h3><p>" +
    currentCard.description +
    "</p>";
};

// language="Javascript"
// src="https://sadhana.com.br/cgi-local/mapas/ceu.js"
