// Object.freeze  
// Object.seal
// Object. freeze() makes an object immune to everything even little changes cannot be made. 
// Object. seal() prevents from deletion of existing properties but cannot prevent them from external changes.


// creates an object
var obj = {
    // assigns 10 to value 
    value: 10
};
// creates a non-extensible object
Object.seal(obj);
// the value gets updated to 20
obj.value = 20;
console.log(obj.value);



 // creates an object
 var obj = {
    // assigns 10 to value 
    value: 10
};
// creates a non-extensible object
Object.freeze(obj);
// updates the value
obj.value = 20;
// but cannot change the existing value
console.log(obj.value);