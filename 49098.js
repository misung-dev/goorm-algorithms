// Run by Node.js
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.question("input: ", (input) => {
	let num = Number(input);
	let total = 1;

	for (let i = 2; i <= num; i++) {
		total *= i;
	}

	let totalArr = total.toString().split("");
	let count = 0;

	for (let i = totalArr.length - 1; i >= 0; i--) {
		if (totalArr[i] === "0") {
			count++;
		} else {
			break;
		}
	}

	for (let i = 5; i <= num; i *= 5) {
		count += Math.floor(num / i);
	}

	console.log(count);
	rl.close();

	process.exit();
});

// 테스트 케이스
console.log(solution(30)); // 7
console.log(solution(77)); // 18
console.log(solution(100)); // 24
console.log(solution(4)); // 0
