function getDateShit(datetime) {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return `${weekdays[datetime.getDay()]}, ${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
}

export default getDateShit