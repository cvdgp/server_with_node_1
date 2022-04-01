
const math = {};


/**
 * 
 * Esta funcion se utiliza para la suma de dos números dados
 * @param {number} a  
 * @param {number} b 
 * @returns {number} sumatorio de los dos números
 */

const  sumar        =       (a,b)   => a+b;
const  restar       =       (a,b)   => a-b;
const  dividir      =       (a,b)   => a/b;
const  multiplicar  =       (a,b)   => a*b;



math.sumar = sumar; 
math.restar = restar; 
math.dividir = dividir; 
math.multiplicar = multiplicar; 

module.export = math;