document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would implement the logic to send the email
    // This could involve making an AJAX request to a backend server
    // which would then handle the email sending process
    // For demonstration purposes, let's just log the email details
    console.log('Recipient:', recipient);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Optionally, you could display a success message to the user
    alert(' Hii Friends Email sent successfully!');
});