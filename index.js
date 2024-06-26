const moment = require('moment-timezone');

module.exports = (nunjucks) => {
  /**
   * Nunjucks Filter
   *
   * dateFormat
   *
   * Return a formatted unix timestamp
   *
   * @param (mixed) timestamp - UNIX timestamp
   * @return (string)
   */
  nunjucks.addFilter('dateFormat', (value = '', format = 'MMMM DD, YYYY', timezone = 'America/New_York') => {
    const result = value !== '' ? moment(value) : moment();
    if (lang) {
      result.lang(lang)
    }
    if (timezone) {
      result.tz(timezone)
    }
    return result
      .format(format)
      .toString();
  });
};
