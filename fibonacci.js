function formula01 (memo) {
	let fib = function (n) {
  	if (n === 1) {
    	return memo
    } else {
    	memo = fib(n-1) //each iteration returns the memo array
 	memo.push(memo[memo.length-1] + memo[memo.length-2])//push next value into array
 	return memo
    }
  }
  return fib
}

let findFib = formula01([0,1])
console.log(findFib(8))

//this only returns the value not the array
function formula02 () {
	let memo = [0,1]
	let fib = function (n) {
    if (n === 1) {
    	return memo
    }else{
    	memo = fib(n-1)
 	memo.push(memo[memo.length - 1] + memo[memo.length - 2])
 	console.log(n)
  	console.log(memo)
    	return memo
    }
  }
  return fib
}

let findFib = formula02()
console.log(findFib(8))
