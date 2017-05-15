function formula (smaller, larger) {
	let results = []
  let ranger = function (smaller, larger) {
  	if (larger - smaller === 2) {
    	return [smaller + 1]
    } else {
    	results = ranger(smaller, larger-1)
      results.push(larger-1)
      return results
    }
  }
  return ranger
}

let findRange = formula()
let result = findRange(2,9)

console.log('result: '+result)
