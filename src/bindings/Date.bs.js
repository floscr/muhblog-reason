// Generated by ReScript, PLEASE EDIT WITH CARE


function make(year, month, day, hourOpt, minuteOpt, param) {
  var hour = hourOpt !== undefined ? hourOpt : 0;
  var minute = minuteOpt !== undefined ? minuteOpt : 0;
  return new Date(year, month - 1 | 0, day, hour, minute);
}

function getMonth(date) {
  return date.getMonth() + 1 | 0;
}

export {
  make ,
  getMonth ,
  
}
/* No side effect */
