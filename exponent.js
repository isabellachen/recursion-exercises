function formula () {
	let accumulator = 1
  //let memo = []
  let findExp = function (n, e) {
  	if (e === 1) {
    	accumulator = accumulator * n
      return accumulator
    } else {
    	accumulator = accumulator * n
      //memo.push(accumulator)
      findExp(n, e-1)
    	return accumulator
    }
  }
	return findExp
}

let findExponent = formula()
console.log(findExponent(5,3))

function findExp (n, e) {
  if (e === 1) {
    return n
  } else {
    return n * findExp(n, e-1)
  }
}

console.log(findExp(5,3))
