"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function DovoqaBrochureEn() {
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
    <div className="font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <div className="flex justify-center p-4 bg-gray-100 dark:bg-gray-800">
        <Button onClick={downloadPdf} className="bg-primary text-white hover:bg-primary/90">
          Download Brochure (PDF)
        </Button>
      </div>
      <div ref={brochureRef} className="brochure-content">
        {/* Cover Page */}
        <section className="relative h-[297mm] w-[210mm] mx-auto flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-purple-700 to-indigo-900 p-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.jpg?query=abstract-geometric-pattern"
              alt="Background Pattern"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="relative z-10">
            <Image src="/images/dovoqa-logo.png" alt="DovoQA Logo" width={150} height={150} className="mx-auto mb-6" />
            <h1 className="text-6xl font-extrabold leading-tight mb-4">DovoQA</h1>
            <h2 className="text-3xl font-semibold mb-8">Quality Assurance as a Service</h2>
            <p className="text-xl max-w-md mx-auto">
              Your dedicated partner for flawless software delivery, ensuring impeccable quality with unparalleled
              flexibility and predictable costs.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="h-[297mm] w-[210mm] mx-auto p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-primary mb-6 text-center">Welcome to DovoQA</h3>
          <p className="text-lg mb-4">
            In today's fast-paced digital world, software quality is paramount. Bugs, performance issues, and security
            vulnerabilities can severely impact user experience, brand reputation, and ultimately, your bottom line.
            That's where DovoQA comes in.
          </p>
          <p className="text-lg mb-4">
            We are a leading provider of Quality Assurance as a Service (QAaaS), offering comprehensive and flexible QA
            solutions tailored to your unique development needs. Our mission is to empower your team to deliver robust,
            reliable, and high-performing software with confidence.
          </p>
          <p className="text-lg font-semibold text-primary">
            Partner with DovoQA and transform your QA process into a strategic advantage.
          </p>
        </section>

        {/* Our Services */}
        <section className="h-[297mm] w-[210mm] mx-auto p-8 bg-gray-100 dark:bg-gray-850 text-gray-900 dark:text-gray-50 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-primary mb-8 text-center">Our Comprehensive QA Services</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Functional Testing</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Ensuring every feature works exactly as intended, meeting all specified requirements and user
                expectations.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Performance Testing</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Verifying application responsiveness, stability, and scalability under various load conditions to ensure
                optimal user experience.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Automation Testing</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Developing robust automated test suites for faster, more efficient regression cycles, reducing manual
                effort and accelerating time-to-market.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Security Testing</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Identifying vulnerabilities and protecting your software from potential threats and malicious attacks.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Usability Testing</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Evaluating user-friendliness and overall user experience to ensure intuitive and accessible interfaces.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Consulting & Strategy</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Providing expert guidance and strategic planning for your QA initiatives, from test plan development to
                tool selection.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose DovoQA? */}
        <section className="h-[297mm] w-[210mm] mx-auto p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-primary mb-8 text-center">Why Choose DovoQA?</h3>
          <ul className="list-none space-y-6 text-lg">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Flat-Rate Annual Fee:</span> Enjoy complete budget predictability with
                our unique flat-rate model, eliminating surprises regardless of time or resources needed.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Scalability & Flexibility:</span> Our resources adapt seamlessly to your
                project's demands, scaling up or down without affecting your billing.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Expertise On-Demand:</span> Access a team of seasoned QA professionals
                without the overhead of in-house hiring.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Faster Time-to-Market:</span> Streamlined QA processes and efficient
                testing accelerate your software delivery cycles.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Enhanced Product Quality:</span> Deliver robust, bug-free software that
                delights your users and builds trust.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Focus on Core Business:</span> Offload QA complexities to us, allowing
                your team to focus on innovation and development.
              </div>
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="h-[297mm] w-[210mm] mx-auto flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-purple-700 to-indigo-900 p-8">
          <h3 className="text-4xl font-bold mb-8">Get in Touch with DovoQA</h3>
          <p className="text-xl mb-6 max-w-md">
            Ready to elevate your software quality? Contact us today for a free consultation.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6" />
              <span>hello@dovoqa.com</span>
            </p>
            <p className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6" />
              <span>+54-9-11-3234-6592</span>
            </p>
            <p className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6" />
              <span>Remote - Global Reach</span>
            </p>
          </div>
          <div className="mt-10">
            <Image src="/images/dovoqa-logo.png" alt="DovoQA Logo" width={100} height={100} />
          </div>
          <p className="text-sm mt-4 opacity-80">© {new Date().getFullYear()} DovoQA. All rights reserved.</p>
        </section>
      </div>
    </div>
  )
}
