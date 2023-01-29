function contChr(text)
{
    let contLetters = text.length;   

    if(contLetters <= 10){
        return "Dentro do limit";
    }

    return "Fora do Limit";
}

console.log(contChr("A vida é bela é boa ao mesmo tempo e coisa emememememem"));
console.log(contChr("A vida"));