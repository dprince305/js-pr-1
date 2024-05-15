let a=500;
let b=100;
let c=100;
let d=600;
let e=a+b+c+d;
var f=(e*10)/100;
var g=(e-f);

document.getElementById("heading").innerHTML = "Product Purchase Bill";
document.getElementById("name").innerHTML = "Product Name:-";
document.getElementById("name-1").innerHTML = "Cheese";
document.getElementById("name-2").innerHTML = "Milk";
document.getElementById("name-3").innerHTML = "Chocolate";
document.getElementById("name-4").innerHTML = "Butter";
document.getElementById("pri-t").innerHTML = " Product Price:-";
document.getElementById("pri-1").innerHTML = a+"Rs";
document.getElementById("pri-2").innerHTML = b+"Rs";
document.getElementById("pri-3").innerHTML = c+"Rs";
document.getElementById("pri-4").innerHTML = d+"Rs";
document.getElementById("total").innerHTML = "Total of Products Price:-" + e+"Rs";
document.getElementById("di").innerHTML = "Discount:-"+f +"Rs";
document.querySelector(".dis").innerHTML = " After Discount Payable Amount:-" + g+"Rs";


