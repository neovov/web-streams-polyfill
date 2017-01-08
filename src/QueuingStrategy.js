import internals from './helpers/internals';

export default class QueuingStrategy {
	constructor({ highWaterMark } = {}) {
		this.highWaterMark = highWaterMark;
	}

	get highWaterMark() {
		return internals(this).highWaterMark;
	}

	set highWaterMark(value) {
		QueuingStrategy.validate('highWaterMark', value);
		internals(this).highWaterMark = value;
	}
}

QueuingStrategy.validate = (...args) => {
	if (!args.length) {
		throw new TypeError('You must provide either an object or a property/value to validate');
	}

	if (args.length === 1) {
		try {
			const {highWaterMark, size} = args[0];
			return (
				QueuingStrategy.validate('highWaterMark', highWaterMark) &&
				QueuingStrategy.validate('size', size)
			);
		} catch (error) {
			return false;
		}
	}

	const [property, value] = args;
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
