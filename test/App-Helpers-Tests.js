/* eslint-disable */
import { expect, assert } from 'chai'
import getRidOfTargetBill from '../App/Helpers/getRidOfTargetBill'
import prettifyDate from '../App/Helpers/DatePrettifier'
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

describe('prettifyDate', function () {
  it('should be a function', function () {
    assert.isFunction(prettifyDate)
    });

    it('should return a properly formatted date', function () {
      const date = '2017-02-01'
      assert.strictEqual(prettifyDate(date), 'Feb 1, 2017', 'The date output is formatted correctly.');
      assert.isString(prettifyDate(date), 'The result is a string.')
    })

});
