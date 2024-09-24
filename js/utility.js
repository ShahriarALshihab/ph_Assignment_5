

function getBalanceById(id) {
    return parseFloat(document.getElementById(id).innerText);  
}


function catchElement(id) {
    return document.getElementById(id);
}

function getInputValue(id) {
    return parseFloat(document.getElementById(id).value); 
}


   function getCurrentDateAndTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Dhaka',
       
    };

    const dateString = now.toLocaleString('en-US', options).replace(',', '');
    const timeString = now.toTimeString().split(' ')[0];
    const dayString = now.toDateString();
    
    return ` ${dayString} ${timeString} GMT+0600 (Bangladesh Standard Time)`;
}
 document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('backdrop-blur-md', 'bg-opacity-10');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-opacity-10'); 
      }
    });
  });
       
function getTitle(id) {
    return document.getElementById(id).innerText; 
}