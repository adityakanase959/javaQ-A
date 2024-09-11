const quiz = document.getElementById("quiz-window");
const notes = document.getElementById("notes-window");
const result = document.getElementById("result-window");
const main = document.getElementById("main-window");

function quizWindow() {
  quiz.style.zIndex = "110";
  notes.style.zIndex = "0";
  result.style.zIndex = "0";

  // quiz.style.zIndex = "visible";
  // notes.style.visibility = "hidden";
  // result.style.visibility = "hidden";

  //   console.log("clicked");
}
function notesWindow() {
  notes.style.zIndex = "110";
  quiz.style.zIndex = "0";
  result.style.zIndex = "0";

  // notes.style.zIndex = "visible";
  // quiz.style.visibility = "hidden";
  // result.style.visibility = "hidden";
}
function moveBack() {
  notes.style.zIndex = "0";
  quiz.style.zIndex = "0";
  result.style.zIndex = "0";

  // quiz.style.zIndex = "visible";
  // notes.style.visibility = "hidden";
  // result.style.visibility = "hidden";
}
function resultWindow() {
  result.style.zIndex = "110";
  notes.style.zIndex = "0";
  quiz.style.zIndex = "0";

  //visibility to avoid overflow

  // result.style.zIndex = "visible";
  // notes.style.visibility = "hidden";
  // quiz.style.visibility = "hidden";
}

// --------------------------------------display question-------------------------------

const orgQuestion = [
  {
    id: 1,
    que: "Who is the father of computer ?",
    ans: "",
  },
  {
    id: 2,
    que: "What is computer ?",
    ans: "",
  },
  {
    id: 3,
    que: "What is Hardware ?",
    ans: "",
  },
  {
    id: 4,
    que: "What is software?",
    ans: "",
  },
  {
    id: 5,
    que: "What is programming language ?",
    ans: "",
  },
  {
    id: 6,
    que: "What is low-level language ?",
    ans: " ",
  },
  {
    id: 7,
    que: "what is assembly level language ? /n What is assembler?",
    ans: "",
  },
  {
    id: 8,
    que: "what is high level language ?",
    ans: "",
  },
  {
    id: 9,
    que: "Who invented java language?",
    ans: "",
  },
  {
    id: 10,
    que: "Explain plantform with examples?",
    ans: "",
  },
  {
    id: 11,
    que: "When we said software is platform independant?\n Is java platform independant?",
    ans: "",
  },
  {
    id: 12,
    que: "When we said software is platform dependant?\n Is C and CPP platform independant?",
    ans: "",
  },
  {
    id: 13,
    que: "Why java is platform independant?",
    ans: "",
  },
  {
    id: 14,
    que: "Why C and CPP are platform dependant?",
    ans: "",
  },
  {
    id: 15,
    que: "What is Strict FP? /n What it does?",
    ans: "",
  },
  {
    id: 16,
    que: "Explain JDK architecture? \n Difference between JVM,JRE and JDK.",
    ans: "",
  },
  {
    id: 17,
    que: "Why to use JDK?\n Why to JRE? \n What JVM does?\n What is JIT?",
    ans: "",
  },
  {
    id: 18,
    que: "Development tools consists of? \n is it possible to execute source code without JDK?",
    ans: "",
  },
  {
    id: 19,
    que: "Explain compiler \n Explain interpreter? \n Difference between Both.",
    ans: "",
  },
  {
    id: 20,
    que: "Explain structure of java program?",
    ans: "",
  },
  {
    id: 21,
    que: "Commands to compile and run java program? \n Which is current version of JDK we use?",
    ans: "",
  },
  {
    id: 22,
    que: "What are tokens? \n Explain types of tokens?",
    ans: "",
  },
  {
    id: 23,
    que: "What is keyword with Example? \n How many keywords are used inside java current version?\n name all keywords?",
    ans: "",
  },
  {
    id: 24,
    que: "What is identifier? \n What are the rules for  identifiers?\n Is it possible to create class name with only _ or $ symbol?",
    ans: "",
  },
  {
    id: 25,
    que: "What are conventions to write java program?",
    ans: "",
  },
  {
    id: 26,
    que: "What is literals?\n Explain in detail.",
    ans: "",
  },
  {
    id: 27,
    que: "ASCII stands for? \n What is the range of ASCII?\n Also explain ranges for lower case and upper case alphabates and numbericals.",
    ans: "",
  },
  {
    id: 28,
    que: "What is unicode? \n What is the range of unicode in java?",
    ans: "",
  },
  {
    id: 29,
    que: "Explain data_type?\n Explain each data_type in detail?",
    ans: "",
  },
  {
    id: 30,
    que: "Difference between primitive data_type and non primitive data_type?",
    ans: "",
  },
  {
    id: 31,
    que: "Difference between float and double?",
    ans: "",
  },
  {
    id: 32,
    que: "Explain final keyword? \n Why to use final? \n Advantages.",
    ans: "",
  },
  {
    id: 33,
    que: "What is the size of boolean literal?\n Are true,false and null keywords?",
    ans: "",
  },
  {
    id: 34,
    que: "What is UTF-8?",
    ans: "",
  },
  {
    id: 35,
    que: "How characters stored inside memory?",
    ans: "",
  },
  {
    id: 36,
    que: "Hierarchy to store data inside data_types ?",
    ans: "",
  },
  {
    id: 37,
    que: "What are the default values for data_types ?\n Byte\nShort\nInt\nChar\nlong\nBoolean\nDouble\nFloat",
    ans: "",
  },
  {
    id: 38,
    que: "Can we store null value inside primitive data_type?",
    ans: "",
  },
  {
    id: 39,
    que: "Explain string? \n How strings are unmutable?",
    ans: "",
  },
  {
    id: 40,
    que: "What are seperators?",
    ans: "",
  },
  {
    id: 41,
    que: "Explain Comments and their types?\n Why to use comments?",
    ans: "",
  },
  {
    id: 42,
    que: "What are operators and how they are classified?",
    ans: "",
  },
  {
    id: 43,
    que: "Can we store and execute source file with different class name?\n If yes how?",
    ans: "",
  },
  {
    id: 45,
    que: "Explain System.out.println() in detail?",
    ans: "",
  },
  {
    id: 46,
    que: "Compare print() and println() methods?",
    ans: "",
  },
  {
    id: 47,
    que: "What is variable ?\n What are the global variable variables? and explain their types? \n What is loacal variable \n ",
    ans: "",
  },
  {
    id: 48,
    que: "Difference between golbal and local variable?",
    ans: "",
  },
  {
    id: 49,
    que: "Can we use local variable without initialization ? \n Can we create global and local variable with same name?",
    ans: "",
  },
  {
    id: 50,
    que: "Expain arithmatic operator? \n How to store result of two Byte type literal in byte type of variable? ",
    ans: "",
  },
  {
    id: 51,
    que: "Expain assignment and compound assignment operators?\n What is advantage of this operators",
    ans: "",
  },
  {
    id: 52,
    que: "Why we get CTE i.e. possible lossy conversion?",
    ans: "",
  },
  {
    id: 53,
    que: "Explain following operators?\nRelational Operator\nLogical operator\nConditional operator\nIncrement and Decrement operator",
    ans: "",
  },
  {
    id: 54,
    que: "What are the control flow statements in java?\n Explain types.",
    ans: "",
  },
  {
    id: 55,
    que: "What are decision making statements?",
    ans: "",
  },
  {
    id: 56,
    que: "Explain \n if statement \n if else statement?\n if else(ladder) statement.",
    ans: "",
  },
  {
    id: 57,
    que: "Can we omit braces of if block?\n Can we omit else block from if else(ladder) statement?",
    ans: "",
  },
  {
    id: 58,
    que: "How to get input from user ?\n What are the ways to get input from user ?",
    ans: "",
  },
  {
    id: 59,
    que: "What is scanner class? \n Steps to use scanner class?",
    ans: "",
  },
  {
    id: 60,
    que: "What does import keyword ?\nWhat does new keyword?\nWhat is system.in ?",
    ans: "",
  },
  {
    id: 61,
    que: "What is the path where Scanner class is present?",
    ans: "",
  },
  {
    id: 62,
    que: "Explain switch statement?",
    ans: "",
  },
  {
    id: 63,
    que: "What is selector inside switch?\n is it possible to omit default case and what will happen?\n",
    ans: "",
  },
  {
    id: 64,
    que: "Can we specify variable for case label if yes, how?",
    ans: "",
  },
  {
    id: 65,
    que: "Which data types are allowed in switch?",
    ans: "",
  },
  {
    id: 66,
    que: "What is fall through in switch? \n Advantages of fall through.",
    ans: "",
  },
];

const display = document.getElementById("question");

let length = orgQuestion.length;
// console.log(length);
display.innerText = orgQuestion[0].que;
let click = 0;
let currCount = orgQuestion[0].id;
let prevCount = 0;
function nextQuestion() {
  if (click == length) {
    click = 0;
  }
  click++;

  currCount = orgQuestion[click].id;
  // console.log("next ");
  // display.innerText = currQuestion;
  display.innerText = orgQuestion[click].que;
  questionNum.innerText = click;
}

//previous question

function preQuestion() {
  if (click > 0) {
    --click;
    display.innerText = orgQuestion[click].que;
    questionNum.innerText = click;
  }
  // console.log("previous");
}

const resultBtn = document.getElementById("resultBtn");
const numQ = document.querySelector("[data-num]");
let num = 0;

function addQuestion() {
  if (num === 9) {
    //  element.style.visibility = 'hidden';
    resultBtn.style.visibility = "visible";
  }
  if (currCount > prevCount) {
    ++num;
    numQ.innerText = num;
  }
  prevCount = currCount;
}
const questionNum = document.querySelector("[data-questionNumber]");

function gotoQuestion(num) {
  display.innerText = orgQuestion[num].que;
  click = num;
  questionNum.innerText = click;
}
