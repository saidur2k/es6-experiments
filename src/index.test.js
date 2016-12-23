import {expect} from 'chai'
import mainExport from './index'

describe('my-boiler-plate-app', () => {
  it('works', () => {
    expect(mainExport.itworks()).to.be.true
  })
})
