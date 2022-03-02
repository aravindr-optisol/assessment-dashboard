import React from 'react'
import styles from '../styles/Dropdown.module.css'
const DropDown = (props) => {
  return (
      <div>
          <select className={styles.selection} onChange={(e)=>console.log(e.target.value)}>
              {
              props.departments &&
              props.departments.map((data)=>{
                  return(<option key={data.departmentid} value={`${data.departmentid}`}>{data.departmentname}</option> )
              })
              }
          </select>
      </div>
  )
}

export default DropDown