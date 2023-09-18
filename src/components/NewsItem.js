import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;

    return (
      <div>
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2021-08/kobe-bryant-012620-getty-ftr_y3tstcxlz20513l61qsn78giw.jpg?itok=6tAoL53F"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="__blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
