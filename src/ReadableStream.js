import ReadableByteStreamController from './ReadableByteStreamController';
import ReadableStreamDefaultController from './ReadableStreamDefaultController';

import internals from './helpers/internals';

const MODE_BYOB      = 'byob';
const STATE_CLOSED   = Symbol('closed');
const STATE_ERRORED  = Symbol('errored');
const STATE_READABLE = Symbol('readable');
const TYPE_BYTES     = 'bytes';

class ReadableStream {
	constructor(source = {}, {highWaterMark, size} = {}) {
		const internal = internals(this);
		const {type} = source;

		internal.disturbed = false;
		internal.state     = STATE_READABLE;

		internal.raise = (error) => {
			internal.state = STATE_ERRORED;
			internal.error = error;

			if (!internal.reader) { return; }

			const property = IsReadableStreamDefaultReader(internal.reader) ? 'readRequests' : 'readIntoRequest';
			for (const request of internal.reader[property]) {
				request.reject(error);
			}
			internal.reader[property] = [];
			defaultReaderClosedPromiseReject(internal.reader, error);
			internal.reader.closedPromise.catch(() => {});
		};

		if (
			type === TYPE_BYTES ||
			type === ReadableStream.TYPE_BYTES
		) {
			highWaterMark = typeof highWaterMark === 'undefined' ? 0 : highWaterMark;
			internal.controller = new ReadableByteStreamController(this, source, highWaterMark);
		} else if (typeof type === 'undefined') {
			highWaterMark = typeof highWaterMark === 'undefined' ? 1 : highWaterMark;
			internal.controller = new ReadableStreamDefaultController(this, source, size, highWaterMark);
		} else {
			throw new TypeError('Invalid type specified');
		}
	} // end of constructor()

	get locked() {
		return Boolean(internals(this).reader);
	}

	cancel() {
		// TODO
	}

	getReader({ mode } = {}) {
		// TODO: throw

		if (mode === MODE_BYOB || mode === ReadableStream.MODE_BYOB) {
			return
		}


	}

	pipeThrough({writable, readable}, options) {
		this.pipeTo(writable, options);
		return readable;
	}
} // end of class ReadableStream

ReadableStream.MODE_BYOB  = Symbol(MODE_BYOB);
ReadableStream.TYPE_BYTES = Symbol(TYPE_BYTES);

export default ReadableStream;
