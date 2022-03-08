let d = new Date();
let tijd = d.getHours()*60 + d.getMinutes();

if (tijd < 12*60 && tijd > 7 * 60){
    alert('Goedemorgen | 07.00u - 12.00u');
}
else if(tijd > 12*60 && tijd < 18*60){
    alert('Goede dag | 12.00u - 18.00u');
}
else{
    alert('Goede avond | 18.00u - 07.00u');
}


