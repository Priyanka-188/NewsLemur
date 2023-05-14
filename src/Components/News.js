import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }; //setting the state in class based component
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=065d6f44936348a2a6ca7418f29d6bc5";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles : parsedData.articles});

  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="my-3">NewsLemur - Top Headlines.</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0,45):""}
                  description={element.description ? element.description.slice(0,88):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
