# Password Generator

## Why did I make this?
I made this as a personal project for password complexity (currently using Math see below for Strength Assessment) but might revisit to use Crytographic techniques (CSPRNGs) however `crypto.getRandomValue()` [has some exploitable vulnerabilities](https://security.snyk.io/package/npm/crypto-random-string).   
Inspiration is from: [Password Generator](https://passwordsgenerator.net/old.php)

## Introduction

This project introduces a customizable password generator built with JavaScript. It allows users to create strong, secure passwords tailored to their preferences, including options for length, and the inclusion of uppercase and lowercase letters, numbers, and symbols. 

[Visit the Live Demo](https://relishablez.github.io/PassGen/)

## Features

- **Generate Password**: Clicking the 'Generate Password' button creates a new password based on selected criteria.
- **Copy to Clipboard**: Users can copy the generated password to the clipboard with a single click.
- **Adjust Password Length**: Increase or decrease the password length using the dedicated buttons.
- **Password Strength Indicator**: Provides a visual and textual indication of the password's strength based on length and character complexity.

## How to Use

1. **Set Preferences**: Choose your desired password length and tick the checkboxes for uppercase, lowercase, numbers, and symbols as needed.
2. **Generate Password**: Click the 'Generate Password' button to create a new password.
3. **Copy Password**: Click 'Copy to Clipboard' to copy the generated password.
4. **Adjust Length**: Use 'Increase Length' and 'Decrease Length' buttons to change the password length.

## Password Strength Assessment

The password strength is assessed based on length and character complexity:

- Length: Stronger passwords are longer.
- Character Types: A mix of uppercase, lowercase, numbers, and symbols enhances strength.
- Additional Checks: Consecutive non-alphanumeric characters, digits, and letters are considered.

## Installation

To use this password generator, simply include the JavaScript file in your HTML and link the necessary elements (buttons, display areas) as per the provided IDs.
