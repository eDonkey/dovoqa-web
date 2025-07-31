"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, CheckCircle, DollarSign, Scale, ShieldCheck, Lightbulb, Code, GitBranch, Zap } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function DovoQABrochureES() {
  const brochureRef = useRef<HTMLDivElement>(null)

  const downloadPdf = async () => {
    if (brochureRef.current) {
      const canvas = await html2canvas(brochureRef.current, {
        scale: 2, // Increase scale for better resolution
        useCORS: true, // Enable CORS for images
        allowTaint: true, // Allow tainting canvas with cross-origin images
      })
      const imgData = canvas.toDataURL("image/png")
      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width // Calculate height based on aspect ratio

      // Create a new jsPDF instance with custom dimensions for a single, tall page
      const pdf = new jsPDF("p", "mm", [imgWidth, imgHeight])

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight) // Add the entire image to the single page

      pdf.save("DovoQA_Brochure_ES.pdf")
    }
  }

  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <div className="flex justify-center p-4">
        <Button onClick={downloadPdf} className="bg-blue-600 hover:bg-blue-700 text-white">
          Descargar Folleto (PDF)
        </Button>
      </div>
      <div ref={brochureRef} className="brochure-content p-8 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg">
        {/* Cover Page */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg mb-8">
          <Image
            src="/images/dovoqa-logo.png"
            alt="Logotipo de DovoQA"
            width={250}
            height={250}
            className="mx-auto mb-6"
          />

          <p className="font-light text-4xl">Calidad superior y continua como servicio.</p>
          <p className="text-xl mt-4">Nuestro compromiso es maximizar la calidad en tus proyectos.              </p>
        </section>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Acerca de DovoQA</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Somos proveedores de servicios que complementamos el desarrollo de software, identificando problemas de calidad y errores de desarrollo, permitiendo lograr un producto robusto y confiable, cumpliendo con los más altos estándares que el mercado requiere. Contamos con la experiencia necesaria, para optimizar la utilizacion de los recursos tanto humanos como tecnologicos, que nos permiten adaptarnos a las necesidades de cada proyecto y garantizar resultados excepcionales.
            {/* DovoQA es un proveedor de Aseguramiento de Calidad como Servicio (QAaaS), dedicado a ayudar a las empresas a entregar software de alta calidad y sin errores. Ofrecemos un modelo único de tarifa plana anual, que proporciona costos predecibles y recursos prácticamente ilimitados para adaptarse a las necesidades cambiantes de su proyecto. Nuestro equipo de expertos se integra perfectamente con su ciclo de desarrollo, permitiéndole centrarse en la innovación mientras nosotros garantizamos una calidad superior. */}
          </p>
        </section>

        {/* Our Services */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Nuestros Servicios Integrales de QA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <ShieldCheck className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Pruebas Funcionales</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Asegurando que cada característica funcione exactamente como se espera, cumpliendo con todos los
                  requisitos especificados.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Pruebas de Rendimiento</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Verificando la capacidad de respuesta, estabilidad y escalabilidad de la aplicación bajo diversas
                  cargas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Pruebas de Automatización</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Desarrollando robustas suites de pruebas automatizadas para ciclos de regresión más rápidos y
                  eficientes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Pruebas de Seguridad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Identificando vulnerabilidades y protegiendo su software de posibles amenazas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Pruebas de Usabilidad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Evaluando la facilidad de uso y la experiencia general del usuario para asegurar interfaces
                  intuitivas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Consultoría y Estrategia</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Proporcionando orientación experta y planificación estratégica para sus iniciativas de QA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies & Methodologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Tecnologías y Metodologías</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Aprovechamos tecnologías de vanguardia y nos adherimos a las mejores metodologías de la industria
            para ofrecer resultados con una calidad superior. Nuestro enfoque está diseñado para integrarse sin
            fricciones con sus pipelines de desarrollo, garantizando eficiencia, fiabilidad y una cobertura exhaustiva.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Code className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Automatización de Pruebas Avanzada</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Utilizamos frameworks como Selenium, Playwright y Cypress para suites de pruebas automatizadas
                  robustas y escalables en capas web, móvil y API.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Herramientas de Rendimiento y Seguridad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Empleamos JMeter, LoadRunner para análisis de rendimiento y OWASP ZAP, Burp Suite para evaluaciones
                  detalladas de vulnerabilidades de seguridad.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <GitBranch className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Integración Agile y DevOps</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Integramos QA dentro de los sprints Agile y los pipelines de DevOps, promoviendo pruebas, integración
                  y entrega continuas (CI/CD).
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Shift-Left y Pruebas Basadas en Riesgos</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Implementamos pruebas tempranas en el ciclo de vida del desarrollo y priorizamos los esfuerzos de
                  prueba basándonos en la evaluación de riesgos para un impacto máximo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Beneficios de Asociarse con Nosotros</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Previsibilidad de Costos</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nuestra tarifa plana anual elimina las sorpresas presupuestarias, proporcionando costos claros y
                  consistentes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Scale className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Escalabilidad y Flexibilidad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Los recursos se adaptan a las demandas de su proyecto, escalando hacia arriba o hacia abajo sin
                  afectar su facturación.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Experiencia a Demanda</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Acceda a un equipo de profesionales en Calidad experimentados sin los costos generales de la contratación
                  interna.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Calidad de Producto Mejorada</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Entregue software robusto y sin errores que deleite a sus usuarios y genere confianza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center py-8 bg-gray-100 dark:bg-gray-850 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">Contáctenos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            ¿Listo para elevar la calidad de su producto? ¡Contáctenos hoy!
          </p>
          <div className="flex flex-col items-center space-y-2">
            <p className="flex items-center space-x-2 text-lg">
              <Mail className="h-6 w-6 text-secondary" />
              <span>hello@dovoqa.com</span>
            </p>
            <p className="flex items-center space-x-2 text-lg">
              <Phone className="h-6 w-6 text-secondary" />
              <span>+54 9 11 3234-6592</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
