# Experiment 8: Flask Backend - Student Management System

## 🎯 Overview
A simple Flask-based REST API for managing student data. This project demonstrates:
- Flask application structure
- Blueprint organization
- CRUD operations
- REST API principles
- Request/Response handling

## 📚 Project Structure
```
exp8/
├── virenv/                    # Virtual environment
├── routes/
│   ├── __init__.py
│   └── student_routes.py      # Student CRUD routes
├── middleware/                # For future middleware
├── app.py                     # Flask app factory
├── run.py                     # Server entry point
├── requirements.txt           # Dependencies
├── API_ROUTES.md             # API documentation
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd exp8
source virenv/bin/activate
pip install -r requirements.txt
```

### 2. Run the Server
```bash
python3 run.py
```
Server runs on: **http://localhost:5000**

### 3. Test the API
```bash
# Test home endpoint
curl http://localhost:5000/

# Create a student
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","age":20}'

# Get all students
curl http://localhost:5000/students
```

## 📖 API Endpoints Summary

| Method | Route | Purpose |
|--------|-------|---------|
| GET | / | Home/health check |
| POST | /students | Create new student |
| GET | /students | Get all students |
| GET | /students/{id} | Get specific student |
| PUT | /students/{id} | Update student |
| DELETE | /students/{id} | Delete student |

**Full documentation:** See [API_ROUTES.md](./API_ROUTES.md)

## 💻 Code Structure

### app.py
- Creates Flask application
- Registers Blueprints
- Exports `app` instance

### routes/student_routes.py
- Defines all student-related endpoints
- Uses Blueprint for organization
- Implements full CRUD operations

### run.py
- Entry point for running the server
- Runs Flask development server

## 🔑 Key Features

✅ **CRUD Operations**
- Create: POST /students
- Read: GET /students, GET /students/{id}
- Update: PUT /students/{id}
- Delete: DELETE /students/{id}

✅ **Error Handling**
- 400 Bad Request for missing fields
- 404 Not Found for invalid IDs
- Appropriate HTTP status codes

✅ **Modular Structure**
- Blueprint-based route organization
- Easy to extend with more blueprints

✅ **In-Memory Storage**
- Simple list-based data storage
- Perfect for learning purposes

## 📝 Example Usage

### Create Students
```python
import requests

# Create first student
response = requests.post('http://localhost:5000/students', 
    json={'name': 'Alice', 'age': 20})
print(response.json())  # {"id": 1, "name": "Alice", "age": 20}

# Create second student
response = requests.post('http://localhost:5000/students', 
    json={'name': 'Bob', 'age': 22})
print(response.json())  # {"id": 2, "name": "Bob", "age": 22}
```

### Retrieve Students
```python
# Get all
response = requests.get('http://localhost:5000/students')
print(response.json())  # [{"id": 1, ...}, {"id": 2, ...}]

# Get by ID
response = requests.get('http://localhost:5000/students/1')
print(response.json())  # {"id": 1, "name": "Alice", "age": 20}
```

### Update Student
```python
response = requests.put('http://localhost:5000/students/1',
    json={'name': 'Alice Updated', 'age': 21})
print(response.json())  # {"id": 1, "name": "Alice Updated", "age": 21}
```

### Delete Student
```python
response = requests.delete('http://localhost:5000/students/1')
print(response.json())  # {"message": "Deleted successfully"}
```

## 📚 Learning Concepts

### Flask Blueprints
```python
from flask import Blueprint

student_bp = Blueprint("students", __name__)

@student_bp.route("/students", methods=["POST"])
def create_student():
    # Route handler
    pass
```

### REST API Methods
- **POST** - Create resources (201 Created)
- **GET** - Retrieve resources (200 OK)
- **PUT** - Update resources (200 OK)
- **DELETE** - Remove resources (200 OK, 404 if not found)

### JSON Request/Response
```python
data = request.get_json()  # Parse incoming JSON
return jsonify(student)     # Return JSON response
```

## 🧪 Testing Approaches

### Using cURL
```bash
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","age":20}'
```

### Using Python requests
```python
import requests
requests.post('http://localhost:5000/students', json={'name': 'Test'})
```

### Using Postman
1. Create collection
2. Add requests for each endpoint
3. Set request type (GET, POST, PUT, DELETE)
4. Add JSON body for POST/PUT
5. Send and view response

## 🔧 Future Enhancements

- [ ] Database integration (SQLite/PostgreSQL)
- [ ] User authentication
- [ ] Data validation with Marshmallow
- [ ] Logging middleware
- [ ] CORS support
- [ ] Pagination for GET /students
- [ ] Filtering and sorting
- [ ] API documentation with Swagger

## 📦 Dependencies

- **Flask** 3.1.2 - Web framework
- **Werkzeug** 3.1.5 - WSGI toolkit
- **Jinja2** 3.1.6 - Template engine
- **Click** 8.3.1 - CLI creation
- **MarkupSafe** 3.0.3 - String escaping
- **itsdangerous** 2.2.0 - Signing data
- **blinker** 1.9.0 - Signal support

## 🎓 What You'll Learn

✅ How to structure a Flask application  
✅ Using Blueprints for modular code  
✅ Implementing REST API endpoints  
✅ Handling HTTP methods (GET, POST, PUT, DELETE)  
✅ JSON request/response handling  
✅ Error handling and status codes  
✅ Application factory pattern  
✅ Best practices for API design  

## 🚦 Server Status Codes

| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Resource doesn't exist |

## 📞 Support

For API documentation: See [API_ROUTES.md](./API_ROUTES.md)  
For testing examples: See cURL commands in API_ROUTES.md

---

**Ready to build your Flask API?** Run `python3 run.py` and start testing! 🚀
