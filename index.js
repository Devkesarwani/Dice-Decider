// arr = [1,2,3,4,5,6]
// arr1 = ["1","2","3","4","5","6"]
// document.addEventListener("click",function(){
//     a = arr[Math.floor(Math.random()*arr.length)]
//     document.querySelectorAll("div.dice img")[0].setAttribute("src","images/dice"+a+".png")
// });
// document.addEventListener("click",function(){
//     b = arr1[Math.floor(Math.random()*arr1.length)]
//     document.querySelectorAll("div.dice img")[1].setAttribute("src","images/dice"+b+".png")
// });

var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
var x = random1 > random2 ? "player1 is winner🚩" : "player2 is winner🚩";
if (random1 == random2) {
  x = "Draw!✌️";
}
// for Reference
// document.querySelectorAll("div.dice img")
// NodeList(2) [img, img]
document.querySelectorAll("div.dice img")[0].setAttribute("src", "images/dice" + random1 + ".png");

document.querySelectorAll("div.dice img")[1].setAttribute("src", "images/dice" + random2 + ".png");

document.querySelector("div.container h1").innerHTML = x;
