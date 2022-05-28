const numberEl = document.querySelector('#value');
const decrementEl  = document.querySelector('button[data-action=decrement]');
const incrementEl = document.querySelector('button[data-action=increment]');
decrementEl.addEventListener('click', ()=> {
  numberEl.textContent -- ;
});
incrementEl.addEventListener('click', ()=> {
  numberEl.textContent ++;
});