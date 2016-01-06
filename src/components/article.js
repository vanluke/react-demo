import React from 'react';

export default class Article extends React.Component {
	constructor (props) {
		super();
	}

	_onClick (e, calle) {
		let win = window.open(e.web_url, '_blank');
		win.focus();
	}

	render () {
		let classForArticle = 'article';
		return (
			<div className={classForArticle} onClick={this._onClick.bind(this, this.props.data)}>
			<h3>{this.props.data.headline.main}</h3>
			<img src={this.props.data.multimedia.url}
			width={this.props.data.multimedia.width}
			height={this.props.data.multimedia.height} />
			<p>{this.props.data.abstract}</p>
			<p>{this.props.data.pub_date}</p>
			<p>{this.props.data.lead_paragraph}</p>
			<a href={this.props.data.web_url}>Go to article</a>
			</div>
		);
	}

	static propTypes = {
		data: React.PropTypes.object.isRequired
	};

	static defaultProps = {
		data: {}
	};
}
