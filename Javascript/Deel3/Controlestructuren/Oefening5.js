let bol = true;

while (bol === true){
    let getal = parseInt(prompt('Give numbah'));

    if(getal === 50){
        alert('Proficiat');
    }
    else if(getal < 50){
        alert('Te laag');
    }
    else{
        alert('Te hoog');
    }
}