import pandas as pd
from flask import Flask, request, jsonify
import joblib
import os

app = Flask(__name__)

# Load models and symptom vocab once on startup
model = joblib.load('./models/model.pkl')
label_encoder = joblib.load('./models/label_encoder.pkl')
symptom_list = joblib.load('./models/symptom_vocab.pkl')

@app.route('/api/symptoms', methods=['GET'])
def get_symptoms():
    return jsonify({
        'status': 'success',
        'symptoms': symptom_list
    })

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        symptoms = data.get('symptoms', [])
        
        # Clean symptoms
        symptoms = [s.lower().strip() for s in symptoms if s and isinstance(s, str) and s.strip() != '']
        
        if not symptoms:
            return jsonify({
                'status': 'error',
                'message': 'No valid symptoms provided'
            }), 400

        # Create binary input vector
        input_vector = [0] * len(symptom_list)
        unknown_symptoms = []
        for symptom in symptoms:
            if symptom in symptom_list:
                idx = symptom_list.index(symptom)
                input_vector[idx] = 1
            else:
                unknown_symptoms.append(symptom)

        # Make prediction
        pred_label = model.predict([input_vector])[0]
        disease = label_encoder.inverse_transform([pred_label])[0]
        
        # Calculate confidence (dummy value, replace with actual model confidence if available)
        confidence = 0.9  # Replace with model.predict_proba() if available

        response = {
            'status': 'success',
            'prediction': {
                'disease': disease,
                'confidence': float(confidence),
                'input_symptoms': symptoms,
                'unknown_symptoms': unknown_symptoms
            }
        }
        
        return jsonify(response), 200

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'success',
        'message': 'API is running'
    })

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))