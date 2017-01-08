const map = new WeakMap();

export default function internals(object) {
	if (!map.has(object)) {
		map.set(object, {});
	}

	return map.get(object);
}