const precioNoche = 6500;
let cantidadNoches = prompt("ingrese la cantidad de noches que desea quedarse");

let resultado = precioNoche * cantidadNoches;

if (resultado > precioNoche * 10 ){
    alert("Ya que su reserva sería por mas de 10 días, se le aplicará un descuento del 10% al momento de reservar")
}
alert("El valor por una estadía de "+ cantidadNoches + " noches, es de $" + resultado + " pesos.");
  