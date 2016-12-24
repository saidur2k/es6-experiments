var getAddress = (street, suburb, country) => ({street: street, suburb: suburb, country: country})

var displayPersonOldway = (p) => {
  let name = p.name
  let age = p.age
  return `Hi, ${name} you are ${age} years old`
}

var displayPersonNewWay = (p) => {
  let {name, age} = p
  return `Hi, ${name} you are ${age} years old`
}

var displayPersonImprovedWay = ({name, age}) => (`Hi, ${name} you are ${age} years old`)

var displayPersonMoreImprovedWay = ({name = 'John Doe', age = 0}) => (`Hi, ${name} you are ${age} years old`)

var doSomethingToDestructureArrays = ([first, second, ...others]) => ([first, second, others])

export {
  getAddress,
  displayPersonNewWay,
  displayPersonOldway,
  displayPersonImprovedWay,
  displayPersonMoreImprovedWay,
  doSomethingToDestructureArrays
}
