# [Admin-Face-AI](https://admin-face-ia-five.vercel.app/main)

## Overview

Admin-Face-AI is a web-based administrative panel designed to manage users with integrated facial recognition capabilities. This project allows administrators to add, edit, and delete user profiles. During the user addition process, the application utilizes the device's camera to capture the user's photo, which is then sent to the server for facial recognition. The server matches the photo with existing records in the database and returns the user information.

## Technologies Used

Admin-Face-AI is built using modern web technologies and libraries to ensure a robust and scalable application. Below are the key tools and libraries used in the project:

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For managing and centralizing application state.
- **Material-UI**: A popular React UI framework for designing intuitive and responsive user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **Formik & Yup**: For handling form state and validation.
- **Framer Motion**: For adding animations to the UI.
- **React Router**: For routing and navigation within the application.
- **React Toastify**: For displaying toast notifications.
- **ESLint & Prettier**: For maintaining code quality and consistency.
- **Tailwind CSS**: For utility-first CSS styling.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/khusravkhon/admin_face_ia.git
   cd admin_face_ia
   ```
2. Navigate to the project directory:
   ```sh
   cd admin-face-ai
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Scripts

The following scripts are available in the project:

- `start`: Runs the application in development mode.
- `build`: Builds the application for production.
- `test`: Runs the test suite.
- `eject`: Ejects the Create React App configuration.

To start the development server, run:

```sh
npm start
```

## Features

- **User Management**: Add, edit, and delete user profiles.
- **Facial Recognition**: Capture user photos using the device's camera and match them with existing records in the database.
- **Responsive Design**: Intuitive and responsive UI designed with Material-UI and Tailwind CSS.
- **Real-time Notifications**: Receive real-time notifications using React Toastify.

## Dependencies

The project relies on a number of dependencies for its functionality. Key dependencies include:

- `@ant-design/colors`, `@ant-design/icons`: For color schemes and icons.
- `@emotion/react`, `@emotion/styled`: For writing CSS styles with JavaScript.
- `@mui/material`, `@mui/icons-material`, `@mui/x-data-grid`: For Material-UI components and icons.
- `formik`, `yup`: For form handling and validation.
- `axios`: For making HTTP requests.
- `react-redux`: For managing application state with Redux.
- `react-router-dom`: For client-side routing.

## DevDependencies

- `@babel/core`, `@babel/eslint-parser`: For transpiling JavaScript.
- `eslint`, `prettier`: For code linting and formatting.
- `tailwindcss`: For utility-first CSS styling.

## Contact

For more details about me and my other projects, please visit [my profile](https://khusravkhon.github.io/resume).

Browsing on the web application [admin_face_ai](https://admin-face-ia-five.vercel.app/main).
