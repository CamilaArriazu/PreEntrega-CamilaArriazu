alert("Bienevenido a Cecé showroom")
///Condicional
let productos = prompt("Ingrese la cantidad de productos que desea agregar al carrito")

if (productos >0 && productos<5){
    alert("Tenés un 10% de descuento")
} else if (productos <10){
    alert("Tenés un 20% de descuento")
}
else{
    alert("Tenés un 30% de descuento")
}
///Bucles

let precio
let carrito = 0

do
{  
    precio = prompt("Ingrese el precio de uno de los productos elegidos") 
    precio = parseFloat(precio)
    carrito= carrito + precio
    console.log(carrito)
}while(precio != 0)
alert("El total de su compra es de: " + carrito)
///Función

function porcentaje(total, descuento){
    let resultado
    resultado= total /100 * descuento
    return resultado
}
let total=prompt("Ingrese el total de su compra")
let descuento= prompt ("Ingrese el valor del cupón de descuento asignado segun la cantidad de productos seleccionados")
total=parseFloat(total)
descuento=parseInt(descuento)
let resultado 
resultado= porcentaje(total, descuento)
alert("El total de su compra con descuento es:"+ resultado)

