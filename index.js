// How to compare two JSON have the same properties without order ?

let obj1 ={name: "Person 1", age:5};

let obj2 ={age:5, name: "Person 1"};


JSON.stringify(obj1)===JSON.stringify(obj2);
//false

console.log(_.isEqual(obj1,obj2));
//true


