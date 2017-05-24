function isEven (n) {
  n < 0 ? n = Math.abs(n) : n ;
  if (n === 0) {
    return true
  } else if ( n === 1) {
    return false
  } else {
    n = n-2
    return isEven(n)
  }
}

console.log(isEven(764))
console.log(isEven(139))
