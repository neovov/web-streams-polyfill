import QueuingStrategy from './QueuingStrategy';

export default class CountQueuingStrategy extends QueuingStrategy {
	size() {
		return 1;
	}
}