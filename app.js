// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = inputAmigo.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Crear un elemento de lista para mostrar el nombre
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para realizar el sorteo de amigos secretos
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Limpiar resultados anteriores
    resultado.innerHTML = '';

    // Validar que haya al menos 3 amigos para el sorteo
    if (amigos.length < 3) {
        alert('Se necesitan al menos 3 amigos para realizar el sorteo.');
        return;
    }

    // Crear una copia del arreglo de amigos para el sorteo
    let disponibles = [...amigos];
    let asignaciones = {};

    // Realizar el sorteo
    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigos[i];
        let posibles = disponibles.filter(nombre => nombre !== amigoActual);

        // Si no hay posibles asignaciones válidas, reiniciar el sorteo
        if (posibles.length === 0) {
            return sortearAmigo(); // Reiniciar el sorteo
        }

        // Seleccionar un amigo aleatoriamente
        const indiceAleatorio = Math.floor(Math.random() * posibles.length);
        const asignado = posibles[indiceAleatorio];

        // Asignar el amigo secreto
        asignaciones[amigoActual] = asignado;

        // Remover el amigo asignado de los disponibles
        disponibles = disponibles.filter(nombre => nombre !== asignado);
    }

    // Mostrar los resultados
    for (let amigo in asignaciones) {
        const li = document.createElement('li');
        li.textContent = `${amigo} → ${asignaciones[amigo]}`;
        resultado.appendChild(li);
    }
}