document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById("newsletterForm");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim(); 

        if (email) {
            let emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

            //  if the email is already subscribed
            if (!emails.includes(email)) {
                // Adds a new email to the array
                emails.push(email);

                // Saving updated array back to local storage
                localStorage.setItem("newsletterEmails", JSON.stringify(emails));

                alert("Thank you for subscribing to our newsletter!");
            } else {
                alert("You are already subscribed to our newsletter.");
            }

            emailInput.value = "";
        } else {

            alert("Please enter a valid email address.");
        }
    });
});