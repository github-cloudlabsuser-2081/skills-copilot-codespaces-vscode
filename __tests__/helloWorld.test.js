const { helloWorld } = require('../path/to/your/module');

test('returns "Hello, World!"', () => {
	expect(helloWorld()).toBe('Hello, World!');
});