export const filterPrice= (state , filterValue) => {
  let result = {};
  let keys = Object.keys(state);
  for(let i = 0 ; i < keys.length; i++) {
    if(state[keys[i]].price === filterValue) {
      console.log(state[keys[i]]);

      result[keys[i]] = state[keys[i]];
    }
  }

  return result;
}

export const filterOpen = (state) => {
  let result = {};
  let day = new Date();
  let currentDay = day.getDay();
  let keys = Object.keys(state);
  for(let i = 0 ; i < keys.length; i++) {
    let currentDayHours = state[keys[i]].hours[currentDay];
    if(isOpen(currentDayHours)) {
      result[keys[i]]=state[keys[i]];
    }
  }
  return result;
}


const isOpen = (businessOpenHours) => {
  const d= new Date();
  const currentHour = d.getHours();
  if(businessOpenHours.indexOf('-')===-1) {
    return false;
  }
  const hoursArr = businessOpenHours.split('-');

  let openHour = parseInt(hoursArr[0].slice(0,businessOpenHours.indexOf(':')));
  if(hoursArr[0].indexOf('pm')!==-1) {
    openHour+=12;
  }
  let closeHour = parseInt(hoursArr[1].slice(0,hoursArr[1].indexOf(':')));
  if (hoursArr[1].indexOf('pm')!==-1 && closeHour!==12) {
    closeHour+=12;
  }
  if(hoursArr[1].indexOf('am')!==-1) {
    return true;
  }
  if(currentHour > openHour && currentHour < closeHour) {
    return true;
  } else {
    return false;
  }
}
