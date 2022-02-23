import React from 'react'
import styles from '../../styles/Space.module.css'

import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

import Header from '../../components/header';
import SpaceBox from '../../components/spaceBox';

import { content } from '../../data/export-data'




const spaces = () => {
    let iconStyles = { color: "black", fontSize: "1rem" };
    let tickStyles = { color: '#0ED035', fontSize: "1rem" };
    let plusStyles = { color: '#1488e1', fontSize: "1rem" };
    
    let greaterStyles = { color: '#1488e1', fontSize: "0.6rem" };

    let tabs = [
		{	
			tabName:'Channels',
			path:'/buying-spaces/channels'
		},
		{
			tabName:'Spaces',
			path:'/buying-spaces/spaces'
		}
	]

  return (
    <>
    <Header header="Buying Spaces" tabs={tabs} currentTab="Spaces" />
    <div className={styles.main}>
        <div className={styles.title}>
            <h1><b>Buying Spaces</b> - Content Management System</h1>
        </div>
        <div className={styles.grid}>
            {
               content.map((item, index) => {
                   return(
                       <div key={index}>
                           <SpaceBox item={item}/>
                       </div>

                   )
               }) 
            }
        </div>
    </div>
    </>
  )
}

export default spaces