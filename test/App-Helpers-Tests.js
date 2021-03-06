/* eslint-disable */
import { expect, assert } from 'chai'
import getRidOfTargetBill from '../App/Helpers/getRidOfTargetBill'
import prettifyDate from '../App/Helpers/DatePrettifier'
import { summaryIsTooLong, shortenSummary } from '../App/Helpers/ShortenSummary'
import sortByClosestToBecomingLaw from '../App/Helpers/SortByClosestToBecomingLaw'
import sortByDateIntroduced from '../App/Helpers/SortByDateIntroduced'
import sliceTitle from '../App/Helpers/TitleSlicer'
import truncateTitle from '../App/Helpers/TruncateTitle'
import filterBillsByTopic from '../App/Helpers/FilterBillsByTopic'

import { fakeBills, stringifiedFakeBills, fakeLongSummary, fakeShortSummary, fakeLongTitle, fakeShortTitle } from './helpers/fake-bills'


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

describe('sortByClosestToBecomingLaw', function () {
  const result = sortByClosestToBecomingLaw(fakeBills)

  it('should be a function', function () {

    assert.isFunction(sortByClosestToBecomingLaw);
  });

  it('should return an array of the same length as the original', function () {

    assert.strictEqual(result.length, 2);
  });

  it('should sort the bills by putting earlier in the array those bills that are closest to becoming law', function () {

    assert.strictEqual(result[0].progress.index, 2);
    assert.strictEqual(result[0].official_title, 'A bill to make everyone happy.');
    assert.strictEqual(result[1].official_title, 'A bill to impeach Donald Trump.');
  });
});

describe('sortByDateIntroduced', function () {
  const result = sortByDateIntroduced(fakeBills)

  it('should be a function', function () {

    assert.isFunction(sortByDateIntroduced);
  });

  it('should return an array of the same length as the original', function () {

    assert.strictEqual(result.length, 2);
  });

  it('should put the most recent bills at the beginning of the result array', function () {

    assert.strictEqual(result[0].official_title, 'A bill to make everyone happy.');
    assert.strictEqual(result[0].id, 3345);
    assert.strictEqual(result[1].progress.index, 1);
  });

});

describe('sliceTitle', function () {
  const longResult = sliceTitle(fakeLongTitle)
  const shortResult = sliceTitle(fakeShortTitle)

  it('should return a string', function () {

    assert.isString(longResult);
  });

  it('should reduce a title\'s length to 50 words', function () {

    assert.strictEqual(longResult.split(' ').length, 50);
    assert.strictEqual(shortResult.split(' ').length, 8);
  });

});

describe('truncateTitle', function () {
  const longResult = truncateTitle(fakeLongTitle)
  const shortResult = truncateTitle(fakeShortTitle)

  it('should be a function', function () {

    assert.isFunction(truncateTitle);
  });

  it('should cut the length of a title to 10 characters', function () {

    assert.strictEqual(longResult.split(' ').length, 10);
  });

  it('should return the same title if its length is less than 10', function () {

    assert.strictEqual(shortResult.split(' ').length, 8);
  });

});

describe('filterBillsByTopic', function () {

  it('should be a function', function () {

    assert.isFunction(filterBillsByTopic);
  });

  it('should filter bills according to the topics entered in', function () {
    const topics = ['impeach']
    const result = filterBillsByTopic(fakeBills, topics)
    const topics2 = ['bill']
    const result2 = filterBillsByTopic(fakeBills, topics2)
    const topics3 = ['happy']
    const result3 = filterBillsByTopic(fakeBills, topics3)

    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].official_title, 'A bill to impeach Donald Trump.');
    assert.strictEqual(result[0].chamber, 'senate');

    assert.strictEqual(result2.length, 2)

    assert.strictEqual(result3.length, 1);
    assert.strictEqual(result3[0].official_title, 'A bill to make everyone happy.');
    assert.strictEqual(result3[0].chamber, 'house');

  });

});
