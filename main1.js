
//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
    for (var i = 0; i < array.length; i++){
        callback(array[i]);
    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback, initialValue){
    var total = initialValue;
    forEach(array, function(element){
        total = callback(total, element);
    });
    return total;
}
// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }, 1) === 24
)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    var result = [];
    forEach(array, function(element){
        result.push(callback(element));
    });
    return result;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    return reduce(array, function(total, element){
        if (callback(element)){
            total.push(element);
            return total;
        } else {
            return total;
        }
    }, []);
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

 reduce([1, 2, 3, 4], function(a, v){ return a*v }, 1) === 24

function sum(){
    return reduce(arguments, function(total, element){return (total + element)}, 0);
}
// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var names = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"}
]

names.sort(function(a, b){
  if (a.name<b.name) {return -1}
  else if (b.name<a.name) {return 1}
  else {return 0}
});


// tests
// ---
console.assert(names[0].name === "Brian")
console.assert(names[1].name === "Jesse")
console.assert(names[2].name === "Matt")


// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    results = results.filter(function(element){
        return (element.first[0] === 'J');
    });
   results = results.map(function(element){
        element.fullname = element.first + " " + element.last;
        return element;
        // YOUR CODE HERE
    })
    results.sort(function(a, b){
        if (a.fullname<b.fullname) {return -1}
        else if (b.fullname<a.fullname) {return 1}
        else {return 0}
});

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")