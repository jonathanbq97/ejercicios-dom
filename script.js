function cambiarTexto() {
    let parrafo = document.getElementById("miparrafo");
    parrafo.textContent = "Estudiante de la universidad FET";
    parrafo.style.color ="green";
}


const boton = document.getElementById("boton");

boton.addEventListener("click", () => {

    alert("¡Hiciste clic en el botón!");

});


const mensaje = document.getElementById("mensaje");

mensaje.addEventListener("mouseover", () => {

    mensaje.style.color = "red";

});