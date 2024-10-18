function generate() {
    const length = parseInt(document.getElementById("passwordLength").value);
    const lowercase = document.getElementById("lowercaseCb").checked;
    const uppercase = document.getElementById("uppercaseCb").checked;
    const digits = document.getElementById("digitsCb").checked;
    const specials = document.getElementById("specialsCb").checked;

    let charset = "";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (digits) charset += "0123456789";
    if (specials) charset += "!@#$%^&*()_+-={}[]|:;<>,.?";

    if (charset.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("passwordOutput").value = password;
}

document.getElementById("generatePassword").addEventListener("click", generate);

document.getElementById("passwordLength").addEventListener("input", (e) => {
    document.getElementById("passwordLengthValue").textContent = e.target.value;
});

document.getElementById("copyPassword").addEventListener("click", () => {
    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

document.getElementById("goToManager").addEventListener("click", () => {
    window.location.href = "password-manager.html";
});

generate();