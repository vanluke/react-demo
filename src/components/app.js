import React from 'react';
import { Link }  from 'react-router';

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header>
          <h1><Link to="/news">React POC</Link></h1>
          <Link to="/news">news</Link>
          <Link to="/vacation">vacation</Link>
          <Link to="/about">about</Link>
          <Link to="/teams">team</Link>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
