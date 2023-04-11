import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import top from "../Images/top.png";
import CategoryInfo from "./CategoryInfo";
import axios from "axios";

const NewsFeed = ({ category, country }) => {
  const [articles, setarticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const ac = new AbortController();
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const URL = `https://gnews.io/api/v4/top-headlines?token=${process.env.GEONEWS_API_KEY}&topic=${category}&lang=en&country=${country}`;
        const response = await axios.get(URL, { signal: ac.signal });
        const news = response.data.articles;
        setarticles(news);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    document.title = `NewsApp - ${category.toUpperCase()} [${country.toUpperCase()}]`;

    fetchArticles();

    return () => {
      ac.abort();
    };
  }, [category, country]);

  return (
    <>
      <CategoryInfo country={country} category={category} />
      <div className="newsfeed">
        {isLoading && <Loading />}
        {!isLoading &&
          articles.map((item, index) => <NewsItem news={item} key={index} />)}
      </div>
      <img src={top} onClick={goToTop} className="top" alt="Go To Top Button" />
      {!isLoading && (
        <footer>
          <p>You read {articles.length} {category} News 🔥</p>
        </footer>
      )}
    </>
  );
};

export default NewsFeed;
