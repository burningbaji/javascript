/*
[
  value1, // string
  value2, // number
  value3, // boolean
  value4, // null
  value5, // []
  value6, // {},
  value7, // function() {}
  value8, // () => {}
]
*/
const Item = 'burning cafe';
const food = ['sandwiz' , 'califonia coffe' , 'french fires' , 'mamus' , 'drinks' , 'cakes' , Item];


    // console.log(food);

    food.push('Biryani');
    food.push('IceCream' , 'thumsup');

   
    console.log(food);
 printTotalFood();
    console.log(food[1]);
    console.log(food[2]);

    // console.log(`Total number of food items ${food.length}`);
    console.log(food[food-3]);

    food[4] = 'killy';
    console.log(food);

    function printTotalFood(){
        console.log(` The total food is ${food.length}`);
    }