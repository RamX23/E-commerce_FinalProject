
# Keeper App

## Overview

Keeper App is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, manage, and delete notes, similar to the functionality of Google Keep. The app features a simple and intuitive user interface that makes it easy to keep track of notes.

## Features

- **Create Notes:** Users can add new notes with a title and content.
- **View Notes:** All saved notes are displayed on the main page.
- **Delete Notes:** Users can delete notes they no longer need.
- **Responsive Design:** The app is responsive and works well on both desktop and mobile devices.

## Technology Stack

### Frontend

- **React:** A JavaScript library for building user interfaces. React is used to create the dynamic and interactive user interface of the Keeper App.
- **Axios:** A promise-based HTTP client for making API requests from the frontend to the backend.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 engine. Node.js is used to create the backend server that handles API requests.
- **Express:** A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **MongoDB Atlas:** A cloud-based NoSQL database to store notes data. MongoDB is used to handle data persistence in the Keeper App.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js that provides a straightforward, schema-based solution to model your application data.

## Project Structure

```
keeper-app/
│
├── Backend/
│   
│   │  
│   ├── routes/
|   |   ├── models/
|   |   |   └── Note.js           # Mongoose schema for notes
│   │   └── notes.js              # API routes for CRUD operations on notes
│   ├── server.js                 # Entry point for the backend server
│   └── .env                      # Environment variables (e.g., MongoDB URI)(Please Add your own file)
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx        # Header component
│   │   │   ├── Footer.jsx        # Footer component
│   │   │   ├── Note.jsx          # Note component
│   │   │   └── CreateArea.jsx    # Form to create new notes
│   │   └── App.js                # Main React component
|   |   └── Index.js              # Main Index File
│   └──package.json               # Frontend dependencies and scripts
│                        
└── README.md                     # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for cloud database management.
- Git for version control.

### Clone the Repository

```bash
git clone https://github.com/Rushabh178/KeeperApp.git
cd KeeperApp
```

### Backend Setup

1. Navigate to the `Backend` directory:

   ```bash
   cd Backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in the `Backend` directory:

   ```env
   MONGODB_URI=<Your MongoDB Atlas URI>
   PORT=5000
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `Frontend` directory:

   ```bash
   cd ../Frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in the `Frontend` directory:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the app.
- Use the "Add" button to create a new note.
- Click the "Delete" button on a note to remove it.

## Deployment

For deploying the Keeper App, you can use services like Heroku for the backend and Netlify or Vercel for the frontend. Make sure to configure environment variables accordingly.

## Future Improvements

- **User Authentication:** Implement user authentication to allow users to save notes under their accounts.
- **Search Functionality:** Add a search bar to allow users to filter notes by title or content.
- **Tags and Categories:** Allow users to tag notes and categorize them for better organization.
- **Rich Text Editor:** Replace the basic text input with a rich text editor for more advanced note formatting.


## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## Contact

For any questions or feedback, feel free to reach out at [shrishrimalrushabh@gmail.com](shrishrimalrushabh@gmail.com).

---

This `README.md` provides a comprehensive overview of the project, setup instructions, and details about the technology stack used. You can customize it further based on any additional features or instructions specific to your project.
