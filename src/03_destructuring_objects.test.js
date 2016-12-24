import { expect } from 'chai'
import {
  getAddress,
  displayPersonNewWay,
  displayPersonOldway,
  displayPersonImprovedWay,
  displayPersonMoreImprovedWay,
  doSomethingToDestructureArrays
} from './03_destructuring_objects'

describe('destructuring objects', () => {
  it('can destructure objects returned by a function', () => {
    let {street, suburb, country} = getAddress('bridge', 'sydney', 'australia')
    expect(street).to.equal('bridge')
    expect(suburb).to.equal('sydney')
    expect(country).to.equal('australia')
  })

  it('can use alias names and destructure objects', () => {
    let {street: a, suburb: b, country: c} = getAddress('bridge', 'sydney', 'australia')
    expect(a).to.equal('bridge')
    expect(b).to.equal('sydney')
    expect(c).to.equal('australia')
  })

  it('pass objects and destruct the object - old way', () => {
    let testCase = {name: 'saidur', 'age': 100}
    expect(displayPersonOldway(testCase)).to.equal('Hi, saidur you are 100 years old')
  })

  it('pass objects and destruct the object - new way', () => {
    let testCase = {name: 'saidur', 'age': 100, gender: 'male'}
    expect(displayPersonNewWay(testCase)).to.equal('Hi, saidur you are 100 years old')
  })

  it('pass objects and destruct the object - improved way', () => {
    let testCase = {name: 'saidur', 'age': 100}
    expect(displayPersonImprovedWay(testCase)).to.equal('Hi, saidur you are 100 years old')
  })

  it('pass objects and destruct the object - improved way', () => {
    let testCase = {}
    expect(displayPersonMoreImprovedWay(testCase)).to.equal('Hi, John Doe you are 0 years old')
  })

  it('Patterns nested', () => {
    let person = {
      name: 'John',
      age: 100,
      address: {
        city: 'Sydney',
        state: 'NSW',
        zip: 2000
      }
    }

    let {name, age, address: {city, state, zip}} = person
    expect([name, age, city, state, zip]).to.be.deep.equal(['John', 100, 'Sydney', 'NSW', 2000])
  })

  it('Destructuring arrays', () => {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var [first, second,,,,,,,, tenth] = nums
    expect([first, second, tenth]).to.be.deep.equal([1, 2, 10])
  })

  it('can swap variables', () => {
    var a = 1
    var b = 3;
    [a, b] = [b, a]
    expect(b).to.be.equal(1)
    expect(a).to.be.equal(3)
  })

  it('can destructure arrays in method signature', () => {
    let nums = [1, 2, 3, 4]
    expect(doSomethingToDestructureArrays(nums)).to.be.deep.equal([1, 2, [3, 4]])
  })
})
