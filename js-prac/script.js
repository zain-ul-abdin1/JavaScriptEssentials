const button = document.getElementById("calcBtn");
button.onclick = function () {
    const billAmount = document.getElementById('billAmount').value;
    if (billAmount === "") {
        alert("Please enter Bill Amount");
    }
    else {
        const bill = parseFloat(billAmount);    
        const tip = bill * 0.15;
        const total = bill + tip;
        document.getElementById('displayResult').innerText = "Total bill Amount is : " + total + " Tip amount is : " + tip;
    }


}