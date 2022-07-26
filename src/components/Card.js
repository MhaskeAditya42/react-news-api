import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container">
        <div className="card " style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={imageUrl}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <Link to={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
