
    const nombre = prompt("Ingrese su nombre","Ejemplo: Ivan");;
    const apellido = prompt("Ingrese su apellido","Ejemplo: Varela");
    const edad = prompt(`Ingrese su edad`, `Ejemplo: 21 `);


    function getTemplate(nombre, apellido, edad){
        return `El usuario ${nombre} ${apellido} tiene ${edad} años de edad`;
        
    };

   
console.log(getTemplate(nombre, apellido, edad));

