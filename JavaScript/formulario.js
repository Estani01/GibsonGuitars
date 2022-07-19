const Formulario= document.getElementById("formulario");
Formulario.addEventListener("submit", validacion)
function validacion(e) {
    e.preventDefault();

    let form= e.target;
    sessionStorage.setItem("nombre", form.children[0].value);
    sessionStorage.setItem("mail", form.children[1].value);


   nombreUsuario= sessionStorage.getItem("nombre");
   mailUsuario= sessionStorage.getItem("mail");
   
  const respuestaFormulario= document.getElementById("respuesta-formulario");
  let item=document.createElement("h3");
 item.innerHTML= `<h3>BIENVENIDO ${nombreUsuario}</h3>
 LE ENVIAREMOS TODA LA INFORMACIÓN A ${mailUsuario}`

 respuestaFormulario.append(item);


}



