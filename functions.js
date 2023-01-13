// let a = 5
// let b = 10
// let sum = add(a,b);
// console.log(sum)
// function add(a,b)
// {
//     return a+b;
// }


// var a = 10
// var b = 787
// var sum = add()
// console.log(sum)
// function add()
// {
//     return a+b
// }

var num = 1221
var temp = num
var rem,store
var res = palindrome()
console.log(temp)
console.log(res)
if (temp== res)
{
    console.log("It's a palindrome");
}
else
    console.log("Not a palindrome");
function palindrome()
{
    while(rem != 0)
    {
        rem = num % 10
        store = store*10+rem
        num /= 10
    }
    return res;
}
