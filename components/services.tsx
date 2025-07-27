"use client"

import { useState, useEffect, useRef } from "react"
import { Ship, Anchor, Building } from "lucide-react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
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

  const services = [
    {
      icon: Ship,
      title: "Shipping Business",
      description: "Tugboat and Barge Rental (Time Charter & Freight Charter)",
    },
    {
      icon: Anchor,
      title: "Docking Services",
      description: "Shipyard Facilities",
    },
    {
      icon: Building,
      title: "Shipping Agency",
      description: "Port and Vessel Operations",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full h-auto object-cover">
                <source src="/placeholder.svg?height=400&width=600" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
