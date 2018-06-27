const transformEmployeeData = (array) => {
    let arrayTheObject = [];
    for (let i = 0; i < array.length; i++) {
        newObject = {};
        for (letj = 0; j < array[i].length; j++) {
            newObject[array[i][j][0]] = array[i][j][1];
        }

        arrayTheObject.push(newObject);
    }
    return arrayTheObject;
}


const transformEmployeeData = (array) => {
    for (let aTranformar of arreglo) {
        const objetoARetornar = {};
        for (let llaveValor of aTranformar) {
            objetoARetornar[llaveValor[0]] = llaveValor[1];
        }
        retorno.push(objetoARetornar);
    }
    return retorno;
}