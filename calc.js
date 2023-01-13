var a = 8
var b = 4
var op = '%';
function add()
{
    console.log(a+b);
}
function sub()
{
    console.log(a-b);
}
function mul()
{
    console.log(a*b);
}
function div()
{
    console.log(a/b);
}
function mod()
{
    console.log(a%b);
}
switch (op) 
{
    case "+":
        add();
        break;
    case "-":
        sub();
        break;
    case "*":
        mul();
        break;
    case "/":
        div();
        break;
    case "%":
        mod();
        break;
    default:
        console.log("Invalid Operater");
        break;
}