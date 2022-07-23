function getComputerChoice(){
    let seleccion = Math.floor((Math.random() * 3));

    items = ["piedra","papel","tijeras"];
    return items[seleccion]
}

function playRound(){

    let playerSelection = prompt('Escribe Piedra, papel o tijeras').toLowerCase();

    let computer = getComputerChoice();
    
    if(playerSelection == "piedra" && computer == "piedra"){
        alert(`Empate!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    } else if(playerSelection == "piedra" && computer == "tijeras"){
        alert(`Gana el jugador!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "piedra" && computer == "papel"){
        alert(`Gana la computadora!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computer == "piedra"){
        alert(`Gana el jugador!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computer == "papel"){
        alert(`Empate!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computer == "tijeras"){
        alert(`Gana la computadora!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computer == "piedra"){
        alert(`Gana la computadora!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computer == "papel"){
        alert(`Gana el jugador!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computer == "tijeras"){
        alert(`Empate!, la computadora ha seleccionado ${computer} y el jugador ha seleccionado ${playerSelection}`)
    }
}

