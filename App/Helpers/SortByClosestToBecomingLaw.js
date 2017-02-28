const sortByClosestToBecomingLaw = (bills) => {
  return bills.sort((a, b) => {
    return b.progress.index - a.progress.index
  })
}

export default sortByClosestToBecomingLaw
