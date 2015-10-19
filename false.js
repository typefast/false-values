function filteringFalsy(obj) {
  if(typeof(obj) === 'number' || typeof(obj) === 'string') {
    return obj;
  }
}

function bouncer(arr) {
 
  return arr.filter(filteringFalsy);
}

bouncer([7, "ate", "", false, 9]);