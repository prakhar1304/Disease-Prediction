import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Code, Database, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 rangoli-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">About AarogyaAI</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our mission, vision, and the team behind the technology
          </p>
        </div>
      </section>

      {/* About the Platform */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                AarogyaAI was created with a simple yet powerful mission: to make healthcare more accessible to everyone
                in India by combining ancient Ayurvedic wisdom with modern artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We believe that early detection and awareness are key to better health outcomes. By providing an
                easy-to-use platform for symptom analysis, we aim to empower individuals to take control of their health
                journey.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our technology is designed to complement, not replace, professional medical advice. We encourage all
                users to consult with healthcare professionals for proper diagnosis and treatment.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Our Mission"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Developer */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700">
                <div className="h-full flex items-center justify-center p-8">
                  <Image
                    src="https://res.cloudinary.com/dwbdtvo3s/image/upload/v1747509592/IMG-20240907-WA0096_g6152v.jpg"
                    alt="Prakhar Madharia"
                    width={200}
                    height={200}
                    className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
                  About the Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Namaste! I'm Prakhar Madharia, a passionate app and backend developer with expertise in creating
                  innovative healthcare solutions. I developed AarogyaAI to make quality healthcare insights accessible
                  to everyone in India by combining cutting-edge AI with traditional medical knowledge.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  With a strong background in both technology and healthcare, I've participated in numerous hackathons
                  and competitions, including being a HackIndia Spark 6 runner-up, SIH national finalist, and Flash Hack
                  winner. My open-source contributions have earned me a rank of 386 in GSSoC.
                </p>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/prakharmadharia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-orange-700 dark:hover:text-orange-400 transition"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prakhar-madharia-864969215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-orange-700 dark:hover:text-orange-400 transition"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-primary hover:text-orange-700 dark:hover:text-orange-400 transition">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center font-poppins">
              Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 15L8.5 12L12 9L15.5 12L12 15Z" fill="currentColor" />
                    <path
                      d="M12 15V20M12 9V4M4 12H8.5M15.5 12H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">HackIndia Spark 6</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Runner-up</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">SIH</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">National Finalist</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 10V3L4 14H11V21L20 10H13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Flash Hack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Winner</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2295 9.63587 19.6295 9 19.4C8.38293 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23577 20.3766 5.705 20.3766C5.17423 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.77052 10.0642 4.37052 9.63587 4.6 9C4.87235 8.38293 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23577 3.62343 5.705C3.62343 5.17423 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09423 3.70343 5.625 3.70343C6.15577 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30293 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09423 20.2966 5.625C20.2966 6.15577 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30293 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">GSSoC</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rank 386</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center font-poppins">
              Technologies Used
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Python */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Python</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Core programming language</p>
              </div>

              {/* Machine Learning */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Machine Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered predictions</p>
              </div>

              {/* Next.js */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Next.js</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Modern web framework</p>
              </div>

              {/* Database */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-12 flex items-center justify-center mb-4">
                  <Database className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Flask</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Backend API framework</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Journey */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center font-poppins">
            Development Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-orange-200 dark:bg-orange-900/30 transform md:-translate-x-0.5"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center md:items-end mb-6 md:mb-0 md:w-1/2 md:pr-8">
                  <div className="md:text-right">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Project Inception</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Started with the idea to make healthcare insights more accessible using AI
                    </p>
                  </div>
                </div>
                <div className="z-10 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg h-8 w-8 absolute left-0 md:left-1/2 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="z-10 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg h-8 w-8 absolute left-0 md:left-1/2 transform -translate-x-1/2"></div>
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/2 md:pl-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Data Collection</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gathered and curated medical datasets for training the AI model
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center md:items-end mb-6 md:mb-0 md:w-1/2 md:pr-8">
                  <div className="md:text-right">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Model Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Built and trained the prediction algorithms with machine learning
                    </p>
                  </div>
                </div>
                <div className="z-10 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg h-8 w-8 absolute left-0 md:left-1/2 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Item 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="z-10 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg h-8 w-8 absolute left-0 md:left-1/2 transform -translate-x-1/2"></div>
                <div className="flex flex-col items-center md:items-start md:w-1/2 md:pl-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Launch</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Released AarogyaAI to help people understand their health through modern AI analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 rangoli-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white font-poppins mb-6">Ready to Experience AarogyaAI?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Start your health journey today with our AI-powered symptom analysis based on cutting-edge machine learning.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-yellow-50 font-medium text-base">
            <Link href="/predict">
              Try AarogyaAI Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
