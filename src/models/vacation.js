import moment from 'moment';
export class Vacation {
  constructor (args) {
     this.id = args.id;
     this.start = moment(args.start);
     this.end =  moment(args.end);
     this.title = args.title;
     this.description = args.description;
     this.color = args.color;
  }
}