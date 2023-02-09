//insight: During code execution js moves all declaration at the top. Which is why if you assign value on a variable before declaration that doesn't give error. this behavior is called hoisting

//1. hoisting is possible only in var declaration

x = 5;
document.querySelector(".app").innerHTML = `<p>the value of x is ${x}</p>`;
var x;
