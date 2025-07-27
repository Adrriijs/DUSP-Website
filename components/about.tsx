"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-12 min-h-[400px] shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed mb-8 text-xl">
                <span className="font-semibold text-gray-900 text-2xl">PT DIAN UNGGUL SAMUDRA PERKASA</span> is a{" "}
                <strong className="text-2xl">trusted shipping company</strong> based in Indonesia, providing vessel leasing and maritime
                logistics services across the archipelago. With over <strong className="text-2xl">17,000 islands</strong> and 70% of the
                country's area covered by ocean, efficient and reliable sea transport is{" "}
                <strong className="text-2xl">critical to connecting</strong> Indonesia's diverse regions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-xl">
                Established to meet this growing demand, we operate a <strong className="text-2xl">fleet of tugboats and barges</strong>{" "}
                serving bulk material transport, particularly for coal and other project cargo. Our services cover{" "}
                <strong className="text-2xl">key regions</strong> including Sumatra, Java, Kalimantan, and Sulawesi.
              </p>

              <p className="text-gray-700 leading-relaxed text-xl">
                As maritime demand grows, we remain <strong className="text-2xl">committed to expanding and modernizing</strong> our fleet to
                ensure timely, safe, and dependable shipping services.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <Image
                src="/about us.jpg"
                alt="Maritime operations at PT Dian Unggul Samudra Perkasa"
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
