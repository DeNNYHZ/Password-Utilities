function generate() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        alert("Please select at least one character type.");
        return;
    }
    let dictionary = "";
    if (document.getElementById("lowercaseCb").checked) {
        dictionary += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (document.getElementById("uppercaseCb").checked) {
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (document.getElementById("digitsCb").checked) {
        dictionary += "1234567890";
    }
    if (document.getElementById("specialsCb").checked) {
        dictionary += "!@#$%^&*()_+-={}[];<>:";
    }
    const length = parseInt(document.getElementById("passwordLength").value);

    if (length < 1 || dictionary.length === 0) {
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    document.getElementById("passwordOutput").value = password;
    document.getElementById("passwordOutput").setAttribute("value", password);
}

document.querySelectorAll('input[type="checkbox"], #generatePassword').forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.id === "generatePassword" || elem.type === "checkbox") {
            generate();
        }
    });
});

document.getElementById("passwordLength").addEventListener("input", (e) => {
    document.getElementById("passwordLengthValue").innerHTML = e.target.value;
    generate();
});

document.getElementById("copyPassword").addEventListener("click", () => {
    const pass = document.getElementById("passwordOutput").value;
    navigator.clipboard.writeText(pass).then(() => {
        document.getElementById("copyPassword").innerHTML = "Copied!";
        setTimeout(() => {
            document.getElementById("copyPassword").innerHTML = "Copy";
        }, 1000);
    });
});

document.getElementById("goToManager").addEventListener("click", () => {
    window.location.href = "password-manager.html";
});

generate();