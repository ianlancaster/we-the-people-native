const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const pick = require('lodash').pick
const moment = require('moment')

router.get('/api/bills/:page', (req, res) => {
  fetch(`https://congress.api.sunlightfoundation.com/bills`)
  .then(response => response.json())
  .then(billsAll => billsAll.results.reduce((billsPruned, bill) => {
    billsPruned.push(Object.assign({},
      pick(bill, [
        'official_title',
        'bill_id',
        'introduced_on',
        'last_action_at',
        'chamber',
        'history',
        'sponsor'
      ]),
      additionalData(bill.history, bill.chamber, bill.last_action_at)
    ))
    return billsPruned
  }, []))
  .then(billsPruned => (res.json(billsPruned)))
  .catch(err => res.json(err))
})

const additionalData = (history, chamber, lastAction) => {
  const status = returnStatus(history, lastAction)
  const progress = returnProgress(history, chamber)

  return {
    status,
    progress,
    detailedStatus: returnDetailedStatus(status, progress, chamber)
  }
}

const returnStatus = (history, lastAction) => {
  if (history.enacted) return 'enacted'
  if (Object.values(history).find((result) => result === 'fail')) return 'failed'
  if (history.vetoed) return 'vetoed'
  if (moment(lastAction).add(4, 'months') > moment(Date.now())) return 'active'
  return 'tabled'
}

const returnProgress = (h, c) => {
  let primary, secondary
  if (c === 'house') {
    primary = 'house'
    secondary = 'senate'
  } else {
    primary = 'senate'
    secondary = 'house'
  }

  if (h.hasOwnProperty(`${primary}_override_result`) && h.hasOwnProperty(`${secondary}_override_result`)) {
    if (h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'pass') {
      return { index: 23, text: 'Passed both after veto' }
    }

    if (h[`${primary}_override_result`] === 'fail' && h[`${secondary}_override_result`] === 'pass') {
      return { index: 22, text: 'Passed secondary, failed primary after veto' }
    }

    if (h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'fail') {
      return { index: 21, text: 'Passed primary, failed secondary after veto' }
    }
  }

  if (h.hasOwnProperty(`${secondary}_override_result`)) {
    if (h[`${secondary}_override_result`] === 'fail') {
      return { index: 20, text: 'Failed secondary after veto' }
    }

    if (h[`${secondary}_override_result`] === 'pass') {
      return { index: 18, text: 'Passed secondary after veto' }
    }
  }

  if (h.hasOwnProperty(`${primary}_override_result`)) {
    if (h[`${primary}_override_result`] === 'fail') {
      return { index: 19, text: 'Failed primary after veto' }
    }

    if (h[`${primary}_override_result`] === 'pass') {
      return { index: 17, text: 'Passed primary after veto' }
    }
  }

  if (h.enacted === true) return { index: 16, text: 'Enacted' }
  if (h.vetoed === true) return { index: 15, text: 'Vetoed' }

  if (h[`${secondary}_cloture_result`] === 'pass') {
    if (Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`]) &&
        Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`])) {
      if (h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'pass') {
        return { index: 14, text: 'Passed both after cloture' }
      }

      if (h[`${primary}_passage_result`] === 'fail' && h[`${secondary}_passage_result`] === 'pass') {
        return { index: 13, text: 'Passed secondary, failed primary after cloture' }
      }

      if (h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'fail') {
        return { index: 12, text: 'Passed primary, failed secondary after cloture' }
      }
    }

    if (Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`])) {
      if (h[`${primary}_passage_result`] === 'pass') {
        return { index: 8, text: 'Passed primary after cloture' }
      }

      if (h[`${primary}_passage_result`] === 'fail') {
        return { index: 10, text: 'Failed primary after cloture' }
      }
    }

    if (Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`])) {
      if (h[`${secondary}_passage_result`] === 'pass') {
        return { index: 9, text: 'Passed secondary after cloture' }
      }

      if (h[`${secondary}_passage_result`] === 'fail') {
        return { index: 11, text: 'Failed secondary after cloture' }
      }
    }
    return { index: 7, text: 'Passed cloture' }
  }

  if (h[`${secondary}_cloture_result`] === 'fail') {
    return { index: 6, text: 'Failed in in cloture' }
  }

  if (h[`${secondary}_passage_result`] === 'pass') {
    return { index: 5, text: 'Passed secondary chamber' }
  }

  if (h[`${secondary}_passage_result`] === 'fail') {
    return { index: 4, text: 'Failed in in secondary chamber' }
  }

  if (h[`${primary}_passage_result`] === 'pass') {
    return { index: 3, text: 'Passed primary chamber' }
  }

  if (h[`${primary}_passage_result`] === 'fail') {
    return { index: 2, text: 'Failed in in primary chamber' }
  }

  if (h.active === true) {
    return { index: 1, text: 'Primary chamber has taken action' }
  }

  return { index: 0, text: 'Introduced' }
}

const returnDetailedStatus = (status, progress, chamber) => {}

module.exports = router
