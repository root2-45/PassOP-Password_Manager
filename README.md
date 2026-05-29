🔐 PassOP – Password Saver Application
A full-stack web application that allows users to securely store and manage their passwords in one place. Built with a Node.js + Express backend and MongoDB database, with a simple login system to keep your data private.

🚀 Features

🔑 User login and registration system
💾 Save, view, and manage passwords securely
🗄️ MongoDB database for persistent storage
📱 Responsive design across desktop and mobile
🌐 Cross-browser compatible (Chrome & Firefox tested)
⚡ Clean and structured frontend interface


🛠️ Tech Stack
LayerTechnologyFrontendHTML5, CSS3, JavaScriptBackendNode.js, Express.jsDatabaseMongoDBVersion ControlGit, GitHub

📁 Project Structure
PassOP/
│
├── public/
│   ├── index.html       # Main UI
│   ├── style.css        # Styling
│   └── script.js        # Frontend logic
│
├── routes/
│   └── auth.js          # Login/register routes
│
├── models/
│   └── user.js          # MongoDB user model
│
├── server.js            # Express server entry point
├── package.json
└── README.md

⚙️ Getting Started
Prerequisites
Make sure you have the following installed:

Node.js
MongoDB (local or Atlas)
Git

Installation

Clone the repository

bash   git clone https://github.com/root2-45/PassOP.git
   cd PassOP

Install dependencies

bash   npm install

Set up MongoDB

Make sure MongoDB is running locally, or use a MongoDB Atlas connection string.
Update your DB connection string in server.js or a .env file.


Run the application

bash   node server.js

Open in browser

   http://localhost:3000

🖥️ Screenshots

Add screenshots of your login page and password manager UI here.


🔮 Future Improvements

Password encryption before storing in DB
JWT-based authentication
Deployment on Render or Railway
Password strength indicator
Copy-to-clipboard functionality


👩‍💻 Author
Rutuja Shivaji Shingote
📧 rutujashingote5@gmail.com
🌐 GitHub
