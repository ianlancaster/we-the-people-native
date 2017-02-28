/* eslint-disable */
import { expect, assert } from 'chai'
import getRidOfTargetBill from '../App/Helpers/getRidOfTargetBill'
import { fakeBills, stringifiedFakeBills } from './helpers/fake-bills'

describe('getRidOfTargetBill', function () {
  it('should be a function', function () {
    assert.isFunction(getRidOfTargetBill)
  })

  it('should filter out the target bill by id', function () {
    const result = getRidOfTargetBill(stringifiedFakeBills, 1234)

    assert.strictEqual(result.length, 1), 'The result of the filter is the expected length.';
    assert.strictEqual(result[0].id, 3345, 'The correct bill remains in the filtered array.');
    assert.isArray(result, 'The result is an array.')
  });

})
