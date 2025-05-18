import { NextResponse } from "next/server"

// The base URL of your Flask backend
const API_URL = process.env.FLASK_API_URL || "http://localhost:10000"

export async function GET() {
  try {
    // Fetch the symptom list from the Flask backend
    const response = await fetch(`${API_URL}/api/symptoms`)

    if (!response.ok) {
      throw new Error(`Flask API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching symptoms:", error)
    return NextResponse.json({ error: "Failed to fetch symptoms" }, { status: 500 })
  }
}
