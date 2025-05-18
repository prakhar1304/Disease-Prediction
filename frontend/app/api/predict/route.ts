import { NextResponse } from "next/server"

// The base URL of your Flask backend
const API_URL = process.env.FLASK_API_URL || "http://localhost:10000"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { symptoms } = body

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json({ error: "Please provide at least one symptom" }, { status: 400 })
    }

    // Make the request to the Flask backend with the correct endpoint
    const response = await fetch(`${API_URL}/api/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms }),
    })

    if (!response.ok) {
      throw new Error(`Flask API responded with status: ${response.status}`)
    }

    // Parse the response from Flask
    const result = await response.json()

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in prediction API:", error)
    return NextResponse.json({ error: "Failed to process prediction" }, { status: 500 })
  }
}
