"use client"

import Image from "next/image"
import { Mail, Phone, ShieldCheck, DollarSign, Scale, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DovoqaBrochureEn() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen p-8">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8">
        <div className="flex items-center space-x-4">
          <Image src="/placeholder-logo.svg" alt="DovoQA Logo" width={60} height={60} className="rounded-full" />
          <h1 className="text-3xl font-bold text-primary">DovoQA</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#services" className="text-lg font-medium hover:text-primary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#benefits" className="text-lg font-medium hover:text-primary transition-colors">
                Benefits
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                Contact
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
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">Elevate Your Software Quality with DovoQA</h2>
          <p className="text-xl mb-8 opacity-90">
            Your dedicated QA partner, ensuring flawless software delivery with unparalleled flexibility and predictable
            costs.
          </p>
          <Button className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* Why DovoQA? Section - Unique Selling Propositions */}
      <section className="py-16 px-8 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Why Choose DovoQA? Our Unique Difference</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">QA as a Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Focus on your core business while we handle all your Quality Assurance needs. Our expert team integrates
                seamlessly with your development cycle.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">Flat Rate, Predictable Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Enjoy a flat annual rate, regardless of the time or resources required. No surprises, just clear,
                consistent billing for your budget.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">
                Virtually Unlimited Resources & Adaptability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Access a vast pool of QA talent. We adapt our resources to your project's evolving stages, ensuring
                optimal support without affecting your billing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 px-8 bg-gray-100 dark:bg-gray-850 rounded-lg shadow-md mb-12">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Our Comprehensive QA Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Functional Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Ensuring every feature works exactly as intended, meeting all specified requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Performance Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Verifying application responsiveness, stability, and scalability under various loads.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Security Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Identifying vulnerabilities and protecting your software from potential threats.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Automation Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Developing robust automated test suites for faster, more efficient regression cycles.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Usability Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Evaluating user-friendliness and overall user experience to ensure intuitive interfaces.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <CardTitle className="text-xl font-semibold">Mobile App Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Comprehensive testing across various devices and platforms for seamless mobile experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-8 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-12">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Benefits of Partnering with DovoQA</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Cost Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Reduce operational costs with our flat-rate model, eliminating unexpected expenses.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Accelerated Time-to-Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Streamlined QA processes help you launch high-quality software faster.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Enhanced Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Leverage our expertise to deliver robust, bug-free applications.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Scalability & Flexibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Easily scale QA efforts up or down based on project demands without hiring overhead.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Risk Mitigation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Proactive identification and resolution of issues minimize post-launch risks.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Dedicated Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                We act as an extension of your team, committed to your success.
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
        <h3 className="text-4xl font-bold mb-8">Ready to Elevate Your QA?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Contact us today to discuss your project and discover how DovoQA can help you deliver exceptional software.
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
        <p>&copy; {new Date().getFullYear()} DovoQA. All rights reserved.</p>
        <p>QA as a Service | Flat Rate | Unlimited Resources</p>
      </footer>
    </div>
  )
}
