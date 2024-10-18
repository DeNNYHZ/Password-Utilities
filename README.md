# Password Manager

A simple password management tool built with HTML, CSS, and JavaScript that allows you to store, view, edit, and delete passwords securely in the browser using `localStorage`.

## Features

- **Add Passwords**: Save passwords for different websites.
- **View Passwords**: Show saved passwords.
- **Edit Passwords**: Modify existing passwords.
- **Delete Passwords**: Remove unwanted passwords.
- **Password Generator**: Generate random, strong passwords.
- **Data Storage**: Uses browser `localStorage` to persist data.

## Technologies Used

- HTML
- CSS (with custom themes and responsive design)
- JavaScript (for functionality and local storage management)

## Getting Started

### Prerequisites

To run this project, you need:
- A web browser (Chrome, Firefox, etc.)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/password-manager.git

2. **Navigate to the project directory:**
```bash
cd password-manager
```

3. **Open the index.html file in a browser:**
```You can double-click on the index.html file, or
Use a local development server like Live Server in VS Code.
```

4. **Project Structure**
```
password-manager/
├── index.html             # Main file for password generator
├── passwords.html         # Page for viewing saved passwords
├── styles.css             # Styling for the entire project
├── script.js              # Main JavaScript functionality
└── README.md              # Project documentation
```

**Usage**
1. Add Password: Enter a website name and password, then click "Add Password" to save.
2. View Passwords: Click "View Passwords" to navigate to the list of saved passwords.
3. Edit or Delete Passwords: Use the "Edit" or "Delete" buttons beside each password entry to make changes.
4. Password Generator: Generate a password using the generator on the main page and use it in the password manager.
5. Password Validation:
    - Maximum length: Passwords longer than 16 characters cannot be saved.
    - Minimum length: Passwords shorter than 8 characters cannot be saved.
6. Customization:
    - You can easily customize the project by: Updating the styles in styles.css to change the color scheme or layout.
    - Adding new features or modifying existing functionality in script.js.

**Contributions**
Contributions are welcome! Please fork this repository and submit a pull request with any changes you think will improve the project.

**Acknowledgements**
Google Fonts for the Poppins font.
JavaScript tutorials and resources.
