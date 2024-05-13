function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
    const errorMessage = document.getElementById('errorMessage');
    const shortenedUrlDisplay = document.getElementById('shortenedUrl');

    // Reset previous messages
    errorMessage.textContent = '';
    shortenedUrlDisplay.textContent = '';

    // Basic validation
    if (!originalUrl) {
        errorMessage.textContent = 'Please enter a URL';
        return;
    }

    // Simple check for URL format
    if (!/^https?:\/\//i.test(originalUrl)) {
        errorMessage.textContent = 'Please enter a valid URL starting with http:// or https://';
        return;
    }

    // Simulating server-side URL shortening
    // In a real application, this logic would be handled on the server side
    // using a backend language like Go, Node.js, or Python
    // For this example, we'll just prepend 'http://short.url/' to the original URL
    const shortenedUrl = 'http://short.url/' + Math.random().toString(36).substr(2, 7);

    // Display shortened URL to the user
    shortenedUrlDisplay.textContent = 'Shortened URL: ' + shortenedUrl;
}