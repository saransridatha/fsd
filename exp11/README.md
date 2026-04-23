# Microservices-Based Backend Module (Flask)

## 📌 Project Overview

This project demonstrates a microservice-based backend architecture using Python and Flask. Instead of building one large monolithic application, the system is divided into two independent services.

Each service performs a specific task and communicates with the other service using REST APIs.

---

## 🧩 Microservices Architecture

### 1. Customer Service (Port: 5000)

- Handles customer data
- Fetches customer orders
- Calls Order Service to retrieve order details

### 2. Order Service (Port: 5001)

- Stores order data
- Returns order details
- Updates order status

---

## 🔁 Communication Flow

User → Customer Service → Order Service → Response

Customer Service communicates with Order Service using HTTP requests:

requests.get("http://localhost:5001/order/<order_id>")

This demonstrates inter-service communication in microservices.

---

## ⚙️ Technologies Used

- Python
- Flask
- REST APIs
- Postman (for testing)
- Render (for deployment)

---

## 📂 Project Structure

microservices-project/

│
├── customer-service/
│ ├── app.py
│ ├── requirements.txt
│
├── order-service/
│ ├── app.py
│ ├── requirements.txt
│
├── screenshots/
├── README.md
├── .gitignore

---

## 🧪 API Endpoints

### 🔹 Customer Service

GET /customer/<customer_id>

Example:
GET http://localhost:5000/customer/1

---

### 🔹 Order Service

GET /order/<order_id>

PUT /order/<order_id>

Example:
PUT http://localhost:5001/order/101

Body:
{
"status": "Delivered"
}

---

## 🛠️ Setup Instructions

### Step 1: Clone Repository

git clone <your-repo-link>
cd microservices-project

---

### Step 2: Setup Customer Service

cd customer-service

python -m venv venv

source venv/bin/activate (Mac/Linux)
venv\Scripts\activate (Windows)

pip install -r requirements.txt

python app.py

---

### Step 3: Setup Order Service

cd order-service

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python app.py

---

## 🧪 Testing

Use Postman to test APIs:

1. GET http://localhost:5000/customer/1
2. PUT http://localhost:5001/order/101

---

## 📸 Screenshots

Include the following in screenshots folder:

- Running services in terminal
- GET API response
- PUT API response

---

## ☁️ Deployment (Render)

Deploy both services separately on Render:

- Customer Service: <your-link>
- Order Service: <your-link>

After deployment, update the URL in customer-service:

Change:
http://localhost:5001

To:
https://your-order-service.onrender.com

---

## 🎯 Key Concepts

- Microservices architecture
- REST API communication
- Service-to-service interaction
- Independent deployment
- In-memory data storage

---

## ⚠️ Notes

- Data is stored in-memory (no database used)
- Virtual environment (venv) is not included in submission
- requirements.txt is used to manage dependencies

---

## 👨‍💻 Author

Madhipati Saran Sri Datha (23BCC70007)
