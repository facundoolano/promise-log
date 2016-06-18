'use strict';

function addLog (promise) {
  promise = promise || Promise;
  promise.prototype.log = function (prefix) {
    prefix = prefix || '';
    return this
    .then(function (value) {
      console.log(prefix, value);
      return value;
    })
    .catch(function (err) {
      console.error(prefix, err.stack || err);
      return promise.reject(err);
    });
  }
}

module.exports = addLog;
