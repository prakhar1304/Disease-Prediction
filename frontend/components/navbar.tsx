"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, NotebookIcon as Lotus } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Predict", href: "/predict" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Lotus className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500">
                AarogyaAI
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-orange-50 dark:bg-orange-900/20"
                      : "text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <ModeToggle />
            <Button className="bg-primary hover:bg-orange-600 text-white">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-primary bg-orange-50 dark:bg-orange-900/20"
                    : "text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-primary hover:bg-orange-600 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
