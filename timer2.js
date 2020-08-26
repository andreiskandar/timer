const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.question('press "b" to beep or number between 1-9 to delay the beep: ', reply => {
	if (reply === 'b') {
		// verify with mentor if b is pressed multiple times, will it beep multiple times?
		process.stdout.write('\x07');
	} else if (reply >= 1 && reply <= 9) {
		delay = reply * 1000;
		setTimeout(() => {
			console.log(`beep in ${reply} seconds`);
			process.stdout.write('\x07');
		}, delay);
	}
});
