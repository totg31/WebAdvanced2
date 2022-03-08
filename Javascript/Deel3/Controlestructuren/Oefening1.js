let year = parseInt(prompt('Geef je geboortejaar in'));
const currentYear = new Date().getFullYear();

let message = ((currentYear - year) >= 20) ? 'Je mag deze site bezoeken'
    : 'Je bent te jong';

alert(message);

