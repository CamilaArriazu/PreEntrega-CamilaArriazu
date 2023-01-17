alert("Bienevenido a Cecé showroom")
const prendasCarrito= []

class infoprendas{
    constructor (codigo, precio, categoria){
        this.codigo = codigo;
        this.precio = parseInt(precio);
        this.categoria = categoria;
    }
}
function prendas(){
    const codigo = prompt("Ingresa el código de la prenda")
    const precio = parseInt(prompt("Ingresa el precio de la prenda"))
    const categoria = prompt("Ingresa la categoria de la prenda")
}


const agregarPrenda= new infoprendas(codigo, precio, categoria)

prendasCarrito.push(agregarPrenda)

alert(prendasCarrito)
