function checkPassword() {
    var password = "201912"; // Replace with your actual password
    var userPassword = prompt("Enter the password:");

    if (userPassword === password) {
        // Password is correct, show the content
        document.display;
    } else {
        alert("Incorrect password. Access denied.");
        window.location.href = "index.html";
    }
}