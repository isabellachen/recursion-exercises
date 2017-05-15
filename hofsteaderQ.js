//recursive function to output hofsteaderQ sequence
function formula () {
  let memo = [null, 1, 1]
  let Q = function(n){
    let result = memo[n]
    if (typeof result !== 'number') {
      result = Q(n - Q(n-1)) + Q(n - Q(n-2))
      memo[n] = result
    }
    return result
  }
  return Q
}

let hofsteaderQ = formula()
console.log(hofsteaderQ(1000))
