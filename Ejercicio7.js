/* dias de la semana */

/* 
let día = Number(prompt("digite un numero"));

switch (día) {
case 1:
    alert("Lunes");
    break;
case 2:
    alert('Martes');
    break;
case 3:
    alert('Miércoles');
    break;
case 4:
    alert('Jueves');
    break;
case 5:
    alert('Viernes');
    break;
case 6:
    alert('Sabado');
    break;
case 7:
    alert('Domingo');
    break;
default:
    alert('Otro día');
    break;
}
  */


/* calculadora */

/*  
let x, y, sign
x= Number(prompt("digite un número"))
y= Number(prompt("digite otro número"))

sign= prompt("digite la operacion")

switch (sign){
    case "+":
        alert(x+y)
        break
    case "-":
        alert(x-y)
        break
    case"*":
        alert(x*y)
        break
    case"/":
        alert(x/y)
        break
default:
    alert("signo incorrecto")
}
*/

/* par o impar */
function esPar(numero) {
    if (numero % 2 === 0) {
        alert(numero+" es par"); 
    } else {
        alert(numero+" es impar");   
    }
}

const numero = parseInt(prompt("Introduce un número:")); 
esPar(numero); 