// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", function (line) {
	let words = line.split(/\s+/).filter((word) => word !== "");

	console.log(words.length);
	rl.close();
}).on("close", function () {
	process.exit();
});
