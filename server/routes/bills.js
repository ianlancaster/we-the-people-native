const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const pick = require('lodash').pick

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
      additionalData()
    ))
    return billsPruned
  }, []))
  .then(billsPruned => (res.json(billsPruned)))
  .catch(err => res.json(err))
})

const additionalData = () => ({
  status: 'active'
})

module.exports = router
