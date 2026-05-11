
  const likeButtons = document.querySelectorAll('.cards__btn');

  likeButtons.forEach(button => {
    button.addEventListener('click', function() {

      const countSpan = this.querySelector('.like__count');
      

      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + 1;

      this.style.transform = "scale(1.2)";
      setTimeout(() => { this.style.transform = "scale(1)"; }, 100);
    });
  });
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page reload

    // Values
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validation checks
    if (name.length < 3) {
        alert("Full Name must be at least 3 characters.");
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (numbers only, min 10)
    if (phone.length < 10 || isNaN(phone)) {
        alert("Phone must be at least 10 digits.");
        return;
    }

    if (subject.length < 5) {
        alert("Subject must be at least 5 characters.");
        return;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    // Success!
    alert("Thank you! Your message has been sent successfully.");
    this.reset(); // Clear the form
});
