var check = document.querySelector("#check");
var clear = document.querySelector("#clear");
var result = document.querySelector("#result");

check.addEventListener("click", palindorme);

function palindorme(){
  var input = document.querySelector("#input").value;
  var len = input.length;

  var start = input.substring(0, Math.floor(len / 2)).toLowerCase();
  var end = input.substring(len - Math.floor(len / 2)).toLowerCase();
  var flip = [...end].reverse().join("");

  if(start == flip){
    result.innerHTML = `${input.toUpperCase()} is a palindorme`;
  }else {
    result.innerHTML = `${input.toUpperCase()} is NOT a palindorme`;
  }
}

clear.addEventListener("click", function(){
  var input = document.querySelector("#input").value = "";
  result.innerText = "";
})