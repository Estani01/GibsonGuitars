let Formulario= document.getElementById("formulario");
Formulario.addEventListener("submit", validacion)
function validacion(e) {
    e.preventDefault();

    let form= e.target;
    sessionStorage.setItem("nombre", form.children[0].value);
    sessionStorage.setItem("mail", form.children[1].value);
}

   nombreIngresado= sessionStorage.getItem("nombre");
   mailIngresado= sessionStorage.getItem("mail");

   
//seccion de libreria//

   let enviar =document.getElementById("boton");
   enviar.addEventListener("click", () =>{
     Swal.fire({
         position: 'top-end', 
         icon: 'success',
         title: 'tu suscripcion fue inscripta!',
         showConfirmButton: false,
         timer: 1500
       });
   });


console.log(enviar);




