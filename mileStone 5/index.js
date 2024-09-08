function generateCV() {
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    // Create CV content
    var cvContent = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Experience:</h4>\n        <p>").concat(experience, "</p>\n    ");
    // Display CV
    document.getElementById('cv-content').innerHTML = cvContent;
}
