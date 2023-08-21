const arr = [3, 9, 44, 3, 342, 2, 11, 3, 1, 14]

function solution(arr) {
	let res = arr

	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (res[j] < res[min]) {
				min = j
			}
		}

		if (min !== i) {
			let tmp = res[i]
			res[i] = res[min]
			res[min] = tmp
		}
	}

	return res
}

console.log(solution(arr))
