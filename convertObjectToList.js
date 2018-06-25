const convertObjectToList = (obj) => {
    let outer = [];
    
    for(let prop in obj){
      
      let inner = [];
      inner.push(prop);
      inner.push(obj[prop]);
    
      outer.push(inner);
    }
    return outer;
  }
  module.exports = convertObjectToList;
  