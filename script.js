/* Elabora un programa que permita averiguar si una persona debe
 sacar su CUIL, sabiendo su fecha de nacimiento.El Código Único 
 de Identificación Laboral(CUIL) es el número que se otorga a 
 todo trabajador al inicio de su actividad laboral en relación 
 de dependencia(mayores de 17 años) que pertenezca al Sistema 
 Integrado de Jubilaciones y Pensiones(SIJP), 
 y a toda otra persona que gestione alguna prestación o
  servicio de la Seguridad Social en la República Argentina.

    Nota:   Se debe comparar con la fecha actual y no tener 
    en cuenta los años bisiestos. */

class Fecha {
    constructor(dia, mes, año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }
}
var fechaok = false;
function check(){
const fechahoy = new Fecha('30', '9', '2022');
var dia_n = document.getElementById("dia").value;
var mes_n = document.getElementById("mes").value;
var año_n = document.getElementById("año").value;
var sijp = false;
var ssra = false;
var edadok = false;
if (document.getElementById("sijp").value == "SI"){
    sijp = true;
}
if (document.getElementById("ssra").value == "SI"){
    ssra = true;
}
const fecha_n = new Fecha(dia_n, mes_n, año_n);
console.log(fecha_n);
// comprueba si es mayor de 17
// Si la diferencia de años es mas de 17 es mayor de edad,
// Si estan en el mismo año pero el mes es menor, es mayor de edad
// Si estan en el mismo mes del mismo año y el dia es menor que hoy, es mayor de edad
if (fechahoy.año - fecha_n.año > 17) {
    edadok = true;
}  else  if ((fechahoy.año - fecha_n.año == 17) && (fechahoy.mes > fecha_n.mes)) {
    edadok = true;
} else {
    edadok = false
}
if ((fechahoy.año - fecha_n.año == 17) && (fechahoy.mes == fecha_n.mes) && (fechahoy.dia >= fecha_n.dia)) {
    edadok = true;
    } else {
    edadok = false;
}
if (ssra){
    alert("Debe solicitar el CUIL")
} else if (sijp && edadok){
    alert("Debe solicitar el CUIL")
} else {
    alert("No tiene que solicitarlo")
}
console.log(edadok)
}
