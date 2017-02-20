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
        'history'
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
  const progress = returnProgress(history)

  return {
    status,
    progress,
    detailedStatus: returnDetailedStatus(status, progress, chamber)
  }
}

const returnStatus = (history, lastAction) => {
  if (history.enacted) return 'enacted'
  if (Object.values(history).find((result) => result === 'failed')) return 'failed'
  if (history.vetoed) return 'vetoed'
  if (moment(lastAction).add(4, 'months') > moment(Date.now())) return 'active'
  return 'tabled'
}

const returnProgress = (history) => {}

const returnDetailedStatus = (status, progress, chamber) => {}

module.exports = router
