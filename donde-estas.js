/* 
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.
Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.
Otro ejemplo, whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) debe devolver [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
*/

function whatIsInAName(collection, source) {
    // Extraigo las key del objecto y las guardo en un array
    const keys = Object.keys(source)

    // Filtro el array collection, diciendole que por cada objecto, evalue mediante every las keys del array keys y me diga si la propiedad existe en obj y si el valor del objecto con la propiedad key es ifgual al valor del objecto source con la misma propiedad
    const match = collection.filter(obj => {
        return keys.every(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
    });
    return match;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
