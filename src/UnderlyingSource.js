import internals from './helpers/internals';

function retrieve(property) {
	const value = internals(this)[property];

	if (typeof value === 'undefined') {
		return function() {};
	}

	if (typeof value !== 'function') {
		throw new TypeError(`Underlying source's \`${property}\` property must be a function`);
	}

	return value;
}

export default class UnderlyingSource {
	constructor({start, pull, cancel} = {}) {
		const internal = internals(this);
		internal.cancel = cancel;
		internal.pull   = pull;
		internal.start  = start;
	}

	get cancel() {
		return retrieve.call(this, 'cancel');
	}

	get pull() {
		return retrieve.call(this, 'pull');
	}

	get start() {
		return retrieve.call(this, 'start');
	}
}