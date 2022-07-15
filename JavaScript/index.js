let formulario= document.getElementById("formulario");
formulario.addEventListener("submit", validacion);

function validacion(e){
   e.preventDefault();

   let form= e.target;
   let usuarioNombre= form.children[0];
    let usuarioDni= form.children[1];
    let usuarioMail=form.children[2];
    
}

let input=document.getElementById("input");
input.addEventListener("keydown",(e)=>{
    if (e.key==="enter"){
        console.log("formulario enviado")
        ;
    }
})




let NUEVAS=[
    {id: 1, precio: "3500$",modelo: "SG Standard Reissue Stop Bar VOS Cherry Red", marca: "Gibson", img:"FOTOS/guitarras/sg-standard.jpg"},
    {id: 2, precio: "2199$", modelo: "Les Paul Standard 60s Bourbon Burst", marca: "Gibson",img:"FOTOS/guitarras/gibson-les-paul-standard-60s-bourbon-burst.jpg"},
{id: 3, precio: "2899$", modelo: "ES-335 Vintage Burst",marca:"Gibson" , img:"FOTOS/guitarras/gibson-es-335-vintage-burst.jpg"},
{id: 4, precio: "2100$", modelo: "Explorer AN",marca:"Gibson", img:"FOTOS/guitarras/gibson-explorer.jpg"},

   
   
    
    
]
let containerNuevas=document.getElementById("productos-nuevos");

for( guitarra of NUEVAS){

    let item=document.createElement("div");
item.innerHTML= `<div class="card" style="width: 15rem" >
                <img src="${guitarra.img}" style="width:100%">
                <div class="card-body">
                
                <h4>${guitarra.modelo}</h4>
                <h3>${guitarra.precio}</h3>
                <p><button>Agregar al carrito</button></p>
                                                    `


containerNuevas.append(item);
}


//ACUSTICAS//







