import StringCalculator from "./StringCalculator.js";
let case1,
  case2,
  case3,
  case4,
  case5,
  case6,
  case7,
  case8,
  case9,
  case10,
  case11;

//Test Cases

case1 = "1,2,5";
case2 = "1,2,5000";
case3 = "1,\n2000,4000";
case4 = "1,\n2,5";
case5 = "//;\n1;3;4";
case6 = "//%\n1%3%4";
case7 = "//$\n1$2$3";
case8 = "//@\n2@3@8";
case9 = "//***\n1***2***3";
case10 = "//$,@\n1$2@3";
case11 = "//32***6\n1000**9*2000***9000";

const firstTest = new StringCalculator(case1);
const secondTest = new StringCalculator(case2);
const thirdTest = new StringCalculator(case3);
const fourthTest = new StringCalculator(case4);
const fifthTest = new StringCalculator(case5);
const sixthTest = new StringCalculator(case6);
const seventhTest = new StringCalculator(case7);
const eighthTest = new StringCalculator(case8);
const ninethTest = new StringCalculator(case9);
const tenthTest = new StringCalculator(case10);
const eleventhTest = new StringCalculator(case11);

//Adding numbers
firstTest.add();
secondTest.add();
thirdTest.add();
fourthTest.add();
fifthTest.add();
sixthTest.add();
seventhTest.add();
eighthTest.add();
ninethTest.add();
tenthTest.add();
eleventhTest.add();

console.log(firstTest.totalNum());
console.log(secondTest.totalNum());
console.log(thirdTest.totalNum());
console.log(fourthTest.totalNum());
console.log(fifthTest.totalNum());
console.log(sixthTest.totalNum());
console.log(seventhTest.totalNum());
console.log(eighthTest.totalNum());
console.log(ninethTest.totalNum());
console.log(tenthTest.totalNum());
console.log(eleventhTest.totalNum());
