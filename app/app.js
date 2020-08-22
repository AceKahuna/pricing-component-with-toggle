const toggle = document.getElementById('toggle');
const month = document.querySelectorAll('.month');
const annual = document.querySelectorAll('.annual');

toggle.addEventListener('change', () =>{
    if(toggle.checked){ 
        month.forEach(price => price.classList.remove("inactive"));
        annual.forEach(price => price.classList.add("inactive"));
    }else{
        month.forEach(price => price.classList.add("inactive"));
        annual.forEach(price => price.classList.remove("inactive")); 
    }
});


