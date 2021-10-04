const formEl = document.querySelector('[data-id="form"]');
formEl.addEventListener('submit', evt => {
  evt.preventDefault();
});

const buttonEl = formEl.querySelector('[data-id="submit"]');
buttonEl.addEventListener('click', evt => {
  evt.preventDefault();
});


const element = {
  _value: 'secret',
  get value() {
    debugger
    return this._value;
  },
  set value(val) {
    debugger
    this._value = val
  },
};

// __proto__
element.value = 'top secret';
