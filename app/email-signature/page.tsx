import Image from "next/image"
import { Mail, Phone, Globe, MapPin } from "lucide-react"

export default function EmailSignaturePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">DovoQA Email Signature</h1>

        {/* Simple Signature */}
        <div className="border p-4 rounded-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Simple Signature</h2>
          <div className="font-sans text-sm text-gray-800">
            <p className="font-bold text-lg text-blue-600">John Doe</p>
            <p className="text-gray-700">QA Lead at DovoQA</p>
            <p className="mt-2">
              <a href="mailto:john.doe@dovoqa.com" className="text-blue-600 hover:underline flex items-center">
                <Mail className="h-4 w-4 mr-1" /> john.doe@dovoqa.com
              </a>
            </p>
            <p>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline flex items-center">
                <Phone className="h-4 w-4 mr-1" /> +1 (234) 567-890
              </a>
            </p>
            <p>
              <a
                href="https://dovoqa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <Globe className="h-4 w-4 mr-1" /> dovoqa.com
              </a>
            </p>
          </div>
        </div>

        {/* Detailed Signature */}
        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Detailed Signature</h2>
          <div className="font-sans text-sm text-gray-800">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder-logo.svg"
                alt="DovoQA Logo"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-lg text-blue-600">Jane Smith</p>
                <p className="text-gray-700">Senior QA Engineer</p>
                <p className="text-gray-600">DovoQA - QA as a Service</p>
              </div>
            </div>
            <p className="mt-2">
              <a href="mailto:jane.smith@dovoqa.com" className="text-blue-600 hover:underline flex items-center">
                <Mail className="h-4 w-4 mr-1" /> jane.smith@dovoqa.com
              </a>
            </p>
            <p>
              <a href="tel:+1987654321" className="text-blue-600 hover:underline flex items-center">
                <Phone className="h-4 w-4 mr-1" /> +1 (987) 654-321
              </a>
            </p>
            <p>
              <a
                href="https://dovoqa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <Globe className="h-4 w-4 mr-1" /> dovoqa.com
              </a>
            </p>
            <p className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" /> 123 QA Lane, Quality City, QC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
