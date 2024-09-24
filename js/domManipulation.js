let totalBalance = getBalanceById('total-balance'); 
const noakhaliDonateButton = catchElement("btn-noakhali"); 
const feniDonateButton = catchElement("btn-feni"); 
const quotaDonateButton = catchElement("btn-quota"); 
const donationModalToggle = catchElement("donation-modal"); 





noakhaliDonateButton.addEventListener("click", function () {

    let previousNoakhaliBalance = getBalanceById("previous-noakhali-amount"); 

    const noakhaliInputValue = getInputValue("donate-noakhali"); 

    if (isNaN(noakhaliInputValue) || noakhaliInputValue <= 0) {
        return alert("Invalid input"); 
    }

    if (noakhaliInputValue > totalBalance) {
        alert("Insufficient Balance"); 
        catchElement("donate-noakhali").value = "";
        return; 
        }
    const newCardAmount = previousNoakhaliBalance + noakhaliInputValue; 
  
  
    document.getElementById("previous-noakhali-amount").innerText = newCardAmount.toFixed(2); 
    
 totalBalance -= noakhaliInputValue;

    document.getElementById("total-balance").innerText = totalBalance.toFixed(2)

    document.getElementById("donate-noakhali").value = ""; 




    //add history item

    const historyItem = document.createElement("div"); 
    
    const title = getTitle("noakhali-title"); 
    historyItem.className = "border border-gray-400 text-black p-4 mx-16 mt-6 rounded-md"; 
    const dateTime = getCurrentDateTime();
       historyItem.innerHTML = `
      <p class="text-lg font-bold">
        ${noakhaliInputValue} Taka is ${title}
        </p>
        <p class="bg-white py-5 pl-6">Last Donation on: ${dateTime}</p>

`

    const historyContainer = catchElement("history-part"); 

historyContainer.insertBefore(historyItem, historyContainer.firstChild);  

    //toggle modal when clicked

    donationModalToggle.checked = true;


 
});




feniDonateButton.addEventListener("click", function () {
    
     let previousFeniBalance = getBalanceById("previous-feni-amount"); 

    const feniInputValue = getInputValue("donate-feni"); 

    if (isNaN(feniInputValue) || feniInputValue <= 0) {
        return alert("Invalid input"); 
    }
    if (feniInputValue > totalBalance) {
        alert("Insufficient Balance"); 
        catchElement("donate-feni").value = "";
        return; 
        }
    const newCardAmount = previousFeniBalance + feniInputValue; 
  
  
    document.getElementById("previous-feni-amount").innerText = newCardAmount.toFixed(2); 
    
     totalBalance -= feniInputValue;

    document.getElementById("total-balance").innerText = totalBalance.toFixed(2); 
    document.getElementById("donate-feni").value = ""; 




    //add history item

    const historyItem = document.createElement("div"); 
    
    const title = getTitle("feni-title"); 

    historyItem.className = "border border-gray-400 text-black p-4 mx-16 mt-6 rounded-md"; 
    const dateTime = getCurrentDateTime();
       historyItem.innerHTML = `
      <p class="text-lg font-bold">
        ${feniInputValue} Taka is ${title}
        </p>
        <p class="bg-white py-5 pl-6">Last Donation on: ${dateTime}</p>

`

    const historyContainer = catchElement("history-part"); 

historyContainer.insertBefore(historyItem, historyContainer.firstChild);  

    //toggle modal when clicked

    donationModalToggle.checked = true;



})



quotaDonateButton.addEventListener("click", function () {
    
     let previousQuotaBalance = getBalanceById("previous-quota-amount"); 

    const quotaInputValue = getInputValue("donate-quota"); 

    if (isNaN(quotaInputValue) || quotaInputValue <= 0) {
        return alert("Invalid input"); 
    }
    if (quotaInputValue > totalBalance) {
        alert("Insufficient Balance"); 
        catchElement("donate-quota").value = "";
        return; 
    }
    

    const newCardAmount = previousQuotaBalance + quotaInputValue; 
  
  
    document.getElementById("previous-quota-amount").innerText = newCardAmount.toFixed(2); 
    
     totalBalance -= quotaInputValue; 

    document.getElementById("total-balance").innerText =  totalBalance.toFixed(2)

    document.getElementById("donate-quota").value = ""; 




    //add history item

    const historyItem = document.createElement("div"); 
    
    const title = getTitle("quota-title"); 

    historyItem.className = "border border-gray-400 text-black p-4 mx-16 mt-6 rounded-md"; 

    const dateTime = getCurrentDateTime();

       historyItem.innerHTML = `
      <p class="text-lg font-bold">
        ${quotaInputValue} Taka is ${title}
        </p>
        <p class="bg-white py-5 pl-6">Last Donation on: ${dateTime}</p>

`

    const historyContainer = catchElement("history-part"); 

historyContainer.insertBefore(historyItem, historyContainer.firstChild);  

    //toggle modal when clicked

    donationModalToggle.checked = true;



})



//toggle history and donate button


const historyButton = document.getElementById("history-btn"); 
const donateButton = document.getElementById('donation-btn');

historyButton.addEventListener('click', function () {
    
    historyButton.classList.add("bg-[#B4F461]", "text-gray-800");
    historyButton.classList.remove("text-gray-500");

    donateButton.classList.remove("bg-[#B4F461]", "text-gray-800"); 
    donateButton.classList.add("text-gray-500"); 

    document.getElementById("donation-part").classList.add("hidden"); 
    document.getElementById("history-part").classList.remove("hidden");

})

 
donateButton.addEventListener('click', function () {

    donateButton.classList.add("bg-[#B4F461]","text-gray-800");
    donateButton.classList.remove("text-gray-500");

     historyButton.classList.remove("bg-[#B4F461]", "text-gray-800");
     historyButton.classList.add("text-gray-500");

    document.getElementById("history-part").classList.add("hidden"); 
    document.getElementById("donation-part").classList.remove("hidden"); 
})









