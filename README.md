<p align="center" style="background-color:black; padding:10px; display:inline-block; border-radius:10px;">
    <img src="https://fossunited.org/files/FOSS%20Hack%205%20logo.svg"/>
</p>

<h1 align = 'center'> FOSSHACK KANPUR 2025</h1>

# Osshpere Project

Osshpere is a web application that allows users to seamlessly log in using their Google accounts. Built with React and integrated with Appwrite, Osshpere provides a user-friendly interface for authentication and data management.

## Features
- **Google OAuth2 Authentication**: Users can sign in using their Google accounts.
- **Appwrite Integration**: Utilizes Appwrite for backend services, including user account management and database operations.

## Getting Started
1. Clone the repository.
2. Install the necessary dependencies.
3. Set up your Appwrite project and configure the client with your project details.
4. Run the application and navigate to the login page.

## Technologies Used
- React
- Appwrite
- JavaScript
---
## Project Diagram

<a href="https://app.eraser.io/workspace/YuGGJw7yrqINftWFZsE8?elements=4C46jE4XIkdgkFmpnOFvXQ">
  <img src="https://app.eraser.io/workspace/YuGGJw7yrqINftWFZsE8/preview?elements=4C46jE4XIkdgkFmpnOFvXQ&type=embed" 
       alt="View on Eraser" 
       width="400" height="800"/>
</a>

## **📂 Folder Structure for OSSphere**
```
osshpere/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── NavBar.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer
│   │   ├── ProtectedRoute.jsx  # Protects routes from unauthorized users
│   │   ├── EventCard.jsx   # Event listing UI
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── EventRegister.jsx  # Event registration page
│   │   ├── EventListing.jsx   # List of events
│   │   ├── CommunitiesPage.jsx # Communities list page
│   │   ├── AboutUs.jsx    # About us page
│   │   ├── LoginPage.jsx  # Login with Google (OAuth)
│   ├── styles/            # Global styles
│   ├── Appwrite.js        # Appwrite configuration
│   ├── App.jsx            # Root component with routes
├── public/                # Static assets
├── tests/                 # Test files
├── README.md              # Documentation
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
```

---

```

---

## 🔧 Installation & Setup
### **1️⃣ Clone the repository**
```sh
git clone https://github.com/yourusername/osshpere.git
cd osshpere
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Configure Appwrite**
- Create a **free Appwrite account** at [Appwrite Cloud](https://cloud.appwrite.io).
- Set up an OAuth2 provider (**Google Sign-In**).
- Update the `Appwrite.js` file with your **project ID** and **API endpoint**.

```js
import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("your_project_id");

export const account = new Account(client);
export default client;
```

### **4️⃣ Run the development server**
```sh
npm run dev
```
This will start your project on `http://localhost:5173`.

---

## 🔑 Authentication & Protected Routes
- Users must **log in with Google** to access **events, communities, and registration pages**.
- **Protected routes** ensure that **unauthorized users cannot access** private pages.
- The **Navbar** updates dynamically, showing login/logout buttons based on authentication.

---
 ## Demo Video  Link:
https://drive.google.com/file/d/1s1eBNxlhnXFXxys2psk3qDvOoktx41m8/view?usp=drivesdk

## 🎨 Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Auth & Backend:** Appwrite
- **Routing:** React Router
- **State Management:** React Hooks
- **Deployment:** Vercel (or Netlify)

---


## 🤝 Contributing
Want to contribute? Fork the repo and submit a pull request!  
- Create a new branch: `git checkout -b feature-name`
- Make changes and commit: `git commit -m "Added new feature"`
- Push to the branch: `git push origin feature-name`
- Open a pull request!

---
## 👥 Team

Meet our contributors and maintainers:

- *Contributor 1* - [ https://github.com/hariom8787 ]
- *Contributor 2* - [ https://github.com/akhileshverma92 ]

## 📄 License
MIT License © 2025 OSSphere  

---
🚀 **Let's build an amazing open-source community together!**
```



