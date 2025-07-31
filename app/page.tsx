"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"
import { sendContactEmail } from "@/app/actions/contact"
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  DollarSign,
  Users,
  Lightbulb,
  Rocket,
  Shield,
  MessageCircle,
  Code,
  TrendingUp,
  Zap,
  Award,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export default function LandingPage() {
  const [isUnderConstruction, setIsUnderConstruction] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate checking for an "under construction" flag
    // In a real app, this might come from an environment variable or CMS
    const constructionMode = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true"
    setIsUnderConstruction(constructionMode)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const response = await sendContactEmail(new FormData(e.currentTarget))
    if (response.success) {
      toast({
        title: "Success!",
        description: response.message,
        variant: "default",
      })
      setFormData({ name: "", email: "", message: "" })
    } else {
      toast({
        title: "Error!",
        description: response.message,
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  if (isUnderConstruction) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4 text-center">
        <Image src="/placeholder-logo.svg" alt="DovoQA Logo" width={150} height={150} className="mb-8 animate-pulse" />
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Website Under Construction</h1>
        <p className="text-xl mb-8 animate-slide-up">
          We are working hard to bring you an amazing experience. Please check back soon!
        </p>
        <div className="flex space-x-4 animate-fade-in delay-300">
          <Link href="mailto:info@dovoqa.com" passHref>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </Link>
          <Link href="tel:+15551234567" passHref>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
              <Phone className="mr-2 h-5 w-5" /> Call Us
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/placeholder-logo.svg" alt="DovoQA Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">DovoQA</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Services
            </Link>
            <Link href="#process" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Process
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Benefits
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
          <Image
            src="/placeholder.jpg?height=1080&width=1920&query=abstract%20tech%20background"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 opacity-30"
          />
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                DovoQA: Your Partner in Quality Assurance
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl animate-slide-up delay-200">
                Unlocking Flawless Software, Predictably.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center animate-slide-up delay-400">
                <Link href="#contact" passHref>
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Get a Free Consultation
                  </Button>
                </Link>
                <Link href="#services" passHref>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a comprehensive suite of QA services to ensure your software is robust, reliable, and ready
                  for market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Functional Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ensuring every feature works as intended, meeting all specified requirements.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-100">
                <CardHeader>
                  <Rocket className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Performance Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Evaluating system responsiveness and stability under various workloads.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-200">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Security Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Identifying vulnerabilities and ensuring your application is protected against threats.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-300">
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Automation Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Automating repetitive test cases for faster feedback and increased efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-400">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Usability Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ensuring an intuitive and satisfying user experience for your target audience.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-500">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">QA Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Strategic guidance to optimize your QA processes and achieve higher quality standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Our Streamlined Process
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We follow a clear and collaborative process to ensure seamless integration and effective QA delivery.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up">
                <CardHeader>
                  <span className="text-5xl font-bold text-secondary mb-4">1</span>
                  <CardTitle className="text-xl font-semibold">Discovery & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We start by understanding your project, goals, and existing processes to tailor our QA strategy.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-100">
                <CardHeader>
                  <span className="text-5xl font-bold text-secondary mb-4">2</span>
                  <CardTitle className="text-xl font-semibold">Execution & Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our expert QA engineers execute test plans, identify defects, and provide detailed reports.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-200">
                <CardHeader>
                  <span className="text-5xl font-bold text-secondary mb-4">3</span>
                  <CardTitle className="text-xl font-semibold">Continuous Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We continuously optimize our processes and adapt to your evolving needs for ongoing quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Why Choose DovoQA?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the DovoQA difference with unparalleled advantages for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-1 animate-slide-up">
                <h3 className="text-xl font-bold flex items-center gap-2 text-secondary">
                  <DollarSign className="h-6 w-6" /> Predictable Flat-Rate Pricing
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Eliminate budget surprises with our annual flat-rate model. Get comprehensive QA coverage without
                  worrying about hourly rates or resource fluctuations.
                </p>
              </div>
              <div className="grid gap-1 animate-slide-up delay-100">
                <h3 className="text-xl font-bold flex items-center gap-2 text-secondary">
                  <Users className="h-6 w-6" /> Virtually Unlimited Resources
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our flexible team scales with your project needs, providing the right expertise at every stage,
                  ensuring seamless QA support without impacting your fixed billing.
                </p>
              </div>
              <div className="grid gap-1 animate-slide-up delay-200">
                <h3 className="text-xl font-bold flex items-center gap-2 text-secondary">
                  <Zap className="h-6 w-6" /> Faster Time-to-Market
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Streamlined QA processes and dedicated teams accelerate your development cycle, helping you launch
                  high-quality products faster.
                </p>
              </div>
              <div className="grid gap-1 animate-slide-up delay-300">
                <h3 className="text-xl font-bold flex items-center gap-2 text-secondary">
                  <Award className="h-6 w-6" /> Enhanced Product Quality
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our rigorous testing methodologies and experienced professionals ensure your software is robust,
                  reliable, and delivers an exceptional user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Flat-Rate Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience predictable costs with our transparent annual flat-rate model. No surprises, just quality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-md items-start gap-8 py-12 lg:max-w-5xl lg:grid-cols-2">
              <Card className="flex flex-col justify-between p-6 shadow-lg border-t-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Annual QA Partnership</CardTitle>
                  <p className="text-gray-500 dark:text-gray-400">Comprehensive QA as a Service</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                    Custom Quote
                    <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/year</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>Flat-rate annual billing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>Virtually unlimited resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>Adaptability to project stages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>Dedicated QA team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>Full suite of QA services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>Continuous quality assurance</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">Request a Custom Quote</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between p-6 shadow-lg border-t-4 border-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-secondary">Why Flat Rate?</CardTitle>
                  <p className="text-gray-500 dark:text-gray-400">Our unique value proposition</p>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    At DovoQA, we believe in transparency and predictability. Our flat-rate model eliminates the common
                    headaches associated with hourly billing or fluctuating resource needs.
                  </p>
                  <p>
                    You get a fixed annual cost, no matter how much time or how many resources your project requires
                    throughout the year. This allows you to budget effectively and focus on your core business, knowing
                    your QA is covered.
                  </p>
                  <p>
                    We adapt our resources to your project's different stages, ensuring optimal support without any
                    changes to your agreed-upon billing. This is QA as a Service, simplified.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 animate-fade-in"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from businesses that have experienced the DovoQA difference.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up">
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    &quot;DovoQA transformed our QA process. The flat-rate model is a game-changer, providing incredible
                    value and predictability. Their team is highly skilled and adaptable.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder-user.jpg?height=64&width=64&query=happy%20business%20person"
                      alt="Client Avatar"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-50">Jane Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CTO, Tech Innovators Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up delay-100">
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    &quot;The flexibility and unlimited resources from DovoQA allowed us to scale our testing efforts
                    without any budget surprises. Truly a partner in quality!&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder-user.jpg?height=64&width=64&query=smiling%20professional"
                      alt="Client Avatar"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-50">John Smith</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager, Global Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions or ready to start your QA journey with DovoQA? Contact us today!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">info@dovoqa.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-500 dark:text-gray-400">123 QA Lane, Suite 100, Quality City, QC 90210</p>
                  </div>
                </div>
                <WhatsAppIcon
                  phoneNumber="+15551234567"
                  message="Hello DovoQA, I'd like to inquire about your services."
                />
              </div>
              <Card className="p-6 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} DovoQA. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#pricing" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#contact" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
