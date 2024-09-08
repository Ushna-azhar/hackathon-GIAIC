var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureresult = document.getElementById("profilepicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var academicElement = document.getElementById("education");
    var expertiseElement = document.getElementById("expertise");
    var professionalElement = document.getElementById("professional");
    if (profilepictureresult && nameElement && emailElement && phoneElement && academicElement && expertiseElement && professionalElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var academic = academicElement.value;
        var expertise = expertiseElement.value;
        var professional = professionalElement.value;
        var profilepicturefile = (_a = profilepictureresult.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureUrl = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureUrl ? "<img src=\"".concat(profilepictureUrl, " alt=profile picture class =profilepicture\">") : "", "\n    <p><strong>Name : </strong><span id = edit-name class= editable> ").concat(name_1, " </p>\n    <p><strong>email : </strong></strong><span id = edit-email class= editable> ").concat(email, " </p>\n     <p><strong>phone : </strong></strong><span id = edit-phone class= editable> ").concat(phone, " </p>\n\n\n      <h3>Academic</h3>\n      <p id =edit-academic class= editable>").concat(academic, "</p>\n\n            <h3>Professional Experience</h3>\n      <p id =edit-professional class= editable >").concat(professional, "</p>\n\n      <h3>Expertise</h3>\n      <p id =edit-expertise class= editable>").concat(expertise, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Requirement are missing , Kindly check Again");
        }
    }
    else {
        console.error("check All the Requirements");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
