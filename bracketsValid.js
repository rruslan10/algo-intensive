const str = '((({{[xxxxv(({[][[333[]]sss]}))]}}1)))'

function solution(str) {
	const stack = []

	const brackets = {
		')': '(',
		'}': '{',
		']': '[',
	}

	for (let cur of str) {
		if (!(cur in brackets) && !Object.values(brackets).includes(cur)) continue

		if (cur in brackets) {
			if (brackets[cur] !== stack.pop()) return false
		} else stack.push(cur)
	}

	return !stack.length
}

console.log(solution(str))
