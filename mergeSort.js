const arr = [34, 7, 23, 32, 5, 62, 30]

function solution(arr) {
	if (arr.length < 2) return arr

	const middle = Math.floor(arr.length / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)

	return merge(solution(left), solution(right))
}

function merge(left, right) {
	const res = []

	while (left.length && right.length) {
		if (left[0] < right[0]) res.push(left.shift())
		else res.push(right.shift())
	}

	return [...res, ...left, ...right]
}

console.log(solution(arr))
