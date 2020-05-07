var question = [
  "Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS)? <br> <br> ",

  "Can coronaviruses be transmitted from person to person? <br> <br>",

  "Is there a vaccine for a novel coronavirus? <br> <br>",

  "People can catch COVID-19 from others who have the virus.The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks? <br> <br>",

  "Can covid-19 be passed through breastfeeding? <br><br>",
];

var a1 = [
  "<button class=button2 onclick=question1correct()>True</button>",
  "<button class=button2 onclick=question2correct()>True</button>",
  "<button class=button2 onclick=question3incorrect()>True</button>",
  "<button class=button2 onclick=question4incorrect()>uncertain</button>",
  "<button class=button2 onclick=question5correct()>False</button>",
];
var a2 = [
  "<button class=button2 onclick=question1incorrect()>False</button>",
  "<button class=button2 onclick=question2incorrect()>False</button>",
  "<button class=button2 onclick=question3correct()>False</button>",
  "<button class=button2 onclick=question4incorrect()>False</button>",
  "<button class=button2 onclick=question5incorrect()>True</button>",
];
var a3 = [
  "<button class=button2 onclick=question1incorrect()>uncertain</button>",
  "<button class=button2 onclick=question2incorrect()>uncertain</button>",
  "<button class=button2 onclick=question3incorrect()>uncertain</button>",
  "<button class=button2 onclick=question4correct()>True</button>",
  "<button class=button2 onclick=question5incorrect()>uncertain</button>",
];

var correct = [
  "Fantastic",
  "wow-superb",
  "correct",
  "great",
  "Fantastic",
  "Fantastic",
];
var incorrect = [
  "The answer is true",
  "incorrect",
  "better luck next time",
  "better luck next time",
  "incorrect",
];

var n = 0;
n++;
var s = 0;
s++;

function begin1() {
  disappear1.innerHTML = "";
  message1.innerHTML = "";
  question1.innerHTML = question[0];
  option1.innerHTML = a1[0];
  option2.innerHTML = a2[0];
  option3.innerHTML = a3[0];
}

function question1correct() {
  answer1.innerHTML = "<div id=green1>" + correct[0] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new1()>Next</button>";
  number1.innerHTML = n++;
  score1.innerHTML = s++;
}

function question1incorrect() {
  answer1.innerHTML = "<div id=red1>" + incorrect[0] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  number1.innerHTML = n++;
  next1.innerHTML = "<button class=button2 onclick=new1()>Next</button>";
}

function new1() {
  question1.innerHTML = question[1];
  option1.innerHTML = a1[1];
  option2.innerHTML = a2[1];
  option3.innerHTML = a3[1];
  next1.innerHTML = "";
  answer1.innerHTML = "";
}

function question2correct() {
  answer1.innerHTML = "<div id=green1>" + correct[1] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new2()>Next</button>";
  number1.innerHTML = n++;
  score1.innerHTML = s++;
}

function question2incorrect() {
  answer1.innerHTML = "<div id=red1>" + incorrect[1] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new2()>Next</button>";
  number1.innerHTML = n++;
}

function new2() {
  question1.innerHTML = question[2];
  option1.innerHTML = a1[2];
  option2.innerHTML = a2[2];
  option3.innerHTML = a3[2];
  next1.innerHTML = "";
  answer1.innerHTML = "";
}
function question3correct() {
  answer1.innerHTML = "<div id=green1>" + correct[2] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new3()>Next</button>";
  number1.innerHTML = n++;
  score1.innerHTML = s++;
}
function question3incorrect() {
  answer1.innerHTML = "<div id=red1>" + incorrect[2] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new3()>Next</button>";
  number1.innerHTML = n++;
}
function new3() {
  question1.innerHTML = question[3];
  option1.innerHTML = a1[3];
  option2.innerHTML = a2[3];
  option3.innerHTML = a3[3];
  next1.innerHTML = "";
  answer1.innerHTML = "";
}
function question4correct() {
  answer1.innerHTML = "<div id=green1>" + correct[3] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new4()>Next</button>";
  number1.innerHTML = n++;
  score1.innerHTML = s++;
}
function question4incorrect() {
  answer1.innerHTML = "<div id=red1>" + incorrect[3] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=new4()>Next</button>";
  number1.innerHTML = n++;
}
function new4() {
  question1.innerHTML = question[4];
  option1.innerHTML = a1[4];
  option2.innerHTML = a2[4];
  option3.innerHTML = a3[4];
  next1.innerHTML = "";
  answer1.innerHTML = "";
}
function question5correct() {
  answer1.innerHTML = "<div id=green1>" + correct[4] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=end1()>End</button>";
  number1.innerHTML = n++;
  score1.innerHTML = s++;
}
function question5incorrect() {
  answer1.innerHTML = "<div id=red1>" + incorrect[4] + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button2 onclick=end1()>End</button>";
  number1.innerHTML = n++;
}

function end1() {
  message1.innerHTML = "End of Quiz";
  question1.innerHTML = "";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML =
    "<div id=text1>" +
    "<button class=button2 onclick=repeat1()>Repeat</button>" +
    "</div> ";
  answer1.innerHTML = "";
}
function repeat1() {
  location.reload();
}
