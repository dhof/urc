const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers ', () => {
	const result = add(3, 4);
	expect(result).toBe(7);

	// if (result !== 7) {
	// 	throw new Error(`You added 3 and 4. The result was ${result}. Expected 7`)
	// }
});

test('Should generate greeting from name', () => {
	const result = generateGreeting('Devon');
	expect(result).toBe('Hello Devon!')
});

test('Should generate greeting for no name', () => {
	const result = generateGreeting();
	expect(result).toBe('Hello Anonymous!')
});