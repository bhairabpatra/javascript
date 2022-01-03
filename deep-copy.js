obj1 ={
    name:"bhairab",
    age:30,
    sex:"male"
}

// newObject  = Object.assign({}, oldObject);
obj2 = Object.assign({}, obj1);

// var newObject = JSON.parse(JSON.stringify(oldObject));
obj2= JSON.parse(JSON.stringify(obj1))

obj2.name="Shree"
console.log(obj1)
console.log(obj2)

