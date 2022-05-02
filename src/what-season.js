const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
  let month = date.getMonth();
  let season;
    month >= 0 && month <= 1 || month === 11 ? season = 'winter' : 
    month >= 2 && month <= 4 ? season = 'spring' :
    month >= 5 && month <= 7 ? season = 'summer' :
    month >= 8 && month <= 10 ? season = 'autumn': false;
    return season;
} else if (date === 'undefined') {
   return 'Unable to determine the time of year!';
} else {
  return 'Invalid date!'
}
}

module.exports = {
  getSeason
};
