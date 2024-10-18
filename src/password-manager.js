function savePassword() {
    const website = document.getElementById("websiteInput").value;
    const password = document.getElementById("passwordInput").value;
    if (website && password) {
        let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
        passwords.push({ website, password });
        localStorage.setItem("passwords", JSON.stringify(passwords));
        alert("Password saved successfully!");
        document.getElementById("websiteInput").value = "";
        document.getElementById("passwordInput").value = "";
    } else {
        alert("Please enter both website and password.");
    }
}

document.getElementById("addPassword").addEventListener("click", savePassword);

document.getElementById("viewPasswords").addEventListener("click", () => {
    window.location.href = "passwords.html";
});

document.getElementById("goToGenerator").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Check if there's a password in the URL (passed from the generator)
const urlParams = new URLSearchParams(window.location.search);
const passedPassword = urlParams.get("password");
if (passedPassword) {
    document.getElementById("passwordInput").value = passedPassword;
}