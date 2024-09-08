function generateCV() {
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const professional = document.getElementById('professional').value;

    // Create CV content
    const cvContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Experience:</h4>
        <p>${professional}</p>
    `;

    
    document.getElementById('resumeOutput').innerHTML = cvContent;
}
