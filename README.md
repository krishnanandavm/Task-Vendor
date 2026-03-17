# Vendor Product Management System

A full-stack web application designed for vendors to manage their product inventory securely. This project features a Django REST Framework backend and a Next.js frontend, providing a seamless, responsive, and data-isolated experience for every user.



## 🚀 Key Features
Secure Vendor Accounts
Complete registration and login system using JWT/Token-based authentication.

Private Inventory
A strict data-isolation layer ensures vendors only see and manage their own products.

Full CRUD Operations
Vendors can Create, Read, Update, and Delete products with real-time UI updates.

Modern UI
Built with Tailwind CSS, featuring custom theme variables, smooth animations, and a clean dashboard layout.



## 🏗️ Technical Architecture
The application follows a decoupled architecture, using the backend as a stateless API and the frontend as a dynamic client.

Backend (Python/Django)
RESTful API: Developed using Django REST Framework (DRF).

Database: SQLite is used for lightweight and portable data storage.

Security: Implements IsAuthenticated permission classes to protect product endpoints.

Frontend (Next.js)
Framework: React-based Next.js for efficient routing and component management.

Styling: Styled using a custom Tailwind configuration (Primary color: #056bd1).

State Management: Local state handling for authentication tokens and inventory data.

## 🛠️ API Reference
Authentication Endpoints
POST /api/register/ — Register a new vendor account.

POST /api/login/ — Authenticate and receive a token.

Product Management Endpoints
GET /api/products/ — Fetch all products owned by the vendor.

POST /api/products/ — Add a new product to the inventory.

PUT /api/products/{id}/ — Update an existing product's details.

DELETE /api/products/{id}/ — Permanently remove a product.

## ⚙️ Installation & Setup
Backend Setup
Navigate to the /backend directory.

Create and activate a virtual environment.

Install dependencies: pip install -r requirements.txt

Run migrations: python manage.py migrate

Start the server: python manage.py runserver

Frontend Setup
Navigate to the /frontend directory.

Install dependencies: npm install

Start the development server: npm run dev

## 📦 Data Model
The core of the application relies on a Product model with the following structure:

Product Name: String

Description: Text

Price: Decimal/Float

Quantity: Integer

Created Date: DateTime (Auto)

Vendor: Foreign Key (Linked to the Django User)
