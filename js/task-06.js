const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () =>{
  if(inputEl.value.length < inputEl.dataset.length){
    inputEl.classList.add('invalid');
  }
  inputEl.classList.add('valid');
});
console.log(inputEl);
console.log(inputEl.dataset.length);