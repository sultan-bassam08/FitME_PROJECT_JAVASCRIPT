
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to hold the data
    const formData = {
      name: name,
      email: email,
      message: message
    };

    // Save data to local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Successfully sent your message!';
    successMessage.style.display = 'block';

    // Clear form fields
    document.getElementById('contactForm').reset();
  });

