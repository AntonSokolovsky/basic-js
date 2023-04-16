const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let currentStr = str + '';
  let currentOptions = {...options};
  console.log(currentOptions)
let additionRepeatTimes = currentOptions.hasOwnProperty('additionRepeatTimes') ? currentOptions.additionRepeatTimes : 1;
  let addition = currentOptions.hasOwnProperty('addition') ? currentOptions.addition + '' : '';
let repeatTimes = currentOptions.hasOwnProperty('repeatTimes') ? currentOptions.repeatTimes : 1;
  let separator = currentOptions.hasOwnProperty('separator') ? currentOptions.separator : '+';
  let additionSeparator = currentOptions.hasOwnProperty('additionSeparator') ? currentOptions.additionSeparator : '|';
  
  let result = '';
  let addStr = '';
  
  for(let i = 1; i < additionRepeatTimes; i++) {
    addStr = addStr + additionSeparator + addition;
  }
  addStr = currentStr + addition + addStr;
  for(let j = 1; j < repeatTimes; j++) {
      result = result + separator + addStr;
  }
  result = addStr + result;
  return result;
}

module.exports = {
  repeater
};
