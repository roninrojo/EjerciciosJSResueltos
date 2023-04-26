/* Pig Latin 
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:
- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.
- Si una palabra comienza con una vocal, solo añade way al final.
*/

function translatePigLatin(str) {

    // Declaro los regex que me permiten encontrar vocales y consonantes
    let vocales_regex = /^[aeiou]/g;
    let consonantes_regex = /[^aeiou]+/g;

    if (str.match(vocales_regex)) {
        // Si el string empieza con una vocal devuelvo el string + way
        return `${str}way`;
    } else {
        // Si no, hago slice del string desde la útima consonante (empezando por el principio) hasta el final. Esto lo hago usando match(), esto divide el string en un array de resultados, el priemro [0] es la/s primera/s consonantes. El indice del slice me lo da el tamaño de este array. Luego le sumo la/s primera/s consontante/s haciendo slice desde el principio hasta el indice anterior. Luego le sumamos 'ay'.
        return str.slice(str.match(consonantes_regex)[0].length) + str.slice(0,str.match(consonantes_regex)[0].length) + 'ay';   
    }
}

translatePigLatin("rhythm");

/*
translatePigLatin("california") debe devolver la cadena aliforniacay.
translatePigLatin("paragraphs") debe devolver la cadena aragraphspay.
translatePigLatin("glove") debe devolver la cadena oveglay.
translatePigLatin("algorithm") debe devolver la cadena algorithmway.
translatePigLatin("eight") debe devolver la cadena eightway.
Debes manejar las palabras en donde la primera vocal viene en el centro de la palabra. translatePigLatin("schwartz") debe devolver la cadena artzschway.
Debes manejar las palabras sin vocales. translatePigLatin("rhythm") debe devolver la cadena rhythmay.
*/