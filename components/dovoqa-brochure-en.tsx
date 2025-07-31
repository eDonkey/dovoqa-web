"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, CheckCircle, DollarSign, Scale, ShieldCheck, Lightbulb } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function DovoQABrochureEN() {
  const brochureRef = useRef<HTMLDivElement>(null)

  const downloadPdf = async () => {
    if (brochureRef.current) {
      const canvas = await html2canvas(brochureRef.current, {
        scale: 2, // Increase scale for better resolution
        useCORS: true, // Enable CORS for images
        allowTaint: true, // Allow tainting canvas with cross-origin images
      })
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save("DovoQA_Brochure_EN.pdf")
    }
  }

  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <div className="flex justify-center p-4">
        <Button onClick={downloadPdf} className="bg-blue-600 hover:bg-blue-700 text-white">
          Download Brochure (PDF)
        </Button>
      </div>
      <div ref={brochureRef} className="brochure-content p-8 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg">
        {/* Cover Page */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg mb-8">
          <Image src="/images/dovoqa-logo.png" alt="DovoQA Logo" width={150} height={150} className="mx-auto mb-6" />
          <h1 className="text-5xl font-extrabold mb-4">DovoQA</h1>
          <p className="text-2xl font-light">Quality Assurance as a Service</p>
          <p className="text-xl mt-4">Your Partner for Flawless Software</p>
        </section>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">About DovoQA</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            DovoQA is a leading provider of Quality Assurance as a Service (QAaaS), dedicated to helping businesses
            deliver high-quality, bug-free software. We offer a unique flat-rate annual model, providing predictable
            costs and virtually unlimited resources to adapt to your project's evolving needs. Our expert team
            integrates seamlessly with your development cycle, allowing you to focus on innovation while we ensure
            impeccable quality.
          </p>
        </section>

        {/* Our Services */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Comprehensive QA Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <ShieldCheck className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Functional Testing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensuring every feature works exactly as intended, meeting all specified requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Performance Testing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Verifying application responsiveness, stability, and scalability under various loads.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Automation Testing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Developing robust automated test suites for faster, more efficient regression cycles.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Security Testing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Identifying vulnerabilities and protecting your software from potential threats.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Usability Testing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Evaluating user-friendliness and overall user experience to ensure intuitive interfaces.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Consulting & Strategy</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Providing expert guidance and strategic planning for your QA initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Benefits of Partnering with DovoQA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Cost Predictability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our flat-rate annual fee eliminates budget surprises, providing clear and consistent costs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Scale className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Scalability & Flexibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Resources adapt to your project's demands, scaling up or down without affecting your billing.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Expertise On-Demand</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Access a team of seasoned QA professionals without the overhead of in-house hiring.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Enhanced Product Quality</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Deliver robust, bug-free software that delights your users and builds trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center py-8 bg-gray-100 dark:bg-gray-850 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Ready to elevate your software quality? Contact us today!
          </p>
          <div className="flex flex-col items-center space-y-2">
            <p className="flex items-center space-x-2 text-lg">
              <Mail className="h-6 w-6 text-secondary" />
              <span>hello@dovoqa.com</span>
            </p>
            <p className="flex items-center space-x-2 text-lg">
              <Phone className="h-6 w-6 text-secondary" />
              <span>+54-9-11-3234-6592</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
