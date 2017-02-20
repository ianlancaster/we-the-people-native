import moment from 'moment'

const prettifyDate = (date) => {
  return moment(date).format('MMM Do YYYY')
}

export default prettifyDate
