from flask import Flask, request, jsonify
from db_config import get_db_connection

app = Flask(__name__)

# 🏠 HOME ROUTE
@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to Student CRUD API 🚀",
        "endpoints": {
            "POST /students": "Create student",
            "GET /students": "Get all students",
            "GET /students/<id>": "Get single student",
            "PUT /students/<id>": "Update student",
            "DELETE /students/<id>": "Delete student"
        }
    })


# ✅ CREATE (POST)
@app.route('/students', methods=['POST'])
def add_student():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            "INSERT INTO student (name, age, course) VALUES (%s, %s, %s)",
            (data['name'], data['age'], data['course'])
        )
        conn.commit()
        return jsonify({"message": "Student added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()


# ✅ READ ALL (GET)
@app.route('/students', methods=['GET'])
def get_students():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        cursor.execute("SELECT * FROM student")
        students = cursor.fetchall()
        return jsonify(students)
    finally:
        cursor.close()
        conn.close()


# ✅ READ ONE (GET)
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        cursor.execute("SELECT * FROM student WHERE id=%s", (id,))
        student = cursor.fetchone()
        return jsonify(student)
    finally:
        cursor.close()
        conn.close()


# ✅ UPDATE (PUT)
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            "UPDATE student SET name=%s, age=%s, course=%s WHERE id=%s",
            (data['name'], data['age'], data['course'], id)
        )
        conn.commit()
        return jsonify({"message": "Student updated successfully"})
    finally:
        cursor.close()
        conn.close()


# ✅ DELETE (DELETE)
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("DELETE FROM student WHERE id=%s", (id,))
        conn.commit()
        return jsonify({"message": "Student deleted successfully"})
    finally:
        cursor.close()
        conn.close()


# ▶️ RUN SERVER
if __name__ == '__main__':
    app.run(debug=True)