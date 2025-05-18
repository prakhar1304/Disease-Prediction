# 🩺 Smart Disease Predictor

A full-stack web application that predicts possible diseases based on selected symptoms. The project combines a **Next.js** frontend with a **Flask** backend running a machine learning model trained on synthetic healthcare data.

---

## 🔍 Overview

This application helps users get quick insights into potential diseases by selecting symptoms from a simple UI. The backend model processes these inputs and returns predictions in real time.

---

## 🧱 Tech Stack

* **Frontend**: Next.js, Tailwind CSS
* **Backend**: Flask (Python)
* **Machine Learning**: Random Forest Classifier (via scikit-learn)
* **Data**: Simulated medical dataset with added noise for realism

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/prakhar1304/Disease-Prediction.git
cd Disease-Prediction
```

---

### 🔧 Backend Setup (Flask + ML)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

> The Flask server will run on `http://127.0.0.1:5000/`

---

### 🌐 Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

> Open your browser at `http://localhost:3000` to access the web app.

---

## 🧠 Model Details

* **Model**: Random Forest Classifier
* **Input**: One-hot encoded symptom list
* **Output**: Top disease prediction
* **Notes**: Data includes noise to simulate realistic prediction behavior

---

## 👤 Developer

**Name:** Prakhar Madharia
**GitHub:** [prakhar1304](https://github.com/prakhar1304)
**Email:** [prakhar1304@gmail.com](mailto:prakhar1304@gmail.com)

---------------
## UI
![image](https://github.com/user-attachments/assets/d980319a-c9d4-4c48-8ea4-bb534a4388f5)
![image](https://github.com/user-attachments/assets/b20c3434-4a6d-4ae3-9fe1-07d3f5ea4940)



