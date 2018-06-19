'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.usersUserIdGET = function usersUserIdGET (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Default.usersUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
