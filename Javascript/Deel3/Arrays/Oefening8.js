let datum = new Date();
let maand = datum.getMonth()+1;
let jaar = datum.getFullYear();
dagenInMaand = new Date(jaar, maand, 0).getDate();

console.log(dagenInMaand + '-' + (maand) + '-' +(jaar));
