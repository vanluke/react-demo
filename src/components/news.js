import {News} from './../models/news';
import React from 'react';
import Article from './article';
import {NewsRespository} from './../repositories/newsRespository';
let {Component, PropTypes} = React;

export class NewsWidget extends React.Component {
  constructor (props) {
    super(props);
    this.state = { news: [] }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(state) {
    this.setState({ news: state});
  }


  static defaultProps() { return { news: arrayNews } };

  componentDidMount () {
    new NewsRespository().getNews().then(respose => {
      this.setState({ news: respose });
    });
  }

  render() {
    let nodes = this.state.news.map((article, i) => {
      return (<Article data={article} key={i}>
        </Article>)
      });
      return (<div className="article-list">
      {nodes}
      </div>)
    }
  }
