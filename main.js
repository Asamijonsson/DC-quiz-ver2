let darkMode = document.querySelector("#change-background");
let quiz = document.querySelector("quiz");
let button = document.querySelector("button");
let result = document.querySelector("results");
darkMode.addEventListener("click", () => {
    let body = document.querySelector("body");
    if (body.style.background === "black") {
      body.style.background = "white";
      body.style.color = "black";
    } else {
      body.style.background = "black";
      body.style.color = "white";
    }
  });
let questions = [
{
    question:"The sun is green",
    answers: {
        1:"True",
        2:"False"
    },
correctAnswer: "2"
},
{
    question:"There were 7 members in Beatles",
    answers:{
        1:"True",
        2:"False"
    },
    correctAnswer: "2"
},
{
    question:"Myckey Mouse is created in 1928",
    answers:{
        1:"True",
        2:"False"
    },
    correctAnswer: "1"
},

{
    question:"What console is the Legend of Zelda for?",
    answers:{
        1:"Sega",
        2:"XBox",
        3:"Nintendo"
    },
    correctAnswer:"3"
},
{
question:"Which car is not from Sydkorea?",
answers:{
    1:"Tata",
    2:"Kia",
    3:"Hyundai"
},
correctAnswer:"1"
},
{
    question:"How many prefecturs in Japan?",
    answers:{
        1:"43",
        2:"45",
        3:"47"
    },
    correctAnswer:"47"
},

]