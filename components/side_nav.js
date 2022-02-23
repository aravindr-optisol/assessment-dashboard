import React from 'react'
import Link from 'next/link'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { sidebarDatas } from '../data/export-data'
import styles from '../styles/Side.module.css'
import Image from 'next/image';
import DP from '../public/images/dp1.png'

const SideNavbar = () => {
  return (
    <>
    <nav className={styles.nav_menu}>
        <div className={styles.nav_menu_items}>
            <div className={styles.nav_profile}>
                 <Image src={DP} width="50px" height="50px" />
            </div>
            {
                sidebarDatas.map((item, index) => {
                    return(
                        <div className={styles.nav_text} key={index}>
                        <span>{item.icon}</span>
                        <span>
                            <Link href={item.path}>{item.title}</Link>
                        </span>
                        </div>
                    )
                })
            }
        </div>
    </nav>
    </>
  )
}

export default SideNavbar