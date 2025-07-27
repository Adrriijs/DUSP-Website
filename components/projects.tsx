"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [projects] = useState([
    {
      id: 1,
      title: "Bali Mandara Toll Road",
      description: "Marine support for toll road development over water in Bali.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Suramadu Bridge",
      description: "Logistics for Surabaya–Madura bridge construction.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "G Island Reclamation",
      description: "Support during North Jakarta island expansion.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Kotabaru-Batulicin Bridge",
      description: "Bridge construction support in South Kalimantan.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Jakarta Giant Sea Wall",
      description: "Flood barrier logistics project in North Jakarta.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ])

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Major Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className={`bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div
                className={`bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">{projects[currentIndex].title}</h3>
                  <p className="text-gray-600 leading-relaxed">{projects[currentIndex].description}</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className={`bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div
              className={`flex justify-center mt-6 space-x-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
