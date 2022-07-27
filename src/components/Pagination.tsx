import { FC, useEffect, useState } from "react"

interface PaginationProps {
  totalPages: number
  currentPage: number
  setPage: (newPage: number) => void
}

export const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {

  const btnClasses = `py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`

  const btnClasses_active = `py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`

  const generateArrButtons = (maxValue: number): number[] => {
    const result = [1, Math.max(currentPage - 1, 1), currentPage, Math.min(currentPage + 1, maxValue), maxValue]
    return Array.from(new Set(result))
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px mt-5">
        {currentPage !== 1 && (
          <li>
            {/* <a className={btnClasses.concat(" rounded-l-lg border")}>Previous</a> UI*/}
            <button onClick={() => setPage(currentPage - 1)} className={btnClasses}>
              Prev
            </button>
          </li>
        )}
        {generateArrButtons(totalPages).map((pageNum) => (
          <li key={pageNum}>
            <button onClick={() => setPage(pageNum)} className={pageNum !== currentPage ? btnClasses : btnClasses_active}>
              {pageNum}
            </button>
          </li>
        ))}
        {currentPage !== totalPages && (
          <li>
            <button onClick={() => setPage(currentPage + 1)} className={btnClasses}>
              Next
            </button>
            {/* <a className={btnClasses.concat(" bg-white rounded-r-lg")}>Next</a>   //UI*/}
          </li>
        )}
      </ul>
    </nav>
  )
}
