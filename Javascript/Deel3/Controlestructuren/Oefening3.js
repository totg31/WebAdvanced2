let tijd = new Date().getHours();

if (tijd < 12){
    alert('Goede voormiddag.')
}
else if(tijd > 12){
    alert('Goede namiddag.')
}
else{
    alert('Goede middag')
}