const str = '((({{[xxxxv(({[][[[]]sss]}))]}})))'

function solution(str) {
	const stack = []

	const brackets = {
		')': '(',
		'}': '{',
		']': '[',
	}

	for (let cur of str) {
		if (cur.toLowerCase() !== cur.toUpperCase()) continue

		if (cur in brackets) {
			if (brackets[cur] !== stack.pop()) return false
		} else stack.push(cur)
	}

	return !stack.length
}

console.log(solution(str))
