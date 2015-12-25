export class News {
	constructor (args) {
		this.web_url = args.web_url;
		this.snippet = args.snippet;
		this.lead_paragraph = args.lead_paragraph;
		this.abstract = args.abstract;
		this.print_page = args.print_page;
		this.blog = args.blog;
		this.source = args.source;
		let media = args.multimedia.find(p => { return p.subtype === 'xlarge' });
		this.multimedia = media
			? { url: `http://nytimes.com/${media.url}`,
			 width: media.width, height: media.height } : {};
		this.headline = args.headline;
		this.pub_date = args.pub_date;
		this.document_type = args.document_type;
		this.news_desk = args.news_desk;
		this.section_name = args.section_name;
		this.subsection_name = args.subsection_name; 
	}
}