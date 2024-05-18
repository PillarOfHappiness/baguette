/**
//SHORT-CIRCUITING OF LOGICAL OPERATORS
console.log(null || "" || 0 || 'yuh'); //all equal null for || meanwhile for ?? only null or undefined
console.log(null ?? "" ?? 0); //must be consistent

//BINDINGS
let mood = 'light';     //reg variables **GLOBALLY
let theme = mood;
console.log(mood, theme);
theme = 'dark';
console.log(mood, theme);

let time = 'afternoon';  //function variables **LOCALLY
function timePass(givenTime){
    time = 'morning';               //GLOBALLY just use the name? == ()=>{time = 'morning';}
    return givenTime = 'night';     //generates new variable *does not affect global variable
}
timePass(time);
console.log(time);

let sun = ['rise','fall','set','dawn'];
function moonPush(){
    for (let term in sun){      //EXACTLY THE SAME AS for (let i=0;i<sun.length;i++) **BECUZ IT IS FOR IN!
        // console.log(sun[term]);
        sun[term] = sun[sun.length-term-1]; //expected output: dawn,set,set,dawn
    }
    return 0;               //!!reverseArrayInPlace returns nothing and simply uses the argument variable
}
moonPush();
console.log(sun)

//!!        YAY DID IT :D
let color = ['red','blue','yellow'];
function theory(paint){
    for (let hue in paint){
        paint[hue] = `shiny ${paint[hue]}`;
    }
}
theory(color);
console.log(color);

//Simplification PRAC
let comp = ['crayola','plus','extra','skool']
const crayon = (brand) => { //let and var does equivalent of a performance
    for (let wrap in brand){
        brand[wrap] = (brand[wrap].length > 5 ? brand[wrap].toUpperCase() : brand[wrap].toLowerCase());
    }
}
crayon(comp);
console.log(comp);

let collection = ['sonny angels','watch list']; //push adds to the back, unshift adds to the front, shift removes the front
collection.shift();
// collection.unshift('yuhgioh');
// collection.push('pokemon');
console.log(`view: ${collection}`);

// DICTIONARIES AKA LISTS
let dictionary = {
    need: true,
    "size and order": ["small","medium","large"]
};
// console.log(dictionary["size and order"]);   //to interact with strings
delete dictionary["size and order"];            //remove
dictionary["size"] = ["s1","s2","s3"];          //add
console.log(dictionary,dictionary.size);        //check

const results = {score: 0, grade: 'A'};
results.score = 5;
results.grade = 'Z';
console.log(results);

//iterate through dictionary
// .includes('topic')            // === if key == 'top' (includes is for arrays?) //idk ignore?
let shelf = {'top':'horror','middle':'fiction','bottom':'science'};
// for (let key in shelf){ // !!!! -- DICTIONARY DIFFER FROM ARRAYS IN FOR IN LOOPS
//     console.log(key, shelf[key]);       //dictionary.key (for specific location/use?)
// }

console.log(Object.keys(shelf),Object.values(shelf));

// let hi;
// hi = prompt("hey, how are ya? ");
// alert("ha i don't really care. -_-");
// console.log(hi);

let hand = [
    {deck:["heart","diamond"]},
    {deck:["diamond","shade"]},
    {deck:["shade","club"]},
    {deck:["club","heart"]}
];
let loud = {fair:"left",mode:"right",sight:"rude"};
for (let card of hand){  //DOES NOT APPLY TO DICTIONARY
    console.log(card);
    card.deck.includes("heart") ? console.log('yuh') : console.log("nuh") 
}
for (let num in loud){
    console.log(num);
}

let marble = "springCleaning";
console.log(marble.split("ing"));
console.log(marble.slice(-5));
*/
