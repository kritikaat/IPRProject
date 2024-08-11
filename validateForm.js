function validatationForm() {
    var institutionName = document.getElementById("institution-name").value.trim();
    var studentBranch = document.getElementById("Student-branch").value.trim();
    var studentSem = document.getElementById("Student-sem").value.trim();

    // Check if any field is empty
    if (institutionName === "" || studentBranch === "" || studentSem === "") {
        alert("Please fill out all required fields before proceeding.");
        return false;  // Prevents form submission
    }

    // Ensure the first letter of each word in the institution name and student branch is capitalized
    institutionName = capitalizeFirstLetter(institutionName);
    studentBranch = capitalizeFirstLetter(studentBranch);

    // Update the form fields with capitalized values
    document.getElementById("institution-name").value = institutionName;
    document.getElementById("Student-branch").value = studentBranch;

    // Ensure the semester field contains only numbers
    if (!/^\d+$/.test(studentSem)) {
        alert("Semester of Students must contain numbers only.");
        return false;  // Prevents form submission
    }

    return true;  // Allows form submission
}

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
