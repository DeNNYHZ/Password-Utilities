function savePassword() {
    const website = document.getElementById("websiteInput").value;
    const password = document.getElementById("passwordInput").value;

    if (!website || !password) {
        alert("Please enter both website and password.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password.length > 16) {
        alert("Password cannot be longer than 16 characters.");
        return;
    }

    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords.push({ website, password });
    localStorage.setItem("passwords", JSON.stringify(passwords));
    alert("Password saved successfully!");
    document.getElementById("websiteInput").value = "";
    document.getElementById("passwordInput").value = "";
}

document.getElementById("addPassword").addEventListener("click", savePassword);

document.getElementById("viewPasswords").addEventListener("click", () => {
    window.location.href = "passwords.html";
});

document.getElementById("goToGenerator").addEventListener("click", () => {
    window.location.href = "index.html";
});

const urlParams = new URLSearchParams(window.location.search);
const passedPassword = urlParams.get("password");
if (passedPassword) {
    document.getElementById("passwordInput").value = passedPassword;
}
