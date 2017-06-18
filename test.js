import React from 'react'
import { expect } from 'chai'
const Test = () => <div> Test component </div>

export default () => (
  <div>
    <Test />
    test
  </div>
)

expect(true).to.be.true
