import React from 'react'

import styles from '../styles/Space.module.css'

import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import Image from 'next/image';

const spaceBox = ({ item }) => {
  
  let iconStyles = { color: "black", fontSize: "1rem" };
  let tickStyles = { color: '#0ED035', fontSize: "1rem" };
  let plusStyles = { color: '#1488e1', fontSize: "1rem" };
  let greaterStyles = { color: '#1488e1', fontSize: "0.6rem" };


  return (
      <div className={styles.box}>
        <div className={styles.topLabel}>
          <div>
              <h6>{item.title}</h6>
              {
                (item.view_type === 'Edit' || item.view_type === 'View') ?
                <p>{item.view_type}&nbsp;<span><FaIcons.FaGreaterThan style={greaterStyles}/></span></p>
                :<p>{item.view_type}&nbsp;<span><AiIcons.AiFillPlusCircle style={plusStyles}/></span></p>
              }
          </div>
          { item.edit_type &&
            <div><h6><FiIcons.FiEdit2 style={iconStyles}/></h6></div> 
          }
        </div>
        { item?.sub_content ? 
        <div className={styles.bottomLabel}>
          <div>
            <h6>{item?.sub_content?.length < 10 ? `0${item?.sub_content?.length}` : item?.sub_content?.length  } {item.sub_content_msg}</h6>
          </div>
          <div><h6><HiIcons.HiBadgeCheck style={tickStyles}/></h6></div>
        </div> :
        <div className={styles.bottomEmpty}> 
         <h1><AiIcons.AiOutlineFolder /></h1>
          <h6>{item.sub_content_msg}</h6>
        </div>
        }
        { item?.sub_content ?
        <div className={styles.icon_img}>
          {
            item?.sub_content?.map((data, index) => (
              <Image src={data.icon} width="50px" height="50px" key={index} />
            ))
          }
        </div>
        :
        ""
        }
    </div>
  )
}

export default spaceBox