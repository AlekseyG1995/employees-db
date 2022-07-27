export const convertToServerFormat = (inputDate: string): string => {
  const [year, month, day] = inputDate.split("-")
  return `${day}.${month}.${year}`
}

export const convertToClientFormat = (inputDate: string): string => {
  const [day, month, year] = inputDate.split(".")
  return `${year}-${month}-${day}`
}
