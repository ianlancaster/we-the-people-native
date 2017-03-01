const filterBillsByTopic = (bills, topics) => {
  let newBills = []
  for (var i = 0; i < bills.length; i++) {
    for (var j = 0; j < topics.length; j++) {
      if (bills[i].official_title.toLowerCase().includes(topics[j])) {
        newBills.push(bills[i])
      }
    }
  }
  return newBills
}

export default filterBillsByTopic
