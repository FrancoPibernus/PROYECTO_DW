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




/* /* class cabañas{
    constructor(diasDeSemana,vacaciones,feriados,finDeSemana){
        this.diasDeSemana=diasDeSemana;
        this.vacaciones=vacaciones;
        this.feriados=feriados;
        this.finDeSemana=finDeSemana;
        this.id=id;
    }

     
}


const cabañas=[
    new cabaña ("2 ambientes", "aire acondicionado", "parrila", "Smart TV",1),
    new cabaña ("Mono ambiente", "aire acondicionado", "parrilla","Tv por cable",2),
    
]

let criterio = parseInt(prompt("A continuación seleccioná los días que vas a venir: \n 1 - Vacaciones \n 2 - Feriados \n 3 - Fin de semana"));

let cantidadDias = parseInt(prompt("Indique cuántos días quiere alojarse "));

let resultado = cantidadDias * criterio;

alert( "el valor total de su estadía será de $" + resultado)
alert("Para volver a cotizar su estadía por favor, actualice la página")







function ordenar(criterio,array){
    let arrayOrdenado = array.slice(0);

    switch(criterio){
    case 1:
        let Vacaciones= arrayOrdenado.sort((a,b)=> a.Vacaciones - b.Vacaciones);
        return Vacaciones;

    case 2:
    let Feriados = arrayOrdenado.sort((a,b)=> a.Feriados.localeCompare (b.Feriados));
    return Feriados;
    
    case 3:
    let finDeSemana = arrayOrdenado.sort((a,b)=> a.finDeSemana - b.finDeSemana);
    return finDeSemana;
    default:
    alert("no es un criterio valido")
    break;
    }
}

 function mostrar(array){
    let info = "";
    array.forEach(element=>{
        info += "\n Días de semana:  " + element.diasDeSemana + "\n Vacaciones:  "+ element.vacaciones + "\n Feriados: " + element.feriados + "\n Fin de semana:  " + element.finDeSemana});
    return info;
    }  */
