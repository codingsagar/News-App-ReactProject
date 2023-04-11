import React from "react";
import NewsImage from "./NewsImage";
import NewsSource from "./NewsSource";
import NewsSection from "./NewsSection";
import moment from "moment";

const NewsItem = ({ news }) => {

  return (
    <>
      <div className="newsitem">
        <NewsImage url={news.image} title={news.title}  />
        <NewsSource source={news.source.name} />
        <NewsSection title={news.title} description={news.description} newsurl={news.url} datepublish={moment(news.publishedAt).utc().format('dddd Do MMMM, YYYY')}/>
      </div>
    </>
  );
};

export default NewsItem;
