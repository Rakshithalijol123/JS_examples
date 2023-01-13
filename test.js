// var elem = new Array("Rakshit" , "Kopresh" , "Radha" , "Rakesh");
// var elem2 = elem.join(" ");
// console.log(elem2);
// console.log(elem.reverse());
// console.log(elem.sort());

var list1 = [2,4,6,8,10];
var list2 = list1.slice(1,3);
console.log(list2);
list1.push(12);
console.log(list1);
list2.pop();
console.log(list2);
list1.unshift(1);
console.log(list1);
list1.shift();
console.log(list1);
console.log(list1 + "," + list2);