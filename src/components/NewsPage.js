import React from "react";
import Card from "../components/Card";

const data = require("../data/sampleNews.json");

console.log(data);

const NewsPage = () => {
  return (
    <div className="container d-flex my-3">
     
          {data.map((element, index) => {
            return (
              <Card
                key={index}
                title={element.title}
                description={element.description}
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
