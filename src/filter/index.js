import Moment from 'moment'

const filter = {
  date: (value, format) => {
    return Moment(value * 1000).format(format)
  },
  truncate: (value, format) => {
    if (value && (value.length > format)) {
      return value.substring(0, format) + ' ...'
    } else {
      return value
    }
  }
}

export default filter
