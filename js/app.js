function getComputerChoice(){
    let seleccion = Math.floor((Math.random() * 3) +1);

    if (seleccion == 1){
        return "piedra";
    } else if(seleccion == 2){
        return "tijeras";
    } else if(seleccion == 3){
        return "papel"
    }
}

let playerSelection = prompt('Escribe Piedra, papel o tijeras').toLowerCase();