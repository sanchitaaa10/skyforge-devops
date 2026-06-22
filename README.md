<div align="center">

# 🚀 SkyForge
### Aerospace Manufacturing Monitoring Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)

> A full-stack DevOps project demonstrating an end-to-end aerospace manufacturing monitoring platform — from application development to containerization, orchestration, CI/CD, and observability.

**Submitted by:** Sanchita Suryawanshi &nbsp;|&nbsp; B.Tech CSE 2024–28 &nbsp;|&nbsp; ITM Skills University

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Run Locally (Without Docker)](#1-run-locally-without-docker)
  - [2. Run with Docker](#2-run-with-docker)
  - [3. Deploy on Kubernetes](#3-deploy-on-kubernetes)
- [CI/CD – Jenkins Pipeline](#-cicd--jenkins-pipeline)
- [Monitoring – Prometheus & Grafana](#-monitoring--prometheus--grafana)
- [API Reference](#-api-reference)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Challenges Faced](#-challenges-faced)
- [Future Scope](#-future-scope)
- [Learning Outcomes](#-learning-outcomes)

---

## 📌 Overview

**SkyForge** is a centralized manufacturing operations monitoring platform built for the aerospace industry. It provides real-time visibility into factories, machines, production alerts, and operational reports through a clean, responsive web interface.

The project demonstrates a **production-grade DevOps workflow**:

```
Developer → GitHub → Jenkins CI/CD → Docker Build → Kubernetes → Prometheus → Grafana
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React JS, Vite |
| **Backend** | Flask (Python) |
| **Database** | SQLite |
| **Version Control** | Git |
| **Repository** | GitHub |
| **Containerization** | Docker |
| **Orchestration** | Kubernetes (Minikube) |
| **CI/CD** | Jenkins |
| **Monitoring** | Prometheus |
| **Visualization** | Grafana |

---

## 🏗 Project Architecture

```
┌─────────────┐     push      ┌──────────────┐    trigger    ┌─────────────────┐
│  Developer  │ ─────────────▶│    GitHub    │ ─────────────▶│    Jenkins      │
└─────────────┘               └──────────────┘               │  CI/CD Pipeline │
                                                              └────────┬────────┘
                                                                       │ build & push
                                                                       ▼
                                                              ┌─────────────────┐
                                                              │  Docker Images  │
                                                              └────────┬────────┘
                                                                       │ deploy
                                                                       ▼
                                                    ┌──────────────────────────────┐
                                                    │     Kubernetes Cluster       │
                                                    │  ┌────────────────────────┐  │
                                                    │  │  Frontend Pod (React)  │  │
                                                    │  └────────────────────────┘  │
                                                    │  ┌────────────────────────┐  │
                                                    │  │  Backend Pod (Flask)   │  │
                                                    │  └────────────────────────┘  │
                                                    └──────────┬───────────────────┘
                                                               │ scrape metrics
                                                               ▼
                                                    ┌──────────────────────────┐
                                                    │      Prometheus          │
                                                    └──────────┬───────────────┘
                                                               │ visualize
                                                               ▼
                                                    ┌──────────────────────────┐
                                                    │       Grafana            │
                                                    └──────────────────────────┘
```

---

## ✨ Features

### Application Modules

| Module | Description |
|---|---|
| **Dashboard** | Centralized overview — total factories, machines, alerts, production efficiency |
| **Factories** | Lists all manufacturing plants with location and operational status |
| **Machines** | Displays machines (Robot Arm A1, CNC Machine B2) with real-time status |
| **Alerts** | Operational alerts: Maintenance Required, Sensor Calibration Due, etc. |
| **Reports** | Production reporting module (extensible for PDF export and analytics) |

### DevOps Capabilities

- ✅ Fully containerized frontend & backend with Docker
- ✅ Kubernetes deployment with separate pods and services
- ✅ Automated CI/CD pipeline via Jenkins
- ✅ Infrastructure monitoring via Prometheus
- ✅ Real-time dashboard visualization via Grafana
- ✅ Environment-based configuration with `.env` files

---

## 📁 Project Structure

```
skyforge/
├── frontend/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Factories.jsx
│   │   │   ├── Machines.jsx
│   │   │   ├── Alerts.jsx
│   │   │   └── Reports.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env                    # VITE_API_URL config
│   ├── Dockerfile
│   └── package.json
│
├── backend/                    # Flask Python backend
│   ├── app.py                  # Main Flask application
│   ├── database.py             # SQLite setup & seed data
│   ├── requirements.txt
│   └── Dockerfile
│
├── k8s/                        # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
│
├── Jenkinsfile                 # Jenkins pipeline definition
├── docker-compose.yml          # Local multi-container setup
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following tools are installed on your system:

| Tool | Version | Install |
|---|---|---|
| Node.js | ≥ 18.x | [nodejs.org](https://nodejs.org) |
| Python | ≥ 3.10 | [python.org](https://python.org) |
| Docker | Latest | [docker.com](https://docker.com) |
| Minikube | Latest | [minikube.sigs.k8s.io](https://minikube.sigs.k8s.io) |
| kubectl | Latest | [kubernetes.io](https://kubernetes.io/docs/tasks/tools/) |
| Jenkins | Latest LTS | [jenkins.io](https://jenkins.io) |
| Helm | ≥ 3.x | [helm.sh](https://helm.sh) |

---

### 1. Run Locally (Without Docker)

#### Backend

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
# Backend runs at: http://127.0.0.1:5001
```

#### Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://127.0.0.1:5001" > .env

# Start development server
npm run dev
# Frontend runs at: http://localhost:5173
```

---

### 2. Run with Docker

#### Build Images

```bash
# Build backend image
docker build -t skyforge-backend ./backend

# Build frontend image
docker build -t skyforge-frontend ./frontend
```

#### Run Containers

```bash
# Run backend container
docker run -d -p 5001:5001 --name skyforge-backend skyforge-backend

# Run frontend container
docker run -d -p 3000:3000 --name skyforge-frontend skyforge-frontend
```

#### Verify Running Containers

```bash
docker ps
```

#### Using Docker Compose (Recommended)

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down
```

---

### 3. Deploy on Kubernetes

#### Start Minikube

```bash
minikube start

# Verify cluster status
minikube status
```

#### Apply Kubernetes Manifests

```bash
# Deploy backend
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

# Deploy frontend
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
```

#### Verify Deployment

```bash
# Check pods
kubectl get pods

# Check services
kubectl get svc

# Access the application
minikube service skyforge-frontend
```

---

## 🔄 CI/CD – Jenkins Pipeline

The `Jenkinsfile` in the root of the project defines a multi-stage pipeline:

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout')  { /* Pull code from GitHub */ }
        stage('Build')     { /* Install deps & build */ }
        stage('Dockerize') { /* Build Docker images  */ }
        stage('Deploy')    { /* Apply to Kubernetes  */ }
        stage('Notify')    { /* Build status report  */ }
    }
}
```

#### Setup Jenkins Pipeline

1. Open Jenkins → **New Item** → **Pipeline**
2. Under **Pipeline**, select **Pipeline script from SCM**
3. Set SCM to **Git** and enter your repository URL
4. Set the script path to `Jenkinsfile`
5. Save and click **Build Now**

---

## 📊 Monitoring – Prometheus & Grafana

### Deploy Prometheus using Helm

```bash
# Add Prometheus Helm repo
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install Prometheus stack
helm install prometheus prometheus-community/kube-prometheus-stack

# Verify installation
helm list
kubectl get pods
```

### Access Prometheus

```bash
kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090
# Open: http://localhost:9090
```

#### Useful Prometheus Queries

| Query | Description |
|---|---|
| `up` | Shows health of all monitored targets (1 = healthy) |
| `container_cpu_usage_seconds_total` | CPU usage per container |
| `container_memory_usage_bytes` | Memory usage per container |
| `kube_pod_status_phase` | Status of all pods |

### Access Grafana

```bash
kubectl port-forward svc/prometheus-grafana 3000:80
# Open: http://localhost:3000
# Default credentials — admin / prom-operator
```

#### Grafana Setup

1. Login to Grafana
2. Go to **Configuration → Data Sources → Add data source**
3. Select **Prometheus**
4. Set URL to `http://prometheus-kube-prometheus-prometheus:9090`
5. Click **Save & Test**
6. Import a Kubernetes dashboard (ID: `3119` or `6417`)

---

## 📡 API Reference

Base URL: `http://localhost:5001`

### `GET /dashboard`

Returns aggregated platform statistics.

```json
{
  "total_factories": 2,
  "total_machines": 5,
  "total_alerts": 3,
  "production_efficiency": 87.5
}
```

### `GET /factories`

Returns all factory records.

```json
[
  { "id": 1, "name": "Mumbai Plant",  "location": "Mumbai", "status": "Active" },
  { "id": 2, "name": "Pune Plant",    "location": "Pune",   "status": "Active" }
]
```

### `GET /machines`

Returns all machine records.

```json
[
  { "id": 1, "name": "Robot Arm A1",    "factory_id": 1, "status": "Running" },
  { "id": 2, "name": "CNC Machine B2",  "factory_id": 1, "status": "Idle"    }
]
```

### `GET /alerts`

Returns all operational alerts.

```json
[
  { "id": 1, "type": "Maintenance Required",    "machine_id": 2, "severity": "High"   },
  { "id": 2, "type": "Sensor Calibration Due",  "machine_id": 1, "severity": "Medium" }
]
```

---

## 🔧 Environment Variables

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5001
```

### Backend (`backend/.env`)

```env
FLASK_ENV=development
FLASK_PORT=5001
DATABASE_URL=sqlite:///skyforge.db
```

---

## 📸 Screenshots

| # | Screenshot |
|---|---|
| 1 | Dashboard Overview |
| 2 | Factories Page |
| 3 | Machines Page |
| 4 | Alerts Page |
| 5 | `docker images` — Built Images |
| 6 | `docker ps` — Running Containers |
| 7 | `minikube status` |
| 8 | `kubectl get pods` |
| 9 | `kubectl get svc` |
| 10 | Jenkins Successful Build |
| 11 | Prometheus `up` Query |
| 12 | Grafana Monitoring Dashboard |

> 📁 All screenshots are available in the `/docs/screenshots/` directory.

---

## ⚠️ Challenges Faced

| Challenge | Resolution |
|---|---|
| Frontend–backend CORS issues | Configured Flask-CORS and set `VITE_API_URL` correctly |
| Docker container networking | Used Docker bridge network for inter-container communication |
| Kubernetes service mapping | Correctly configured NodePort services via Minikube |
| Jenkins Docker-in-Docker | Mounted Docker socket into Jenkins container |
| Prometheus–Grafana integration | Correctly set Prometheus service URL as data source |

---

## 🔮 Future Scope

- [ ] **User Authentication** – JWT-based login with role-based access control
- [ ] **Real-Time Alerts** – WebSocket push notifications for critical events
- [ ] **Email / SMS Notifications** – Alert delivery via SendGrid or Twilio
- [ ] **AI Predictive Maintenance** – ML models to predict machine failures
- [ ] **Cloud Deployment** – Migration to AWS EKS or Azure AKS
- [ ] **PDF Reports** – Automated scheduled production report exports
- [ ] **ELK Stack** – Centralized log aggregation with Elasticsearch & Kibana

---

## 📚 Learning Outcomes

Through this project, the following industry-relevant DevOps competencies were demonstrated:

- End-to-end DevOps lifecycle management
- Building and managing CI/CD pipelines with Jenkins
- Containerization best practices using Docker
- Kubernetes orchestration: deployments, services, and pod management
- Infrastructure monitoring with Prometheus
- Metric visualization with Grafana
- Git workflow: branching, commits, and remote repository management

---

## 👩‍💻 Author

**Sanchita Suryawanshi**
B.Tech Computer Science & Engineering
ITM Skills University | 2024–28

---

<div align="center">

Made with ❤️ as part of the DevOps Semester IV curriculum

</div>
