alert("abrir la consola!!");

// Se debe entregar el código fuente (o repo git) junto con la documentación que crea necesaria para comunicar el diseño, 
//si lo considera útil, también se pueden agregar test unitarios.
// Escriba un script que a partir de un array de ints devuelva un array de strings aplicando las siguientes reglas:
// ●	Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
// ●	Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
// ●	Devuelve FizzBuzz si el número es divisible por 3 y por 5. 
// ●	Puedes utilizar cualquier lenguaje que consideres apropiado.

var array=[1,2,34524,4,556,6,7,8,9,10,11,12,13,14,15,15,16,17];


//recorro el array
for(var i=0; i <= array.length; i++){

	var arrayString="";
  //pregunto si el numero en la posicion es divisible por 3, con el resto que sea 0, 
  //o pregunto si el numero contiene un 3, con indexOf para obtener la posicion en la que se encuentra el elemento, 
  //si cumple cualquiera de las dos, lo agrego a un string
  if( i % 3==0 || (i + '').indexOf('3') > -1){
  	arrayString+="Fizz";
  }
  //pregunto si el numero en la posicion es divisible por 5, con el resto que sea 0, 
  //o pregunto si el numero contiene un 5,con indexOf para obtener la posicion en la que se encuentra el elemento, 
  //si cumple cualquiera de las dos,lo agrego a un string
  if( i % 5==0 || (i + '').indexOf('5') > -1){
  	arrayString+="Buzz";
  }
  //si el string esta vacio, no cumple ninguna condicion, asi que imprimo el numero
  if(arrayString==""){
  	arrayString=i;
  }
  
  console.log(arrayString);
  
}