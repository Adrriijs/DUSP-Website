"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Fleet() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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

  // Fleet images - you can replace these with your actual fleet photos
  const fleetImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  // Duplicate the array to create seamless loop
  const duplicatedImages = [...fleetImages, ...fleetImages]

  const openImageModal = (image: string) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset" // Restore scrolling
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImageModal()
      }
    }

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [selectedImage])

  return (
    <>
      <section id="fleet" ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50/30 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Fleet</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

              {/* Sliding container */}
              <div className="fleet-slider">
                <div className="fleet-track">
                  {duplicatedImages.map((image, index) => (
                    <div key={index} className="fleet-item">
                      <div className="fleet-image-container" onClick={() => openImageModal(image)}>
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Fleet vessel ${index + 1}`}
                          width={300}
                          height={200}
                          className="fleet-image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We operate a diverse fleet including tugboats such as{" "}
                  <span className="font-semibold text-blue-800">DWI PUTRA 01</span>,{" "}
                  <span className="font-semibold text-blue-800">ANTASENA</span>, and{" "}
                  <span className="font-semibold text-blue-800">LUMBA-LUMBA</span>, and barges like{" "}
                  <span className="font-semibold text-blue-800">ESA VIII</span> and{" "}
                  <span className="font-semibold text-blue-800">BAIDURI 30256</span>, to serve various project needs.
                </p>
                <p className="text-sm text-blue-600 mt-4 font-medium">Click on any vessel image to view it in detail</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .fleet-slider {
            width: 100%;
            overflow: hidden;
            position: relative;
            height: 280px;
            display: flex;
            align-items: center;
          }

          .fleet-track {
            display: flex;
            animation: slideLeft 30s linear infinite;
            gap: 2rem;
            will-change: transform;
          }

          .fleet-item {
            flex-shrink: 0;
          }

          .fleet-image-container {
            width: 300px;
            height: 200px;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 91, 175, 0.15);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
          }

          .fleet-image-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 48px rgba(0, 91, 175, 0.25);
          }

          .fleet-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .fleet-image-container:hover .fleet-image {
            transform: scale(1.05);
          }

          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Pause animation on hover */
          .fleet-slider:hover .fleet-track {
            animation-play-state: paused;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .fleet-slider {
              height: 220px;
            }
            
            .fleet-image-container {
              width: 250px;
              height: 160px;
            }
            
            .fleet-track {
              gap: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .fleet-slider {
              height: 180px;
            }
            
            .fleet-image-container {
              width: 200px;
              height: 130px;
            }
            
            .fleet-track {
              gap: 1rem;
            }
          }
        `}</style>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={closeImageModal} />

          {/* Modal content */}
          <div className="relative z-10 max-w-4xl max-h-[90vh] mx-4">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Close button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white border-gray-300"
                onClick={closeImageModal}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Large image */}
              <div className="relative">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Fleet vessel detail"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
