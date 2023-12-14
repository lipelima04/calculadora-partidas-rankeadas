let victory = 120
let defeat = 5
let rank
let rankedResult = rankedBalance(victory,defeat)
    if(rankedResult<10){
        rank = "Ferro"
    }else if(rankedResult>=11 && rankedResult<=20){
        rank = "Bronze"
    }else if(rankedResult>=21 && rankedResult<=50){
        rank = "Prata"
    }else if(rankedResult>=51 && rankedResult<=80){
        rank = "Ouro"
    }else if(rankedResult>=81 && rankedResult<=90){
        rank = "Diamante"
    }else if(rankedResult>=91 && rankedResult<=100){
        rank = "Lendário"
    }else if(rankedResult>=101){
        rank = "Imortal"
    }

    console.log(`O Herói tem de saldo de = ${rankedResult} está no nivel de = ${rank}`)

function rankedBalance(victory, defeat){
    return victory-defeat
}