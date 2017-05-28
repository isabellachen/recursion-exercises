let initArr = [5,5,6,7,11,14,16,23,36,80]

function binarySearch(initialArray) { //pass initArr into outer scope so recur can access index of target
	let recur = function(arr, n) {
  	let target = arr[Math.floor((arr.length/2)-1)];//check midpoint of array
    if (target === n) {
    	return 'target index: ' + initialArray.indexOf(target)
    } else if (arr.length === 1) {
    	return 'target not found'
    } else {
    	if (n < target) {
      	let left = arr.slice(0, Math.floor(arr.length/2))
        return recur(left, n)//perform recur function to check midpoint of left half
      } else {
      	let right = arr.slice(Math.floor(arr.length/2), arr.length)
        return recur(right, n)//perform recur function to check midpoint of right half
      }
    }
  }
  return recur
}

let findIndex = binarySearch(initArr)
let result = findIndex(initArr, 70)
console.log(result)
