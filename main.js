let lettercont = document.querySelector(".letters");
let letters = "abcdefghijklmnopqrstuvwxyz";
let pressrox = document.querySelector(".x");
let lett = Array.from(letters);
let sorry = document.querySelector(".sorry");
pressrox.onclick = () => {
  pressrox.parentElement.remove();
};
setTimeout(() => {
  sorry.style.display = "block";
}, 10000);
lett.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter-holder";
  let txt = document.createTextNode(letter);
  span.appendChild(txt);
  lettercont.appendChild(span);
});
const words = {
  countries: [
    "Algeria",
    "Afghanistan",
    "Albania",
    "Andorra",
    "Angola",
    "Austria",
    "Bahrain",
    "Belarus",
    "Bhutan",
    "Bolivia",
    "Brazil",
    "Bulgaria",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Croatia",
    "Cyprus",
    "Denmark",
    "Dominica",
    "Egypt",
    "Estonia",
    "Fiji",
    "France",
    "Georgia",
    "Greece",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Italy",
    "Iraq",
    "Iran",
    "Japan",
    "lebanon",
    "syria",
    "jordan",
    "Libya",
    "Malta",
    "Morocco",
    "Mexico",
    "Netherlands",
    "Pakistan",
    "Russia",
    "Serbia",
  ],
  names: [
    "ahmad",
    "Mohammad",
    "Ali",
    "hassan",
    "karim",
    "Omar",
    "hussein",
    "khaled",
    "ziad",
    "Abed",
    "Mark",
    "jamal",
  ],
  FootballTeam: [
    "Barcelona",
    "Bayern Munich",
    "Atletico Madrid",
    "Liverpool",
    "Milan",
      "Everton",
    "Inter Milan",
    "Ajax",
    "Real Madrid",
    "Napoli",
"Manchester United",
    "Sevillia",
    "Arsenal",
  ],
};

let allkey = Object.keys(words);

let rand = Math.floor(Math.random() * allkey.length);
let randname = allkey[rand];
let randomnamevalue = words[randname];

let randomvaluenum = Math.floor(Math.random() * randomnamevalue.length);

let finalvalue = randomnamevalue[randomvaluenum];
document.querySelector(".type").innerHTML = randname;

setTimeout(() => {
  let btn = document.createElement("button");
  btn.innerText = "Hint";
  btn.className = "hint";
  document.body.append(btn);
  btn.onclick = () => {
    if (finalvalue == "lebanon") {
      Swal.fire("Country is in asia");
    }
    console.log(finalvalue);
  };
}, 3000);
let cor = 0;
let wordtobegussed = Array.from(finalvalue);

let lettercontainer = document.querySelector(".guesscont");
let status = false;
wordtobegussed.forEach((letter) => {
  let emptyspan = document.createElement("span");
  if (letter === " ") {
    emptyspan.className = "space";
    cor++;
  }
  lettercontainer.appendChild(emptyspan);
});

let wrongattemp = 0;
/******************* */
let thedraw = document.querySelector(".all");
let guesspan = document.querySelectorAll(".guesscont span");
document.addEventListener("click", (e) => {
  let status = false;
  if (e.target.className == "letter-holder") {
    e.target.classList.add("clicked");
    /**iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii */
    let counter = 0;
    let choosenword = Array.from(finalvalue.toLowerCase());
    let clickletter = e.target.innerHTML.toLowerCase();
    choosenword.forEach((llett, woindex) => {
      if (llett == clickletter) {
        status = true;
        guesspan.forEach((span, index) => {
          if (woindex == index) {
            span.innerHTML = llett;
            cor++;
          }
          if (cor == wordtobegussed.length) {
            Swal.fire("CONGRADULATUION!!");
            rel();
          }
        });
      }
    });
    console.log(cor);
    let trueword = "";
    if (status != true) {
      wrongattemp++;
      thedraw.classList.add(`wrong-${wrongattemp}`);

      if (wrongattemp == 11) {
        //  endGame();
        Swal.fire("you lose the world was " + finalvalue);
        rel(); //functon down

        lettercont.classList.add("finshed");
      }
      if (counter == finalvalue.length) {
        Swal.fire("you won");
      }
    }
  }
});
function rel() {
  setTimeout(() => {
    location.reload();
  }, 3000);
}
