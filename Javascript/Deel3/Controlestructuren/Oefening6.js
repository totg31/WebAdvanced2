let antwoord = prompt('Doe je graag aan sport?').toUpperCase();

switch (antwoord){
    case 'JA':
        alert('Just do it!');
        break;
    case 'NEEN':
        alert('Luizak');
        break;
    default:
        alert('nie duidelijk');
}