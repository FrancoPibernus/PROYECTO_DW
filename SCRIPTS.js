let cantidadNoches =parseInt(prompt("ingrese la cantidad de noches que desea quedarse"));
const precioNoche = 6500;

let resultado = precioNoche * cantidadNoches;

while (cantidadNoches <= "10"){
    alert("El valor por una estadía de "+ cantidadNoches + " noches, es de $" + resultado + " pesos.");
    break;
}

if (resultado > precioNoche * 10 ){
    alert("Ya que su reserva sería por mas de 10 días, se le aplicará un descuento del 10% al momento de reservar")
    alert("El valor sin el descuento por una estadía de "+ cantidadNoches + " noches, es de $" + resultado + " pesos.");
}



