function renderPasswords() {
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    const passwordList = document.getElementById("passwordList");
    passwordList.innerHTML = "";
    passwords.forEach((entry, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${entry.website}</span>
            <input type="password" value="${entry.password}" class="stored-password" readonly>
            <button class="show-password">Show</button>
            <button class="edit-password">Edit</button>
            <button class="delete-password">Delete</button>
        `;
        passwordList.appendChild(li);

        li.querySelector(".show-password").addEventListener("click", (e) => {
            const passwordInput = e.target.previousElementSibling;
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                e.target.textContent = "Hide";
            } else {
                passwordInput.type = "password";
                e.target.textContent = "Show";
            }
        });

        li.querySelector(".edit-password").addEventListener("click", (e) => {
            const passwordInput = e.target.previousElementSibling.previousElementSibling;
            passwordInput.readOnly = !passwordInput.readOnly;
            e.target.textContent = passwordInput.readOnly ? "Edit" : "Save";
            if (passwordInput.readOnly) {
                passwords[index].password = passwordInput.value;
                localStorage.setItem("passwords", JSON.stringify(passwords));
            }
        });

        li.querySelector(".delete-password").addEventListener("click", () => {
            passwords.splice(index, 1);
            localStorage.setItem("passwords", JSON.stringify(passwords));
            renderPasswords();
        });
    });
}

document.getElementById("goToManager").addEventListener("click", () => {
    window.location.href = "password-manager.html";
});

renderPasswords();