function getDateShit(datetime) {
  const date = new Date(datetime);
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
}

export default getDateShit