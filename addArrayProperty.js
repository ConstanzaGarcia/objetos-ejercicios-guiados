const addArrayProperty = (obj, key, arr) => {
    // your code here: este es un arreglo de objetos
    return Object.defineProperty(obj, key, {
        value: arr,
    });
}

console.log(myObj.myProperty); // --> [1, 3]