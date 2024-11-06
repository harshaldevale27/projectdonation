// Toggle Dropdown Menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    alert("Your ticket has been submitted successfully!");
}
