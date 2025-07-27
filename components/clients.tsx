"use client"

import { useState, useEffect, useRef } from "react"
import { Building } from "lucide-react"

export default function Clients() {
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

  const clients = [
    "PT Grant Surya Pondasi",
    "PT Grant Surya Multi Sarana",
    "PT Timur Bahari",
    "PT Lima Srikandi Jaya",
    "PT Dharma Subur Satya",
    "PT Nemoasia",
    "PT Global Borneo Energi",
    "PT Asmin Koalindo Tuhup",
    "PT Istaka Karya (Persero)",
    "PT Wijaya Karya Tbk",
    "PT Adhi Karya Tbk",
    "PT Daretric Utama",
    "PT Multi Pondasi Utama",
    "PT Selat Labuan Sakti",
    "PT Karya Tara Mandiri",
    "PT Marunda Jaya",
    "PT Bintan Kharisma Lines",
    "PT Cipta Buana Samudra",
  ]

  return (
    <section id="customers" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            PT Dian Unggul Samudra Perkasa has proudly served major companies and government projects across Indonesia:
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
