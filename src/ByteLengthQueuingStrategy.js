import QueuingStrategy from './QueuingStrategy';

export default class ByteLengthQueuingStrategy extends QueuingStrategy {
	size(chunk) {
		return (chunk && 'byteLength' in chunk) ? chunk.byteLength : 0;
	}
}