function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[type="checkbox"]:checked');
    const genderValues = Array.from(gender).map(item => item.nextSibling.textContent).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Basic email validation
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display data in the popup
    const popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genderValues}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
    document.getElementById("surveyForm").style.backgroundColor = "";
    document.querySelector(".submit-button").style.backgroundColor = "skyblue";
}

function closePopup() {
    document.getElementById("popup").style, display = "none";
    resetForm();
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}