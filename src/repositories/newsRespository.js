import fetch from 'node-fetch';
import {News} from './../models/news';
import {config} from './../config/config';

export class NewsRespository {
	constructor () {
		this.newYorkTimesApiEnpoint
		= `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${config.nytkey}`;
	}

	getNews () {
		return fetch(this.newYorkTimesApiEnpoint)
		.then(function(res) {
			return res.json();
		}).then(function(json) {
			return json.response.docs.map(n => new News (n));
		});
	}
}
