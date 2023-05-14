import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-4" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230512202119-15-title-42-051123.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer"> Read more </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
