/*
  Spread Operator
 */
function countArguments (...args) {
  return args.length
}

/* Old Way without spread operator */
function sumOnlyNumbersOldWay () {
  var args = arguments
  var numbers = filterNumbers()
  return numbers.reduce((sum, element) => sum + element)
  function filterNumbers () {
    return Array.prototype.filter.call(args,
        element => typeof element === 'number'
  )
  }
}

/* new way with spread operator and arrow functions */
function sumOnlyNumbers (...args) {
  let isNumber = (element) => typeof element === 'number'
  let filterNumbers = () => args.filter(isNumber)
  let numbers = filterNumbers()
  let cumulativeSum = (sum, element) => sum + element
  const initialValue = isNumber(numbers[0]) ? numbers[0] : 0
  return numbers.slice(1).reduce(cumulativeSum, initialValue)
}

/* selective rest parameter */
var selectiveFilter = (type, ...items) => items.filter(item => typeof item === type)

export { countArguments, sumOnlyNumbersOldWay, sumOnlyNumbers, selectiveFilter }
