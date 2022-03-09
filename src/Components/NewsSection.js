import React from "react";
import ReadMoreBtn from "./ReadMoreBtn";

const NewsSection = ({ title, description, newsurl, datepublish }) => {
  const sourceRemover = (title) => {
    const index = title.lastIndexOf("-");
    title = title.slice(0, index);
    return title;
  };
  return (
    <>
      <div className="news">
        <div className="title">
          <h4>
            {sourceRemover(title)
              ? sourceRemover(title).slice(0, 90)
              : sourceRemover(title)}
          </h4>
        </div>
        <div className="desc">
          <p>{description ? description.slice(0, 90) + "..." : description}</p>
        </div>
        <ReadMoreBtn newsurl={newsurl} />
        <div className="date">{datepublish}</div>
      </div>
    </>
  );
};

export default NewsSection;
