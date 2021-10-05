/**
 * Author James Torkornoo
 *  This helper class generates a number array for StringCalculator to use for calculation
 * It handles negative numbers, split method selection etc.
 * @export
 * @class Generator
 */
export default class Generator {
  constructor(str) {
    this.finalArray = [];
    this.checkVariable;
    this.negativeNumArray = [];
    this.str = str;
  }
  /**
   *
   *
   * @param {*} element
   * @memberof Generator
   */
  findNegative(element) {
    if (Math.sign(element) == -1) {
      this.negativeNumArray.push(element);
      console.log(
        `\nThe number(s) after the colon that caused the error: ${this.negativeNumArray}`
      );
      throw "Negative numbers not allowed";
    }
  }

  /**
   *
   *
   * @memberof Generator
   */
  checkString() {
    switch (true) {
      case this.str.indexOf(",") !== -1 && this.str.indexOf("\n") === -1:
        this.checkVariable = 0;
        break;
      case this.str.indexOf("\n") !== -1 && this.str.indexOf(",") !== -1:
        this.checkVariable = 1;
        break;
      case this.str.indexOf(",") === -1:
        this.checkVariable = -1;
        break;
    }
  }
  /**
   *
   *
   * @memberof Generator
   */
  convertString() {
    this.checkString();
    console.log(`This is the string provided ${this.str}`);
    switch (this.checkVariable) {
      case 0:
        this.finalArray = this.str.split(/,|[0-9]{5}/g).map((stringElement) => {
          this.findNegative(stringElement);
          return parseInt(stringElement, 10);
        });
      case 1:
        this.finalArray = this.str
          .split(/(?:,|\n|[0-9]{5})+/g)
          .map((stringElement) => {
            this.findNegative(stringElement);

            return parseInt(stringElement, 10);
          });
      case -1:
        this.finalArray = this.str
          .split(/(?:[^0-9\-])/g)
          .map((stringElement) => {
            this.findNegative(stringElement);

            return parseInt(stringElement, 10);
          })
          .filter((element) => {
            return !isNaN(element);
          });
    }
  }
  get finalNumArray() {
    return this.finalArray;
  }
}
