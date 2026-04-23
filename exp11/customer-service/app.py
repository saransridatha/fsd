from flask import Flask, jsonify
import requests

app = Flask(__name__)

# ✅ ADD THIS HERE
@app.route('/')
def home():
    return "Customer Service is running 🚀"

customers = {
    1: {"name": "User1", "orders": [101, 102]},
    2: {"name": "User2", "orders": [103]}
}

@app.route('/customer/<int:customer_id>', methods=['GET'])
def get_customer_orders(customer_id):
    customer = customers.get(customer_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    orders_data = []

    for order_id in customer["orders"]:
        response = requests.get(f"http://localhost:5001/order/{order_id}")
        if response.status_code == 200:
            orders_data.append(response.json())

    return jsonify({
        "customer": customer["name"],
        "orders": orders_data
    })

if __name__ == "__main__":
    app.run()