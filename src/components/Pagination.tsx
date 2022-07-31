import { FC } from "react"

interface PaginationProps {
  totalPages: number
  currentPage: number
  setPage: (newPage: number) => void
  maxButtons?: number
}

export const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, setPage, maxButtons = totalPages }) => {
  if (currentPage > totalPages) throw new Error("СurrentPage should be no more than TotalPages")

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
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
          disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            className={(currentPage !== 1 ? ['my-pagination_btns', " rounded-l-lg"] : ['my-pagination_btns', " rounded-l-lg", btnClasses_disable]).join("")}
          >
            Prev
          </button>
        </li>

        {generateArrButtons(currentPage, totalPages, maxButtons).map((pageNum) => (
          <li key={pageNum}>
            <button onClick={() => setPage(pageNum)} className={pageNum !== currentPage ? 'my-pagination_btns' : 'my-pagination_btn-active'}>
              {pageNum}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === totalPages}
            className={(currentPage !== totalPages
              ? ['my-pagination_btns', " rounded-r-lg"]
              : ['my-pagination_btns', " rounded-r-lg", btnClasses_disable]
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

