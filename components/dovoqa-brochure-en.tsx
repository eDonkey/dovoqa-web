import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle, DollarSign, Scale, Phone, Mail, Globe } from "lucide-react"

export default function DovoQABrochureEN() {
  return (
    <div className="font-sans bg-gradient-to-br from-primary to-secondary-foreground text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="relative h-64 bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-6">
          <Image
            src="/placeholder-logo.svg"
            alt="DovoQA Logo"
            width={150}
            height={150}
            className="absolute top-6 left-6"
          />
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">DovoQA</h1>
            <p className="mt-2 text-xl font-light text-white/90">Your Partner in Quality Assurance</p>
            <p className="mt-1 text-lg font-light text-white/80">Unlocking Flawless Software, Predictably.</p>
          </div>
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Abstract background pattern"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-20 z-0"
          />
        </div>

        {/* Introduction */}
        <section className="p-8 text-center bg-gray-50">
          <h2 className="text-3xl font-bold text-primary mb-4">Redefining Quality Assurance</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At DovoQA, we redefine Quality Assurance by offering a comprehensive **QA as a Service** model designed to
            integrate seamlessly with your development lifecycle. We focus on delivering exceptional quality, allowing
            you to concentrate on innovation.
          </p>
        </section>

        {/* Key Differentiators */}
        <section className="p-8 grid md:grid-cols-3 gap-8 bg-white">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <DollarSign className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-900">Flat-Rate Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Say goodbye to unpredictable costs. Our annual flat-rate model ensures you pay a fixed price, regardless
                of the time or resources required. This means complete budget predictability and no hidden fees.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-secondary">
            <CardHeader>
              <Scale className="mx-auto h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-900">Virtually Unlimited Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Scale your QA efforts effortlessly. We adapt to your project's evolving needs, providing the right
                amount of resources at every stage, from initial development to post-launch maintenance, all without
                changing your billing.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-900">Unmatched Adaptability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our flexible approach ensures that as your project grows or pivots, our QA support scales with you,
                providing continuous, high-quality testing without impacting your budget.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Services */}
        <section className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Our Comprehensive Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Functional Testing",
              "Performance Testing",
              "Automation Testing",
              "Security Testing",
              "Usability Testing",
              "Consulting & Strategy",
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
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Benefits of Partnering with DovoQA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Cost Predictability: Fixed annual fee eliminates budget surprises.",
              "Scalability & Flexibility: Resources adjust to your project's demands.",
              "Expertise On-Demand: Access to seasoned QA professionals.",
              "Faster Time-to-Market: Streamlined QA processes accelerate delivery.",
              "Enhanced Product Quality: Deliver robust, bug-free software.",
              "Focus on Core Business: Let us handle QA, so you can innovate.",
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your QA?</h2>
          <p className="text-xl mb-6">Contact us today for a personalized consultation!</p>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            Get a Free Consultation
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
          <p>&copy; {new Date().getFullYear()} DovoQA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
