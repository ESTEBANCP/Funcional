var obj1 = {
    a: 16070013,
    b: 2
};
 
var obj2 = {
    a: 1,
    b: 2
};
 
var map = new Map();
map.set( obj1, 16070013);
 
console.log( 'map.has(obj1) = ', map.has(obj1) );    // true
console.log( 'map.has(obj2) = ', map.has(obj2) );    // false