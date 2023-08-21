const arr = [3, 9, 44, 3, 342, 2, 11, 3, 1, 14]

function solution(arr) {
	let res = arr
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (res[j] > res[j + 1]) {
				let tmp = res[j]
				res[j] = res[j + 1]
				res[j + 1] = tmp
			}
		}
	}

	return res
}

console.log(solution(arr))
