# Mail-Master-Nodemailer

MailMaster is a Node.js application that utilizes Nodemailer to send messages to both ethereal and real email accounts like Gmail.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Send emails using Nodemailer to both ethereal email accounts (for testing) and real email accounts like Gmail.
- Supports sending HTML and plaintext emails.
- Configurable email templates and settings.

## Installation

To install and set up MailMaster, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/omairkhan94/Mail-Master-Nodemailer



Set up your environment variables. Create a env.js file and configured it by using your gmail,

# Gmail Configuration (if sending emails to real accounts)

module.exports = {
    EMAIL : "your specified email",
    PASSWORD : "password"
}


# to run the server.

node server.js
if you use nodemon for good experinece.