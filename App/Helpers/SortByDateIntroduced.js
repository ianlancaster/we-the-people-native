const sortByDateIntroduced = (bills) => {
  return bills.sort((a, b) => {
    return Date.parse(b.introduced_on) - Date.parse(a.introduced_on)
  })
}

export default sortByDateIntroduced
