"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import Image from "next/image"

export default function DovoqaBrochure({ lang }: { lang: "en" | "es" }) {
  const brochureRef = useRef<HTMLDivElement>(null)

  const handleDownloadPdf = async () => {
    if (brochureRef.current) {
      const canvas = await html2canvas(brochureRef.current, {
        scale: 2, // Increase scale for better resolution
        useCORS: true, // Allow cross-origin images
        allowTaint: true, // Allow tainting the canvas
        scrollX: 0,
        scrollY: -window.scrollY, // Adjust scroll to capture full content
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
      pdf.save(`DovoQA_Brochure_${lang.toUpperCase()}.pdf`)
    }
  }

  return (
    <div className="flex flex-col items-center p-4">
      <Button onClick={handleDownloadPdf} className="mb-4">
        <Download className="mr-2 h-4 w-4" /> Download PDF
      </Button>
      <div ref={brochureRef} className="brochure-content p-8 bg-white shadow-lg max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <Image
            src="/placeholder-logo.png" // Assuming this is the DovoQA logo
            alt="DovoQA Logo"
            width={150}
            height={50}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-800">{lang === "en" ? "DovoQA Services" : "Servicios DovoQA"}</h1>
          <p className="text-lg text-gray-600">
            {lang === "en" ? "Your Partner in Quality Assurance" : "Tu Socio en Aseguramiento de Calidad"}
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">{lang === "en" ? "About Us" : "Sobre Nosotros"}</h2>
          <p className="text-gray-700 leading-relaxed">
            {lang === "en"
              ? "DovoQA is a leading provider of Quality Assurance as a Service (QAaaS), dedicated to ensuring the highest quality of your software products. We offer comprehensive testing solutions tailored to your specific needs, helping you deliver flawless applications to your users."
              : "DovoQA es un proveedor líder de Aseguramiento de Calidad como Servicio (QAaaS), dedicado a garantizar la máxima calidad de sus productos de software. Ofrecemos soluciones de prueba integrales adaptadas a sus necesidades específicas, ayudándole a entregar aplicaciones impecables a sus usuarios."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            {lang === "en" ? "Our Services" : "Nuestros Servicios"}
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{lang === "en" ? "Manual Testing" : "Pruebas Manuales"}</li>
            <li>{lang === "en" ? "Automation Testing" : "Pruebas de Automatización"}</li>
            <li>{lang === "en" ? "Performance Testing" : "Pruebas de Rendimiento"}</li>
            <li>{lang === "en" ? "Security Testing" : "Pruebas de Seguridad"}</li>
            <li>{lang === "en" ? "Consulting & Strategy" : "Consultoría y Estrategia"}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            {lang === "en" ? "Why Choose DovoQA?" : "¿Por Qué Elegir DovoQA?"}
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{lang === "en" ? "Experienced QA Professionals" : "Profesionales de QA Experimentados"}</li>
            <li>{lang === "en" ? "Tailored Solutions" : "Soluciones Personalizadas"}</li>
            <li>{lang === "en" ? "Cost-Effective Services" : "Servicios Rentables"}</li>
            <li>{lang === "en" ? "Commitment to Quality" : "Compromiso con la Calidad"}</li>
          </ul>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-8">
          <p>
            {lang === "en"
              ? "Contact us today for a free consultation!"
              : "¡Contáctenos hoy para una consulta gratuita!"}
          </p>
          <p>info@dovoqa.com</p>
          <p>www.dovoqa.com</p>
        </footer>
      </div>
    </div>
  )
}
