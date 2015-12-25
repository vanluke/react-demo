import {News} from './../models/news';
import React from 'react';
import Article from './article';
import {NewsRespository} from './../repositories/newsRespository';
let {Component, PropTypes} = React;
let arrayNews = [
  {
    'title': 'News from me',
    'content': 'asdasdasdasdasd asd asdasdqw asd asdas qwe dsasd',
    'about': 'News from me',
    'publishedAt': '2015-11-01'
  },
   {
    'title': 'News from me 2',
    'content': 'asdasdasdasdasd asd asdasdqw asd asdas qwe asdffc',
    'about': 'News from me',
    'publishedAt': '2015-01-01'
  },
   {
    'title': 'News from me 3',
    'content': 'asdasdasdasdasd asd asdasdqw asd asdas qwe asdasw asda ggs',
    'about': 'News from me',
    'publishedAt': '2015-10-01'
  },
   {
    'title': 'News from me 4',
    'content': 'asdasdasdasdasd asd asdasdqw asd asdas qwe asdasdsdasd sadasqwd cxzczqw weqdac as',
    'about': 'News from me',
    'publishedAt': '2015-01-01'
  }
];
export class NewsWidget extends React.Component {
  constructor (props) {
    super(props);
    this.state = { news: [] }
     this.handleOnChange = this.handleOnChange.bind(this);
    // this.news = // NewsWidget.defaultProps();
  }

  handleOnChange(state) {
    console.log('change');
    this.setState({ news: state});
  }

  componentWillUnmount() {
    // \this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
  }

  static defaultProps() { return { news: arrayNews } };

   componentDidMount () {
   // this.props.onChange(Object.assign({}, this.props.value, {news: e.target.value}));
        new NewsRespository().getNews().then(respose => {
        //  this.news = respose;
           this.setState({ news: respose});
         // this.render();
      });
  }

  render() {
    
      var nodes = this.state.news.map((article, i) => {
        return (<Article data={article} key={i}>
        </Article>)
      });
      return (<div className="article-list">
      {nodes}
    </div>)
  }
}
