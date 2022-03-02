import React,{useEffect,useState} from 'react'
import styles from '../../styles/Space.module.css'
import axios from 'axios';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

import Header from '../../components/header';
import SpaceBox from '../../components/spaceBox';
import DropDown from '../../components/DropDown'
import { content } from '../../data/export-data'
export const getStaticProps=async()=>{
    const res=await fetch("https://dev-buyer-api.cxospace.co/public/all/departments").then(res=>res.json())
    return{
        props:{
            departments:res
        }
    }
}
const spaces = ({departments}) => {
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
    const[depList,setDepList]=useState([])

    useEffect(()=>{
        axios.get("https://dev-buyer-api.cxospace.co/public/all/departments")
        .then(function (response) {
            console.log(response.data.data.departments)
          setDepList(response.data.data.departments)
        })
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return (
    <>
    <Header header="Buying Spaces" tabs={tabs} currentTab="Spaces" />
    <div className={styles.main}>
        <div className={styles.title}>
            <h1><b>Buying Spaces</b> - Content Management System</h1>
        </div>
        <DropDown departments={depList}/>
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