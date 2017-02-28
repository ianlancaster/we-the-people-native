const fakeBills = [
  {
    id: 1234,
    official_title: 'A bill to impeach Donald Trump.',
    introduced_on: '2017-02-01',
    last_action_at: '2017-02-02',
    chamber: 'senate'
  },
  {
    id: 3345,
    official_title: 'A bill to make everyone happy.',
    introduced_on: '2017-02-12',
    last_action_at: '2017-02-14',
    chamber: 'house'
  }
]

const stringifiedFakeBills = JSON.stringify(fakeBills)

Object.assign(exports,
  {
    fakeBills,
    stringifiedFakeBills
  }
)
