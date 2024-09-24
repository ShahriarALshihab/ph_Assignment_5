

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
       
    const detailTime = now.toTimeString();
    const date = now.toDateString();
       return `${date} ${detailTime}`; 
   
}
 
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('backdrop-blur-md', 'bg-opacity-10');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-opacity-10'); 
      }
    });
  
       
function getTitle(id) {
    return document.getElementById(id).innerText; 
}