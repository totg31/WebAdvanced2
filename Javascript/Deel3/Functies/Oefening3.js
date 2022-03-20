let getal1 = parseInt(prompt('Geef eerste getal'));
let getal2 = parseInt(prompt('Geef tweede getal'));

function isVijftig(getal1, getal2){
    if(getal1 === 50 || getal2 === 50){
        return 'Een van de getallen is 50!';
    }
    else if(getal1 + getal2 === 50){
        return 'De som van de 2 getallen is 50!';
    }
    else {
        return 'Geen getal is 50...';
    }
}

alert(isVijftig(getal1, getal2));