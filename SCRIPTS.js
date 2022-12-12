function calcular(){
    alert("A continuación indique la cantidad de noches que desea hospedarse en nuestro alojamiento");

    const precioNoche = 6500;

    let cantidadNoches =parseInt(prompt("ingrese la cantidad de noches que desea quedarse"));

    let resultado = precioNoche * cantidadNoches;

    while (cantidadNoches <= "10"){
    alert("El valor por una estadía de "+ cantidadNoches + " noches, es de $" + resultado + " pesos.");
    break;
    }

    if (resultado > precioNoche * 10 ){
    alert("Ya que su reserva sería por mas de 10 días, se le aplicará un descuento del 10% al momento de reservar")

    alert("El valor sin el descuento por una estadía de "+ cantidadNoches + " noches, es de $" + resultado + " pesos.");
    }
}


function terminar(mensaje){
    alert("Para consultar nuevamente por el valor de una estadía, actualice la página ");

}


calcular();
terminar();