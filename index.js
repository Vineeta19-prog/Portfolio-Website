// Smooth Scroll to Section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Handle Form Submission
function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // In a real-world app, you'd send this data to a server, but here we'll just log it
  console.log(`Message from: ${email}\nMessage: ${message}`);

  // Reset form fields
  document.getElementById('contact-form').reset();

  // Provide feedback to the user
  alert('Your message has been sent!');
}
