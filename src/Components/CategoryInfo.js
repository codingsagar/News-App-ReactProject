import React from 'react'
import { findFlagUrlByIso2Code } from "country-flags-svg";
const CategoryInfo = ({country,category}) => {

    const flagUrl = findFlagUrlByIso2Code(country);
  return (
      <>
    <h2 className="categoryinfo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{category.toUpperCase()} NEWS -{
        <span style={{color:"#922a44",lineHeight:"25px"}}>
            &nbsp;
           <img src={flagUrl} alt="" style={{width:"45px",lineHeight:"20px"}}/>
        </span>
     }</h2>
     <h5 className="categoryinfo" style={{marginTop:"20px",textAlign:"center"}}>NEWSAPP BY - <a href='https://www.instagram.com/codingsagar/' id='sgr'>SAGAR</a> 😎</h5>
     </>
  )
}

export default CategoryInfo