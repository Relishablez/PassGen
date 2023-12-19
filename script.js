document.getElementById('generate-password').addEventListener('click', generatePassword);
document.getElementById('generate-recommended-password').addEventListener('click', generateRecommendedPassword);
document.getElementById('copy-password').addEventListener('click', copyToClipboard);
document.getElementById('increase-lengthBy1').addEventListener('click', increasePasswordLengthBy1);
document.getElementById('decrease-lengthBy1').addEventListener('click', decreasePasswordLengthBy1);
document.getElementById('increase-lengthBy5').addEventListener('click', increasePasswordLengthBy5);
document.getElementById('decrease-lengthBy5').addEventListener('click', decreasePasswordLengthBy5);
document.getElementById('resetPasswordLength').addEventListener('click', resetPasswordLength);
document.getElementById('password-length').addEventListener('change', updateLengthDisplay);


const passwordDisplay = document.getElementById('password-display');
const passwordStrength = document.getElementById('password-strength');

function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value);
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    const includeSpecialCharacters = document.getElementById('include-special-characters').checked; 

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const repeatedNumberChars = numberChars.repeat(2); // Repeat numbers to increase their representation
    const commonSymbols = '!@#$%^&*()-_=+?'; // Common, more widely accepted symbols
    const specialCharacters = '{}[]:;,"\'<>./|\\'; // Special/ambiguous characters   

    let characters = '';
    if (includeUppercase) characters += uppercaseChars;
    if (includeLowercase) characters += lowercaseChars;
    if (includeNumbers) characters += repeatedNumberChars; // Use repeatedNumberChars instead of numberChars
    if (includeSymbols) characters += commonSymbols; // Add common symbols
    if (includeSpecialCharacters) characters += specialCharacters; // Add special/ambiguous characters

    let password = '';
    for (let i = 0; i < length; i++) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        password += character;
    }

    passwordDisplay.textContent = password;
    assessPasswordStrength(password, length);
}

function generateRecommendedPassword() {
    // Set password length to 30
    document.getElementById('password-length').value = '30';

    // Uncheck "Include Special Characters"
    document.getElementById('include-special-characters').checked = false;

    // Call the existing generatePassword function
    generatePassword();
}


function copyToClipboard() {
    if (passwordDisplay.textContent === '') return;
    navigator.clipboard.writeText(passwordDisplay.textContent)
        .then(() => alert('Password copied to clipboard!'))
        .catch(err => console.error('Error in copying text: ', err));
}

function assessPasswordStrength(password, selectedLength) {
    let strength = 0;

    // Length-based strength
    if (selectedLength >= 256) strength += 50; // Adds significant weight for length >= 256
    else if (selectedLength >= 25) strength += 5; // For length 25 to 128 (Very Strong)
    else if (selectedLength >= 15) strength += 4; // For length 15 (Upper Moderate) to 30 (Strong)
    else if (selectedLength >= 12) strength += 2; // For length 12 to 16 (Moderate)
    else if (selectedLength >= 8) strength += 1; // For length up to 12 (Weak)

    // Complexity-based strength checks
    if (/[A-Z]/.test(password)) strength += 2; // Uppercase characters
    if (/[a-z]/.test(password)) strength += 2; // Lowercase characters
    if (/[0-9]/.test(password)) strength += 2; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength += 3; // Symbols

    // Additional complexity checks
    if (/[^A-Za-z0-9]{2,}/.test(password)) strength += 2; // Consecutive non-alphanumeric characters
    if (/\d{3,}/.test(password)) strength += 2; // Three or more consecutive digits
    if (/[a-zA-Z]{4,}/.test(password)) strength += 2; // Four or more consecutive letters

    // Update strength label and class
    let strengthLabel = 'Weak🟥';
    let strengthClass = 'weak';
    if (strength >= 10 && strength < 12) {
        strengthLabel = 'Moderate🟧';
        strengthClass = 'moderate';
    } else if (strength >= 12 && strength < 14) {
        strengthLabel = 'Strong🟩';
        strengthClass = 'strong';
    } else if (strength >= 14 && strength < 25) {
        strengthLabel = 'Very Strong🟦';
        strengthClass = 'very-strong';
    } else if (strength >= 25) {
        strengthLabel = 'Incredible💜';
        strengthClass = 'incredible';
    }

    passwordStrength.textContent = `Strength: ${strengthLabel}`;
    passwordStrength.className = strengthClass; // Update the class
}

function increasePasswordLengthBy1() {
    const passwordLengthSelect = document.getElementById('password-length');
    if (passwordLengthSelect.selectedIndex < passwordLengthSelect.options.length - 1) {
        passwordLengthSelect.selectedIndex = passwordLengthSelect.selectedIndex + 1;
    }
}

function decreasePasswordLengthBy1() {
    const passwordLengthSelect = document.getElementById('password-length');
    if (passwordLengthSelect.selectedIndex > 0) {
        passwordLengthSelect.selectedIndex = passwordLengthSelect.selectedIndex - 1;
    }
}

function increasePasswordLengthBy5() {
    const passwordLengthSelect = document.getElementById('password-length');
    if (passwordLengthSelect.selectedIndex < passwordLengthSelect.options.length - 5) {
        passwordLengthSelect.selectedIndex = passwordLengthSelect.selectedIndex + 5;
    }
}

function decreasePasswordLengthBy5() {
    const passwordLengthSelect = document.getElementById('password-length');
    if (passwordLengthSelect.selectedIndex > 0) {
        passwordLengthSelect.selectedIndex = passwordLengthSelect.selectedIndex - 5;
    }
}

function resetPasswordLength() {
    document.getElementById('password-length').value = '6'; // set password length to 6
}

function updateLengthDisplay() {
    var select = document.getElementById('password-length');
    var selectedOption = select.options[select.selectedIndex];
    var selectedValue = selectedOption.value;
    selectedOption.textContent = selectedValue; // Update display to show only the number
}

updateLengthDisplay();
