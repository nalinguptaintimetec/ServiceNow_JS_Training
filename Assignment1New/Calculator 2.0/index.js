const clear = document.getElementById("clear");
const Delete = document.getElementById("delete");
const power = document.getElementById("power");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const add = document.getElementById("add");
const openBr = document.getElementById("openBr");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const closeBr = document.getElementById("closeBr");
const equals = document.getElementById("equals");
const display = document.getElementById("display");

let str = "";

let decimalCount = 0;

function isoperator() {
  let ch = str[str.length - 1];
  if (ch == "+" || ch == "-" || ch == "*" || ch == "/" || ch == "**")
    return true;
}

function isnumber() {
  let ch = str[str.length - 1];
  if (ch >= "0" && ch <= "9") return true;
}

Delete.addEventListener("click", () => {
  console.log(str);
  str = str.slice(0, -1);
  display.value = str;
  console.log(str);
});

clear.addEventListener("click", () => {
  console.log(str);
  str = "";
  display.value = str;
  console.log(str);
});

one.addEventListener("click", () => {
  console.log(str);
  str += "1";
  display.value = str;
  console.log(str);
});
two.addEventListener("click", () => {
  console.log(str);
  str += "2";
  display.value = str;
  console.log(str);
});
three.addEventListener("click", () => {
  console.log(str);
  str += "3";
  display.value = str;
  console.log(str);
});
four.addEventListener("click", () => {
  console.log(str);
  str += "4";
  display.value = str;
  console.log(str);
});
five.addEventListener("click", () => {
  console.log(str);
  str += "5";
  display.value = str;
  console.log(str);
});
six.addEventListener("click", () => {
  console.log(str);
  str += "6";
  display.value = str;
  console.log(str);
});
seven.addEventListener("click", () => {
  console.log(str);
  str += "7";
  display.value = str;
  console.log(str);
});
eight.addEventListener("click", () => {
  console.log(str);
  str += "8";
  display.value = str;
  console.log(str);
});
nine.addEventListener("click", () => {
  console.log(str);
  str += "9";
  display.value = str;
  console.log(str);
});
zero.addEventListener("click", () => {
  console.log(str);
  str += "0";
  display.value = str;
  console.log(str);
});
power.addEventListener("click", () => {
  console.log(str);
  if (!isoperator()) str += "**";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});
add.addEventListener("click", () => {
  console.log(str);
  if (!isoperator()) str += "+";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});
minus.addEventListener("click", () => {
  console.log(str);
  if (!isoperator()) str += "-";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});
multiply.addEventListener("click", () => {
  console.log(str);
  if (!isoperator()) str += "*";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});
divide.addEventListener("click", () => {
  console.log(str);
  if (!isoperator()) str += "/";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});
decimal.addEventListener("click", () => {
  console.log(str);
  if (isnumber() && decimalCount == 0) {
    str += ".";
    decimalCount++;
  }
  display.value = str;
  console.log(str);
});
openBr.addEventListener("click", () => {
  console.log(str);
  str += "(";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});
closeBr.addEventListener("click", () => {
  console.log(str);
  str += ")";
  decimalCount = 0;
  display.value = str;
  console.log(str);
});

equals.addEventListener("click", () => {
  try {
    str = eval(str);
  } catch {
    str = "Invalid Expression";
  }
  display.value = str;
  console.log(str);
});
