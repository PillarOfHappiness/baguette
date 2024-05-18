// Judy Zhang HW#5 Chapters 2, 3, 4

function loopingTriangle(){
    let tags = '#'
    for (let y = 0; y < 7; y++){
        console.log(tags)
        tags += "#"
        if (tags.length > 7){
            break;
        }
    }
}

function fizzBuzz(){
    for (let i = 1; i < 101; i++){
        if (i % 3 == 0){
            console.log("Fizz");
        }else if (i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
    }
}

function chessBoard(){
    let size = 8;
    let line = "";
    for (let y = 0; y < size; y++){
        for (let x = 0; x < size; x++){
            if(y % 2 == 0){
                if(x % 2 == 0){
                    line += ' ';
                }else{
                    line += '#';
                }
            }else{
                if(x % 2 == 0){
                    line += '#';
                }else{
                    line += ' ';
                }
            }
        }
        line += "\n";
    }
    return console.log(line);
}


function min(value1,value2){
    if(value1 < value2){
        return value1
    }else{
        return value2
    }
}

function isEven(posNum){
    if (posNum < 0){
        posNum *= -1; 
        isEven(posNum);
    }else if(posNum == 0){
        result = true;
    }else if(posNum == 1){
        result = false;
    }else{
        posNum -= 2;
        isEven(posNum)
    }
    return result
}

function countBs(string){
    let result = 0;
    for(let char = 0; char < string.length; char++){
        if(string[char] == 'B'){
            result += 1
        }
    }
    return result;
}

function countChar(string,checkChar){
    let result = 0;
    for(let char = 0; char < string.length; char++){
        if(string[char] == checkChar){
            result += 1;
        }
    }
    return result;
}

function range(start,end,step){
    if(step == null){
        step = 1;
    }
    let array = [];
    for (let i = 0; i < end; i+=step){
        array.push(start+i);
    }
    return array;
}


function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}

function reverseArray(array){
    let newArray = [];
    for (let i = array.length-1; i > 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array){
	let arrayLength = array.length/2; 
 	for(let i = 0, j = array.length-1-i; i < arrayLength; i++, j--){
      	let flip = array[i];
  		array[i] = array[j];
        array[j] = flip;
  }
}

function arrayToList(array){
    let result = {};
    let thisList = result;
    for (let i = 0; i < array.length; i++){
        let newList = {value: array[i],rest: null};
        if(typeof thisList.rest === 'undefined'){
            result = newList;
        }else{
            thisList.rest = newList;
        }
        thisList = newList;
    }
    return result;
}

function listToArray(list){
    let result = [];
    result.push(list.value);
    while(list.rest != null){
        list = list.rest;
        result.push(list.value)
    }
    return result;
}

function prepend(element, list){
    return {value: element, rest: list};
}

function nth(list,num){
    let array = listToArray(list);
    return array[num];
}

function nthRecursive(list,num){
    if (num === 0){
        return list.value;
    }else if (list.rest === null){
        return undefined;
    }else{
        return nthRecursive(list.rest, num-1);
    }
}

function deepEqual(value1,value2){
    if (value1 === value2){
        return true;
    }else if(typeof value1 === "object" && value1 !== null && typeof value2 === "object" && value2 !== null){
        let combinedKeys = Object.keys(value1).concat(Object.keys(value2))
        for (each of combinedKeys) {
            if (typeof value1[each] === "object" && typeof value2[each] === "object") {
              if (deepEqual(value1[each], value2[each]) === false) {
                return false;
              }
            } else if (value1[each] !== value2[each]) {
              return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

// CHAPTER 2

// loopingTriangle();

// fizzBuzz();

// chessBoard();


// CHAPTER 3

// console.log(min(2,5))

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// console.log(countBs("NoBeaNsLeftHereTonIgHT"))

// console.log(countChar("NoBeaNsLeftHereTonIgHT", 'T'))


// CHAPTER 4

// console.log(range(1,10));
// console.log(range(1,10,2));

// console.log(sum(range(1,10)));

// console.log(reverseArray(range(1,10)));

// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// console.log(arrayToList([1,2,3,4,5]))

// console.log(listToArray(arrayToList([1,2,3])))

// console.log(prepend(10,prepend(20,null)));

// console.log(nth(arrayToList([10,20,30]),1));

// console.log(nthRecursive(prepend(10,prepend(20,null)),1))

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));