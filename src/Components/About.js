import React from 'react'
import reactLogo from "../Images/logo192.png";
import { FaGithub} from 'react-icons/fa';

const About = () => {
  return (
    <div id='about'>
        <h2>NewsApp</h2>
        <p>This news web app is made using React JS. This web app uses a news api to fetch daily new news of the world.You can get news from various countries and of many categories like sports,
         technology, entertainment, health etc.</p>
        <div className="links">
        <a href="https://gnews.io/" target="_blank" rel="noreferrer">News API</a>
        <a href="https://github.com/codingsagar/News-App-ReactProject" target="_blank" rel="noreferrer">GITHUB LINK {<FaGithub/>}</a>
        </div>
        <h3>Made using React JS </h3>
        <img src={reactLogo} alt="" style={{height:"80px"}} id="react"/>
        
    </div>
  )
}

export default About