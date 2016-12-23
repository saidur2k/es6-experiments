import { fibonacci } from './01_proper_tail_call_fibonacci'
import { expect } from 'chai'

describe('proper tail calls in es6', () => {
  it('fibonacci series - 3', () => {
    expect(fibonacci(3)).to.be.equal(2)
  })

  it('fibonacci series - 10', () => {
    expect(fibonacci(10)).to.be.equal(55)
  })
})
