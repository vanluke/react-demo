import {Vacation} from './../models/vacation';
import Firebase from 'firebase';

export class VacationRepository {
  constructor () {
     this.firebaseRef 
      = new Firebase(this.url);
  }

  mapVactionWithCallback (mappedVacations, handler) {
    mappedVacations.onValue = this.firebaseRef.on('child_changed', handler);
    return mappedVacations;
  }

  handleVacation (snapshot, handler) {
    let respose = snapshot.val();
    let mappedVacations = respose
      ? ( respose.length > 0 
          ? respose.map ( o => new Vacation(o)) : [new Vacation(respose)])
      : [{}];
      mappedVacations = this
        .mapVactionWithCallback (mappedVacations, handler);
     return  mappedVacations;                
  }

  add (event) {
    let self = this;
    return new Promise((resolve, reject) => {
        let tmp = {};
    tmp['tmp'] = event;
          self.firebaseRef.push(new Vacation(tmp));
          resolve('ok');
    });
  }

  edit (event) {
    let self = this;
    return new Promise((resolve, reject) => {
      let evtToupdateUrl = `${self.url}${event.key}`;
      let ref = new Firebase(evtToupdateUrl);
      ref.update(event, (error) => {
        if (error) {
          reject(error);
        }
        resolve('ok');
      });
    }); 
  }
  getVacationList (start,end, handler) {
    let sts = start.toDate().getTime(), 
    e =end.toDate().getTime();
    let self = this;
    return new Promise((resolve, reject) => {
        this.firebaseRef
                .orderByChild('start')
                .startAt(sts)
                .endAt(e)
                .on('value', function(snapshot) {
                  let mappedVacations = self.handleVacation (snapshot, handler);
                  resolve (mappedVacations);
            });
    });
  }
  url = 'https://burning-torch-1729.firebaseio.com/items/';
}