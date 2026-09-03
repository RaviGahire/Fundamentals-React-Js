# Botmakers Assignment

> **Description**

This project is built with [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/), providing a blazing fast development environment and robust type safety. In this Assignment we cover all the basic topic of react js Ex. **State, Props, Keys, Events** etc. 

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:
*   **Node.js** (v18.0.0 or higher recommended)
*   **npm**

### Installation

1.  Clone the repository:
    ```
    bash
    git clone [https://github.com/RaviGahire/Fundamentals-React-Js/tree/main/Botmakers]

    ```

2.  Navigate to the project directory:
    ```bash
    cd botmaker
    ```

3.  Install the dependencies:
    ```bash
    npm install
    ```

## Development

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
>> The application will be available at http://localhost:5173 (or the next available port)

# 🛠️ Available Scripts
* In the project directory, you can run the following commands:
``` 
npm run build 
```
``` 
npm run preview
```
# 📂 Project Structure

```
├── public/             # Static assets that won't be processed by Vite
├── src/                # Application source code
│   ├── assets/         # Project-specific assets
|   ├── assignment/     # React basic topic
│   ├── components/     # Reusable components
|   ├── layout/         # App Layout
|   ├── routes/         # App routes    
|   ├── App.tsx         # App main file
│   ├── main.ts         # Application entry point
│   └── index.css       # Global styles
├── .gitignore          # Files and directories ignored by Git
├── .oxlintrc.json      # oxlinter for code formating
├── index.html          # Main HTML template
├── package-lock.json   # Project packages and version
├── package.json        # Project metadata and dependencies
├── README.md           # Project Details
├── tsconfig.app.json   # TypeScript version
├── tsconfig.json       # TypeScript compiler options
├── tsconfig.node.json  # TypeScript for node environment
└── vite.config.ts      # Vite configuration file
```