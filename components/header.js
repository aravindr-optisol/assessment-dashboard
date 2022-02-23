import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Header.module.css'

const Header = ({ header, tabs, currentTab }) => {
  // const [ tabIndex, setTabIndex ] = useState(null)
  return (
    <header className={styles.header}>
    <div className={styles.headerFlex}>
        <h1>{header}</h1>
        <button>Create Buying Process</button>
    </div>
    <nav className={styles.nav}>
      <ul>
        {
          tabs.map((tab, index) => (
            <li key={index} className={tab.tabName == currentTab ? styles.activeTab : ""}><Link href={tab.path}>{tab.tabName}</Link></li>
          ))
        }
      </ul>
    </nav>
    </header>
  )
}

export default Header
