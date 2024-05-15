var a=1000;
var b=10;
var c=5;

var s=(a*b*c)/100;
var a=(100*s)/(b*c);
var b=(100*s)/(a*c);
var c=(100*s)/(a*b);
var d=a+s;
var e=d-a;




document.getElementById("title").innerHTML = "Simple Interest";
document.getElementById("P").innerHTML = " Principal Amount :-";
document.getElementById("P-amount").innerHTML = a;
document.getElementById("R").innerHTML = "  Rate of interest :-";
document.getElementById("R-amount").innerHTML = b;
document.getElementById("T").innerHTML = "  Number of years:-";
document.getElementById("years").innerHTML = c;
document.getElementById("acc").innerHTML="Total accrued amount :- "
document.getElementById("A").innerHTML=d;
document.getElementById("I").innerHTML= "Interest :-";
document.getElementById("int").innerHTML=e;