const btnCalcular = document.getElementById("calcular").addEventListener('click', calcular);

function calcular(){
    var usuario = document.getElementById("usuario").value;
    var tipo = document.getElementById("tipo").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var destino = document.getElementById("destino").value;

    var costoPeso = peso * 2.25;


    if (usuario !== "" && tipo !== "") {
        switch (destino) {
            case '1':
                var costoDestino = 10 * 0.15;
                var total = costoPeso + costoDestino;
                alert(usuario + " Su total a pagar es de: Q " + total);
                break;
            case '2':
                var costoDestino = 300 * 0.15;
                var total = costoPeso + costoDestino;
                alert(usuario + " Su total a pagar es de: Q " + total);
                break;        
            case '3':
                var costoDestino = 460 * 0.15;
                var total = costoPeso + costoDestino;
                alert(usuario + " Su total a pagar es de: Q " + total);
                break;
            case '4':
                var costoDestino = 178 * 0.15;
                var total = costoPeso + costoDestino;
                alert(usuario + " Su total a pagar es de: Q " + total);
                break;
            case '5':
                var costoDestino = 200 * 0.15;
                var total = costoPeso + costoDestino;
                alert(usuario + " Su total a pagar es de: Q " + total);
                break;
            default:
                break;
        }
    }else{
        alert("Ingrese todos los datos que se le solicitan correctamente");
    }

}