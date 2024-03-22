export const mockIntersectionObserver = class {
	constructor() {
		this.entries = [];
	}

	observe(target) {
		this.entries.push({ isIntersecting: false, target });
	}

	disconnect() {
		this.entries = [];
	}
};
