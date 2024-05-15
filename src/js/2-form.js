const formData = {
  email: '',
  message: '',
};

function saveFormDataToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}

function clearLocalStorage() {
    localStorage.removeItem('feedback-form-state');
}

function clearFormData(emailInput, messageInput) {
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';
}

function setFormData(parsedFormData, emailInput, messageInput) {
    formData.email = parsedFormData.email;
    formData.message = parsedFormData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const storedFormData = localStorage.getItem('feedback-form-state');

    if (storedFormData) {
        const parsedFormData = JSON.parse(storedFormData);
        setFormData(parsedFormData, emailInput, messageInput);
    }

    form.addEventListener('input', (event) => {
        const { name, value } = event.target;
        formData[name] = value.trim();
        saveFormDataToLocalStorage();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (formData.email && formData.message) {
            console.log('Form Data:', formData);
            clearLocalStorage();
            clearFormData(emailInput, messageInput);
        } else {
            alert('Fill please all fields');
        }
    });
});
