import { FC } from "react"

interface ErrorProps {
  message?: string
}

export const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <svg
          className="h-12 w-12 fill-white stroke-red-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-3xl font-bold"> Something went wrong </span>
      </div>
      {message && (
        <div className="text-center text-lg text-red-500 font-thin">
          <p>{message}</p>
        </div>
      )}
    </>
  )
}
