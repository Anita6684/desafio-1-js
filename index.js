let precio = 400000;
let cantidad = 1;

function actualizarTotal(){

    document.querySelector(".cantidad").innerHTML = cantidad;

    document.querySelector(".valor-total").innerHTML = precio * cantidad;

}

function aumentar(){

    cantidad++;

    actualizarTotal();

}

function disminuir(){

    if(cantidad > 1){

        cantidad--;

        actualizarTotal();

    }

}