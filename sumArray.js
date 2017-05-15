function formula () {
  let accumulator  = 0
    let adder = function (arr) {
      let n = arr.length - 1
      if (n === 0) {
        accumulator += arr[n]
        return accumulator
      } else {
        accumulator += arr[n]
        arr.pop()
        adder(arr)
        return accumulator
      }
    }
  return adder
}

let addStuff = formula()
console.log('result: '+addStuff([1, 2, 3, 4, 5, 6]))
