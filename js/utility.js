

function getBalanceById(id) {
    return parseFloat(document.getElementById(id).innerText);  
}


function catchElement(id) {
    return document.getElementById(id);
}

function getInputValue(id) {
    return parseFloat(document.getElementById(id).value); 
}


   function getCurrentDateTime() {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            return `Date: ${date} | Time: ${time}`;
}
        
function getTitle(id) {
    return document.getElementById(id).innerText; 
}