import React from "react";
import Card from "../components/Card";

const data = require("../data/sampleNews.json");

console.log(data);

const NewsPage = () => {
  return (
    
    <div className="container d-flex flex-wrap my-3  ">
     
          {data.map((element, index) => {
            return (
              <Card
                key={index}
                title={element.title.slice(0,45)}
                description={element.description.slice(0,95)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                date={element.publishedAt}
                source={element.source.name}
              />
            );
          })}
    </div>
    
  );
};
export default NewsPage;
