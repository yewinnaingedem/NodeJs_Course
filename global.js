// console.log(global);
global.setTimeout(() => { // this is also ansync 
    console.log("in the time out");
    clearInterval(a);
}, 3000);

const a = setInterval(()=> { // this is ansync 
    console.log("hello Edem");
} , 1000)

console.log(__dirname); // this is to get the direct name like E:\freecodecamp\nodeJs
console.log(__filename); // this is to get the current file name like E:\freecodecamp\nodeJs\global.js