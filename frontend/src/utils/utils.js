export const formatDate = (date) => {
  let result = !!date ? new Date(date) : new Date()
  result = result.toISOString().split('T')[0]
  return result
}
