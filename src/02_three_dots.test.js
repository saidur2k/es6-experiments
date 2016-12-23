import * as threeDots from './02_three_dots'
import { expect } from 'chai'

describe('three dots', () => {
  describe('rest operator', () => {
    it('get the number of arguments', () => {
      expect(threeDots.countArguments('welcome', 'to', 'Earth')).to.be.equal(3)
    })
  })

  describe('spread operator', () => {
    let cold = ['autumn', 'winter']
    let warm = ['spring', 'summer']

    describe('construct an array', () => {
      it('benefit - spread parameters from array', () => {
        expect([...cold, ...warm]).to.be.deep.equal(['autumn', 'winter', 'spring', 'summer'])
      })

      it('without spread parameters from array', () => {
        expect([cold, warm]).to.be.deep.equal([['autumn', 'winter'], ['spring', 'summer']])
      })

      it('but could use .apply parameters from array - spread operator is cleaner and straightforward solution', () => {
        let countries = ['Moldova', 'Ukraine']
        let otherCountries = ['USA', 'Japan']
        countries.push.apply(countries, otherCountries)
        expect(countries).to.be.deep.equal(['Moldova', 'Ukraine', 'USA', 'Japan'])
      })
    })

    it('destruct an array', () => {
      let otherSeasons, autumn
      [autumn, ...otherSeasons] = cold
      expect(autumn).to.be.equal('autumn')
      expect(otherSeasons).to.be.deep.equal(['winter'])
    })

    it('pass to function multiple arguments from array', () => {
      let testCase = (cold.slice(0))
      testCase.push(...warm)
      expect(testCase).to.be.deep.equal(['autumn', 'winter', 'spring', 'summer'])
    })
  })

  describe('sumOnlyNumbers', () => {
    const tests = [
      {args: [7], expected: 7},
      {args: [2, 3], expected: 5},
      {args: [1, 2, 3, 4, 5], expected: 15},
      {args: [1, 'Hello', 3, 'World'], expected: 4},
      {args: [1, 'Hello', 3, 'World', 5, false], expected: 9},
      {args: [1, 'Hello', NaN, 'World', 5, false], expected: NaN},
      {args: [undefined, 'Hello', NaN, 'World', 5, false], expected: NaN},
      {args: [undefined, 'Hello', 'World', 5, false], expected: 5},
      {args: [], expected: 0},
      {args: [0], expected: 0},
      {args: [0, -1], expected: -1},
      {args: [undefined], expected: 0},
      {args: [NaN], expected: NaN}
    ]

    tests.forEach(test => {
      it(`${test.args.length} paramater(s): ${test.args} returns ${test.expected}`, () => {
        var result = threeDots.sumOnlyNumbers(...test.args)
        if (Number.isNaN(test.expected)) {
          expect(result).to.be.isNaN
        } else {
          expect(result).to.be.equal(test.expected)
        }
      })
    })
  })

  describe('selective rest parameter', () => {
    let tests = [
      {args: ['boolean', true, 0, false], expected: [true, false]},
      {args: ['number', false, 4, 'Welcome', 7], expected: [4, 7]}
    ]
    tests.forEach(function (test) {
      it(`correctly filters ${test.args} and returns ${test.expected}`, function () {
        let [param1, ...param2] = test.args
        let result = threeDots.selectiveFilter(param1, ...param2)
        expect(result).to.deep.equal(test.expected)
      })
    })
  })
})
