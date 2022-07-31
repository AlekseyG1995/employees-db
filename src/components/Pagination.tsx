import { FC } from "react"

interface PaginationProps {
  totalPages: number
  currentPage: number
  setPage: (newPage: number) => void
  maxButtons?: number
}

export const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, setPage, maxButtons = totalPages }) => {
  if (currentPage > totalPages) throw new Error("СurrentPage should be no more than TotalPages")

  const btnClasses = `py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`

  const btnClasses_active = `py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`

  const btnClasses_disable = " opacity-70 cursor-no-drop"

  const generateArrButtons = (current: number, max: number, MAX_BUTTONS: number): number[] => {
    const _arr = []
    for (let i = 1; i <= max; i++) {
      _arr.push(i)
    }
    const delta = MAX_BUTTONS / 2 - 1
    let leftDelta = current - delta
    let rightDelta = current + delta

    while (leftDelta < 1) {
      rightDelta++
      leftDelta++
    }
    while (rightDelta >= max) {
      rightDelta--
      leftDelta--
    }
    return [1, ..._arr.slice(leftDelta, rightDelta), max]

    // const result = [1, Math.max(current - 1, 1), current, Math.min(current + 1, max), max]
    // switch (true) {
    //   case current === 1 && max > 2:
    //     result.push(3)
    //     if (max > 3) result.push(4)
    //     break
    //   case current === 2 && max > 3:
    //     result.push(4)
    //     break
    //   case current === max && max > 2:
    //     result.push(max - 2)
    //     if (max > 3) result.push(max - 3)
    //     break
    //   case current === max - 1 && max > 3:
    //     result.push(max - 3)
    //     break
    // }
    // result.sort((a, b) => a - b)
    // return Array.from(new Set(result))
    // return result
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
          disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            className={(currentPage !== 1 ? [btnClasses, " rounded-l-lg"] : [btnClasses, " rounded-l-lg", btnClasses_disable]).join("")}
          >
            Prev
          </button>
        </li>

        {generateArrButtons(currentPage, totalPages, maxButtons).map((pageNum) => (
          <li key={pageNum}>
            <button onClick={() => setPage(pageNum)} className={pageNum !== currentPage ? btnClasses : btnClasses_active}>
              {pageNum}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === totalPages}
            className={(currentPage !== totalPages
              ? [btnClasses, " rounded-r-lg"]
              : [btnClasses, " rounded-r-lg", btnClasses_disable]
            ).join("")}
            onClick={() => setPage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

