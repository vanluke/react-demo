import {Variant} from './variant';

export class Product {
	constructor (args) {
		this.is = args.id;
		this.name = args.id;
		this.image = args.id;
		this.description = args.id;
		this.variants = args.variants && args.variants.length > 0 
			? args.variants.map(v => new Variant (v)) : [];
	}
}