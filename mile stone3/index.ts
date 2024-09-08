function buildCV(): void {
    // Retrieve form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    
    // Retrieve profile picture
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
    const profilePicFile = profilePicInput.files ? profilePicInput.files[0] : null;
    let profilePicURL = '';

    if (profilePicFile) {
        // Create a URL for the profile picture
        profilePicURL = URL.createObjectURL(profilePicFile);
    }

    // Create CV content
    const cvContent = `
        ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profile-pic">` : ''}
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Experience:</h4>
        <p>${experience}</p>
    `;

    // Display CV
    document.getElementById('Resume-content')!.innerHTML = cvContent;
}

// Ensure the function is available on window
(window as any).generateCV = generateCV;

