"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="DUSP Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="text-center lg:text-left max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">PT DIAN UNGGUL SAMUDRA PERKASA</h1>
            <p className="text-xl lg:text-2xl opacity-90 font-light">
              Reliable Marine Transportation and Shipyard Solutions
            </p>
            <div className="mt-8 h-1 w-24 bg-white/50 rounded-full mx-auto lg:mx-0"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  )
}
