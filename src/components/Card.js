import React, { Component } from "react";


export class NewsItem extends Component {



  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="px-3 py-2" >
        <div className="card h-85 " style={{ width: "18rem" }}>
          <img
            className="card-img-top h-35"
            src={imageUrl}
            alt={description}
          ></img>
          <div className="card-body ">
            <h5 className="card-title ">{title}... </h5>
            <p className="card-text">{description}...</p>

            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
