import React, { useEffect, useState } from "react";
// import Spinner from "./spinner";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totarticles, setTotarticles] = useState(0);
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totarticles: 0,
  //   };
  //   document.title =
  //     props.category.charAt(0).toUpperCase() +
  //     props.category.slice(1) +
  //     " - NewsMonkey";
  // }

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    //this.setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotarticles(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totarticles: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    document.title =
      props.category.charAt(0).toUpperCase() +
      props.category.slice(1) +
      " - NewsMonkey";
  }, []);
  // const componentDidMount = async() => {
  //   this.updateNews();
  // }
  const fetchMoreData = async () => {
    // this.setState({
    //   articles:
    //     this.state.page == 2
    //       ? this.state.articles.slice(8)
    //       : this.state.articles,
    //   page: this.state.page + 1,
    // });
    //console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    // setArticles(page === 2 ? articles.slice(8) : articles);
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    // });
    // console.log(this.state.articles.length);
    // console.log(this.state.totarticles);
  };
  //   handlePreviousClick = async () => {
  //     this.setState({
  //       page: this.state.page - 1,
  //     });
  //     this.updateNews();
  //   };
  //   handleNextClick = async () => {
  //     this.setState({
  //       page: this.state.page + 1,
  //     });
  //     this.updateNews();
  //   };
  // render() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey - Top Headlines
      </h2>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totarticles}
        //   loader={
        //     this.state.articles.length >= this.state.totarticles - 1 ? (
        //       ""
        //     ) : (
        //       <Spinner />
        //     )
        //   }
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-3" key={ele.url}>
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
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
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
              Math.ceil(this.state.totarticles / props.pageSize) ===
              this.state.page
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div> */}
    </>
  );
};
// }
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "science",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  apiKey: propTypes.string,
};
export default News;
