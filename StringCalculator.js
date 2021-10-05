import Generator from "./Generator.js";

/**
 * Author James Torkornoo
 * This class initializes an object that takes a string and returns the sum using a Generator
 * @export
 * @class StringCalculator
 */
export default class StringCalculator {
  constructor(str) {
    this.sum = 0;
    this.numArray;
    this.negNumArray;
    this.str = str;
    this.arrGen = new Generator(str);
  }

  /**
   *
   *
   * @memberof StringCalculator
   */
  setArray() {
    this.arrGen.convertString();
    this.numArray = this.arrGen.finalNumArray;
  }

  /**
   *
   *
   * @memberof StringCalculator
   */
  add() {
    this.setArray();
    this.sum = this.numArray
      .filter((option) => {
        return option <= 1000 ? option : 0;
      })
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  }

  /**
   *
   *
   * @return {*}
   * @memberof StringCalculator
   */
  totalNum() {
    return `\nThis is the sum of all the number(s) in the string ${this.sum}`;
  }
}
