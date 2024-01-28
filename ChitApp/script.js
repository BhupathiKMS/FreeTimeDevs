// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

function call() {
  let noOfParticipants = Number(
    document.getElementById("noOfParticipants").value
  );
  let totalAmount = Number(document.getElementById("totalAmount").value);
  let auctionNumber = Number(document.getElementById("auctionNumber").value);
  let commission = Number(document.getElementById("commission").value);
  let spends = Number(document.getElementById("spends").value);
  let discountBid = Number(document.getElementById("discountBid").value);
  
  const individualContribution =
  (totalAmount - discountBid - (auctionNumber * totalAmount / noOfParticipants) + commission + spends ) / (noOfParticipants- auctionNumber);
    
        document.getElementById('ip1').value = 'Rs. '+Math.round(individualContribution);
        document.getElementById('ip2').value = 'Rs. '+Math.round(totalAmount - discountBid)
        document.getElementById('ip3').innerHTML=`
        
        (totalAmount - discountBid 
        - (auctionNumber * totalAmount / noOfParticipants) 
        + commission + spends) 
        / (noOfParticipants - auctionNumber)
    </br></br>
        (${totalAmount} - ${discountBid }
        - (${auctionNumber} * ${totalAmount} / ${noOfParticipants}) 
        + ${commission} + ${spends}) 
        / (${noOfParticipants} - ${auctionNumber})
    `
          

}

function add1000() {
  let val = document.getElementById("discountBid").value;
  val = Number(val) + 1000;
  document.getElementById("discountBid").value = val;
  call();
}
