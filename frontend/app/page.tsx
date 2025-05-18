import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Brain, Shield, Stethoscope, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden mandala-pattern">
        <div className="hero-gradient absolute inset-0 opacity-95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>AI-Powered Ayurvedic Health Analysis</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight">
                Discover Your <span className="text-yellow-300">Health</span> With Ancient Wisdom & Modern AI
              </h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">
                AarogyaAI combines traditional Ayurvedic knowledge with cutting-edge artificial intelligence to provide
                personalized health insights based on your symptoms.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-yellow-50 font-medium text-base">
                  <Link href="/predict">
                    Analyze Symptoms
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-base"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-white/20 rounded-full blur-xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ayurvedic Health Analysis"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-orange-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary">10,000+</p>
              <p className="text-gray-600 dark:text-gray-300">Users Helped</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-gray-600 dark:text-gray-300">Accuracy Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-gray-600 dark:text-gray-300">Health Conditions</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-gray-600 dark:text-gray-300">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 rangoli-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
              How AarogyaAI Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our system combines ancient Ayurvedic principles with modern AI to provide accurate health insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Share Your Symptoms</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select from our comprehensive list of symptoms to accurately describe what you're experiencing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our advanced AI analyzes your symptoms using both modern medical knowledge and traditional Ayurvedic
                principles.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Get Personalized Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive potential health conditions and personalized recommendations based on your unique symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-6">
                Why Choose AarogyaAI?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our unique approach combines the best of both worlds - ancient Ayurvedic wisdom and cutting-edge AI
                technology.
              </p>

              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Holistic Approach</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We consider your complete symptom profile, not just isolated symptoms.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Indian Context</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our AI is specially trained on health conditions prevalent in the Indian population.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Privacy First</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your health data is encrypted and never shared with third parties.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Continuous Learning</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our AI system continuously improves with new medical research and user feedback.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ayurvedic Health Benefits"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from people who have used AarogyaAI to gain insights about their health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Delhi",
                quote:
                  "AarogyaAI helped me identify my digestive issues when doctors were giving me conflicting advice. The Ayurvedic recommendations have made a huge difference.",
              },
              {
                name: "Rajesh Patel",
                location: "Mumbai",
                quote:
                  "I was skeptical at first, but the accuracy of the prediction was impressive. It detected my respiratory condition early, allowing me to get proper treatment.",
              },
              {
                name: "Ananya Desai",
                location: "Bangalore",
                quote:
                  "As someone with a family history of chronic conditions, I use AarogyaAI regularly to monitor my symptoms. It's like having a personal health assistant.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 rangoli-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Get personalized health insights based on your symptoms and take control of your wellbeing with the wisdom
              of Ayurveda and modern AI.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-yellow-50 font-medium text-base">
              <Link href="/predict">
                Analyze Your Symptoms Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-500 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AarogyaAI is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the
              advice of your physician or other qualified health provider with any questions you may have regarding a
              medical condition.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
