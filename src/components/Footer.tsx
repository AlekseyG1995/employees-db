import { FC } from 'react'

const Footer: FC = () => {
  return <div className="text-center font-thin h-10 border-t">&copy; {new Date().getFullYear()} Employees DB</div>
}

export { Footer }
