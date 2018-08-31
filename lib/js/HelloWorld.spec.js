'use strict';

var _HelloWorld = require('./HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HelloWorld', function () {
  var helloWorld = void 0;

  describe('#show', function () {
    beforeEach(function () {
      helloWorld = new _HelloWorld2.default();
    });

    it('should show a hello world message', function () {
      var message = helloWorld.show('World');
      expect(message).toBe('Hello World');
    });
  });
});