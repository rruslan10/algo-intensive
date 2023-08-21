const tree = {
	value: 10,
	left: {
		value: 5,
		left: {
			value: 2,
			left: {
				value: 1,
			},
			right: {
				value: 3,
			},
		},
		right: {
			value: 7,
			left: {
				value: 6,
			},
			right: {
				value: 9,
			},
		},
	},
	right: {
		value: 15,
		left: {
			value: 12,
			left: {
				value: 11,
			},
			right: {
				value: 13,
			},
		},
		right: {
			value: 18,
			left: {
				value: 16,
			},
			right: {
				value: 20,
			},
		},
	},
}

// Рекурсия
function solutionRecursion(node) {
	if (node) {
		console.log(node.value)

		if (node.left) solutionRecursion(node.left)
		if (node.right) solutionRecursion(node.right)
	}
}

// Стек
function solutionStack(node) {
	const stack = [node]

	while (stack.length) {
		const curNode = stack.pop()

		console.log(curNode.value)

		if (curNode.right) stack.push(curNode.right)
		if (curNode.left) stack.push(curNode.left)
	}
}

solutionRecursion(tree)
console.log()
solutionStack(tree)
