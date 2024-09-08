function buildCV() {
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    // Retrieve profile picture
    var profilePicInput = document.getElementById('profile-pic');
    var profilePicFile = profilePicInput.files ? profilePicInput.files[0] : null;
    var profilePicURL = '';
    if (profilePicFile) {
        // Create a URL for the profile picture
        profilePicURL = URL.createObjectURL(profilePicFile);
    }
    // Create CV content
    var cvContent = "\n        ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n        <h3>").concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Experience:</h4>\n        <p>").concat(experience, "</p>\n    ");
    // Display CV
    document.getElementById('Resume-content').innerHTML = cvContent;
}
// Ensure the function is available on window
window.GenerateResume = GenerateResume;
