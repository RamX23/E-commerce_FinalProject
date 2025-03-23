
# E-commerce App

## Overview

This E-Commerce Application is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless online shopping experience where users can browse products, add items to their cart, make purchases, and manage their orders.

## Features

- **User Authentication:** Secure login and registration using JWT authentication.  
- **Product Management:** View, add, update, and delete products (admin access).  
- **Shopping Cart:** Add, remove, and update items in the cart before checkout.  
- **Order Processing:** Users can place orders and track order status.  
- **Payment Integration:** Secure payment gateway for hassle-free transactions.  
- **Responsive UI:** Fully optimized for mobile and desktop devices.  

## Tech Stack

- **Frontend:** React.js, Redux (for state management), Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose for object modeling)  
- **Authentication:** JSON Web Token (JWT)  
- **Payment Gateway:** Integrated Paypal payment gateway.


## Project Structure
```

E-commerce_FinalProject/
│── client/                     # Frontend (React.js)
│   ├── public/                  # Static assets (index.html, favicon, etc.)
│   ├── src/
│   │   ├── assets/              # Images, icons, and styles
│   │   ├── components/          # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── pages/               # Page components (Home, Product, Cart, etc.)
│   │   ├── context/             # Context API providers
│   │   ├── hooks/               # Custom hooks
│   │   ├── redux/               # Redux store, slices
│   │   ├── services/            # API calls
│   │   ├── App.js               # Main App component
│   │   ├── index.js             # Entry point for React app
│   ├── package.json             # Frontend dependencies
│   ├── .env                     # Environment variables for frontend
│
│── server/                     # Backend (Node.js, Express)
│   ├── config/                  # Database and config files
│   ├── controllers/             # Controllers for handling logic
│   ├── models/                  # Mongoose models (User, Product, Order, etc.)
│   ├── routes/                  # Express routes (Auth, Products, Orders)
│   ├── middleware/              # Authentication, error handling
│   ├── utils/                   # Helper functions
│   ├── server.js                # Main entry point for backend
│   ├── package.json             # Backend dependencies
│   ├── .env                     # Environment variables for backend
│
│── .gitignore                   # Ignore unnecessary files
│── README.md                    # Project documentation
```


## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for cloud database management.
- Git for version control.

### Clone the Repository

```bash
git clone https://github.com/RamX23/E-commerece_FinalProject
cd E-commerce_FinalProject
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
   node index.js
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
   npm run dev
   ```

   The app will be running at `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the app.
- Use the "Add" button to create a new note.
- Click the "Delete" button on a note to remove it.

## Deployment

## 🌍 Deployment

The application is **deployed on Render**.

- **Frontend:** [Live URL](#(https://e-commerce-frontend1-t8fy.onrender.com)  
- **Backend:** [[API URL](#(https://e-commerce-finalproject1.onrender.com)

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## Contact

For any questions or feedback, feel free to reach out at [ramg8305@gmail.com](ramg8305@gmail.com).

---

This `README.md` provides a comprehensive overview of the project, setup instructions, and details about the technology stack used. You can customize it further based on any additional features or instructions specific to your project.
