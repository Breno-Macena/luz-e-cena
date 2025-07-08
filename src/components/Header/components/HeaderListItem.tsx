import React from 'react'
import styles from '../Header.module.css'

const HeaderListItem = ({ children, ...rest }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.menuitem} { ...rest }>{ children }</li>
  )
}

export default HeaderListItem
