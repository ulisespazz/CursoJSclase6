class productos {
    constructor(nombre,producto,precio){
    this.nombre = nombre
    this.producto = producto
    this.precio = precio
    }
}
let producto
let tipoProdcuto
let seguir = true
let condicion
let Precio = 0
let total = 0
let Carrito = [];

const producto1 = new productos("Agua", "Bebida", 60)
const producto2 = new productos("CocaCola", "Bebida", 130)
const producto3 = new productos("Pepsi", "Bebida", 130)
const producto4 = new productos("7up", "Bebida", 120)
const producto5 = new productos("Mirinda", "Bebida", 110)
const producto6 = new productos("Speed", "Bebida", 150)

const producto7 = new productos("Gomitas", "Golosina", 60)
const producto8 = new productos("Caramelos", "Golosina", 60)
const producto9 = new productos("Alfajor", "Golosina", 100)
const producto10 = new productos("Chupetin", "Golosina", 40)
const producto11 = new productos("Chicle", "Golosina", 60)

const producto12 = new productos("PapasLays", "Snacks", 100)
const producto13 = new productos("Doritos", "Snacks", 120)
const producto14 = new productos("3d", "Snacks", 100)
const producto15 = new productos("Cheetos", "Snacks", 110)
const producto16 = new productos("Pringles", "Snacks", 400)


while(seguir){
    producto = prompt("Ingrese que producto decea comprar.(Bebidas - Golosinas - Snacks)").toLowerCase()
    while ((producto!="bebidas") && (producto!="golosinas") && (producto!="snacks")){
        alert("Error ingrese un producto que sea correcto.")
        producto = prompt("Ingrese que producto decea comprar.(Bebidas - Golosinas - Snacks)").toLowerCase()
    }
    // Switch para que el usuario elija su producto/s a comprar.
    switch(producto){
        case "bebidas":
            tipoProdcuto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            while((tipoProdcuto!="agua")&&(tipoProdcuto!="cocacola")&&(tipoProdcuto!="pepsi")&&(tipoProdcuto!="7up")&&(tipoProdcuto!="mirinda")&&(tipoProdcuto!="speed")){
                alert("Error ingrese una Bebida correcta")
                tipoProdcuto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            }
            switch (tipoProdcuto){
                case "agua":
                    alert("Eligió Agua - Precio: $60")
                    sumar(60)
                    carrito(producto1)
                    break;
                case "cocacola":
                    alert("Eligió Coca-Cola - Precio: $130")
                    sumar(130)
                    carrito(producto2)
                    break;
                case "pepsi":
                    alert("Eligió Pepsi - Precio: $130")
                    sumar(130)
                    carrito(producto3)
                    break;
                case "7up":
                    alert("Eligió 7up - Precio: $120")
                    sumar(120)
                    carrito(producto4)
                    break;
                case "mirinda":
                    alert("Eligió Mirinda - Precio: $110")
                    sumar(110)
                    carrito(producto5)
                    break;
                case "speed":
                    alert("Eligió Speed - Precio: $150")
                    sumar(150)
                    carrito(producto6)
                    break;
            }
            break;
        case "golosinas":
            tipoProdcuto = prompt("Elija que tipo de Golosina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            while((tipoProdcuto!="gomitas")&&(tipoProdcuto!="caramelos")&&(tipoProdcuto!="alfajor")&&(tipoProdcuto!="chupetin")&&(tipoProdcuto!="chicle")){
                alert("Error ingrese una Golosina correcta")
                tipoProdcuto = prompt("Elija que tipo de Golosina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            }
            switch (tipoProdcuto){
                case "gomitas":
                    alert("Eligió Gomitas - Precio: $60")
                    sumar(60)
                    carrito(producto7)
                    break;
                case "caramelos":
                    alert("Eligió Caramelos - Precio: $60")
                    sumar(60)
                    carrito(producto8)
                    break;
                case "alfajor":
                    alert("Eligió Alfajor - Precio: $100")
                    sumar(100)
                    carrito(producto9)
                    break;
                case "chupetin":
                    alert("Eligió Chupetin - Precio: $40")
                    sumar(40)
                    carrito(producto10)
                    break;
                case "chicle":
                    alert("Eligió Chicle - Precio: $60")
                    sumar(60)
                    carrito(producto11)
                    break;
            }
            break;
        case "snacks":
            tipoProdcuto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            while((tipoProdcuto!="papaslays")&&(tipoProdcuto!="doritos")&&(tipoProdcuto!="3d")&&(tipoProdcuto!="cheetos")&&(tipoProdcuto!="pringles")){
                alert("Error ingrese un Snack correcto")
                tipoProdcuto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            }
            switch(tipoProdcuto){
                case"papaslays":
                    alert("Eligió PapasLays - Precio: $100")
                    sumar(100)
                    carrito(producto12)
                    break;
                case"doritos":
                    alert("Eligió Doritos - Precio: $120")
                    sumar(120)
                    carrito(producto13)
                    break;
                case"3d":
                    alert("Eligió 3D - Precio: $100")
                    sumar(100)
                    carrito(producto14)
                    break;
                case"cheetos":
                    alert("Eligió Cheetos - Precio: $110")
                    sumar(110)
                    carrito(producto15)
                    break;
                case"pringles":
                    alert("Eligió Pringles - Precio: $400")
                    sumar(400)
                    carrito(producto16)
                    break;
            }
            break;
    }
    //condicion para preguntarle al usuario si quiere seguir comprando.
    let condicion = prompt("¿Desea seguir comprando? Si/No").toLowerCase()
        if (condicion == "no"){
            seguir = false;
            break
        }
}
//funciones sumar y carrito.
function sumar(precio){
    total += precio;
    return total
}
function carrito(producto) {
    Carrito.push(producto)
    alert('Se agregó al carro')
}

alert('Para ver el carro ir a la consola.')
Carrito.forEach(listado => {
    console.log(listado);
});
alert(`El total de su compra es de $${total}`)