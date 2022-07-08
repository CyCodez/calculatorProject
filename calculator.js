function dis(param){
    document.getElementById("result").value+=param;
}
function clr(){
    document.getElementById("result").value="";
}
function solve(){
    var x=document.getElementById("result").value;
   var y= document.getElementById("result").value=eval(x);
if(y===10){
    document.getElementById("tab").style.backgroundColor="red";
}else{ document.getElementById("tab").style.backgroundColor="white";}
}

let trs = document.querySelectorAll("input");
console.log(trs)
for(let tr of trs){
    tr.style.backgroundColor = mycolor()
}

function mycolor(){
let color = ["red","green","blue","pink","purple","orange"];
return color[Math.floor(Math.random()*color.length)]
}
document.getElementById("result").style.backgroundColor="white";

// function closure1(a){
//   function closure2(b){
// return a / b
//     }
//     return closure2
// }

// console.log(closure1(8)(2));

// function wonderful(){
//     let count = 1
//     function wonder(){
//         count++
//         console.log(count);
//     }
//     setInterval(wonder, 1000)
// }
// wonderful()
