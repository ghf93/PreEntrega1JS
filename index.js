// Obtener el elemento del botón y el párrafo donde mostraremos el resultado.
const rollButton = document.getElementById('rollButton');
const resultPara = document.getElementById('result');

// Contador de intentos
let remainingAttempts = 3;

// Función para simular el lanzamiento del dado y obtener un número aleatorio del 1 al 10.
function rollDice() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return randomNum;
}

// Función para mostrar el resultado en el párrafo y permitir al usuario adivinar el número.
function playGame() {
    if (remainingAttempts === 0) {
        alert('Ya no te quedan intentos. El juego se reiniciará.');
        remainingAttempts = 3;
    }

    const winningNumber = rollDice();
    const userGuess = prompt(`Intentos restantes: ${remainingAttempts}\n\nAdivina el número ganador entre 1 y 10:`);
    
    if (userGuess === null) {
        return; // El usuario hizo clic en "Cancelar" o cerró la ventana del prompt.
    }

    const parsedGuess = parseInt(userGuess);
    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 10) {
        alert('Por favor, ingresa un número válido entre 1 y 10.');
    } else {
        remainingAttempts--;

        if (parsedGuess === winningNumber) {
            alert('¡Felicidades! Adivinaste el número ganador.');
            remainingAttempts = 3; // Reiniciamos los intentos para una nueva partida.
        } else {
            if (remainingAttempts > 0) {
                const diff = Math.abs(parsedGuess - winningNumber);
                const hint = parsedGuess > winningNumber ? 'menor' : 'mayor';
                alert(`Incorrecto. El número ganador es ${hint} que tu suposición. Te quedan ${remainingAttempts} intento(s).`);
            } else {
                alert(`Lo siento, el número ganador era ${winningNumber}. ¡Has perdido!`);
                remainingAttempts = 3; // Reiniciamos los intentos para una nueva partida.
            }
        }
    }
}

// Agregar un evento de clic al botón para lanzar el juego.
rollButton.addEventListener('click', playGame);
