let isMomentDate = function (value) {
     return value && value._isAMomentObject; 
}

let dateToPrimitiveValue = function (dt) {
   return isMomentDate(dt) ? dt.toDate().getTime() : undefined; 
}

let getArrayFromKeyValue = function (value) {
	return Object.keys(value).map(key => value[key]) 
      ? Object.keys(value).map(key => value[key]) 
      : [{}];
}

export { dateToPrimitiveValue, isMomentDate, getArrayFromKeyValue }
