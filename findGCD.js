function formula (a,b) {
	let larger, smaller
  let remainder = []

  larger = a > b ? a : b
  smaller = a > b ? b : a

  let gcd = function(larger, smaller){
      if (larger%smaller === 0) {
      	if (typeof remainder[0] === 'undefined'){
        	return larger / (larger/smaller)
        }
      return remainder[0]
    } else {
      remainder.unshift(larger % smaller)
      larger = smaller
      smaller = remainder[0]
      console.log(remainder)
      return gcd(larger, smaller)
    }
  return remainder
  }
  return gcd
}

let findGCD = formula()
console.log(findGCD(12345,67890))
