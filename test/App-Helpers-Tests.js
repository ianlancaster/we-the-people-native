/* eslint-disable */
import { expect, assert } from 'chai'
import getRidOfTargetBill from '../App/Helpers/getRidOfTargetBill'
import prettifyDate from '../App/Helpers/DatePrettifier'
import { summaryIsTooLong, shortenSummary } from '../App/Helpers/ShortenSummary'

import { fakeBills, stringifiedFakeBills, fakeLongSummary, fakeShortSummary } from './helpers/fake-bills'


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

describe('summaryIsTooLong', function () {
  it('should return true of the summary is too long and false otherwise', function () {

    assert.strictEqual(summaryIsTooLong(fakeLongSummary), true, 'The function correctly says that the summary is too long.');

    assert.strictEqual(summaryIsTooLong(fakeShortSummary), false, 'The function correctly says that the summary is not too long.');
  });

});

describe('shortenSummary', function () {
  const resultLong = shortenSummary(fakeLongSummary)
  const lenLong = resultLong.split(' ').length
  const resultShort = shortenSummary(fakeShortSummary)
  const lenShort = resultShort.split(' ').length

  it('should be a function', function () {
    assert.isFunction(shortenSummary);
  });

  it('should output a string', function () {

    assert.isString(shortenSummary(fakeLongSummary));
  });

  it('should cut the length of its input to 100 words if the input is longer than this', function () {

    assert.strictEqual(lenLong, 100, 'The function cut the output to 100 words.')
  });

  it('should return the same summary if the input summary is less than 100 words', function () {

    assert.strictEqual(lenShort, 10, 'The length of the output summary is the same as the input.');
  });

});
