/*  Letras faltantes
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.
Si todas las letras están presentes en la cadena, devuelve undefined. 
*/

function fearNotLetter(str) {
    const abc = "abcdefghijklmnopqrstuvwxyz"

    // Identifico donde comienza la cadena, usando el primer carácter de str
    const index = abc.indexOf(str.charAt(0))    

    // luego extraigo la cadena equivalente de abc
    const sliced = abc.slice(index, index + str.length)
    
    // filtro la cadena extraída identificando el caracte que no extá incluído en las dos
    const missed = sliced.split('').filter(item => {
        return !str.split('').includes(item)
    }).toString();

    // Si no se devuelve nada, es undefined
    return (missed.length > 0 ) ? missed : undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/*
fearNotLetter("abce") debe devolver la cadena d.
fearNotLetter("abcdefghjklmno") debe devolver la cadena i.
fearNotLetter("stvwx") debe devolver la cadena u.
fearNotLetter("bcdf") debe devolver la cadena e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") debe devolver undefined.
*/