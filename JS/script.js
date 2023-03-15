const container = document.querySelector('.container');
const loginLink = document.querySelector('.log-link');
const regLink = document.querySelector('.reg-link');

regLink.addEventListener('click', ()=>{
    container.classList.add('active');
})

loginLink.addEventListener('click', ()=>{
    container.classList.remove('active');
})