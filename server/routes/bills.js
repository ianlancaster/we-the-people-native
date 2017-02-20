const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const pick = require('lodash').pick

router.get('/api/bills/:page', (req, res) => {
  fetch(`https://congress.api.sunlightfoundation.com/bills`)
  .then(response => response.json())
  .then(data => {
    let prunedBills = []
    data.results.forEach(bill => {
      console.log(bill.official_title)
      prunedBills = [
        ...prunedBills,
        pick(bill, ['official_title', 'bill_id', 'introduced_on', 'last_action_at', 'chamber', 'history'])
      ]
    })
    return prunedBills
  })
  .then(structuredData => (res.json(structuredData)))
  .catch(err => res.json(err))
})

module.exports = router
