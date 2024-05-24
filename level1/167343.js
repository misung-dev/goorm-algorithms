// Run by Node.js
const readline = require("readline");

(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	let scores = [];
	let total = 0;
	let curScore = 0;

	for await (const line of rl) {
		scores = line.trim().split("");
	}
	rl.close();

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] === "O") {
			curScore += 1;
			total += curScore;
		} else {
			curScore = 0;
		}
	}

	console.log(total);
	process.exit();
})();
