import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle, DollarSign, Scale, Phone, Mail, Globe } from "lucide-react"

export default function DovoQABrochureES() {
  return (
    <div className="font-sans bg-gradient-to-br from-primary to-secondary-foreground text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="relative h-64 bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-6">
          <Image
            src="/placeholder-logo.svg"
            alt="Logotipo de DovoQA"
            width={150}
            height={150}
            className="absolute top-6 left-6"
          />
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">DovoQA</h1>
            <p className="mt-2 text-xl font-light text-white/90">Su Socio en Aseguramiento de Calidad</p>
            <p className="mt-1 text-lg font-light text-white/80">Software Impecable, Predeciblemente.</p>
          </div>
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Patrón de fondo abstracto"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-20 z-0"
          />
        </div>

        {/* Introduction */}
        <section className="p-8 text-center bg-gray-50">
          <h2 className="text-3xl font-bold text-primary mb-4">Redefiniendo el Aseguramiento de Calidad</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            En DovoQA, redefinimos el Aseguramiento de Calidad ofreciendo un modelo integral de **QA como Servicio**
            diseñado para integrarse sin problemas en su ciclo de desarrollo. Nos enfocamos en entregar una calidad
            excepcional, permitiéndole concentrarse en la innovación.
          </p>
        </section>

        {/* Key Differentiators */}
        <section className="p-8 grid md:grid-cols-3 gap-8 bg-white">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <DollarSign className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-900">Tarifa Plana Anual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Diga adiós a los costos impredecibles. Nuestro modelo de tarifa plana anual le asegura un precio fijo,
                sin importar el tiempo o los recursos necesarios. Esto significa una previsibilidad presupuestaria total
                y sin cargos ocultos.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-secondary">
            <CardHeader>
              <Scale className="mx-auto h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-900">Recursos Prácticamente Ilimitados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Escale sus esfuerzos de QA sin esfuerzo. Nos adaptamos a las necesidades cambiantes de su proyecto,
                proporcionando la cantidad adecuada de recursos en cada etapa, desde el desarrollo inicial hasta el
                mantenimiento post-lanzamiento, todo sin cambiar su facturación.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-900">Adaptabilidad Inigualable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nuestro enfoque flexible asegura que a medida que su proyecto crece o cambia de dirección, nuestro
                soporte de QA se adapta con usted, proporcionando pruebas continuas y de alta calidad sin afectar su
                presupuesto.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Services */}
        <section className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Nuestros Servicios Integrales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pruebas Funcionales",
              "Pruebas de Rendimiento",
              "Pruebas de Automatización",
              "Pruebas de Seguridad",
              "Pruebas de Usabilidad",
              "Consultoría y Estrategia",
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-md shadow-sm">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits of Partnering */}
        <section className="p-8 bg-white">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Beneficios de Asociarse con DovoQA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Previsibilidad de Costos: Tarifa anual fija elimina sorpresas presupuestarias.",
              "Escalabilidad y Flexibilidad: Los recursos se ajustan a las demandas de su proyecto.",
              "Experiencia a Demanda: Acceso a profesionales de QA experimentados.",
              "Tiempo de Comercialización Más Rápido: Procesos de QA optimizados aceleran la entrega.",
              "Calidad de Producto Mejorada: Entregue software robusto y sin errores.",
              "Enfoque en el Negocio Principal: Déjenos el QA, para que usted pueda innovar.",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="p-8 text-center bg-gradient-to-r from-primary to-secondary text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar su QA?</h2>
          <p className="text-xl mb-6">¡Contáctenos hoy para una consulta personalizada!</p>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            Obtenga una Consulta Gratuita
          </Button>
        </section>

        {/* Footer */}
        <footer className="p-8 bg-gray-800 text-gray-300 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>dovoqa.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@dovoqa.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} DovoQA. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  )
}
