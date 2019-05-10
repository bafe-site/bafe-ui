const filter = {
  truncate: (value, format) => {
    if (value && (value.length > format)) {
      return value.substring(0, format) + ' ...'
    } else {
      return value
    }
  }
}

export default filter
