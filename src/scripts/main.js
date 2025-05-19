'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input, index) => {
    const label = document.createElement('label');
    label.classList.add('field-label');

    if (!input.id) {
      input.id = `input-${index}`;
    }

    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);

    input.placeholder = capitalize(input.name);

    input.parentElement.insertBefore(label, input);
  });

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
