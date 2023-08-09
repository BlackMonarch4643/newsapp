import React, { Component } from "react";
import Spinner from "./spinner";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
    apiKey: "3f5ad2d097a2449c9f46f0dcae45226b",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
    apiKey: propTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totarticles: 0,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totarticles: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-3" key={ele.title}>
                  <NewsItem
                    title={
                      ele.title === null ? ele.title : ele.title.slice(0, 45)
                    }
                    description={
                      ele.description === null
                        ? ele.description
                        : ele.description.slice(0, 88)
                    }
                    imageurl={
                      ele.urlToImage === null
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBDVCywn4NxOqiXDBf8m5AzEoRKICE4PCancRzLcy8rZOXgTmWBbzW_JHGwfo6T5xPb8&usqp=CAU"
                        : ele.urlToImage
                    }
                    newsUrl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totarticles / this.props.pageSize) ===
              this.state.page
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
