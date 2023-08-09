import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <div class="card-footer">
              <small class="text-body-secondary">
                By {author === null ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary my-2"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
