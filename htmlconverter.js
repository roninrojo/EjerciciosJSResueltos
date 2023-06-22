/* 
Convierte entidades HTML
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.

*/

function convertHTML(str) {
    // Convierto el string en un array donde voy buscando cada carácter encadenano .replace() para el mismo item, mediante un map.
    // Luego lo junto todo con un join
    const newString = str.split('').map(item => {
        return item
            .replace("&", "&amp;")
            .replace(">", "&gt;")
            .replace("<", "&lt;")
            .replace("\"", "&quot;")
            .replace("\'", "&apos;")
    }).join('');
    return newString;

    // Mucho más elegante esta solucion con regex:
    /*
        // Creamos un objeto con calve - valor de cada entidad html
        const htmlEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        };
        // Usamos regex para buscar mediante un rango [A o B o C...] y reemplazar mediante una función dentro de replace. Por cada coincidencia ejecuta la función que devuelve el valor de esa clave
        return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
    */
}
console.log(
    convertHTML('Stuff in <quotation> marks')
);

/*
convertHTML("Dolce & Gabbana") debe devolver la cadena Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") debe devolver la cadena Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") debe devolver la cadena Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') debe devolver la cadena Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") debe devolver la cadena Schindler&apos;s List.
convertHTML("<>") debe devolver la cadena &lt;&gt;.
convertHTML("abc") debe devolver la cadena abc.
*/