//Tenorio Veloz Alisson Dafne

//Variables
let listaAmigos = [];

//Funciones

function agregarAmigo(){
    //Obtenemos el nombre que ingrese el usuario
    let nombre = document.getElementById("amigo").value;

    //Verificar que no este vacio
    if(nombre === ""){
        alert("Por favor, inserte un nombre!");
        return;
    }
    //Agregamos el nombre a la lista
    listaAmigos.push(nombre);
    console.log(listaAmigos);

    //Limpiar el campo
    document.getElementById("amigo").value = '';

    //Actualizar la lista de amigos
    actualizarAmigo();
}

function actualizarAmigo(){
    //Obtenemos el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    //Limpiamos la lista antes de actualizar
    lista.innerHTML = "";
    
    //recorrer el arreglo y agregar nombres
    for (let i = 0; i < listaAmigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        let li = document.createElement("li");
        li.classList.add("list-item"); // Agregar clase para estilizar (opcional)
        // Asignar el nombre del amigo al elemento <li>
        li.textContent = listaAmigos[i]; 
         lista.appendChild(li); // Añadir el <li> a la lista
    }
}

function sortearAmigo(){
    //Validamos que la lista no este vacia
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    //Obtenemos un indice con base en la longitud
    let indice = Math.floor(Math.random() * listaAmigos.length);

    //Obtenemos el nombre del amigo
    let amigoGanador = listaAmigos[indice];

    //Mostramso el resultado
    let resultado = document.getElementById("resultado");
    //Mostrar el amigo seleccionado
    resultado.innerHTML = `<li class="result-item">🎉 Amigo secreto: <strong>${amigoGanador}</strong> 🎉</li>`;
}
