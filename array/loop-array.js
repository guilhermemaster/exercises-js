let cars = ['ferrari', 'civic', 'palio', 'classic'];

for(let i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
}

console.log('-----------');

cars.forEach( car => {
    console.log(car);
} )