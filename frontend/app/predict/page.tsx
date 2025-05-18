"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Search, X, Stethoscope, ArrowRight, Sparkles, Loader2 } from "lucide-react"
import Image from "next/image"

// Format symptom text for display
const formatSymptom = (symptom: string) => {
  return symptom
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function PredictPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [prediction, setPrediction] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [symptomsList, setSymptomsList] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const maxSymptoms = 7

  // Fetch symptoms list on component mount
  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await fetch("/api/symptoms")
        if (!response.ok) {
          throw new Error("Failed to fetch symptoms")
        }
        const data = await response.json()
        setSymptomsList(data.symptoms || [])
      } catch (error) {
        console.error("Error fetching symptoms:", error)
        setError("Failed to load symptoms. Please try again later.")
      }
    }

    fetchSymptoms()
  }, [])

  const filteredSymptoms =
    searchTerm === ""
      ? []
      : symptomsList
          .filter((s) => s.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedSymptoms.includes(s))
          .slice(0, 10)

  const addSymptom = (symptom: string) => {
    if (selectedSymptoms.length < maxSymptoms && !selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom])
      setSearchTerm("")
    }
  }

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSymptoms.length === 0) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms: selectedSymptoms }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const result = await response.json()

      if (result.status === "error") {
        throw new Error(result.message || "An error occurred during prediction")
      }

      // Transform the result to match our frontend structure
      setPrediction({
        disease: result.prediction.disease,
        confidence: Math.round(result.prediction.confidence * 100),
        symptoms: result.prediction.input_symptoms,
        unknownSymptoms: result.prediction.unknown_symptoms,
        description: getDescriptionForDisease(result.prediction.disease),
        recommendations: getRecommendationsForDisease(result.prediction.disease),
      })
    } catch (error) {
      console.error("Error submitting symptoms:", error)
      setError("Failed to process your symptoms. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setSelectedSymptoms([])
    setPrediction(null)
  }

  // Helper function to get description for a disease
  const getDescriptionForDisease = (disease: string) => {
    const descriptions: Record<string, string> = {
      "Fungal infection":
        "A fungal infection is a condition caused by fungi that affects the skin, nails, or mucous membranes.",
      Allergy:
        "An allergy is an immune system response to a foreign substance that's not typically harmful to your body.",
      GERD: "Gastroesophageal reflux disease (GERD) is a chronic digestive disease that occurs when stomach acid flows back into the esophagus.",
      "Chronic cholestasis": "Chronic cholestasis is a condition where bile flow from the liver is reduced or blocked.",
      "Drug Reaction": "A drug reaction is an adverse response to a medication.",
      "Peptic ulcer disease":
        "Peptic ulcer disease is a condition where open sores develop on the inside lining of the stomach and the upper portion of the small intestine.",
      AIDS: "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV).",
      Diabetes: "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high.",
      Gastroenteritis:
        "Gastroenteritis is an inflammation of the lining of the intestines caused by a virus, bacteria, or parasites.",
      "Bronchial Asthma":
        "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow.",
      Hypertension:
        "Hypertension, also known as high blood pressure, is a long-term medical condition in which the blood pressure in the arteries is persistently elevated.",
      Migraine:
        "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head.",
      "Cervical spondylosis":
        "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck.",
      "Paralysis (brain hemorrhage)":
        "Paralysis due to brain hemorrhage is a condition where bleeding in the brain causes loss of function in one or more parts of the body.",
      Jaundice:
        "Jaundice is a condition in which the skin, whites of the eyes and mucous membranes turn yellow because of a high level of bilirubin.",
      Malaria:
        "Malaria is a disease caused by a parasite that is transmitted to humans through the bites of infected mosquitoes.",
      "Chicken pox": "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV).",
      Dengue: "Dengue is a mosquito-borne viral disease that has rapidly spread in all regions in recent years.",
      Typhoid: "Typhoid fever is a bacterial infection that can spread throughout the body, affecting many organs.",
      "Hepatitis A": "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus.",
      "Hepatitis B": "Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV).",
      "Hepatitis C": "Hepatitis C is an infection caused by a virus that attacks the liver and leads to inflammation.",
      "Hepatitis D": "Hepatitis D is a liver infection caused by the hepatitis D virus (HDV).",
      "Hepatitis E": "Hepatitis E is a liver disease caused by the hepatitis E virus (HEV).",
      "Alcoholic hepatitis": "Alcoholic hepatitis is liver inflammation caused by drinking alcohol.",
      Tuberculosis: "Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis bacteria.",
      "Common Cold":
        "The common cold is a viral infectious disease of the upper respiratory tract which primarily affects the nose.",
      Pneumonia: "Pneumonia is an infection that inflames the air sacs in one or both lungs.",
      "Dimorphic hemorrhoids(piles)":
        "Dimorphic hemorrhoids, commonly known as piles, are swollen veins in the lowest part of your rectum and anus.",
      "Heart attack":
        "A heart attack occurs when blood flow to a part of the heart is blocked, usually by a blood clot.",
      "Varicose veins": "Varicose veins are twisted, enlarged veins near the surface of the skin.",
      Hypothyroidism:
        "Hypothyroidism, also called underactive thyroid, is when the thyroid gland doesn't make enough thyroid hormones.",
      Hyperthyroidism: "Hyperthyroidism is a condition in which the thyroid gland produces too much thyroid hormone.",
      Hypoglycemia: "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal.",
      Osteoarthristis: "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide.",
      Arthritis: "Arthritis is the swelling and tenderness of one or more of your joints.",
      "(vertigo) Paroymsal Positional Vertigo":
        "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning.",
      Acne: "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells.",
      "Urinary tract infection":
        "A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra.",
      Psoriasis:
        "Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp.",
      Impetigo: "Impetigo is a common and highly contagious skin infection that mainly affects infants and children.",
      "Chronic Gastritis": "Chronic gastritis is inflammation of the stomach lining that persists for a long time.",
    }

    return descriptions[disease] || `${disease} is a medical condition that requires proper diagnosis and treatment.`
  }

  // Helper function to get recommendations for a disease
  const getRecommendationsForDisease = (disease: string) => {
    const recommendations: Record<string, string[]> = {
      "Fungal infection": [
        "Keep the affected area clean and dry",
        "Use antifungal medications as prescribed",
        "Avoid sharing personal items",
        "Consider Ayurvedic remedies like Neem or Turmeric paste",
      ],
      Allergy: [
        "Identify and avoid allergens",
        "Take antihistamines as recommended",
        "Use air purifiers in your home",
        "Try Ayurvedic herbs like Tulsi (Holy Basil) and Guduchi",
      ],
      GERD: [
        "Avoid spicy and acidic foods",
        "Eat smaller, more frequent meals",
        "Don't lie down immediately after eating",
        "Consider Ayurvedic remedies like Amla (Indian Gooseberry) and Licorice",
      ],
      "Chronic cholestasis": [
        "Follow a low-fat diet",
        "Stay hydrated",
        "Consult with a hepatologist",
        "Consider Ayurvedic liver tonics like Kutki and Bhringaraj",
      ],
      "Drug Reaction": [
        "Stop taking the suspected medication (consult doctor first)",
        "Take antihistamines for itching if recommended",
        "Apply cold compresses to relieve symptoms",
        "Try Ayurvedic herbs like Neem and Manjistha for detoxification",
      ],
      "Chronic Gastritis": [
        "Avoid spicy and acidic foods",
        "Eat smaller, more frequent meals",
        "Reduce stress through meditation or yoga",
        "Consider Ayurvedic herbs like Amla and Triphala",
      ],
      "Peptic ulcer disease": [
        "Avoid spicy, acidic, and fatty foods",
        "Limit alcohol consumption",
        "Quit smoking",
        "Consider Ayurvedic remedies like Shatavari and Yashtimadhu",
      ],
      Diabetes: [
        "Follow a balanced diet low in simple carbohydrates",
        "Exercise regularly",
        "Monitor blood sugar levels",
        "Consider Ayurvedic herbs like Gymnema Sylvestre (Gurmar) and Bitter Gourd (Karela)",
      ],
      Hypertension: [
        "Reduce salt intake",
        "Exercise regularly",
        "Manage stress through meditation and yoga",
        "Consider Ayurvedic herbs like Arjuna and Brahmi",
      ],
      "Common Cold": [
        "Get plenty of rest",
        "Stay hydrated",
        "Use a humidifier",
        "Try Ayurvedic remedies like Tulsi tea and ginger with honey",
      ],
    }

    // Default recommendations if specific ones aren't available
    const defaultRecommendations = [
      "Consult with a healthcare professional for proper diagnosis and treatment",
      "Maintain a balanced diet rich in fruits and vegetables",
      "Stay hydrated and get adequate rest",
      "Consider traditional Ayurvedic remedies after consulting with an Ayurvedic practitioner",
    ]

    return recommendations[disease] || defaultRecommendations
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 rangoli-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Symptom Analysis</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Select up to 7 symptoms you're experiencing for an AI-powered analysis based on Ayurvedic principles
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                </div>
              </div>
            </div>
          )}

          {!prediction ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit}>
                <div className="mb-6 relative">
                  <label
                    htmlFor="symptom-search"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Search and select symptoms
                  </label>
                  <div className="flex items-center">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="symptom-search"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && filteredSymptoms.length > 0) {
                            e.preventDefault()
                            addSymptom(filteredSymptoms[0])
                          }
                        }}
                        placeholder="Type to search symptoms..."
                        className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
                        autoComplete="off"
                      />
                      {searchTerm.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
                          {filteredSymptoms.length === 0 ? (
                            <div className="p-4 text-sm text-gray-500 dark:text-gray-400">
                              No symptoms found matching your search
                            </div>
                          ) : (
                            <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                              {filteredSymptoms.map((symptom) => (
                                <li
                                  key={symptom}
                                  className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-orange-900/20 cursor-pointer text-gray-700 dark:text-gray-200 transition"
                                  onClick={() => addSymptom(symptom)}
                                >
                                  {formatSymptom(symptom)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                    {selectedSymptoms.length > 0 && (
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        {selectedSymptoms.length}/{maxSymptoms}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Select up to 7 symptoms. Be as specific as possible for better results.
                  </p>
                </div>

                {/* Selected symptoms badges */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2" id="selected-symptoms">
                    {selectedSymptoms.length > 0 ? (
                      selectedSymptoms.map((symptom) => (
                        <div
                          key={symptom}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 transition-all duration-200 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-800 dark:hover:text-red-300"
                        >
                          <input type="hidden" name="symptoms" value={symptom} />
                          <span>{formatSymptom(symptom)}</span>
                          <button
                            type="button"
                            onClick={() => removeSymptom(symptom)}
                            className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 transition"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-500 dark:text-gray-400 py-2">No symptoms selected yet</div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary hover:bg-orange-600 text-white font-medium rounded-md shadow-sm transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={selectedSymptoms.length === 0 || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing Symptoms...
                    </div>
                  ) : (
                    "Analyze Symptoms"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 px-6 py-4">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-white mr-2" />
                  <h2 className="text-xl font-semibold text-white">Analysis Results</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-4">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{prediction.disease}</h3>
                    <div className="flex items-center mt-1">
                      <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                        <div
                          className="h-2 bg-primary rounded-full"
                          style={{ width: `${prediction.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {prediction.confidence}% confidence
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Description:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{prediction.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Based on your symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    {prediction.symptoms.map((symptom: string) => (
                      <li key={symptom}>{formatSymptom(symptom)}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Recommendations:</h4>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    {prediction.recommendations.map((rec: string, index: number) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700 dark:text-yellow-400">
                        This is not a medical diagnosis. Please consult with a healthcare professional for proper
                        medical advice.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={resetForm}
                    className="text-primary border-primary hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  >
                    Check Different Symptoms
                  </Button>

                  <Button className="bg-primary hover:bg-orange-600 text-white">
                    Save Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">How It Works</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Understanding our health prediction process</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Technology</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                AarogyaAI uses machine learning algorithms trained on vast medical datasets combined with traditional
                Ayurvedic knowledge to identify patterns between symptoms and health conditions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our models are continuously improved and validated by healthcare professionals to ensure accuracy and
                reliability.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Next Steps</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                After receiving your prediction, we recommend discussing the results with your healthcare provider or
                Ayurvedic practitioner.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Early detection and professional medical advice are essential for proper treatment and management of
                health conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Trusted by Thousands of Users
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See what people are saying about their experience with AarogyaAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Sharma",
                role: "Ayurvedic Practitioner",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "As an Ayurvedic doctor, I'm impressed by how AarogyaAI combines traditional wisdom with modern technology. I often recommend it to my patients for initial assessment.",
              },
              {
                name: "Priya Patel",
                role: "Wellness Coach",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "AarogyaAI has become an essential tool in my wellness practice. The Ayurvedic recommendations are spot-on and help my clients understand their health better.",
              },
              {
                name: "Amit Verma",
                role: "Regular User",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "I was skeptical at first, but AarogyaAI accurately identified my digestive issues when I was confused about my symptoms. The Ayurvedic remedies suggested really helped!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Trusted and Certified</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-center">HIPAA Compliant</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M12 3L20 7V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V7L12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-center">256-bit Encryption</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12H15M12 9V15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-center">Medical Grade</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-center">Secure & Private</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
