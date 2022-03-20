function multiply(a,b) 
{
  return a*b  
}
console.log(multiply(2,3))

//functions can be stored in a variable and thus can be called by that variable
//thus functions are called first class variable
let x= function yoyo(para) {
    let t= para*para*para
    return t;
}
console.log(x(2))
x(4)