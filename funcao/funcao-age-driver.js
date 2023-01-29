function driveCar(age)
{
    if(age >= 18){
        return "Pode dirigir";
    }

    return "Não pode dirigir";
}

console.log(driveCar(18));
console.log(driveCar(12));