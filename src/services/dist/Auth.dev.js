"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FREEMENTOR_API_AUTH = "https://peermantor.herokuapp.com";
var config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

var AuthApi =
/*#__PURE__*/
function () {
  function AuthApi() {
    _classCallCheck(this, AuthApi);
  }

  _createClass(AuthApi, [{
    key: "login",
    value: function login(data) {
      var res;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post(FREEMENTOR_API_AUTH + "/PeerMontor/v1/user/signin", data, config));

            case 3:
              res = _context.sent;
              return _context.abrupt("return", res);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "signup",
    value: function signup(data) {
      var res;
      return regeneratorRuntime.async(function signup$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post(FREEMENTOR_API_AUTH + "/PeerMontor/v1/user/signup", data, config));

            case 3:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }]);

  return AuthApi;
}();

var _default = new AuthApi();

exports["default"] = _default;
//# sourceMappingURL=Auth.dev.js.map
