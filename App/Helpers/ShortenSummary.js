const summaryIsTooLong = (summary) => {
  if (summary.split(' ').length > 100) {
    return true
  } else {
    return false
  }
}

const shortenSummary = (summary) => {
  return `${summary.split(' ').slice(0, 100).join(' ')}...`
}

Object.assign(exports, {
  shortenSummary,
  summaryIsTooLong
})
