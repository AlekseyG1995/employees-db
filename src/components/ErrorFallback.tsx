import { FC } from "react"

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

export const ErrorFallback:FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="w-[300px] mx-auto my-10">
      <div role="alert">
        <p>Something went wrong!!!</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  )
}
