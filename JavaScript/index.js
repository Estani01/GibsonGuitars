let NUEVAS=[
{id: 1, precio: "3500$",modelo: "SG Standard Reissue Stop Bar VOS Cherry Red", marca: "Gibson", img:"FOTOS/guitarras/sg-standard.jpg"},
{id: 2, precio: "2199$", modelo: "Les Paul Standard 60s Bourbon Burst", marca: "Gibson",img:"FOTOS/guitarras/gibson-les-paul-standard-60s-bourbon-burst.jpg"},
{id: 3, precio: "2899$", modelo: "ES-335 Vintage Burst",marca:"Gibson" , img:"FOTOS/guitarras/gibson-es-335-vintage-burst.jpg"},
{id: 4, precio: "2100$", modelo: "Explorer AN",marca:"Gibson", img:"FOTOS/guitarras/gibson-explorer.jpg"},       
];


let containerNuevas=document.getElementById("productos-nuevos");

for( guitarra of NUEVAS){

    let item=document.createElement("div");
item.innerHTML= `<div class="card" style="width: 15rem" >
                <img src="${guitarra.img}" style="width:100%">
                <div class="card-body">
                
                <h4>${guitarra.modelo}</h4>
                <h3>${guitarra.precio}</h3>
                <button type="button" id="${guitarra.id}" class="btn btn-warning">Agregar al carrito</button>`;
                                                    


containerNuevas.append(item);
}


let carrito = [];
let seccionCarrito = document.getElementById("carritoCompras");


let totalCompra = document.getElementById("carritoTotal");
totalCompra.innerHTML = "<h3>Total: </h3>"
seccionCarrito.appendChild(totalCompra);


let montoTotalCompra = document.createElement("h3");
montoTotalCompra.innerText = "$0";
totalCompra.appendChild(montoTotalCompra);


let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h5>Cantidad de productos: </h5>"
seccionCarrito.appendChild(cantidadProductos);

let cantProducts = document.createElement("h5");
cantProducts.innerText = "0";
cantidadProductos.appendChild(cantProducts); 


// funciones del carrito
function agregarAlCarrito (id){

            carrito.push(NUEVAS.find(p=>p.id==id));
            localStorage.setItem("carrito", JSON.stringify(carrito));

            calcularTotalCarrito();
};


function calcularTotalCarrito() {
    let total = 0;
    for (const producto of carrito) {
        total+=producto.precio;
    }
    montoTotalCompra.innerText = "$" + total;
    cantProducts.innerText = carrito.length;
}

document.getElementById(`${guitarra.id}`).onclick = () => agregarAlCarrito(`${guitarra.id}`)  












