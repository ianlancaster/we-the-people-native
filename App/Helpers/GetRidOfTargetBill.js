const getRidOfTargetBill = (bills, id) => {
  return JSON.parse(bills).filter((bill) => {
    return bill.id !== id
  })
}

export default getRidOfTargetBill
