
function generarLetraAleatoria() {
    const numeroAleatorio = Math.floor(Math.random() * 26);
    const letraAleatoria = String.fromCharCode(65 + numeroAleatorio);
    return letraAleatoria;
}

document.getElementById("generarLetraBoton").addEventListener("click", function() {
    document.getElementById("generarLetraBoton").disabled = true;

    setTimeout(function() {
        const letraRandom = generarLetraAleatoria();
        document.getElementById("letraAleatoria").textContent = letraRandom;

       
        document.getElementById("generarLetraBoton").disabled = false;
    }, 2000); 
});
//*Duplicador de divs*//

const contenedor = document.getElementById("Cuadricula");
const botonDuplicar = document.getElementById("botonDuplicar");

botonDuplicar.addEventListener("click", function() {
    const divOriginal = document.querySelector(".Element11");
    const divClonado = divOriginal.cloneNode(true);
    contenedor.appendChild(divClonado);
});
const botonEliminar = document.getElementById("botonEliminar");

botonEliminar.addEventListener("click", function() {
    const divs = contenedor.querySelectorAll(".Element11");
    if (divs.length > 1) {
     
        const ultimoDiv = divs[divs.length - 1];
        contenedor.removeChild(ultimoDiv);
    }
});
