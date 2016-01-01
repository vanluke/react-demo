import moment from 'moment';
export class Vacation {
  constructor (args) {
    this.key = Object.keys(args)[0];
     args = Object.keys(args).map(key => args[key]) 
     	? Object.keys(args).map(key => args[key])[0] 
     	: {};
     this.id = Object.keys(args)[0];
     this.start = moment(args.start);
     this.end =  moment(args.end);
     this.title = args.title;
     this.description = args.description;
  }
}