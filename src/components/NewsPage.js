import React from "react";
import Card from "../components/Card";
import axios from "axios";

let data = require("../data/sampleNews.json");

const NewsPage = () => {
  
  

  
  const fetchAPI = async () => {
    let response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a9dab654f8684d0296b16ecb602b122b",
      
    );
    console.log(response.data.articles);
  };
  
  return (
    <>
      <div className="container d-flex flex-wrap my-3  ">
        {data.map((element, index) => {
          return (
            <Card
              key={index}
              title={element.title.slice(0, 45)}
              description={element.description.slice(0, 95)}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              date={element.publishedAt}
              source={element.source.name}
            />
          );
        })}
      </div>
      <button onClick={fetchAPI}>call api</button>
    </>
  );
};
export default NewsPage;
