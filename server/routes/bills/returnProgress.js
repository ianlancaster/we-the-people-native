const moment = require('moment')

// ------------------------------------
// Progress Structure
// ------------------------------------
//
// { index: 0, text: `Introduced in ${Primary}` }
// { index: 1, text: `${Primary} has taken action` }
// { index: 2, text: `Failed in ${Primary}` }
// { index: 3, text: `Passed in ${Primary}` }
// { index: 4, text: `Failed in ${Secondary}` }
// { index: 5, text: `Passed in ${Secondary}` }
// { index: 6, text: `Failed in cloture` }
// { index: 7, text: `Passed in cloture` }
// { index: 8, text: `Passed  in ${Primary} after cloture` }
// { index: 9, text: `Passed in ${Secondary} after cloture` }
// { index: 10, text: `Failed in ${Primary} after cloture` }
// { index: 11, text: `Failed in ${Secondary} after cloture` }
// { index: 12, text: `Passed in ${Primary}, failed in ${Secondary} after cloture` }
// { index: 13, text: `Passed in ${Secondary}, failed in ${Primary} after cloture` }
// { index: 14, text: `Passed both House and Senate after cloture` }
// { index: 15, text: `Vetoed` }
// { index: 16, text: `Enacted` }
// { index: 17, text: `Passed override in ${Primary} after veto` }
// { index: 18, text: `Passed override in ${Secondary} after veto` }
// { index: 19, text: `Failed override in ${Primary} after veto` }
// { index: 20, text: `Failed override in ${Secondary} after veto` }
// { index: 21, text: `Passed override in ${Primary}, failed override in ${Secondary} after veto` }
// { index: 22, text: `Passed override in ${Secondary}, failed override in ${Primary} after veto` }
// { index: 23, text: `Enacted, veto overridden by Congress` }

const returnProgress = (h, chamber) => {
  let primary, secondary, Primary, Secondary
  if (chamber === 'house') {
    primary = 'house'
    secondary = 'senate'
    Primary = 'House'
    Secondary = 'Senate'
  } else {
    primary = 'senate'
    secondary = 'house'
    Primary = 'Senate'
    Secondary = 'House'
  }

  if (h.hasOwnProperty(`${primary}_override_result`) && h.hasOwnProperty(`${secondary}_override_result`)) {
    if (h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'pass') {
      return { index: 23, text: `Enacted, veto overridden by Congress` }
    }

    if (h[`${primary}_override_result`] === 'fail' && h[`${secondary}_override_result`] === 'pass') {
      return { index: 22, text: `Passed override in ${Secondary}, failed override in ${Primary} after veto` }
    }

    if (h[`${primary}_override_result`] === 'pass' && h[`${secondary}_override_result`] === 'fail') {
      return { index: 21, text: `Passed override in ${Primary}, failed override in ${Secondary} after veto` }
    }
  }

  if (h.hasOwnProperty(`${secondary}_override_result`)) {
    if (h[`${secondary}_override_result`] === 'fail') {
      return { index: 20, text: `Failed override in ${Secondary} after veto` }
    }

    if (h[`${secondary}_override_result`] === 'pass') {
      return { index: 18, text: `Passed override in ${Secondary} after veto` }
    }
  }

  if (h.hasOwnProperty(`${primary}_override_result`)) {
    if (h[`${primary}_override_result`] === 'fail') {
      return { index: 19, text: `Failed override in ${Primary} after veto` }
    }

    if (h[`${primary}_override_result`] === 'pass') {
      return { index: 17, text: `Passed override in ${Primary} after veto` }
    }
  }

  if (h.enacted === true) return { index: 16, text: 'Enacted' }
  if (h.vetoed === true) return { index: 15, text: 'Vetoed' }

  if (h[`${secondary}_cloture_result`] === 'pass') {
    if (Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`]) &&
        Date(h[`${secondary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`])) {
      if (h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'pass') {
        const passDate = Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_passage_result_at`])
          ? Date(h[`${primary}_passage_result_at`])
          : Date(h[`${secondary}_passage_result_at`])

        if (moment(passDate).add(8, 'days') >= moment(Date.now)) {
          return { index: 14, text: `Passed both House and Senate after cloture` }
        } else {
          return { index: 16, text: `Enacted` }
        }
      }

      if (h[`${primary}_passage_result`] === 'fail' && h[`${secondary}_passage_result`] === 'pass') {
        return { index: 13, text: `Passed in ${Secondary}, failed in ${Primary} after cloture` }
      }

      if (h[`${primary}_passage_result`] === 'pass' && h[`${secondary}_passage_result`] === 'fail') {
        return { index: 12, text: `Passed in ${Primary}, failed in ${Secondary} after cloture` }
      }
    }

    if (Date(h[`${primary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`])) {
      if (h[`${primary}_passage_result`] === 'pass') {
        return { index: 8, text: `Passed  in ${Primary} after cloture` }
      }

      if (h[`${primary}_passage_result`] === 'fail') {
        return { index: 10, text: `Failed in ${Primary} after cloture` }
      }
    }

    if (Date(h[`${secondary}_passage_result_at`]) > Date(h[`${secondary}_cloture_result_at`])) {
      if (h[`${secondary}_passage_result`] === 'pass') {
        return { index: 9, text: `Passed in ${Secondary} after cloture` }
      }

      if (h[`${secondary}_passage_result`] === 'fail') {
        return { index: 11, text: `Failed in ${Secondary} after cloture` }
      }
    }
    return { index: 7, text: 'Passed in cloture' }
  }

  if (h[`${secondary}_cloture_result`] === 'fail') {
    return { index: 6, text: 'Failed in cloture' }
  }

  if (h[`${secondary}_passage_result`] === 'pass') {
    return { index: 5, text: `Passed in ${Secondary}` }
  }

  if (h[`${secondary}_passage_result`] === 'fail') {
    return { index: 4, text: `Failed in ${Secondary}` }
  }

  if (h[`${primary}_passage_result`] === 'pass') {
    return { index: 3, text: `Passed in ${Primary}` }
  }

  if (h[`${primary}_passage_result`] === 'fail') {
    return { index: 2, text: `Failed in ${Primary}` }
  }

  if (h.active === true) {
    return { index: 1, text: `${Primary} has taken action` }
  }

  return { index: 0, text: `Introduced in ${Primary}` }
}

module.exports = returnProgress
