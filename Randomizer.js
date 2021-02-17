const Randomizer = (() => {
  const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

  /**
   * @param {Number} max value of the random number
   * @return {Number} random number between 0 and max
   */
  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  /**
   * @returns a random character
   */
  getRandomCharacter = () => {
    const index = getRandomNumber(52);
    return letters[index];
  };

  /**
   * @param {Number} length of random string, default length is 25
   * @return {String} random string of requested length
   */
  getString = (length = 25) => {
    return Array(length)
      .fill(length)
      .reduce((chars) => {
        chars.push(getRandomCharacter());
        return chars;
      }, [])
      .join('');
  };

  /**
   * @param {Number} length of random number, default length is 25
   * @return {Number} random number of requested length
   */
  getNumber = (length = 5) => {
    const max = +Array(length).fill(9).join('');
    return getRandomNumber(max);
  };

  return {
    getString,
    getNumber,
  };
})();

module.exports = Randomizer;
