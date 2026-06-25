const button = document.getElementById("calcBtn");
button.onclick = function(){
   const bill = document.getElementById('billAmount').value

   const tip = bill * 0.15;

   document.getElementById('displayResult').innerText = "Tip amount is : "+ tip;
}