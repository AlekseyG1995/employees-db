import React, { FC } from 'react'
import { Link, useMatch } from 'react-router-dom'

interface MyNavLinkProps {
  to: string
  className?: string
  children: React.ReactNode
}

const MyNavLink: FC<MyNavLinkProps> = ({ children, to, className = '', ...props }) => {
  const match = useMatch({
    path: to
  })

  const activeCls = match ? ' border rounded-md' : ''

  return (
    <Link to={to} {...props} className={className.concat(activeCls)}>
      {children}
    </Link>
  )
}

export default MyNavLink
