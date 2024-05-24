const readline = require("readline");
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
	input.push(line);
});

rl.on("close", () => {
	let a = input[0].split(" ").map(Number);
	let nList = input[1].split(" ").map(Number);

	let arr = [];
	let answer;

	for (let i = 0; i < nList.length; i++) {
		let num = nList[i];
		let binary = num.toString(2);

		let count = binary.match(/1/g).filter((item) => item !== "").length;

		arr.push({ idx: i, key: num, val: count });
	}

	const result = arr.sort((a, b) => {
		if (b.val === a.val) {
			return b.key - a.key;
		}
		return b.val - a.val;
	});

	answer = result[a[1] - 1].key;

	console.log(answer);
});
