let car = [['brand', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
              (0,0)   (0,1)     (1,0)     (1,1)        (2.0)  (2,2)
let object = {};

//Utilizando los valores de este array 2D hemos creado un objeto vacio, le colocamos propiedades y valores

object['brand'] = 'Ford';
object['model'] = 'Mustang';
object['year']=1964;
console.log (object);


object[car[0][0]] = car [0][1];
object[model[1][0]] = car [1][1];
object[year]=1964 = car[2][1];
console.log (object);

