import React  from "react";


function NewsItem (props) {
    return (
      <div className="px-3 py-2" >
        <div className="card h-85 " style={{ width: "18rem" }}>
          <img
            className="card-img-top h-35"
            src={props.imageUrl}
            alt={props.description}
          ></img>
          <div className="card-body ">
            <h5 className="card-title ">{props.title}... </h5>
            <p className="card-text">{props.description}...</p>

            <a href={props.newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
