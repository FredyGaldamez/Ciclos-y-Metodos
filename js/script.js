function validar() {

     var casos = prompt("ingrese la opcion del 1 al 5 para responder el desafio"+"\n"+"1-ingrese un numero del 1 al 100"+
                            "\n"+"2-¿De qué color es el caballo blanco de Napoleón?"+"\n"+"3-´promedio de notas"+"\n"+
                              "4-escriba 3 frutas"+"\n"+"5-escriba su nombre");

     switch (casos) {
        case  "1":
        numeros();
        break;
        
        case  "2":
        napoleon();
        break;
        
        case  "3":
        promedio();
        break;
               
        case  "4":
        frutas();
        break;

        case  "5":
        nombre();
        break;
            
         default:
        alert("la opcion ingresada no es valida")
           
        }

function numeros(){



var y = prompt('Ingrese un número entre 1 y 100');
  
var y;

  while(!(y > 0 && y <= 100)) {
    var y = prompt('Ingrese un número entre 1 y 100');

    if (!(y > 0 && y <= 100)) {
      alert(`Número inválido`);
    }

  }

for (var i=1 ; i <= y.lenght; i++) {
      console.log(i[y]);
      break;
      
    }
}

function napoleon(){

var caballo = prompt(" ingrese respuesta")

if(caballo!="blanco" ){
    alert("respuesta incorrecta")

}
console.log("respuesta correcta")
}

function promedio(){

var Matematicas =prompt("ingrese el promedios de matematicas")
var Fisica = prompt("ingrese el promedios de matematicas")
var Ciencias = prompt("ingrese el promedios de matematicas")

var mat = parseInt("Matematicas").value;
var fis = parseInt("Matematicas").value;
var cien= parseInt("Matematicas").value;

if (isNaN(Matematicas && Fisica && Ciencias)){ 
alert("el promedio ingresado no es un numero");
return false;
}
var total = (mat+fis+cien)/3;
alert("el promedio es :"+ total);
}

function frutas(){

    var letras="abcdefghyjklmnñopqrstuvwxyz";
    var fruta1= prompt("inserte una fruta");
    var fruta2= prompt("inserte la segunda fruta");
    var fruta3= prompt("inserte la tercera fruta");

    if (letras==fruta1 && letras==fruta2 && letras==fruta3) {
        alert("el dato ingresado no es letra")
        return false;
    }
    else if (fruta1 ==="manzana" ||fruta1 ==="manzana" ||fruta1 ==="manzana") {
       
    }
}

function nombre(){

    var nombrecito = prompt("ingrese su nombre");
    var vocales = nombrecito.match(/["aeiou"]/gi).length;
    console.log("las vocales son: "+ vocales);
    var consonantes = nombrecito.match(/["qwrtyopsdfghjklñzxcvbnm"]/gi).length;
    console.log("las consonantes son: "+ consonantes);

/*var nombrecito = prompt("ingrese su nombre")
var vocales= "aeiouAEIOU";
var consonantes="qwrtypsdfghjklñzxcvbnmQWRTYPSDFGHJKLÑZXCVBNM";
var contVocal=0;
var contCOnso=0;

for (let i= 0; i < nombrecito.length; i++) {
    if (vocales.indexOf(nombrecito[i]) !==-1) {
        console.log("las vocales son :"+(nombrecito[i]));
        contVocal += 1;
        
    }
    
}
  return false;*/
}
}

/*temario
1. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
desde el 0 hasta el número que ingresó el usuario.
2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el
usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo
contrario, se le dejará de hacer la pregunta.
3. En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le
debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego,
debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El
promedio de notas mostrado debe estar redondeado a un número entero.
4. Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de
manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas
por consola, a excepción de la que tenga el nombre de “manzana”.
5. Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y
consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()).*/