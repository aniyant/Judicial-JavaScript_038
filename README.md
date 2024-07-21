# Code Crafter
### Judicial Code Editor is an online code editor that enables users to create, edit, and execute code directly in their browser. It supports multiple programming languages and offers a range of features to enhance the coding experience. Whether you're a student learning to code, a developer collaborating on a project, or anyone in between, Judicial Code Editor provides a seamless and accessible platform for writing and running code.

## Project Type
### Full Stack Web Application

## Project Code
### Judicial-JavaScript_038

## Deployed App
### Frontend : https://onlinecodecrafter.netlify.app/login
### Backend : https://judicial-javascript-038-dock.onrender.com/
## Directory Structure : 
![Screenshot (761)](https://github.com/user-attachments/assets/0905d23a-fac6-46c2-bec1-791c8ff60186)
![Screenshot (762)](https://github.com/user-attachments/assets/3ebe0c1b-768f-4c58-8e7b-662fcdec43ce)
![Screenshot (763)](https://github.com/user-attachments/assets/f02be4b2-a622-40f4-b2ed-20b0f6c056d4)
![Screenshot (764)](https://github.com/user-attachments/assets/39cdf36f-0eaf-4e40-812a-b370bf30427e)
![Screenshot (765)](https://github.com/user-attachments/assets/715b8bae-ce2a-462f-9393-cb8dc27d2d98)

## Video Walkthrough of the project

## Features
### Key features of our project
- **User Authentication**: Sign up, log in, and log out to manage your coding environment securely.
- **File Management**: Create, rename, delete, and organize files and folders, similar to popular code editors.
- **Code Editor**: - Syntax highlighting for various programming languages (e.g.JavaScript, Python, Java, CPP, C).
               - Features like line numbers, auto-indentation, and auto-completion, auto close barckets etc..
               - Customizable themes and settings to personalize your coding environment.
- **Code Execution**: Execute code and display the output within the application. Supports languages such as Java, CPP,   C, JavaScript, and Python.
- **Debugger**: Basic debugging tools to help you find and fix errors in your code.
- **Code Snippets and Templates**: Predefined snippets and templates to help you start coding quickly.
- **Offline Mode**: Continue coding without an internet connection and sync changes when back online.
  
## Screenshots
![Screenshot (766)](https://github.com/user-attachments/assets/13bb37cb-d29f-40f5-b57f-d8f3e3137100)

![Screenshot (767)](https://github.com/user-attachments/assets/9998b001-b990-4a07-aaa8-d1aaad84b822)

![Screenshot (768)](https://github.com/user-attachments/assets/dfe7e058-0003-4d18-baff-47476c5de6c3)

![Screenshot (769)](https://github.com/user-attachments/assets/5adf0954-4f6f-482e-ad46-ee8ecd4e1af6)

## Tech Stack
### Frontend
- **React**: For building user interfaces.
- **Create-React-App**: For fast and optimized development build.
- **CodeMirror**: For the code editor component, providing syntax highlighting and other editing features.
- **Redux**: For state management.
- **Axios**: For making HTTP requests.

### Backend
- **Node.js**: For server-side JavaScript.
- **Express**: For creating the REST API.
- **MongoDB**: For the database.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For user authentication.
- **Docker**: For containerizing the application.

### DevOps
- **Render**: For deploying the backend services.
- **GitHub Actions**: For CI/CD pipeline.

### Design Elements
-**UI Components**
 - **Styled Components**: For writing CSS-in-JS to style the application.
### Editor Features
- **Syntax Highlighting**: Supports multiple languages (HTML, CSS, JavaScript, Python, etc.).
- **Auto-Completion**: Helps in writing code faster with suggestions.
- **Themes**: Multiple themes to choose from for a personalized coding environment.
- **Error Highlighting**: Identifies and highlights errors in the code.

## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB Atlas or a local MongoDB instance.
- Git for version control.
- Installation
- Clone the repository:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/judicial-code-editor.git
   cd judicial-code-editor 

2. **Backend Setup**
   **Using Docker**
   - Navigate to the Backend Directory

   ```bash
   cd backend

3. **Environment Variables**

### Create a .env file in the backend directory and add your environment variables. Below is an example of the variables you might need:

### env
  - MONGO_URI=your_mongodb_connection_string
  - JWT_SECRET=your_jwt_secret
  - MONGO_URI: The connection string for your MongoDB database. You can get this from MongoDB Atlas or your local     MongoDB instance.
  - JWT_SECRET: A secret key for JWT authentication.

4. **Build the Docker Image**

   ### Build the Docker image for the backend:

    ```bash
       docker build -t judicial-code-editor-backend .

### Run the Docker container for the backend:

    ```` bash
        docker run -d --name judicial-code-editor-backend -p 3001:3001 --env-file .env judicial-code-editor-backend

### This will start the backend server in a Docker container and map port 3001 of the container to port 3001 on your host machine.

5. **API Endpoints**

    ### The backend server will provide several API endpoints for user authentication, file management, code execution, etc. You can find the detailed API documentation in the backend directory or within the code comments.

    ## Without Docker
    ## Navigate to the Backend Directory:

    ``` bash
        cd backend
    
    ## Install Dependencies:

    ## Install the required dependencies using npm:

    ``` bash
        npm install
   
   ### Create Environment Variables:

  ### Create a .env file in the backend directory and add your environment variables. Below is an example of the variables you might need:

### env

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- Run the Backend Server:

### Start the backend server using npm:

    ```bash
       npm start
### This will start the backend server on the default port (usually 3001 or as specified in your server configuration).

6. **Frontend Setup**
### Navigate to the Frontend Directory:

    ``` bash
        cd ../frontend

### Install Dependencies:

### Install the required dependencies using npm:

    ``` bash
        npm install

### Run the Frontend Development Server:

### Start the frontend development server:

    ```bash
        npm run start

## Collaborators to connect on Linkedin
- **Sunny Kumar** : **https://www.linkedin.com/in/sunny-kumar001/**
- **Sarvjyoti** : **https://www.linkedin.com/in/sarvjyoti05/**

## Acknowledments
- Inspired by our own thoughts.
- Special thanks to our dedicated team for their invaluable contributions to Code Crafter.

