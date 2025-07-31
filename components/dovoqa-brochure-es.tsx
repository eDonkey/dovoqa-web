"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function DovoqaBrochureEs() {
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

      pdf.save("DovoQA_Brochure_ES.pdf")
    }
  }

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <div className="flex justify-center p-4 bg-gray-100 dark:bg-gray-800">
        <Button onClick={downloadPdf} className="bg-primary text-white hover:bg-primary/90">
          Descargar Folleto (PDF)
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
            <h2 className="text-3xl font-semibold mb-8">Aseguramiento de Calidad como Servicio</h2>
            <p className="text-xl max-w-md mx-auto">
              Su socio dedicado para una entrega de software impecable, asegurando una calidad inigualable con
              flexibilidad y costos predecibles.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="h-[297mm] w-[210mm] mx-auto p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-primary mb-6 text-center">Bienvenido a DovoQA</h3>
          <p className="text-lg mb-4">
            En el vertiginoso mundo digital actual, la calidad del software es primordial. Errores, problemas de
            rendimiento y vulnerabilidades de seguridad pueden afectar gravemente la experiencia del usuario, la
            reputación de la marca y, en última instancia, sus resultados. Ahí es donde entra DovoQA.
          </p>
          <p className="text-lg mb-4">
            Somos un proveedor líder de Aseguramiento de Calidad como Servicio (QAaaS), ofreciendo soluciones de QA
            integrales y flexibles adaptadas a sus necesidades de desarrollo únicas. Nuestra misión es capacitar a su
            equipo para entregar software robusto, confiable y de alto rendimiento con confianza.
          </p>
          <p className="text-lg font-semibold text-primary">
            Asóciese con DovoQA y transforme su proceso de QA en una ventaja estratégica.
          </p>
        </section>

        {/* Our Services */}
        <section className="h-[297mm] w-[210mm] mx-auto p-8 bg-gray-100 dark:bg-gray-850 text-gray-900 dark:text-gray-50 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-primary mb-8 text-center">Nuestros Servicios Integrales de QA</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Pruebas Funcionales</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Asegurando que cada característica funcione exactamente como se espera, cumpliendo con todos los
                requisitos especificados y las expectativas del usuario.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Pruebas de Rendimiento</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Verificando la capacidad de respuesta, estabilidad y escalabilidad de la aplicación bajo diversas
                condiciones de carga para garantizar una experiencia de usuario óptima.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Pruebas de Automatización</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Desarrollando robustas suites de pruebas automatizadas para ciclos de regresión más rápidos y
                eficientes, reduciendo el esfuerzo manual y acelerando el tiempo de comercialización.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Pruebas de Seguridad</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Identificando vulnerabilidades y protegiendo su software de posibles amenazas y ataques maliciosos.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Pruebas de Usabilidad</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Evaluando la facilidad de uso y la experiencia general del usuario para garantizar interfaces intuitivas
                y accesibles.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-secondary mb-2">Consultoría y Estrategia</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Proporcionando orientación experta y planificación estratégica para sus iniciativas de QA, desde el
                desarrollo del plan de pruebas hasta la selección de herramientas.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose DovoQA? */}
        <section className="h-[297mm] w-[210mm] mx-auto p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-primary mb-8 text-center">¿Por Qué Elegir DovoQA?</h3>
          <ul className="list-none space-y-6 text-lg">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Tarifa Plana Anual:</span> Disfrute de una previsibilidad presupuestaria
                completa con nuestro modelo de tarifa plana único, eliminando sorpresas independientemente del tiempo o
                los recursos necesarios.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Escalabilidad y Flexibilidad:</span> Nuestros recursos se adaptan
                perfectamente a las demandas de su proyecto, escalando hacia arriba o hacia abajo sin afectar su
                facturación.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Experiencia Bajo Demanda:</span> Acceda a un equipo de profesionales de
                QA experimentados sin los gastos generales de la contratación interna.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Tiempo de Comercialización Más Rápido:</span> Los procesos de QA
                optimizados y las pruebas eficientes aceleran sus ciclos de entrega de software.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Calidad de Producto Mejorada:</span> Entregue software robusto y sin
                errores que deleite a sus usuarios y genere confianza.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Enfoque en el Negocio Principal:</span> Déjenos las complejidades de QA
                a nosotros, permitiendo que su equipo se concentre en la innovación y el desarrollo.
              </div>
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="h-[297mm] w-[210mm] mx-auto flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-purple-700 to-indigo-900 p-8">
          <h3 className="text-4xl font-bold mb-8">Póngase en Contacto con DovoQA</h3>
          <p className="text-xl mb-6 max-w-md">
            ¿Listo para elevar la calidad de su software? Contáctenos hoy para una consulta gratuita.
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
              <span>Remoto - Alcance Global</span>
            </p>
          </div>
          <div className="mt-10">
            <Image src="/images/dovoqa-logo.png" alt="DovoQA Logo" width={100} height={100} />
          </div>
          <p className="text-sm mt-4 opacity-80">© {new Date().getFullYear()} DovoQA. Todos los derechos reservados.</p>
        </section>
      </div>
    </div>
  )
}
