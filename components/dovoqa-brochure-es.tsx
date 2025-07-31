"use client"

import Image from "next/image"
import { Mail, Phone, ShieldCheck, DollarSign, Scale, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DovoqaBrochureEs() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen p-8">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8">
        <div className="flex items-center space-x-4">
          <Image src="/images/dovoqa-logo.png" alt="Logo de DovoQA" width={60} height={60} className="rounded-full" />
          <h1 className="text-3xl font-bold text-primary">DovoQA</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#services" className="text-lg font-medium hover:text-primary transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#benefits" className="text-lg font-medium hover:text-primary transition-colors">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-teal-600 text-white py-20 px-8 rounded-lg shadow-xl mb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.jpg?query=abstract-geometric-pattern"
            alt="Patrón de Fondo"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">Eleve la Calidad de su Software con DovoQA</h2>
          <p className="text-xl mb-8 opacity-90">
            Su socio de QA dedicado, asegurando la entrega de software impecable con flexibilidad inigualable y costos
            predecibles.
          </p>
          <Button className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Obtenga una Consulta Gratuita
          </Button>
        </div>
      </section>

      {/* Why DovoQA? Section - Unique Selling Propositions */}
      <section className="py-16 px-8 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">
          ¿Por Qué Elegir DovoQA? Nuestra Diferencia Única
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">QA como Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Concéntrese en su negocio principal mientras nosotros nos encargamos de todas sus necesidades de
                Aseguramiento de Calidad. Nuestro equipo experto se integra sin problemas con su ciclo de desarrollo.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">Tarifa Plana, Costos Predecibles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Disfrute de una tarifa anual plana, independientemente del tiempo o los recursos requeridos. Sin
                sorpresas, solo una facturación clara y consistente para su presupuesto.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">
                Recursos Prácticamente Ilimitados y Adaptabilidad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Acceda a un vasto grupo de talentos de QA. Adaptamos nuestros recursos a las etapas cambiantes de su
                proyecto, asegurando un soporte óptimo sin afectar su facturación.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 px-8 bg-gray-100 dark:bg-gray-850 rounded-lg shadow-md mb-12">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Nuestros Servicios Integrales de QA</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Pruebas Funcionales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Asegurando que cada característica funcione exactamente como se espera, cumpliendo con todos los
                requisitos especificados.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Pruebas de Rendimiento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Verificando la capacidad de respuesta, estabilidad y escalabilidad de la aplicación bajo diversas
                cargas.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Pruebas de Seguridad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Identificando vulnerabilidades y protegiendo su software de posibles amenazas.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Pruebas de Automatización</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Desarrollando suites de pruebas automatizadas robustas para ciclos de regresión más rápidos y
                eficientes.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Pruebas de Usabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Evaluando la facilidad de uso y la experiencia general del usuario para asegurar interfaces intuitivas.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Pruebas de Aplicaciones Móviles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Pruebas exhaustivas en varios dispositivos y plataformas para experiencias móviles fluidas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-8 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Beneficios de Asociarse con DovoQA</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Eficiencia de Costos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Reduzca los costos operativos con nuestro modelo de tarifa plana, eliminando gastos inesperados.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Tiempo de Comercialización Acelerado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Los procesos de QA optimizados le ayudan a lanzar software de alta calidad más rápido.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Calidad Mejorada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Aproveche nuestra experiencia para entregar aplicaciones robustas y sin errores.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Escalabilidad y Flexibilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Escale fácilmente los esfuerzos de QA hacia arriba o hacia abajo según las demandas del proyecto sin
                costos generales de contratación.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Mitigación de Riesgos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                La identificación y resolución proactiva de problemas minimiza los riesgos posteriores al lanzamiento.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Asociación Dedicada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Actuamos como una extensión de su equipo, comprometidos con su éxito.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-8 bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg shadow-xl text-center"
      >
        <h3 className="text-4xl font-bold mb-8">¿Listo para Elevar su QA?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Contáctenos hoy para discutir su proyecto y descubrir cómo DovoQA puede ayudarlo a entregar software
          excepcional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="mailto:hello@dovoqa.com" className="flex items-center space-x-3 text-lg font-medium hover:underline">
            <Mail className="h-6 w-6" />
            <span>hello@dovoqa.com</span>
          </a>
          <a href="tel:+54-9-11-3234-6592" className="flex items-center space-x-3 text-lg font-medium hover:underline">
            <Phone className="h-6 w-6" />
            <span>+54-9-11-3234-6592</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} DovoQA. Todos los derechos reservados.</p>
        <p>QA como Servicio | Tarifa Plana | Recursos Ilimitados</p>
      </footer>
    </div>
  )
}
