function validateGroupForm() {
    var numStudents = document.getElementById("Students").value.trim();
    var numFaculty = document.getElementById("Faculty").value.trim();

    // Check if any field is empty
    if (numStudents === "" || numFaculty === "") {
        alert("Please fill out all required fields before proceeding.");
        return false;  // Prevents form submission
    }

    // Ensure the number of students and faculty are positive integers
    if (!/^\d+$/.test(numStudents) || parseInt(numStudents) <= 0) {
        alert("Please enter a valid number of students (must be a positive integer).");
        return false;  // Prevents form submission
    }

    if (!/^\d+$/.test(numFaculty) || parseInt(numFaculty) <= 0) {
        alert("Please enter a valid number of faculty members (must be a positive integer).");
        return false;  // Prevents form submission
    }

    return true;  // Allows form submission
}

// Attach this function to the form's onsubmit event
document.querySelector("form").onsubmit = validateGroupForm;
