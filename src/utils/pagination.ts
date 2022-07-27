export const calcTotalPages = (total:number, limit: number) => {
  return Math.ceil(total/limit)
}