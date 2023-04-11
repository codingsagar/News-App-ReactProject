import React from 'react'
import { findFlagUrlByIso2Code } from "country-flags-svg";
import {AiFillTwitterCircle} from "react-icons/ai";
const CategoryInfo = ({country,category}) => {

    const flagUrl = findFlagUrlByIso2Code(country);
  return (
      <>
    <h2 className="categoryinfo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{category.toUpperCase()} NEWS - {
        <span style={{color:"#922a44",lineHeight:"25px"}}>
            &nbsp;
           <img src={flagUrl} alt="" style={{width:"45px",lineHeight:"20px"}} className="flag"/>
        </span>
     }</h2>
     <h5 className="categoryinfo" style={{marginTop:"20px",textAlign:"center"}}>NEWSAPP BY - <a href='https://twitter.com/codingsagar' id='sgr'>SAGAR</a> <AiFillTwitterCircle size={24} color='#1DA1F2'/></h5>
     </>
  )
}

export default CategoryInfo