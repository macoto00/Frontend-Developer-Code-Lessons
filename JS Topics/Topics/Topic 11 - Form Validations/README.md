# JS Topic 11 - Form Validations 

Form validation in JavaScript involve ensuring that user input meets certain criteria or constraints before allowing it to be submitted. It's essential for enhancing user experience and maintaining data integrity on web forms.

Form Validation:

JavaScript can be used to validate form input either while the user is filling out the form or before submitting it to the server. Here's a simple example demonstrating form validation using JavaScript:

```html
<form id="myForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <span id="nameError" class="error"></span>
  <br>
  
  <label for="telephone">Telephone:</label>
  <input type="tel" id="telephone" name="telephone">
  <span id="telephoneError" class="error"></span>
  <br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <span id="emailError" class="error"></span>
  <br>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>
  <span id="messageError" class="error"></span>
  <br>
  
  <button type="submit">Submit</button>
</form>
```

```css
.error {
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }
```

```js
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    let isValid = true;

    const nameInput = document.getElementById('name');
    const telephoneInput = document.getElementById('telephone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const telephoneError = document.getElementById('telephoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Validate Name (Not empty)
    if (inputIsEmpty(nameInput)) {
        displayError(nameError, 'Name is required');
        isValid = false;
    } else {
        clearError(nameError);
    }

    // Validate Telephone (Only numbers)
    if (!isValidTelephone(telephoneInput)) {
        displayError(telephoneError, 'Enter a valid telephone number');
        isValid = false;
    } else {
        clearError(telephoneError);
    }

    // Validate Email (Email format)
    if (!isValidEmail(emailInput)) {
        displayError(emailError, 'Enter a valid email address');
        isValid = false;
    } else {
        clearError(emailError);
    }

    // Validate Message (Not empty)
    if (inputIsEmpty(messageInput)) {
        displayError(messageError, 'Message is required');
        isValid = false;
    } else {
        clearError(messageError);
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function inputIsEmpty(input) {
    return input.value.trim() === '';
}

function isValidTelephone(input) {
    const telephoneRegex = /^\d+$/;
    return telephoneRegex.test(input.value.trim());
}

function isValidEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input.value.trim());
}

function displayError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = '';
}
```