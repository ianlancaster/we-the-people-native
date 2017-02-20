import moment from 'moment'

const prettifyDate = (date) => {
  return moment(date).format('MMM D, YYYY')
}

export default prettifyDate
