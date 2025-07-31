import Image from "next/image"
import { Mail, Phone, Globe, MapPin } from "lucide-react"

export default function EmailSignaturePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">DovoQA Email Signature</h1>
        <div className="border border-gray-200 p-4 rounded-md">
          <div className="flex items-center space-x-4 mb-4">
            <Image src="/images/dovoqa-logo.png" alt="DovoQA Logo" width={80} height={80} className="rounded-full" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">DovoQA Team</h2>
              <p className="text-sm text-gray-600">Your Dedicated QA Partner</p>
            </div>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <a href="mailto:hello@dovoqa.com" className="hover:underline">
                hello@dovoqa.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <a href="tel:+54-9-11-3234-6592" className="hover:underline">
                +54-9-11-3234-6592
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <a href="https://dovoqa.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                dovoqa.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} DovoQA. All rights reserved.
        </p>
      </div>
    </div>
  )
}
