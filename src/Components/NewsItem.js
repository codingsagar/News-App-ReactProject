import React from "react";
import NewsImage from "./NewsImage";
import NewsSource from "./NewsSource";
import NewsSection from "./NewsSection";

const NewsItem = ({ news }) => {

  return (
    <>
      <div className="newsitem">
        <NewsImage url={news.urlToImage} title={news.title}  />
        <NewsSource source={news.source.name} />
        <NewsSection title={news.title} description={news.description} newsurl={news.url} datepublish={news.publishedAt}/>
      </div>
    </>
  );
};

export default NewsItem;
