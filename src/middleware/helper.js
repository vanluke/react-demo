import uuid from './../middleware/uuid';
import moment from 'moment';

let dateFormat = 'YYYY/MM/DD';

let isMomentDate = function(value) {
    return value && value._isAMomentObject;
}

let dateToPrimitiveValue = function(dt) {
    return isMomentDate(dt) ? dt.toDate().getTime() : Date.parse(dt);
}

let toReadableDate = function (value) {
	 return isMomentDate(value) ? value.format(dateFormat) : moment(value).format(dateFormat);
}

let getArrayFromKeyValue = function(value) {
    return Object.keys(value).map(key => value[key]) ? Object.keys(value).map(key => value[key]) : [{}];
}

let toFirebaseObject = function (event, isnew) {
    event.id = isnew ? uuid() : event.id;
    event.start = dateToPrimitiveValue(event.start);
    event.end = dateToPrimitiveValue(event.end);
    return event;
}

export { dateToPrimitiveValue, isMomentDate, getArrayFromKeyValue, toFirebaseObject, toReadableDate }
