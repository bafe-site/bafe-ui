const filter = {
  truncate: (value, format) => {
    return value.substring(0, format) + ' ...'
  }
}

export default filter
