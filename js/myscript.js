// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21 (esempio pipporossigreen21)

let name = prompt('User, whats your name?');

let surname = prompt('And your surname?');

let color = prompt('favourite color?');

const number = 21;

console.log('This is your password: ' + name + surname + color + number);

document.writeln('Primo metodo con writeln: ' + name + surname + color + number);

alert('Secondo metodo con alert: ' + name + surname + color + number);

document.getElementById('my-pswd').innerHTML = 'Terzo metodo con getElementById: ' + name + surname + color + number;

console.log(
`
    Stampa a console con backtick: ${name} + ${surname} + ${color} + ${number}
`
);