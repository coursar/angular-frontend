const formEl = document.querySelector('[data-id="form"]');
formEl.addEventListener('submit', evt => {
  evt.preventDefault();
});

const buttonEl = formEl.querySelector('[data-id="submit"]');
buttonEl.addEventListener('click', evt => {
  evt.preventDefault();
});
