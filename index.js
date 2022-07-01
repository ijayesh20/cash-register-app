var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var proceedBtn = document.querySelector("#btn-proceed");
var errorMsg = document.querySelector("#err-msg");
var noOfNotes = document.querySelectorAll(".no-of-notes")

const notes = [2000,500,100,20,10,5,1];

function validateBillCashAmt() {
    errorMsg.style.display = "none";
    let billValue = parseInt(billAmount.value);
    let cashGivenValue = parseInt(cashGiven.value);
    if(billValue > 0 && cashGivenValue >= billValue) {
        calculateChange(cashGivenValue-billValue)
    }
    else {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Invalid Input!"
    }
}
function calculateChange(amtToBeReturned) {
    for(let i=0;i<notes.length;i++) {
        const numberOfNotes = Math.trunc(amtToBeReturned / notes[i]);
        amtToBeReturned = amtToBeReturned % notes[i];
        noOfNotes[i].innerHTML = numberOfNotes;
    }
}
proceedBtn.addEventListener("click",validateBillCashAmt);