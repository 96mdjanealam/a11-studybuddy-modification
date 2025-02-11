# Study Buddy

## About Study Buddy
Study Buddy is a web application designed to streamline the process of creating assignments and evaluating them efficiently. It provides tools for educators and students to interact seamlessly in an academic setting.

## Live URL
[Visit Study Buddy](https://study-buddy-71834.web.app/)  

## 📖 Table of Contents
- [Features](#-features)  
- [Installation](#-installation)  
- [Usage](#-usage)  
- [Dependencies](#-dependencies)  
- [Development](#-development)  

## ✨ Features  
- **Assignment Creation**: Teachers can easily create and assign tasks to students.  
- **Submission Tracking**: Track the status of submitted assignments.  
- **Automated Grading**: Evaluate assignments automatically using predefined criteria.  
- **Collaboration Tools**: Facilitate discussions and queries related to assignments.  
- **User Roles**: Distinct dashboards for teachers and students.  

## 🛠 Installation  
### Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Steps  
1. Clone the repository:  
   ```sh
   git clone https://github.com/96mdjanealam/studybuddy-client-a11.git
   cd studybuddy-client-a11
   ```  
2. Install dependencies:  
   ```sh
   npm install
   # or
   yarn install
   ```  
3. Set up environment variables:  
   - Create a `.env.local` file in the project root.  
   - Add the following environment variables:  
     ```sh
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_STORAGE_BUCKET=your-storage-bucket
     VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_APP_ID=your-app-id
     ```  

## ⚙️ Configuration  
- **Firebase**: Ensure that your Firebase project is correctly set up with authentication, database, and storage configurations.  
- **Routing**: This project uses `react-router-dom` for client-side navigation.  

## 🚀 Usage  
1. Start the development server:  
   ```sh
   npm run dev
   # or
   yarn dev
   ```  
2. Open your browser and go to `http://localhost:5173/`.  

## 📦 Dependencies  
This project is built using:  

### **Main Dependencies**  
- [`react`](https://react.dev/) – Core library for UI components  
- [`react-router-dom`](https://reactrouter.com/) – Client-side routing  
- [`axios`](https://axios-http.com/) – HTTP requests  
- [`firebase`](https://firebase.google.com/) – Backend services  
- [`tailwindcss`](https://tailwindcss.com/) + [`daisyUI`](https://daisyui.com/) – UI styling  
- [`react-toastify`](https://github.com/fkhadra/react-toastify) – Notifications  
- [`sweetalert2`](https://sweetalert2.github.io/) – Custom alerts  

### **Development Dependencies**  
- [`vite`](https://vitejs.dev/) – Fast development server  
- [`eslint`](https://eslint.org/) – Code linting  
- [`postcss`](https://postcss.org/) – CSS processing  
- [`tailwindcss`](https://tailwindcss.com/) – Utility-first CSS framework  

## 🛠 Development  
To build the project for production:  
```sh
npm run build
# or
yarn build
```  
To preview the production build:  
```sh
npm run preview
# or
yarn preview
```  

## 🤝 Contributing  
Contributions are welcome! Feel free to submit issues or pull requests.
