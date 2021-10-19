var crusts = ["deep dish", "hand tossed", "thin and crispy"];
var sauces = ["traditional", "marinara"];
var cheese = ["mozzerella", "feta", "extra cheese"];
var addons = ["pepperoni", "sausage", "mushrooms", "onions", "peppers", "olives"]


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven(crusts[Math.floor(Math.random() * (crusts.length-1))], sauces[Math.floor(Math.random() * (sauces.length-1))], cheese[Math.floor(Math.random() * (cheese.length-1))], addons[Math.floor(Math.random() * (addons.length-1))]);
console.log(s1);
