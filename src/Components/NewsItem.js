import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-4">
        <div className="card ">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%" ,zIndex:'1'}}
          >
            {source}{" "}
          </span>

          <img
            src={
              !imageUrl
                ? "https://media.cnn.com/api/v1/images/stellar/prod/230512202119-15-title-42-051123.jpg?c=16x9&q=w_800,c_fill"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>{" "}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              {" "}
              Read more{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
