import React from 'react'
import Link from '../../Link'

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href?: string
}

const MenuItem = ({ children, href = '#', ...rest }: MenuItemProps) => {
  return (
    <li {...rest}>
      <Link href={ href }>{ children }</Link>
    </li>
  )
}

export default MenuItem
