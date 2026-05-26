export function formatWrittenDate(date: Date): string {
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const year = date.getFullYear()
  const ordinal = getOrdinalSuffix(day)
  return `${day}${ordinal} Day of ${month}, ${year}`
}

export function formatWrittenTime(time: string): string {
  const normalized = time.trim().toUpperCase().replace(/\s+/g, '')
  const match = normalized.match(/^(\d{1,2})(AM|PM)$/)
  if (!match) return time
  const hour = parseInt(match[1], 10)
  const period = match[2]
  const hourWords = numberToWords(hour)
  const timeOfDay = period === 'AM' ? 'Morning' : 'Evening'
  return `${hourWords} O'Clock in the ${timeOfDay}`
}

function getOrdinalSuffix(num: number): string {
  const j = num % 10
  const k = num % 100
  if (j === 1 && k !== 11) return 'st'
  if (j === 2 && k !== 12) return 'nd'
  if (j === 3 && k !== 13) return 'rd'
  return 'th'
}

function numberToWords(num: number): string {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']
  if (num >= 0 && num <= 12) return words[num]
  return num.toString()
}

export function formatWrittenDateFromString(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return dateString
    return formatWrittenDate(date)
  } catch {
    return dateString
  }
}
