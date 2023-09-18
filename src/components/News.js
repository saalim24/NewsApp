import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "World Cup 2026: Could climate crisis impact the men's tournament?",
      description:
        "After a record-breaking summer of extreme temperatures in the US, BBC Sport looks at the possible impact on the 2026 World Cup.",
      url: "https://www.bbc.co.uk/sport/football/66211285",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3FF1/production/_130396361_gettyimages.jpg",
      publishedAt: "2023-09-15T05:05:08Z",
      content:
        'At the 1994 World Cup in the US, Republic of Ireland manager Jack Charlton memorably criticised Fifa\'s policy of not allowing drinks bottles on the pitch\r\n"One player is going to die."\r\nWith extreme … [+9537 chars]',
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=218542227ecc45f3bf4508399b2788f7&page=1&pagesize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePreviousClick = async () => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=218542227ecc45f3bf4508399b2788f7&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=218542227ecc45f3bf4508399b2788f7&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center m-5">Top Headlines</h1>
          {this.state.loading && <Spinner></Spinner>}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : " "
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                    ></NewsItem>
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1}
            >
              &#8592; Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 21)
              }
              onClick={this.handleNextClick}
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
