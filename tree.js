const tree = {
	value: 10,
	left: {
		value: 5,
		left: {
			value: 2,
		},
		right: {
			value: 7,
		},
	},
	right: {
		value: 15,
		left: {
			value: 12,
		},
		right: {
			value: 18,
		},
	},
}

function solution(val) {
	console.log(tree.value)

	if (tree.left) solution(tree.left.value)
	if (tree.right) solution(tree.right.value)
}

solution(tree.value)
