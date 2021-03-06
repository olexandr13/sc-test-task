import { t } from 'testcafe';

class Helpers {
  /**
   * 
   * @param length String length; set 0 for random length
   * @param [includeNumbers] 
   * @param [isLengthRandom] 
   */
  generateRandomString(length: number, includeNumbers: boolean = false) {
    if (!length) {
      length = Math.round(10 * Math.random() + 2)
    };
    let result = '';
    let characters: string;
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  generateUserData() {
    return {
      firstName: this.generateRandomString(0),
      lastName: this.generateRandomString(0),
      startDate: `${this.generateRandomInt(2010, 2018)}-${this.generateRandomTwoDigitsString(1, 12)}-${this.generateRandomTwoDigitsString(1, 28)}`,
      email: this.generateRandomEmail()
    }
  }

  generateRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomTwoDigitsString(min, max) {
    const number = String(this.generateRandomInt(min, max));
    return (number.length === 1 ? `0${number}` : number);
  }

  generateRandomEmail() {
    return `${this.generateRandomString(0)}@${this.generateRandomString(0)}.${this.generateRandomString(3)}`;
  }

}

export default new Helpers();