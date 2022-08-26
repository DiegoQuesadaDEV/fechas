const fecha = new Date();
const nacimiento = new Date(1997, 06, 10);
const esMasTarde = fecha > nacimiento;
const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth()+1;
const anoNacimiento = nacimiento.getFullYear();