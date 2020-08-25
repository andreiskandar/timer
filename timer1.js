let input = process.argv.slice(2);

const timer = () => {
	input = input.filter(sec => sec > 0 && typeof parseInt(sec) === 'number');

	for (let second of input) {
		const seconds = second * 1000;
		setTimeout(() => {
			console.log(`${second} seconds`);
			process.stdout.write('\x07');
		}, seconds);
	}
};
timer();
