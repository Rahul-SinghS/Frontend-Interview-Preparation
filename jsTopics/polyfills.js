//array polyfills -> map , reduce, filter, every , any , find

/*
Topics to study
1. Why "this" doesn't work in arrow functions?
2. Revise -> prototypes
3. Revise -> call, apply, bind -> their polyfills
 */

//1. map polyfll
Array.prototype.customMap = function(mapperFn, thisArg){
    const arr = this;
    let res = []; 
    for(let i = 0; i< arr.length; i++) res.push(mapperFn.call(thisArg, arr[i], i , arr))
    return res;
}

//2. filter pollyfill

Array.prototype.customFilter = function(filterFn, thisArg){
    const arr = this;
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(filterFn.call(thisArg, arr[i], i, arr)) res.push(arr[i]);
    }
    return res;
}

//reduce polyfill

Array.prototype.customReduce = function(reducingFn, initAccVal){
    const arr = this;
    let startIdx = 0;
    let res = initAccVal;

    if(!initAccVal){
        startIdx = 1;
        res = arr[0];
    }

    for(let i = startIdx ; i < arr.length ; i++){
        res = reducingFn(res, arr[i], i, arr);
    }

    return res;
}

//every polyfill

Array.prototype.customEvery = function(checkerFn, thisArg){
    const arr = this;
    for(let i = 0; i < arr.length ; i++){
        if(!checkerFn.call(thisArg, arr[i], i , arr)) return false;
    }

    return true;
}

const arr = [2,4,6];

console.log(arr.every(el => el % 2 === 0));
console.log(arr.customEvery(el => el % 2 === 0));



