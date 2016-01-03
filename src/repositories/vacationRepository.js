import {Vacation} from './../models/vacation';
import Firebase from 'firebase';
import { dateToPrimitiveValue, getArrayFromKeyValue } from './../middleware/helper';

export class VacationRepository {
  constructor () {
     this.firebaseRef 
      = new Firebase(this.url);
  }

  turnOff () {
    if (this.firebaseRef) {
       this.firebaseRef.off();
     }
  }

  mapVactionWithCallback (mappedVacations, handler) {
    mappedVacations.onValue 
      = this.firebaseRef.on('child_changed', handler);
    return mappedVacations;
  }

  _getArrayFromResponse (respose) {
    return getArrayFromKeyValue(respose);
  }

  handleVacation (snapshot, handler) {
    let respose = this._getArrayFromResponse(snapshot.val());
    let mappedVacations = respose
      ? ( respose.length > 0 
          ? respose.map ( o => new Vacation(o)) : [new Vacation(respose)])
      : [{}];
      mappedVacations = this
        .mapVactionWithCallback (mappedVacations, handler);
     return  mappedVacations;                
  }

  _cleanModel (event) {
     try {
         delete event.isEditing;
         delete event.key;
      } catch (e) {

      }
      return event;
  }

  getEvent (id) {
    return new Promise ((resolve, reject) => {
      (new Firebase(`${this.url}${id}`)).on('value', function (response) {
        resolve(new Vacation (response.val()));
      });
    });
    
  }

  add (event) {
    let self = this;
    return new Promise((resolve, reject) => {
        event = this._cleanModel(event);
        let tmp = {};
        tmp[event.id] = event;
        self.firebaseRef.child(event.id)
        .set(event);
        this.getEvent (event.id)
            .then (res => {
              resolve(res);
        }).catch(error => console.error(error));
    });
  }

  edit (event) {
    let self = this;
    return new Promise((resolve, reject) => {
      let evtToupdateUrl = `${self.url}${event.id}`;
      let ref = new Firebase(evtToupdateUrl);
       event = this._cleanModel(event);
        let tmp = {};
        tmp[event.id] = event;
        ref.update(event, (error, o) => {
          console.log(error, o);
          if (error) {
            reject(error);
          }
        });
        this.getEvent (event.id)
            .then (res => {
              resolve(res);
        }).catch(error => console.error(error));
    }); 
  }
  getVacationList (start,end, handler) {
    let sts = dateToPrimitiveValue(start), 
    e = dateToPrimitiveValue(end);
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