const arr = [3, 9, 44, 3, 342, 2, 11, 3, 1, 14]

function solution(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i
		let tmp = arr[i]

		while (j > 0 && arr[j - 1] > tmp) {
			arr[j] = arr[j - 1]
			j--
		}

		arr[j] = tmp
	}

	return arr
}

console.log(solution(arr))
