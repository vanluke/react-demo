import CardAction from './actions/cardAction';

export class Utitlitie {
    constructor () {

    }

    static getCards () {
    	let products = JSON.parse(localStorage.getItem('product'));
   		// CardAction.receiveProduct(products);
    }
}