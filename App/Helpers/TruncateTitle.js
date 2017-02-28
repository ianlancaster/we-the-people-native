const truncateTitle = (title) => {
  return `${title.split(' ').slice(0, 10).join(' ')}...`
}

export default truncateTitle
