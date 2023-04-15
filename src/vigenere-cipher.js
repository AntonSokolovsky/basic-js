const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(crypt = true) {
    this.crypt = crypt;
  }
  encrypt(encryptedMessage , key) {
    let result = '';
    if(arguments.length < 2 || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedText = encryptedMessage.toUpperCase().split(' ').join('');
    let keyWord = key.toUpperCase();
    for(let i = 0; keyWord.length <= encryptedText.length; i++){
      keyWord = `${keyWord}${keyWord[i]}`
    }
    let startCharIndex;
    let currentCharIndex;
    let changedChar;
    let i = 0;
    let j = 0;
    while(i < encryptedMessage.length) {
      if(encryptedMessage[i] === ' ') {
        result = `${result} `;
        i++;
        continue;
      }else if(encryptedText.charCodeAt(j) > 90 || encryptedText.charCodeAt(j) < 65 && !(encryptedText[j] === ' ')) {
        result = `${result}${encryptedText[j]}`;
        i++;
        j++;
      }else{
      startCharIndex = keyWord.charCodeAt(j) - 65;
      currentCharIndex = encryptedText.charCodeAt(j) - 65;
        changedChar = startCharIndex + currentCharIndex <= 25 ?  String.fromCharCode(startCharIndex + currentCharIndex + 65) : String.fromCharCode(startCharIndex - (25 - currentCharIndex) + 64);
        result = `${result}${changedChar}`;
        i++;
        j++;
      }
    }
    if(this.crypt) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    let result = '';
    if(arguments.length < 2 || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedText = encryptedMessage.toUpperCase().split(' ').join('');
    let keyWord = key.toUpperCase();
    for(let i = 0; keyWord.length <= encryptedText.length; i++){
      keyWord = `${keyWord}${keyWord[i]}`
    }
    let startCharIndex;
    let currentCharIndex;
    let changedChar;
    let i = 0;
    let j = 0;
    while(i < encryptedMessage.length) {
      if(encryptedMessage[i] === ' ') {
        result = `${result} `;
        i++;
        continue;
      }else if(encryptedText.charCodeAt(j) > 90 || encryptedText.charCodeAt(j) < 65 && !(encryptedText[j] === ' ')) {
        result = `${result}${encryptedText[j]}`;
        i++;
        j++;
      }else{
      startCharIndex = keyWord.charCodeAt(j);
      currentCharIndex = encryptedText[j];
      let foundCharCode;
      let arrWithShift = [];
        let firstCharCode = startCharIndex;
        let charInArr;
        for(let k = 0; arrWithShift.length < 26; k++) {
          charInArr = firstCharCode + k;
          if(charInArr >= 91) {
            k = 0;
            firstCharCode = 64;
            continue;
          }

          arrWithShift.push(String.fromCharCode(charInArr));
        }
        foundCharCode = arrWithShift.indexOf(currentCharIndex);
        let foundChar = String.fromCharCode(foundCharCode + 65);
        result = `${result}${foundChar}`;
        i++;
        j++;
      }
  }
  if(this.crypt) {
    return result;
  } else {
    return result.split('').reverse().join('');
  }
}
}

module.exports = {
  VigenereCipheringMachine
};
