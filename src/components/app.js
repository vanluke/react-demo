import React from 'react';
import { Link }  from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1><Link to="/news">React POC</Link></h1>
           <Link to="/news">News</Link>
           <Link to="/vacation">Vacation</Link>
           <Link to="/about">About</Link>
        </header>
        <section>
          {this.props.children || 'Welcome!'}
        </section>
      </div>
    )
  }
});
