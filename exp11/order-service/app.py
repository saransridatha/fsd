from flask import Flask, jsonify, request

app = Flask(__name__)

orders = {
    101: {"item": "Laptop", "status": "Pending"},
    102: {"item": "Phone", "status": "Shipped"},
    103: {"item": "Shoes", "status": "Delivered"}
}

@app.route('/order/<int:order_id>', methods=['GET'])
def get_order(order_id):
    if order_id not in orders:
        return jsonify({"error": "Order not found"}), 404
    return jsonify({"order_id": order_id, **orders[order_id]})

@app.route('/order/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    if order_id not in orders:
        return jsonify({"error": "Order not found"}), 404

    data = request.json
    orders[order_id]["status"] = data.get("status", orders[order_id]["status"])

    return jsonify({
        "message": "Order updated",
        "order": orders[order_id]
    })

# ✅ CHANGE IS HERE
if __name__ == "__main__":
    app.run()