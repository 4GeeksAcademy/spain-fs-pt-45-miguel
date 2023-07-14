const prompt = require("prompt-sync")({ sigint: true });

let isRunning = true;

while (isRunning) {
    console.log('1. Test system');
    console.log('q. Quit');
    const userChoice = prompt('Por favor, elige una opción:');

    switch (userChoice) {
        case ('1'):
            console.log('System is running!');
            break;
        case ('q'):
            console.log('Goodbye!');
            isRunning = false;
            break;
        default:
            console.log('Please, select a valid option');
    }
}