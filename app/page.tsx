import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  DollarSign,
  Scale,
  Lightbulb,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart,
  Search,
  MessageSquare,
  Award,
  Mail,
  Phone,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { EmailModalForm } from "@/components/email-modal-form"
import WhatsAppIcon from "@/components/whatsapp-icon"

export default function Home() {
  const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true"

  if (underConstruction) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
        <p className="text-lg text-center">Our website is currently under construction. Please check back soon!</p>
      </div>
    )
  }

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center space-x-4">
          <Image src="/placeholder-logo.svg" alt="DovoQA Logo" width={50} height={50} className="rounded-full" />
          <span className="text-2xl font-bold text-primary">DovoQA</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#hero" className="text-lg font-medium hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-lg font-medium hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#process" className="text-lg font-medium hover:text-primary transition-colors">
                Process
              </Link>
            </li>
            <li>
              <Link href="#benefits" className="text-lg font-medium hover:text-primary transition-colors">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-lg font-medium hover:text-primary transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-r from-primary to-teal-600 text-white py-20 px-8 text-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.jpg?query=abstract-geometric-pattern"
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight animate-fade-in-up">
            Unlock Flawless Software with DovoQA
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Your dedicated QA partner, ensuring impeccable quality with unparalleled flexibility and predictable costs.
          </p>
          <Button className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-fade-in-up animation-delay-400">
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 px-8 bg-gray-100 dark:bg-gray-850">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in">
          Our Comprehensive QA Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Functional Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Ensuring every feature works exactly as intended, meeting all specified requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-100">
            <CardHeader>
              <Zap className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Performance Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Verifying application responsiveness, stability, and scalability under various loads.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-200">
            <CardHeader>
              <BarChart className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Automation Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Developing robust automated test suites for faster, more efficient regression cycles.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-300">
            <CardHeader>
              <Search className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Security Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Identifying vulnerabilities and protecting your software from potential threats.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-400">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Usability Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Evaluating user-friendliness and overall user experience to ensure intuitive interfaces.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-500">
            <CardHeader>
              <Award className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Consulting & Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Providing expert guidance and strategic planning for your QA initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-16 px-8 bg-white dark:bg-gray-800">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in">
          Our Streamlined QA Process
        </h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              1
            </div>
            <h4 className="text-2xl font-semibold mb-2">Discovery & Planning</h4>
            <p className="text-gray-700 dark:text-gray-300">
              We begin by understanding your project, requirements, and existing processes to tailor a QA strategy.
            </p>
          </div>
          <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-100">
            <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              2
            </div>
            <h4 className="text-2xl font-semibold mb-2">Execution & Testing</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Our expert QA engineers execute test plans, identify defects, and provide detailed reports.
            </p>
          </div>
          <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-200">
            <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              3
            </div>
            <h4 className="text-2xl font-semibold mb-2">Reporting & Optimization</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Continuous feedback and optimization ensure ongoing quality improvement and seamless integration.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-8 bg-gray-100 dark:bg-gray-850">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in">
          Benefits of Partnering with DovoQA
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Cost Predictability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Our flat-rate annual fee eliminates budget surprises, providing clear and consistent costs.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-100">
            <CardHeader>
              <Scale className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Scalability & Flexibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Resources adapt to your project's demands, scaling up or down without affecting your billing.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-200">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Expertise On-Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Access a team of seasoned QA professionals without the overhead of in-house hiring.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-300">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Faster Time-to-Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Streamlined QA processes and efficient testing accelerate your software delivery cycles.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-400">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Enhanced Product Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Deliver robust, bug-free software that delights your users and builds trust.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-500">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Focus on Core Business</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Offload QA complexities to us, allowing your team to focus on innovation and development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-8 bg-white dark:bg-gray-800">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in">
          Our Flat-Rate Annual Pricing
        </h3>
        <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-850 p-8 rounded-lg shadow-lg text-center animate-fade-in-up">
          <h4 className="text-3xl font-bold text-secondary mb-4">Predictable Quality, Predictable Costs</h4>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At DovoQA, we believe in transparent and straightforward pricing. Our unique flat-rate annual model ensures
            you have complete budget predictability, no matter how much time or how many resources your project requires
            throughout the year.
          </p>
          <div className="bg-primary text-white p-6 rounded-md shadow-md inline-block">
            <p className="text-4xl font-extrabold">Custom Flat Rate</p>
            <p className="text-lg mt-2">Tailored to your project's annual needs.</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg">
            This includes virtually unlimited resources and adaptability to different project stages, ensuring your
            billing remains consistent.
          </p>
          <Button className="mt-8 bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Request a Custom Quote
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-gray-100 dark:bg-gray-850">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
            <CardContent className="flex flex-col items-center text-center">
              <Image
                src="/placeholder-user.jpg?height=80&width=80&query=happy-client-1"
                alt="Client 1"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "DovoQA transformed our QA process. Their flat-rate model is a game-changer, and their team is
                incredibly responsive and skilled. Highly recommend!"
              </p>
              <p className="font-semibold text-primary">- Jane Doe, CTO at Tech Innovations</p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-100">
            <CardContent className="flex flex-col items-center text-center">
              <Image
                src="/placeholder-user.jpg?height=80&width=80&query=happy-client-2"
                alt="Client 2"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "The adaptability of DovoQA's resources is unmatched. They seamlessly scaled with our project, ensuring
                quality at every stage without any billing surprises."
              </p>
              <p className="font-semibold text-primary">- John Smith, Product Manager at Global Solutions</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-white dark:bg-gray-800">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in">Get in Touch</h3>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          <div className="text-center mt-8 text-lg text-gray-700 dark:text-gray-300">
            <p className="mb-2">Or reach us directly:</p>
            <p className="flex items-center justify-center space-x-2 mb-1">
              <Mail className="h-5 w-5 text-primary" />
              <span>hello@dovoqa.com</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>+54-9-11-3234-6592</span>
            </p>
            <p className="flex items-center justify-center space-x-2 mt-2">
              <WhatsAppIcon className="h-5 w-5 text-primary" />
              <a
                href="https://wa.me/5491132346592"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Email Modal Form */}
      <EmailModalForm />

      {/* Footer */}
      <footer className="py-8 px-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} DovoQA. All rights reserved.</p>
        <p>QA as a Service | Flat Rate | Unlimited Resources</p>
      </footer>
    </div>
  )
}
