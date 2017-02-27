const sliceTitle = (title) => {
  return `${title.split(' ').slice(0, 50).join(' ')}...`
}

export default sliceTitle
