import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="DUSP Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">DUSP</h3>
                <p className="text-blue-200 text-sm">Maritime Excellence</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Reliable and professional maritime logistics for Indonesia's diverse needs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Our Fleet", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                <p className="text-blue-100 text-sm">SOHO Capital Lt 19, Podomoro City, Jakarta</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <p className="text-blue-100">+62 811-500-523</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <p className="text-blue-100">info@dianunggulsamudra.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">© 2019 PT DIAN UNGGUL SAMUDRA PERKASA. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/dianunggulsp"
                target="_blank"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/dianunggul_sp/?hl=en"
                target="_blank"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
