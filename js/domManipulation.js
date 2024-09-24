const totalBalance = getBalanceById('#total-balance'); 

const noakhaliInputField = document.querySelector('#donate-noakhali'); 
noakhaliInputField.addEventListener("click", function (e) {
    console.log("clk");
})

const noakhaliDonateButton = document.querySelector("#btn-noakhali").addEventListener('click', function (e) {

})



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

