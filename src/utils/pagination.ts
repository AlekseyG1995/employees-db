export const calcTotalPages = (total: number, limit: number) => {
  if (limit === 0) throw new Error("ERROR! DIVISION BY ZERO")
  return Math.ceil(total / limit)
}
