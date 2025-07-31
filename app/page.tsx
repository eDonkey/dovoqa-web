"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle, Lightbulb, Users, DollarSign, Clock, Award, Star } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { EmailModalForm } from "@/components/email-modal-form"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const [isUnderConstruction, setIsUnderConstruction] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check for NEXT_PUBLIC_UNDER_CONSTRUCTION environment variable
    if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true") {
      setIsUnderConstruction(true)
      toast({
        title: "Under Construction",
        description: "This site is currently under construction. Please check back later!",
        duration: 5000,
      })
    }
  }, [toast])

  if (isUnderConstruction) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4">
        <div className="text-center space-y-6">
          <Image
            src="/placeholder-logo.png"
            alt="DovoQA Logo"
            width={200}
            height={200}
            className="mx-auto animate-pulse"
          />
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">DovoQA</h1>
          <p className="mt-3 text-xl sm:text-2xl md:text-3xl text-gray-300">
            Our website is currently under construction.
          </p>
          <p className="mt-2 text-lg text-gray-400">We're working hard to bring you a better experience!</p>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="mailto:info@dovoqa.com" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                Contact Us
              </Button>
            </Link>
            <Link href="tel:+1234567890" passHref>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                Call Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Analytics />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <Image src="/placeholder-logo.png" alt="DovoQA Logo" width={40} height={40} className="rounded-full" />
            <span className="text-lg font-semibold">DovoQA</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link className="font-medium hover:underline underline-offset-4" href="#services">
              Our Services
            </Link>
            <Link className="font-medium hover:underline underline-offset-4" href="#process">
              Process
            </Link>
            <Link className="font-medium hover:underline underline-offset-4" href="#benefits">
              Benefits
            </Link>
            {/* Pricing link removed */}
            <Link className="font-medium hover:underline underline-offset-4" href="#contact">
              Contact Us
            </Link>
            {/* Brochure links removed */}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-fade-in-up">
                Elevate Your Software Quality with DovoQA
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up delay-200">
                Comprehensive Quality Assurance as a Service (QAaaS) for flawless software delivery.
              </p>
              <div className="space-x-4 animate-fade-in-up delay-400">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-purple-600 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Get a Quote
                </Button>
                <Button className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up delay-200">
                  We offer a wide range of QA services to ensure your software meets the highest standards.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-300">
                <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Manual Testing</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Thorough manual testing to identify critical bugs and ensure user satisfaction.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-400">
                <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Automation Testing</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Automated test suites for faster feedback and efficient regression testing.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-500">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Performance Testing</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Ensure your application performs optimally under various load conditions.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-600">
                <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Security Testing</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Identify vulnerabilities and protect your application from potential threats.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-700">
                <Clock className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Consulting & Strategy</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Expert guidance to build a robust QA strategy tailored to your development lifecycle.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">Our Process</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up delay-200">
                  Our streamlined process ensures efficient and effective quality assurance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 text-center bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-300">
                <Award className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">1. Discovery & Planning</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  We start by understanding your project, requirements, and goals to create a tailored QA plan.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-400">
                <Star className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">2. Execution & Reporting</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Our QA experts execute the test plan, providing regular updates and detailed reports.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-500">
                <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">3. Continuous Improvement</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  We continuously refine our approach based on feedback and evolving project needs.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">
                  Benefits of QAaaS
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up delay-200">
                  Partnering with DovoQA brings numerous advantages to your software development lifecycle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-300">
                <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Cost Efficiency</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Reduce overheads associated with in-house QA teams and infrastructure.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-400">
                <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Expertise On-Demand</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Access a team of seasoned QA professionals with diverse industry experience.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-500">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Faster Time-to-Market</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Accelerate your release cycles with efficient and scalable testing processes.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-600">
                <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Improved Quality</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Deliver high-quality, bug-free software that delights your users.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-700">
                <Clock className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Scalability</CardTitle>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  Easily scale your QA efforts up or down based on project demands.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing section removed */}

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">Contact Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up delay-200">
                  Have questions or ready to start your QA journey? Reach out to us!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <Link href="mailto:info@dovoqa.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                    info@dovoqa.com
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                  <Link href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:underline">
                    +1 (234) 567-890
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <p className="text-gray-600 dark:text-gray-400">Remote - Global Reach</p>
                </div>
                <EmailModalForm />
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 DovoQA. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
