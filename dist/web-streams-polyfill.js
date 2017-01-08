/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _internals = __webpack_require__(1);

var _internals2 = _interopRequireDefault(_internals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueuingStrategy = function () {
	function QueuingStrategy() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    highWaterMark = _ref.highWaterMark;

		_classCallCheck(this, QueuingStrategy);

		this.highWaterMark = highWaterMark;
	}

	_createClass(QueuingStrategy, [{
		key: 'highWaterMark',
		get: function get() {
			return (0, _internals2.default)(this).highWaterMark;
		},
		set: function set(value) {
			QueuingStrategy.validate('highWaterMark', value);
			(0, _internals2.default)(this).highWaterMark = value;
		}
	}]);

	return QueuingStrategy;
}();

exports.default = QueuingStrategy;


QueuingStrategy.validate = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	if (!args.length) {
		throw new TypeError('You must provide either an object or a property/value to validate');
	}

	if (args.length === 1) {
		try {
			var _args$ = args[0],
			    highWaterMark = _args$.highWaterMark,
			    size = _args$.size;

			return QueuingStrategy.validate('highWaterMark', highWaterMark) && QueuingStrategy.validate('size', size);
		} catch (error) {
			return false;
		}
	}

	var property = args[0],
	    value = args[1];

	switch (property) {
		case 'highWaterMark':
			if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
				throw new RangeError('The highWaterMark property of a queuing strategy must be a non-negative and non-NaN number');
			}
			break;

		case 'size':
			if (value && typeof value !== 'function') {
				throw new TypeError('The size property of a queuing strategy must be a function');
			}
			break;
	}

	return true;
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = internals;
var map = new WeakMap();

function internals(object) {
	if (!map.has(object)) {
		map.set(object, {});
	}

	return map.get(object);
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ReadableByteStreamController = __webpack_require__(5);

var _ReadableByteStreamController2 = _interopRequireDefault(_ReadableByteStreamController);

var _ReadableStreamDefaultController = __webpack_require__(6);

var _ReadableStreamDefaultController2 = _interopRequireDefault(_ReadableStreamDefaultController);

var _internals = __webpack_require__(1);

var _internals2 = _interopRequireDefault(_internals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MODE_BYOB = 'byob';
var STATE_CLOSED = Symbol('closed');
var STATE_ERRORED = Symbol('errored');
var STATE_READABLE = Symbol('readable');
var TYPE_BYTES = 'bytes';

var ReadableStream = function () {
	function ReadableStream() {
		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    highWaterMark = _ref.highWaterMark,
		    size = _ref.size;

		_classCallCheck(this, ReadableStream);

		var internal = (0, _internals2.default)(this);
		var type = source.type;


		internal.disturbed = false;
		internal.state = STATE_READABLE;

		internal.raise = function (error) {
			internal.state = STATE_ERRORED;
			internal.error = error;

			if (!internal.reader) {
				return;
			}

			var property = IsReadableStreamDefaultReader(internal.reader) ? 'readRequests' : 'readIntoRequest';
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = internal.reader[property][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var request = _step.value;

					request.reject(error);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			internal.reader[property] = [];
			defaultReaderClosedPromiseReject(internal.reader, error);
			internal.reader.closedPromise.catch(function () {});
		};

		if (type === TYPE_BYTES || type === ReadableStream.TYPE_BYTES) {
			highWaterMark = typeof highWaterMark === 'undefined' ? 0 : highWaterMark;
			internal.controller = new _ReadableByteStreamController2.default(this, source, highWaterMark);
		} else if (typeof type === 'undefined') {
			highWaterMark = typeof highWaterMark === 'undefined' ? 1 : highWaterMark;
			internal.controller = new _ReadableStreamDefaultController2.default(this, source, size, highWaterMark);
		} else {
			throw new TypeError('Invalid type specified');
		}
	} // end of constructor()

	_createClass(ReadableStream, [{
		key: 'cancel',
		value: function cancel() {
			// TODO
		}
	}, {
		key: 'getReader',
		value: function getReader() {
			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    mode = _ref2.mode;

			// TODO: throw

			if (mode === MODE_BYOB || mode === ReadableStream.MODE_BYOB) {
				return;
			}
		}
	}, {
		key: 'pipeThrough',
		value: function pipeThrough(_ref3, options) {
			var writable = _ref3.writable,
			    readable = _ref3.readable;

			this.pipeTo(writable, options);
			return readable;
		}
	}, {
		key: 'locked',
		get: function get() {
			return Boolean((0, _internals2.default)(this).reader);
		}
	}]);

	return ReadableStream;
}(); // end of class ReadableStream

ReadableStream.MODE_BYOB = Symbol(MODE_BYOB);
ReadableStream.TYPE_BYTES = Symbol(TYPE_BYTES);

exports.default = ReadableStream;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueuingStrategy2 = __webpack_require__(0);

var _QueuingStrategy3 = _interopRequireDefault(_QueuingStrategy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ByteLengthQueuingStrategy = function (_QueuingStrategy) {
	_inherits(ByteLengthQueuingStrategy, _QueuingStrategy);

	function ByteLengthQueuingStrategy() {
		_classCallCheck(this, ByteLengthQueuingStrategy);

		return _possibleConstructorReturn(this, (ByteLengthQueuingStrategy.__proto__ || Object.getPrototypeOf(ByteLengthQueuingStrategy)).apply(this, arguments));
	}

	_createClass(ByteLengthQueuingStrategy, [{
		key: 'size',
		value: function size(chunk) {
			return chunk && 'byteLength' in chunk ? chunk.byteLength : 0;
		}
	}]);

	return ByteLengthQueuingStrategy;
}(_QueuingStrategy3.default);

exports.default = ByteLengthQueuingStrategy;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueuingStrategy2 = __webpack_require__(0);

var _QueuingStrategy3 = _interopRequireDefault(_QueuingStrategy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountQueuingStrategy = function (_QueuingStrategy) {
	_inherits(CountQueuingStrategy, _QueuingStrategy);

	function CountQueuingStrategy() {
		_classCallCheck(this, CountQueuingStrategy);

		return _possibleConstructorReturn(this, (CountQueuingStrategy.__proto__ || Object.getPrototypeOf(CountQueuingStrategy)).apply(this, arguments));
	}

	_createClass(CountQueuingStrategy, [{
		key: 'size',
		value: function size() {
			return 1;
		}
	}]);

	return CountQueuingStrategy;
}(_QueuingStrategy3.default);

exports.default = CountQueuingStrategy;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReadableByteStreamController = function ReadableByteStreamController() {
	_classCallCheck(this, ReadableByteStreamController);
}; // end of class ReadableByteStreamController

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueuingStrategy = __webpack_require__(0);

var _QueuingStrategy2 = _interopRequireDefault(_QueuingStrategy);

var _ReadableStream = __webpack_require__(2);

var _ReadableStream2 = _interopRequireDefault(_ReadableStream);

var _UnderlyingSource = __webpack_require__(8);

var _UnderlyingSource2 = _interopRequireDefault(_UnderlyingSource);

var _internals = __webpack_require__(1);

var _internals2 = _interopRequireDefault(_internals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReadableStreamDefaultController = function () {
	function ReadableStreamDefaultController(stream, source, size, highWaterMark) {
		_classCallCheck(this, ReadableStreamDefaultController);

		var controller = this;
		var internal = (0, _internals2.default)(this);

		internal.closeRequested = false;
		internal.pullAgain = false;
		internal.pulling = false;
		internal.queue = [];
		internal.source = new _UnderlyingSource2.default(source);
		internal.started = false;
		internal.stream = stream;

		_QueuingStrategy2.default.validate('highWaterMark', highWaterMark);
		_QueuingStrategy2.default.validate('size', size);
		internal.strategy = { highWaterMark: highWaterMark, size: size };

		internal.cancel = function (reason) {
			internal.queue = [];
			return Promise.resolve().then(internal.source.cancel(reason)).catch(function () {}); // FIXME
		};

		internal.close = function () {
			// TODO
		};

		internal.enqueue = function () {
			// TODO
		};

		internal.pull = function () {
			if (internal.queue.length) {
				// TODO
			}
		};

		internal.pullIfNeeded = function () {
			if (!internal.shouldPull()) {
				return;
			}

			if (internal.pulling) {
				internal.pullAgain = true;
				return;
			}

			internal.pulling = true;

			Promise.resolve(internal.source.pull(controller)).then(function () {
				internal.pulling = false;
				if (internal.pullAgain) {
					internal.pullAgain = false;
					internal.pullIfNeeded();
				}
			}).catch(function (error) {
				return internal.raiseIfNeeded(error);
			});
		};

		internal.raiseIfNeeded = function (error) {
			if ((0, _internals2.default)(stream).state === _ReadableStream2.default.STATE_READABLE) {
				internal.raise(error);
			}
		};

		internal.raise = function (error) {
			internal.queue = [];
			(0, _internals2.default)(stream).raise(error);
		};

		internal.shouldPull = function () {
			var state = (0, _internals2.default)(stream).state;

			if (state === _ReadableStream2.default.STATE_CLOSED || state === _ReadableStream2.default.STATE_ERRORED || internal.closeRequested || !internal.started) {
				return false;
			}

			// FIXME
			var reader = (0, _internals2.default)(stream).reader;
			if (reader && (0, _internals2.default)(reader).readRequests.length) {
				return true;
			}

			// FIXME
			if (controller.desiredSize) {
				return true;
			}

			return false;
		};

		Promise.resolve(internal.source.start(controller)).then(function () {
			internal.started = true;
			internal.pullIfNeeded();
		}).catch(function (error) {
			return internal.errorIfNeeded(error);
		});
	}

	_createClass(ReadableStreamDefaultController, [{
		key: 'close',
		value: function close() {
			var internal = (0, _internals2.default)(this);
			var state = (0, _internals2.default)(internal.stream).state;

			if (internal.closeRequested) {
				throw new TypeError('The stream has already been closed; do not close it again!');
			}

			if (state !== _ReadableStream2.default.STATE_READABLE) {
				throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
			}

			internal.close();
		}
	}, {
		key: 'enqueue',
		value: function enqueue(chunk) {
			var internal = (0, _internals2.default)(this);
			var state = (0, _internals2.default)(internal.stream).state;

			if (internal.closeRequested) {
				throw new TypeError('stream is closed or draining');
			}

			if (state !== _ReadableStream2.default.STATE_READABLE) {
				throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
			}

			return internal.enqueue(chunk);
		}
	}, {
		key: 'error',
		value: function error(_error) {
			var internal = (0, _internals2.default)(this);
			if ((0, _internals2.default)(internal.stream).state === _ReadableStream2.default.STATE_READABLE) {
				throw new TypeError('The stream is readable and so cannot be errored');
			}

			internal.raise(_error);
		}
	}, {
		key: 'desiredSize',
		get: function get() {
			var internal = (0, _internals2.default)(this);
			var highWaterMark = internal.strategy.highWaterMark;
			var queue = internal.queue;
			queue._totalSize = queue._totalSize || 0;
			return highWaterMark - queue._totalSize;
		}
	}]);

	return ReadableStreamDefaultController;
}(); // end of class ReadableStreamDefaultController

exports.default = ReadableStreamDefaultController;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _ByteLengthQueuingStrategy = __webpack_require__(3);

var _ByteLengthQueuingStrategy2 = _interopRequireDefault(_ByteLengthQueuingStrategy);

var _CountQueuingStrategy = __webpack_require__(4);

var _CountQueuingStrategy2 = _interopRequireDefault(_CountQueuingStrategy);

var _ReadableStream = __webpack_require__(2);

var _ReadableStream2 = _interopRequireDefault(_ReadableStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

self.ByteLengthQueuingStrategy = _ByteLengthQueuingStrategy2.default;
self.CountQueuingStrategy = _CountQueuingStrategy2.default;
self.ReadableStream = _ReadableStream2.default;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _internals = __webpack_require__(1);

var _internals2 = _interopRequireDefault(_internals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function retrieve(property) {
	var value = (0, _internals2.default)(this)[property];

	if (typeof value === 'undefined') {
		return function () {};
	}

	if (typeof value !== 'function') {
		throw new TypeError('Underlying source\'s `' + property + '` property must be a function');
	}

	return value;
}

var UnderlyingSource = function () {
	function UnderlyingSource() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    start = _ref.start,
		    pull = _ref.pull,
		    cancel = _ref.cancel;

		_classCallCheck(this, UnderlyingSource);

		var internal = (0, _internals2.default)(this);
		internal.cancel = cancel;
		internal.pull = pull;
		internal.start = start;
	}

	_createClass(UnderlyingSource, [{
		key: 'cancel',
		get: function get() {
			return retrieve.call(this, 'cancel');
		}
	}, {
		key: 'pull',
		get: function get() {
			return retrieve.call(this, 'pull');
		}
	}, {
		key: 'start',
		get: function get() {
			return retrieve.call(this, 'start');
		}
	}]);

	return UnderlyingSource;
}();

exports.default = UnderlyingSource;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmMwZjFiMzBmZTViZTRlNTMxY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXVpbmdTdHJhdGVneS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbnRlcm5hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWRhYmxlU3RyZWFtLmpzIiwid2VicGFjazovLy8uL3NyYy9CeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL3NyYy9Db3VudFF1ZXVpbmdTdHJhdGVneS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5kZXJseWluZ1NvdXJjZS5qcyJdLCJuYW1lcyI6WyJRdWV1aW5nU3RyYXRlZ3kiLCJoaWdoV2F0ZXJNYXJrIiwidmFsdWUiLCJ2YWxpZGF0ZSIsImFyZ3MiLCJsZW5ndGgiLCJUeXBlRXJyb3IiLCJzaXplIiwiZXJyb3IiLCJwcm9wZXJ0eSIsIk51bWJlciIsImlzTmFOIiwiUmFuZ2VFcnJvciIsImludGVybmFscyIsIm1hcCIsIldlYWtNYXAiLCJvYmplY3QiLCJoYXMiLCJzZXQiLCJnZXQiLCJNT0RFX0JZT0IiLCJTVEFURV9DTE9TRUQiLCJTeW1ib2wiLCJTVEFURV9FUlJPUkVEIiwiU1RBVEVfUkVBREFCTEUiLCJUWVBFX0JZVEVTIiwiUmVhZGFibGVTdHJlYW0iLCJzb3VyY2UiLCJpbnRlcm5hbCIsInR5cGUiLCJkaXN0dXJiZWQiLCJzdGF0ZSIsInJhaXNlIiwicmVhZGVyIiwiSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIiLCJyZXF1ZXN0IiwicmVqZWN0IiwiZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZWplY3QiLCJjbG9zZWRQcm9taXNlIiwiY2F0Y2giLCJjb250cm9sbGVyIiwibW9kZSIsIm9wdGlvbnMiLCJ3cml0YWJsZSIsInJlYWRhYmxlIiwicGlwZVRvIiwiQm9vbGVhbiIsIkJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kiLCJjaHVuayIsImJ5dGVMZW5ndGgiLCJDb3VudFF1ZXVpbmdTdHJhdGVneSIsIlJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIiLCJSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyIiwic3RyZWFtIiwiY2xvc2VSZXF1ZXN0ZWQiLCJwdWxsQWdhaW4iLCJwdWxsaW5nIiwicXVldWUiLCJzdGFydGVkIiwic3RyYXRlZ3kiLCJjYW5jZWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZWFzb24iLCJjbG9zZSIsImVucXVldWUiLCJwdWxsIiwicHVsbElmTmVlZGVkIiwic2hvdWxkUHVsbCIsInJhaXNlSWZOZWVkZWQiLCJyZWFkUmVxdWVzdHMiLCJkZXNpcmVkU2l6ZSIsInN0YXJ0IiwiZXJyb3JJZk5lZWRlZCIsIl90b3RhbFNpemUiLCJzZWxmIiwicmV0cmlldmUiLCJVbmRlcmx5aW5nU291cmNlIiwiY2FsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7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QztBQUNqQyxTQUFPLFlBQVcsQ0FBRSxDQUFwQjtBQUNBOztBQUVELEtBQUksT0FBT0EsS0FBUCxLQUFpQixVQUFyQixFQUFpQztBQUNoQyxRQUFNLElBQUlJLFNBQUosNEJBQXVDRyxRQUF2QyxtQ0FBTjtBQUNBOztBQUVELFFBQU9QLEtBQVA7QUFDQTs7SUFFb0I0RSxnQjtBQUNwQiw2QkFBd0M7QUFBQSxpRkFBSixFQUFJO0FBQUEsTUFBM0JMLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLE1BQXBCTixJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkUCxNQUFjLFFBQWRBLE1BQWM7O0FBQUE7O0FBQ3ZDLE1BQU1oQyxXQUFXLHlCQUFVLElBQVYsQ0FBakI7QUFDQUEsV0FBU2dDLE1BQVQsR0FBa0JBLE1BQWxCO0FBQ0FoQyxXQUFTdUMsSUFBVCxHQUFrQkEsSUFBbEI7QUFDQXZDLFdBQVM2QyxLQUFULEdBQWtCQSxLQUFsQjtBQUNBOzs7O3NCQUVZO0FBQ1osVUFBT0ksU0FBU0UsSUFBVCxDQUFjLElBQWQsRUFBb0IsUUFBcEIsQ0FBUDtBQUNBOzs7c0JBRVU7QUFDVixVQUFPRixTQUFTRSxJQUFULENBQWMsSUFBZCxFQUFvQixNQUFwQixDQUFQO0FBQ0E7OztzQkFFVztBQUNYLFVBQU9GLFNBQVNFLElBQVQsQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLENBQVA7QUFDQTs7Ozs7O2tCQWxCbUJELGdCIiwiZmlsZSI6IndlYi1zdHJlYW1zLXBvbHlmaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmMwZjFiMzBmZTViZTRlNTMxY2YiLCJpbXBvcnQgaW50ZXJuYWxzIGZyb20gJy4vaGVscGVycy9pbnRlcm5hbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1aW5nU3RyYXRlZ3kge1xuXHRjb25zdHJ1Y3Rvcih7IGhpZ2hXYXRlck1hcmsgfSA9IHt9KSB7XG5cdFx0dGhpcy5oaWdoV2F0ZXJNYXJrID0gaGlnaFdhdGVyTWFyaztcblx0fVxuXG5cdGdldCBoaWdoV2F0ZXJNYXJrKCkge1xuXHRcdHJldHVybiBpbnRlcm5hbHModGhpcykuaGlnaFdhdGVyTWFyaztcblx0fVxuXG5cdHNldCBoaWdoV2F0ZXJNYXJrKHZhbHVlKSB7XG5cdFx0UXVldWluZ1N0cmF0ZWd5LnZhbGlkYXRlKCdoaWdoV2F0ZXJNYXJrJywgdmFsdWUpO1xuXHRcdGludGVybmFscyh0aGlzKS5oaWdoV2F0ZXJNYXJrID0gdmFsdWU7XG5cdH1cbn1cblxuUXVldWluZ1N0cmF0ZWd5LnZhbGlkYXRlID0gKC4uLmFyZ3MpID0+IHtcblx0aWYgKCFhcmdzLmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgZWl0aGVyIGFuIG9iamVjdCBvciBhIHByb3BlcnR5L3ZhbHVlIHRvIHZhbGlkYXRlJyk7XG5cdH1cblxuXHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qge2hpZ2hXYXRlck1hcmssIHNpemV9ID0gYXJnc1swXTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFF1ZXVpbmdTdHJhdGVneS52YWxpZGF0ZSgnaGlnaFdhdGVyTWFyaycsIGhpZ2hXYXRlck1hcmspICYmXG5cdFx0XHRcdFF1ZXVpbmdTdHJhdGVneS52YWxpZGF0ZSgnc2l6ZScsIHNpemUpXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gPSBhcmdzO1xuXHRzd2l0Y2ggKHByb3BlcnR5KSB7XG5cdFx0Y2FzZSAnaGlnaFdhdGVyTWFyayc6XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCBOdW1iZXIuaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIGhpZ2hXYXRlck1hcmsgcHJvcGVydHkgb2YgYSBxdWV1aW5nIHN0cmF0ZWd5IG11c3QgYmUgYSBub24tbmVnYXRpdmUgYW5kIG5vbi1OYU4gbnVtYmVyJyk7XG5cdFx0XHR9XG5cdFx0YnJlYWs7XG5cblx0XHRjYXNlICdzaXplJzpcblx0XHRcdGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHNpemUgcHJvcGVydHkgb2YgYSBxdWV1aW5nIHN0cmF0ZWd5IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1F1ZXVpbmdTdHJhdGVneS5qcyIsImNvbnN0IG1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVybmFscyhvYmplY3QpIHtcblx0aWYgKCFtYXAuaGFzKG9iamVjdCkpIHtcblx0XHRtYXAuc2V0KG9iamVjdCwge30pO1xuXHR9XG5cblx0cmV0dXJuIG1hcC5nZXQob2JqZWN0KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9pbnRlcm5hbHMuanMiLCJpbXBvcnQgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciBmcm9tICcuL1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXInO1xuaW1wb3J0IFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIgZnJvbSAnLi9SZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyJztcblxuaW1wb3J0IGludGVybmFscyBmcm9tICcuL2hlbHBlcnMvaW50ZXJuYWxzJztcblxuY29uc3QgTU9ERV9CWU9CICAgICAgPSAnYnlvYic7XG5jb25zdCBTVEFURV9DTE9TRUQgICA9IFN5bWJvbCgnY2xvc2VkJyk7XG5jb25zdCBTVEFURV9FUlJPUkVEICA9IFN5bWJvbCgnZXJyb3JlZCcpO1xuY29uc3QgU1RBVEVfUkVBREFCTEUgPSBTeW1ib2woJ3JlYWRhYmxlJyk7XG5jb25zdCBUWVBFX0JZVEVTICAgICA9ICdieXRlcyc7XG5cbmNsYXNzIFJlYWRhYmxlU3RyZWFtIHtcblx0Y29uc3RydWN0b3Ioc291cmNlID0ge30sIHtoaWdoV2F0ZXJNYXJrLCBzaXplfSA9IHt9KSB7XG5cdFx0Y29uc3QgaW50ZXJuYWwgPSBpbnRlcm5hbHModGhpcyk7XG5cdFx0Y29uc3Qge3R5cGV9ID0gc291cmNlO1xuXG5cdFx0aW50ZXJuYWwuZGlzdHVyYmVkID0gZmFsc2U7XG5cdFx0aW50ZXJuYWwuc3RhdGUgICAgID0gU1RBVEVfUkVBREFCTEU7XG5cblx0XHRpbnRlcm5hbC5yYWlzZSA9IChlcnJvcikgPT4ge1xuXHRcdFx0aW50ZXJuYWwuc3RhdGUgPSBTVEFURV9FUlJPUkVEO1xuXHRcdFx0aW50ZXJuYWwuZXJyb3IgPSBlcnJvcjtcblxuXHRcdFx0aWYgKCFpbnRlcm5hbC5yZWFkZXIpIHsgcmV0dXJuOyB9XG5cblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoaW50ZXJuYWwucmVhZGVyKSA/ICdyZWFkUmVxdWVzdHMnIDogJ3JlYWRJbnRvUmVxdWVzdCc7XG5cdFx0XHRmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgaW50ZXJuYWwucmVhZGVyW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRyZXF1ZXN0LnJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHRpbnRlcm5hbC5yZWFkZXJbcHJvcGVydHldID0gW107XG5cdFx0XHRkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlamVjdChpbnRlcm5hbC5yZWFkZXIsIGVycm9yKTtcblx0XHRcdGludGVybmFsLnJlYWRlci5jbG9zZWRQcm9taXNlLmNhdGNoKCgpID0+IHt9KTtcblx0XHR9O1xuXG5cdFx0aWYgKFxuXHRcdFx0dHlwZSA9PT0gVFlQRV9CWVRFUyB8fFxuXHRcdFx0dHlwZSA9PT0gUmVhZGFibGVTdHJlYW0uVFlQRV9CWVRFU1xuXHRcdCkge1xuXHRcdFx0aGlnaFdhdGVyTWFyayA9IHR5cGVvZiBoaWdoV2F0ZXJNYXJrID09PSAndW5kZWZpbmVkJyA/IDAgOiBoaWdoV2F0ZXJNYXJrO1xuXHRcdFx0aW50ZXJuYWwuY29udHJvbGxlciA9IG5ldyBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHRoaXMsIHNvdXJjZSwgaGlnaFdhdGVyTWFyayk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGhpZ2hXYXRlck1hcmsgPSB0eXBlb2YgaGlnaFdhdGVyTWFyayA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogaGlnaFdhdGVyTWFyaztcblx0XHRcdGludGVybmFsLmNvbnRyb2xsZXIgPSBuZXcgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzLCBzb3VyY2UsIHNpemUsIGhpZ2hXYXRlck1hcmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHR5cGUgc3BlY2lmaWVkJyk7XG5cdFx0fVxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvcigpXG5cblx0Z2V0IGxvY2tlZCgpIHtcblx0XHRyZXR1cm4gQm9vbGVhbihpbnRlcm5hbHModGhpcykucmVhZGVyKTtcblx0fVxuXG5cdGNhbmNlbCgpIHtcblx0XHQvLyBUT0RPXG5cdH1cblxuXHRnZXRSZWFkZXIoeyBtb2RlIH0gPSB7fSkge1xuXHRcdC8vIFRPRE86IHRocm93XG5cblx0XHRpZiAobW9kZSA9PT0gTU9ERV9CWU9CIHx8IG1vZGUgPT09IFJlYWRhYmxlU3RyZWFtLk1PREVfQllPQikge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cblx0fVxuXG5cdHBpcGVUaHJvdWdoKHt3cml0YWJsZSwgcmVhZGFibGV9LCBvcHRpb25zKSB7XG5cdFx0dGhpcy5waXBlVG8od3JpdGFibGUsIG9wdGlvbnMpO1xuXHRcdHJldHVybiByZWFkYWJsZTtcblx0fVxufSAvLyBlbmQgb2YgY2xhc3MgUmVhZGFibGVTdHJlYW1cblxuUmVhZGFibGVTdHJlYW0uTU9ERV9CWU9CICA9IFN5bWJvbChNT0RFX0JZT0IpO1xuUmVhZGFibGVTdHJlYW0uVFlQRV9CWVRFUyA9IFN5bWJvbChUWVBFX0JZVEVTKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhZGFibGVTdHJlYW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhZGFibGVTdHJlYW0uanMiLCJpbXBvcnQgUXVldWluZ1N0cmF0ZWd5IGZyb20gJy4vUXVldWluZ1N0cmF0ZWd5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSBleHRlbmRzIFF1ZXVpbmdTdHJhdGVneSB7XG5cdHNpemUoY2h1bmspIHtcblx0XHRyZXR1cm4gKGNodW5rICYmICdieXRlTGVuZ3RoJyBpbiBjaHVuaykgPyBjaHVuay5ieXRlTGVuZ3RoIDogMDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9CeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5LmpzIiwiaW1wb3J0IFF1ZXVpbmdTdHJhdGVneSBmcm9tICcuL1F1ZXVpbmdTdHJhdGVneSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50UXVldWluZ1N0cmF0ZWd5IGV4dGVuZHMgUXVldWluZ1N0cmF0ZWd5IHtcblx0c2l6ZSgpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db3VudFF1ZXVpbmdTdHJhdGVneS5qcyIsImNsYXNzIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG59IC8vIGVuZCBvZiBjbGFzcyBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIuanMiLCJpbXBvcnQgUXVldWluZ1N0cmF0ZWd5IGZyb20gJy4vUXVldWluZ1N0cmF0ZWd5JztcbmltcG9ydCBSZWFkYWJsZVN0cmVhbSBmcm9tICcuL1JlYWRhYmxlU3RyZWFtJztcbmltcG9ydCBVbmRlcmx5aW5nU291cmNlIGZyb20gJy4vVW5kZXJseWluZ1NvdXJjZSc7XG5cbmltcG9ydCBpbnRlcm5hbHMgZnJvbSAnLi9oZWxwZXJzL2ludGVybmFscyc7XG5cbmNsYXNzIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvcihzdHJlYW0sIHNvdXJjZSwgc2l6ZSwgaGlnaFdhdGVyTWFyaykge1xuXHRcdGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGludGVybmFsICAgPSBpbnRlcm5hbHModGhpcyk7XG5cblx0XHRpbnRlcm5hbC5jbG9zZVJlcXVlc3RlZCA9IGZhbHNlO1xuXHRcdGludGVybmFsLnB1bGxBZ2FpbiAgICAgID0gZmFsc2U7XG5cdFx0aW50ZXJuYWwucHVsbGluZyAgICAgICAgPSBmYWxzZTtcblx0XHRpbnRlcm5hbC5xdWV1ZSAgICAgICAgICA9IFtdO1xuXHRcdGludGVybmFsLnNvdXJjZSAgICAgICAgID0gbmV3IFVuZGVybHlpbmdTb3VyY2Uoc291cmNlKTtcblx0XHRpbnRlcm5hbC5zdGFydGVkICAgICAgICA9IGZhbHNlO1xuXHRcdGludGVybmFsLnN0cmVhbSAgICAgICAgID0gc3RyZWFtO1xuXG5cdFx0UXVldWluZ1N0cmF0ZWd5LnZhbGlkYXRlKCdoaWdoV2F0ZXJNYXJrJywgaGlnaFdhdGVyTWFyayk7XG5cdFx0UXVldWluZ1N0cmF0ZWd5LnZhbGlkYXRlKCdzaXplJywgc2l6ZSk7XG5cdFx0aW50ZXJuYWwuc3RyYXRlZ3kgPSB7aGlnaFdhdGVyTWFyaywgc2l6ZX07XG5cblx0XHRpbnRlcm5hbC5jYW5jZWwgPSByZWFzb24gPT4ge1xuXHRcdFx0aW50ZXJuYWwucXVldWUgPSBbXTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0XHQudGhlbihpbnRlcm5hbC5zb3VyY2UuY2FuY2VsKHJlYXNvbikpXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7IC8vIEZJWE1FXG5cdFx0fTtcblxuXHRcdGludGVybmFsLmNsb3NlID0gKCkgPT4ge1xuXHRcdFx0Ly8gVE9ET1xuXHRcdH07XG5cblx0XHRpbnRlcm5hbC5lbnF1ZXVlID0gKCkgPT4ge1xuXHRcdFx0Ly8gVE9ET1xuXHRcdH07XG5cblx0XHRpbnRlcm5hbC5wdWxsID0gKCkgPT4ge1xuXHRcdFx0aWYgKGludGVybmFsLnF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0XHQvLyBUT0RPXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGludGVybmFsLnB1bGxJZk5lZWRlZCA9ICgpID0+IHtcblx0XHRcdGlmICghaW50ZXJuYWwuc2hvdWxkUHVsbCgpKSB7IHJldHVybjsgfVxuXG5cdFx0XHRpZiAoaW50ZXJuYWwucHVsbGluZykge1xuXHRcdFx0XHRpbnRlcm5hbC5wdWxsQWdhaW4gPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGludGVybmFsLnB1bGxpbmcgPSB0cnVlO1xuXG5cdFx0XHRQcm9taXNlXG5cdFx0XHRcdC5yZXNvbHZlKGludGVybmFsLnNvdXJjZS5wdWxsKGNvbnRyb2xsZXIpKVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0aW50ZXJuYWwucHVsbGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChpbnRlcm5hbC5wdWxsQWdhaW4pIHtcblx0XHRcdFx0XHRcdGludGVybmFsLnB1bGxBZ2FpbiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aW50ZXJuYWwucHVsbElmTmVlZGVkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4gaW50ZXJuYWwucmFpc2VJZk5lZWRlZChlcnJvcikpO1xuXHRcdH07XG5cblx0XHRpbnRlcm5hbC5yYWlzZUlmTmVlZGVkID0gZXJyb3IgPT4ge1xuXHRcdFx0aWYgKGludGVybmFscyhzdHJlYW0pLnN0YXRlID09PSBSZWFkYWJsZVN0cmVhbS5TVEFURV9SRUFEQUJMRSkge1xuXHRcdFx0XHRpbnRlcm5hbC5yYWlzZShlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGludGVybmFsLnJhaXNlID0gZXJyb3IgPT4ge1xuXHRcdFx0aW50ZXJuYWwucXVldWUgPSBbXTtcblx0XHRcdGludGVybmFscyhzdHJlYW0pLnJhaXNlKGVycm9yKTtcblx0XHR9O1xuXG5cdFx0aW50ZXJuYWwuc2hvdWxkUHVsbCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHN0YXRlID0gaW50ZXJuYWxzKHN0cmVhbSkuc3RhdGU7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c3RhdGUgPT09IFJlYWRhYmxlU3RyZWFtLlNUQVRFX0NMT1NFRCAgfHxcblx0XHRcdFx0c3RhdGUgPT09IFJlYWRhYmxlU3RyZWFtLlNUQVRFX0VSUk9SRUQgfHxcblx0XHRcdFx0aW50ZXJuYWwuY2xvc2VSZXF1ZXN0ZWQgfHxcblx0XHRcdFx0IWludGVybmFsLnN0YXJ0ZWRcblx0XHRcdCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdFx0Ly8gRklYTUVcblx0XHRcdGNvbnN0IHJlYWRlciA9IGludGVybmFscyhzdHJlYW0pLnJlYWRlcjtcblx0XHRcdGlmIChyZWFkZXIgJiYgaW50ZXJuYWxzKHJlYWRlcikucmVhZFJlcXVlc3RzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRklYTUVcblx0XHRcdGlmIChjb250cm9sbGVyLmRlc2lyZWRTaXplKSB7IHJldHVybiB0cnVlOyB9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdFx0UHJvbWlzZVxuXHRcdFx0LnJlc29sdmUoaW50ZXJuYWwuc291cmNlLnN0YXJ0KGNvbnRyb2xsZXIpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpbnRlcm5hbC5zdGFydGVkID0gdHJ1ZTtcblx0XHRcdFx0aW50ZXJuYWwucHVsbElmTmVlZGVkKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IGludGVybmFsLmVycm9ySWZOZWVkZWQoZXJyb3IpKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdGNvbnN0IGludGVybmFsID0gaW50ZXJuYWxzKHRoaXMpO1xuXHRcdGNvbnN0IHN0YXRlID0gaW50ZXJuYWxzKGludGVybmFsLnN0cmVhbSkuc3RhdGU7XG5cblx0XHRpZiAoaW50ZXJuYWwuY2xvc2VSZXF1ZXN0ZWQpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQ7IGRvIG5vdCBjbG9zZSBpdCBhZ2FpbiEnKTtcblx0XHR9XG5cblx0XHRpZiAoc3RhdGUgIT09IFJlYWRhYmxlU3RyZWFtLlNUQVRFX1JFQURBQkxFKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgc3RyZWFtIChpbiAke3N0YXRlfSBzdGF0ZSkgaXMgbm90IGluIHRoZSByZWFkYWJsZSBzdGF0ZSBhbmQgY2Fubm90IGJlIGNsb3NlZGApO1xuXHRcdH1cblxuXHRcdGludGVybmFsLmNsb3NlKCk7XG5cdH1cblxuXHRnZXQgZGVzaXJlZFNpemUoKSB7XG5cdFx0Y29uc3QgaW50ZXJuYWwgPSBpbnRlcm5hbHModGhpcyk7XG5cdFx0Y29uc3QgaGlnaFdhdGVyTWFyayA9IGludGVybmFsLnN0cmF0ZWd5LmhpZ2hXYXRlck1hcms7XG5cdFx0Y29uc3QgcXVldWUgPSBpbnRlcm5hbC5xdWV1ZTtcblx0XHRxdWV1ZS5fdG90YWxTaXplID0gcXVldWUuX3RvdGFsU2l6ZSB8fCAwO1xuXHRcdHJldHVybiBoaWdoV2F0ZXJNYXJrIC0gcXVldWUuX3RvdGFsU2l6ZTtcblx0fVxuXG5cdGVucXVldWUoY2h1bmspIHtcblx0XHRjb25zdCBpbnRlcm5hbCA9IGludGVybmFscyh0aGlzKTtcblx0XHRjb25zdCBzdGF0ZSA9IGludGVybmFscyhpbnRlcm5hbC5zdHJlYW0pLnN0YXRlO1xuXG5cdFx0aWYgKGludGVybmFsLmNsb3NlUmVxdWVzdGVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdzdHJlYW0gaXMgY2xvc2VkIG9yIGRyYWluaW5nJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHN0YXRlICE9PSBSZWFkYWJsZVN0cmVhbS5TVEFURV9SRUFEQUJMRSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHN0cmVhbSAoaW4gJHtzdGF0ZX0gc3RhdGUpIGlzIG5vdCBpbiB0aGUgcmVhZGFibGUgc3RhdGUgYW5kIGNhbm5vdCBiZSBlbnF1ZXVlZCB0b2ApO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnRlcm5hbC5lbnF1ZXVlKGNodW5rKTtcblx0fVxuXG5cdGVycm9yKGVycm9yKSB7XG5cdFx0Y29uc3QgaW50ZXJuYWwgPSBpbnRlcm5hbHModGhpcyk7XG5cdFx0aWYgKGludGVybmFscyhpbnRlcm5hbC5zdHJlYW0pLnN0YXRlID09PSBSZWFkYWJsZVN0cmVhbS5TVEFURV9SRUFEQUJMRSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHN0cmVhbSBpcyByZWFkYWJsZSBhbmQgc28gY2Fubm90IGJlIGVycm9yZWQnKTtcblx0XHR9XG5cblx0XHRpbnRlcm5hbC5yYWlzZShlcnJvcik7XG5cdH1cbn0gLy8gZW5kIG9mIGNsYXNzIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJcblxuZXhwb3J0IGRlZmF1bHQgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLmpzIiwiaW1wb3J0IEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kgZnJvbSAnLi9zcmMvQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSc7XG5pbXBvcnQgQ291bnRRdWV1aW5nU3RyYXRlZ3kgZnJvbSAnLi9zcmMvQ291bnRRdWV1aW5nU3RyYXRlZ3knO1xuaW1wb3J0IFJlYWRhYmxlU3RyZWFtIGZyb20gJy4vc3JjL1JlYWRhYmxlU3RyZWFtJztcblxuc2VsZi5CeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5ID0gQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneTtcbnNlbGYuQ291bnRRdWV1aW5nU3RyYXRlZ3kgPSBDb3VudFF1ZXVpbmdTdHJhdGVneTtcbnNlbGYuUmVhZGFibGVTdHJlYW0gPSBSZWFkYWJsZVN0cmVhbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiaW1wb3J0IGludGVybmFscyBmcm9tICcuL2hlbHBlcnMvaW50ZXJuYWxzJztcblxuZnVuY3Rpb24gcmV0cmlldmUocHJvcGVydHkpIHtcblx0Y29uc3QgdmFsdWUgPSBpbnRlcm5hbHModGhpcylbcHJvcGVydHldO1xuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge307XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVW5kZXJseWluZyBzb3VyY2UncyBcXGAke3Byb3BlcnR5fVxcYCBwcm9wZXJ0eSBtdXN0IGJlIGEgZnVuY3Rpb25gKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5kZXJseWluZ1NvdXJjZSB7XG5cdGNvbnN0cnVjdG9yKHtzdGFydCwgcHVsbCwgY2FuY2VsfSA9IHt9KSB7XG5cdFx0Y29uc3QgaW50ZXJuYWwgPSBpbnRlcm5hbHModGhpcyk7XG5cdFx0aW50ZXJuYWwuY2FuY2VsID0gY2FuY2VsO1xuXHRcdGludGVybmFsLnB1bGwgICA9IHB1bGw7XG5cdFx0aW50ZXJuYWwuc3RhcnQgID0gc3RhcnQ7XG5cdH1cblxuXHRnZXQgY2FuY2VsKCkge1xuXHRcdHJldHVybiByZXRyaWV2ZS5jYWxsKHRoaXMsICdjYW5jZWwnKTtcblx0fVxuXG5cdGdldCBwdWxsKCkge1xuXHRcdHJldHVybiByZXRyaWV2ZS5jYWxsKHRoaXMsICdwdWxsJyk7XG5cdH1cblxuXHRnZXQgc3RhcnQoKSB7XG5cdFx0cmV0dXJuIHJldHJpZXZlLmNhbGwodGhpcywgJ3N0YXJ0Jyk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVW5kZXJseWluZ1NvdXJjZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=