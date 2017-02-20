const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const pick = require('lodash').pick

router.get('/api/bills/:page', (req, res) => {
  fetch(`https://congress.api.sunlightfoundation.com/bills`)
  .then(response => response.json())
  .then(data => {
    let bills = []
    data.results.forEach(bill => {
      bills.push(bill)
    })
    return bills
  })
  .then(structuredData => (res.json(structuredData)))
  .catch(err => res.json(err))
})

module.exports = router
