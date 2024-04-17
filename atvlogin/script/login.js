const usernameInput = document.getElementById('usuario');
  const passwordInput = document.getElementById('senha');
  const submitButton = document.querySelector('button[type="submit"]');

  usernameInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);

  function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    submitButton.disabled = username === '' || password === '';
  }