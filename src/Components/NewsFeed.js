import React,{useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import top from "../Images/top.png";
import CategoryInfo from "./CategoryInfo";


const NewsFeed = ({category,country}) => {
  
  

  const [articles, setarticles] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const goToTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const ac = new AbortController();
    const fetchArticles = async () =>{
      try {
        setIsLoading(true)
        const URL=`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
        const Res= fetch(URL,{signal: ac.signal});
        const response= await Res;
        const json= await response.json();
        setarticles(json.articles)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
  }

  document.title = `NewsApp - ${category.toUpperCase()} [${country.toUpperCase()}]`


  fetchArticles();

  return ()=>{
    ac.abort();
  }
  }, [category,country])
  
  return (
      <>
      <CategoryInfo country={country} category={category} />
    <div className="newsfeed">
      {isLoading && <Loading/>}
      {!isLoading && articles.map((item,index) => (
        <NewsItem news={item} key={index} />
        ))}
    </div>
    <img src={top} onClick={goToTop} className="top" alt="Go To Top Button"/>
        </>
  );
};

export default NewsFeed;
