import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, CheckCircle, DollarSign, Scale, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { EmailModalForm } from "@/components/email-modal-form"
import { Analytics } from "@vercel/analytics/react"

export default function LandingPage() {
  const isUnderConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true"

  if (isUnderConstruction) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Under Construction</h1>
          <p className="text-xl mb-8">We're building something amazing! Please check back soon.</p>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Under Construction"
              layout="fill"
              objectFit="contain"
              className="animate-bounce"
            />
          </div>
          <p className="text-lg">In the meantime, feel free to reach out to us:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <a href="mailto:hello@dovoqa.com" className="flex items-center space-x-2 text-lg hover:underline">
              <Mail className="h-5 w-5" />
              <span>hello@dovoqa.com</span>
            </a>
            <a href="tel:+54-9-11-3234-6592" className="flex items-center space-x-2 text-lg hover:underline">
              <Phone className="h-5 w-5" />
              <span>+54-9-11-3234-6592</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <Analytics />
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center space-x-4">
          <Image src="/images/dovoqa-logo.png" alt="DovoQA Logo" width={60} height={60} className="rounded-full" />
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
              <a href="#process" className="text-lg font-medium hover:text-primary transition-colors">
                Process
              </a>
            </li>
            <li>
              <a href="#benefits" className="text-lg font-medium hover:text-primary transition-colors">
                Benefits
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-lg font-medium hover:text-primary transition-colors">
                Testimonials
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
      <section className="relative bg-gradient-to-r from-primary to-teal-600 text-white py-20 px-8 rounded-b-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.jpg?query=abstract-geometric-pattern"
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
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
      <section className="py-16 px-8 bg-white dark:bg-gray-800 rounded-lg shadow-md mx-8 -mt-12 relative z-10 animate-fade-in">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Why Choose DovoQA? Our Unique Difference</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
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

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
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

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
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
      <section id="services" className="py-16 px-8 bg-gray-100 dark:bg-gray-850 animate-fade-in">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Our Comprehensive QA Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
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

      {/* Our Process Section */}
      <section id="process" className="py-16 px-8 bg-white dark:bg-gray-800 animate-fade-in">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Our Streamlined QA Process</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center animate-zoom-in">
            <div className="bg-secondary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              1
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Discovery & Planning</h4>
            <p className="text-gray-700 dark:text-gray-300">
              We understand your project, requirements, and define a tailored QA strategy.
            </p>
          </div>
          <div className="flex flex-col items-center animate-zoom-in delay-100">
            <div className="bg-secondary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              2
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Test Design & Development</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Creating comprehensive test cases and setting up the testing environment.
            </p>
          </div>
          <div className="flex flex-col items-center animate-zoom-in delay-200">
            <div className="bg-secondary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              3
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Execution & Reporting</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Executing tests, identifying defects, and providing detailed reports.
            </p>
          </div>
          <div className="flex flex-col items-center animate-zoom-in delay-300">
            <div className="bg-secondary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              4
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">Continuous Improvement</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Iterative testing and feedback loops to ensure ongoing quality enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-8 bg-gray-100 dark:bg-gray-850 animate-fade-in">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">Benefits of Partnering with DovoQA</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
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
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-white dark:bg-gray-800 animate-fade-in">
        <h3 className="text-4xl font-bold text-center text-primary mb-12">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;DovoQA transformed our development pipeline. Their flat-rate model and unlimited resources are a
                game-changer. We&apos;ve never had such predictable quality assurance.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Client Avatar"
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-primary">Jane Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CTO, Tech Solutions Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;The flexibility and expertise of DovoQA&apos;s team are unmatched. They seamlessly integrated with
                our agile process and significantly improved our software&apos;s stability.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Client Avatar"
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-primary">John Smith</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager, Innovate Co.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-8 bg-gradient-to-r from-primary to-teal-600 text-white rounded-t-3xl shadow-xl text-center animate-fade-in-up"
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
          <a
            href="https://wa.me/5491132346592"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-lg font-medium hover:underline"
          >
            <Image src="/whatsapp-icon.tsx" alt="WhatsApp" width={24} height={24} />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} DovoQA. All rights reserved.</p>
        <p>QA as a Service | Flat Rate | Unlimited Resources</p>
        <div className="mt-4">
          <EmailModalForm />
        </div>
      </footer>
    </div>
  )
}
