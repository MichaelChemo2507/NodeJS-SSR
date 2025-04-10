const { addSlashes, stripSlashes } = require('slashes');
class SqlInjection {
  static addSlashes(str) {
    return addSlashes(str);
  }
  static stripSlashes(str) {
    return stripSlashes(str);
  }
}

module.exports = SqlInjection;
