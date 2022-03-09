import React from 'react';
import { FaYoutube} from 'react-icons/fa';

const ReadMoreBtn = ({newsurl}) => {
  return (
    <div className="readmorebtn">
      <a href={newsurl}>{newsurl.includes("youtube")? (<> <span>Watch on </span><FaYoutube style={{fontSize:"15px"}}/> </>):"Read more"}</a>
  </div>
  )
}

export default ReadMoreBtn