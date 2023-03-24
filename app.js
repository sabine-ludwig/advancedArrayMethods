
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what 
// is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and 
    // see all its properties! This helps you to know what you can access with dot notation inside the filter. 
    // Do this every time you use a .filter or else you are working in the dark!
    // let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)

//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false
        }
    })
    return results;
}
// let vegetarianFood = problemOne();
// console.log('vegetarian food from vegetarianFood: ', vegetarianFood)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(){

    let userChoice = prompt("Enter type of cuisine.")
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.cuisine === userChoice){
            return true;
        }
        else{
            return false
        }
    })
    return results;
}
// let userDishes = problemTwo();
// console.log(`Available selections:`, userDishes)

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.cuisine === "Italian" && el.servings > 5){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}
// let ItalianFamilyStyle = problemThree();
// console.log(`Available selections:`, ItalianFamilyStyle)

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.id === el.servings){
            return true;
        }
        else{
            return false;
        }
    })
    return results
}

// let idMatches = problemFour()
// console.log(`Available selections:`, idMatches)

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.servings % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    })
    return results
}

// let evenServings = problemFive()
// console.log(`Available selections:`, evenServings)

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.ingredients.includes("chickpea")){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}

// let chickpeaDishes = problemSix()
// console.log(`Available dishes:`, chickpeaDishes)

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(){
    let userIngredient = prompt("Choose an ingredient.")
    let results = dishes.filter(function(el){
        console.log(el)
        if(el.ingredients.includes(userIngredient)){
            return true;
        }
        else{
            return false;
        }
    })
    return results
}

// userIngredientDish = problemSeven()
// console.log(`Available dishes:`, userIngredientDish)

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEight(){
    let results = dishes.map(function(el){
        return el.cuisine;
    })
    return results
}
// let cuisineTypes = problemEight()
// console.log(`Cuisine Types:`, cuisineTypes)

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine(){
    let results = dishes.map(function(el){
        return el.cuisine + " " + el.name;
    })
    return results
}

// let dishesWithCuisine = problemNine()
// console.log(`Dishes with cuisne type:`, dishesWithCuisine)

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problemTen(){
    let results = dishes.filter(function(el){
        if(el.cuisine === 'Vegetarian'){
            return true;
        }
        else{
            return false;
        }})
    let mapresults = results.map(function(el){
        return el.cuisine + ' ' + el.name
    })
    return mapresults;
}

// let veggieDishesWithCuisine = problemTen()
// console.log('vegetarianNames from problemTen', veggieDishesWithCuisine)

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function problemEightB(){
    let results;
    results = cuisineTypes.filter(function(el, index){
        return cuisineTypes.indexOf(el) === index;
    });
    return results;
}

// uniqueCuisines = problemEightB()
// console.log('uniqueCuisines from problemEightB', uniqueCuisines)

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    let results = dishes.filter(function(el){
        if(el.ingredients.includes('tomato') || el.ingredients.includes('cheese')){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

// cheeseOrTomato = problemEleven()
// console.log('orProblem from problemEleven', cheeseOrTomato)

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function problemTwelve(){
    let allServingsArray = dishes.map(function(el){
        return el.servings;
    })
    return allServingsArray.reduce(function(total, el){
        return total + el;
    })
}

// let totalServings = problemTwelve()
// console.log(`Total Servings:`, totalServings)

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
