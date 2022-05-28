const emailEl =  document.querySelector("[name=email]");
const passwordEl = document.querySelector("[name=password]");
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
  event.preventDefault();
  if(emailEl.value.length === 0 || passwordEl.value.length === 0){
    return alert('fill in the required fields');
  }
  const email = emailEl.value;
  const password = passwordEl.value;
  event.currentTarget.reset();
  const user={
    email,
    password,
  };
  console.log(user);
};