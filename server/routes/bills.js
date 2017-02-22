const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const pick = require('lodash').pick
const moment = require('moment')
const returnDetailedStatus = require('./returnDetailedStatus')
const returnProgress = require('./returnProgress')

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

const objValues = (obj) => {
  return Object.keys(obj).map((key) => {
    return obj[key]
  })
}

const returnStatus = (history, lastAction) => {
  if (history.enacted) return 'enacted'
  if (objValues(history).find((result) => result === 'fail')) return 'failed'
  if (moment(lastAction).add(4, 'months') > moment(Date.now())) return 'active'
  return 'tabled'
}

module.exports = router
