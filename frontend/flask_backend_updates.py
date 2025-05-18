# Add these imports to your Flask app
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Add this route to your Flask app to provide the symptom list
@app.route('/api/symptoms', methods=['GET'])
def get_symptoms():
    return jsonify({"symptoms": symptom_list})

# Update your predict route to return JSON
@app.route('/predict', methods=['GET', 'POST'])
def predict_page():
    prediction = None
    if request.method == 'POST':
        symptoms = request.form.getlist('symptoms')
        symptoms = [s.lower().strip() for s in symptoms if s and s.strip() != '']

        input_vector = [0] * len(symptom_list)
        for symptom in symptoms:
            if symptom in symptom_list:
                idx = symptom_list.index(symptom)
                input_vector[idx] = 1

        pred_label = model.predict([input_vector])[0]
        disease = label_encoder.inverse_transform([pred_label])[0]

        # You might want to return confidence or other metadata
        confidence = 90  # Replace with your model's confidence if available
        
        prediction = {
            'disease': disease,
            'confidence': confidence,
            'symptoms': symptoms
        }
        
        # Return JSON if the request accepts JSON
        if request.headers.get('Accept') == 'application/json' or request.headers.get('Content-Type') == 'application/json':
            return jsonify(prediction)
            
    return render_template('predict.html', symptoms_list=symptom_list, prediction=prediction)
