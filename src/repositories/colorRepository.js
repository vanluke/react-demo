let colors = require('./color.json');
import {Color} from './../models/color';

export class ColorRepository {
	getAll () {
		return new Promise ((resolve, reject) => {
			resolve(colors.map (c => new Color(c)));
		});
	}
}