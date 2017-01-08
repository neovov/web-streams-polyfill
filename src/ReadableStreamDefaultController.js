import QueuingStrategy from './QueuingStrategy';
import ReadableStream from './ReadableStream';
import UnderlyingSource from './UnderlyingSource';

import internals from './helpers/internals';

class ReadableStreamDefaultController {
	constructor(stream, source, size, highWaterMark) {
		const controller = this;
		const internal   = internals(this);

		internal.closeRequested = false;
		internal.pullAgain      = false;
		internal.pulling        = false;
		internal.queue          = [];
		internal.source         = new UnderlyingSource(source);
		internal.started        = false;
		internal.stream         = stream;

		QueuingStrategy.validate('highWaterMark', highWaterMark);
		QueuingStrategy.validate('size', size);
		internal.strategy = {highWaterMark, size};

		internal.cancel = reason => {
			internal.queue = [];
			return Promise.resolve()
				.then(internal.source.cancel(reason))
				.catch(() => {}); // FIXME
		};

		internal.close = () => {
			// TODO
		};

		internal.enqueue = () => {
			// TODO
		};

		internal.pull = () => {
			if (internal.queue.length) {
				// TODO
			}
		};

		internal.pullIfNeeded = () => {
			if (!internal.shouldPull()) { return; }

			if (internal.pulling) {
				internal.pullAgain = true;
				return;
			}

			internal.pulling = true;

			Promise
				.resolve(internal.source.pull(controller))
				.then(() => {
					internal.pulling = false;
					if (internal.pullAgain) {
						internal.pullAgain = false;
						internal.pullIfNeeded();
					}
				})
				.catch(error => internal.raiseIfNeeded(error));
		};

		internal.raiseIfNeeded = error => {
			if (internals(stream).state === ReadableStream.STATE_READABLE) {
				internal.raise(error);
			}
		};

		internal.raise = error => {
			internal.queue = [];
			internals(stream).raise(error);
		};

		internal.shouldPull = () => {
			const state = internals(stream).state;

			if (
				state === ReadableStream.STATE_CLOSED  ||
				state === ReadableStream.STATE_ERRORED ||
				internal.closeRequested ||
				!internal.started
			) { return false; }

			// FIXME
			const reader = internals(stream).reader;
			if (reader && internals(reader).readRequests.length) {
				return true;
			}

			// FIXME
			if (controller.desiredSize) { return true; }

			return false;
		};

		Promise
			.resolve(internal.source.start(controller))
			.then(() => {
				internal.started = true;
				internal.pullIfNeeded();
			})
			.catch(error => internal.errorIfNeeded(error));
	}

	close() {
		const internal = internals(this);
		const state = internals(internal.stream).state;

		if (internal.closeRequested) {
			throw new TypeError('The stream has already been closed; do not close it again!');
		}

		if (state !== ReadableStream.STATE_READABLE) {
			throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
		}

		internal.close();
	}

	get desiredSize() {
		const internal = internals(this);
		const highWaterMark = internal.strategy.highWaterMark;
		const queue = internal.queue;
		queue._totalSize = queue._totalSize || 0;
		return highWaterMark - queue._totalSize;
	}

	enqueue(chunk) {
		const internal = internals(this);
		const state = internals(internal.stream).state;

		if (internal.closeRequested) {
			throw new TypeError('stream is closed or draining');
		}

		if (state !== ReadableStream.STATE_READABLE) {
			throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
		}

		return internal.enqueue(chunk);
	}

	error(error) {
		const internal = internals(this);
		if (internals(internal.stream).state === ReadableStream.STATE_READABLE) {
			throw new TypeError('The stream is readable and so cannot be errored');
		}

		internal.raise(error);
	}
} // end of class ReadableStreamDefaultController

export default ReadableStreamDefaultController;
