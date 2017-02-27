const shortenSummary = (summary) => {
  let newSummary = summary
  if (summary.split(' ').length > 100) {
    newSummary = `${summary.split(' ').slice(0, 100).join(' ')}...`
  }
  return newSummary
}

export default shortenSummary
