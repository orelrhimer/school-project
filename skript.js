// --- לוגיקת כפתורי הלייק ---
const likeButtons = document.querySelectorAll('.cards__btn');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const countSpan = this.querySelector('.like__count');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;

        // אפקט ויזואלי קטן בלחיצה
        this.style.transform = "scale(1.2)";
        setTimeout(() => { this.style.transform = "scale(1)"; }, 100);
    });
});

// --- לוגיקת טופס צור קשר ---
document.getElementById('contactForm')?.addEventListener('submit', async function(event) {
    event.preventDefault(); // מניעת רענון הדף

    // איסוף נתונים
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // בדיקות תקינות (Validation)
    if (formData.fullName.length < 3) {
        alert("Full Name must be at least 3 characters.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (formData.phone.length < 10 || isNaN(formData.phone)) {
        alert("Phone must be at least 10 digits.");
        return;
    }

    if (formData.subject.length < 5) {
        alert("Subject must be at least 5 characters.");
        return;
    }

    if (formData.message.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    // --- שליחת הנתונים לשרת (Fetch) ---
    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Success! " + result.message);
            this.reset(); // ניקוי הטופס רק אחרי הצלחה
        } else {
            alert("Something went wrong on the server.");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Error: Could not connect to the server. Make sure your Node.js server is running!");
    }
});
