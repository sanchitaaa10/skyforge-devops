from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///skyforge.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ==========================
# Models
# ==========================

class Factory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    location = db.Column(db.String(100))
    status = db.Column(db.String(50))


class Machine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    status = db.Column(db.String(50))


class Alert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255))


# ==========================
# Routes
# ==========================

@app.route("/")
def home():
    return jsonify({
        "message": "SkyForge API Running"
    })


@app.route("/dashboard")
def dashboard():
    return jsonify({
        "factories": Factory.query.count(),
        "machines": Machine.query.count(),
        "alerts": Alert.query.count()
    })


@app.route("/factories")
def factories():
    factories = Factory.query.all()

    return jsonify([
        {
            "id": factory.id,
            "name": factory.name,
            "location": factory.location,
            "status": factory.status
        }
        for factory in factories
    ])


@app.route("/machines")
def machines():
    machines = Machine.query.all()

    return jsonify([
        {
            "id": machine.id,
            "name": machine.name,
            "status": machine.status
        }
        for machine in machines
    ])


@app.route("/alerts")
def alerts():
    alerts = Alert.query.all()

    return jsonify([
        {
            "id": alert.id,
            "message": alert.message
        }
        for alert in alerts
    ])


# ==========================
# Database Initialization
# ==========================

if __name__ == "__main__":

    with app.app_context():

        db.create_all()

        if Factory.query.count() == 0:
            db.session.add(
                Factory(
                    name="Mumbai Plant",
                    location="Mumbai",
                    status="Active"
                )
            )

            db.session.add(
                Factory(
                    name="Pune Plant",
                    location="Pune",
                    status="Active"
                )
            )

        if Machine.query.count() == 0:
            db.session.add(
                Machine(
                    name="Robot Arm A1",
                    status="Running"
                )
            )

            db.session.add(
                Machine(
                    name="CNC Machine B2",
                    status="Idle"
                )
            )

        if Alert.query.count() == 0:
            db.session.add(
                Alert(
                    message="HIGH: Maintenance Required"
                )
            )

            db.session.add(
                Alert(
                    message="MEDIUM: Sensor Calibration Due"
                )
            )

        db.session.commit()

    app.run(
        host="0.0.0.0",
        port=5001,
        debug=True
    )
