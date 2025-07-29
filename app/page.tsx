import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bug, MapPin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { EmailModalForm } from "@/components/email-modal-form" // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bug className="h-6 w-6 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">dovoqa.com</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="#contact">
              <Button variant="outline" className="bg-transparent font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Construction Icon */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-spin-slow opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
              <div className="relative">
                <Bug className="h-12 w-12 text-blue-600 animate-bounce" />
                <div className="absolute -top-2 -right-2 w-6 h-6">
                  <div className="w-full h-full bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute inset-1 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
              We <a href=""></a>re Building Something Amazing
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground">
              <span className="animate-typing font-medium">Quality Assurance as a Service</span>
              <div className="w-0.5 h-6 bg-blue-600 animate-blink"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up font-light">
            Our team is working hard to bring you the best QA services for your software development needs. We'll be
            launching soon with comprehensive testing solutions that will elevate your software quality.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2 font-medium">
              <span>Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-progress-bar"></div>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Launching Soon - Stay Tuned!</span>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-400 rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-50"></div>
          <div className="absolute bottom-60 right-10 w-5 h-5 bg-blue-500 rounded-full animate-float-delayed opacity-30"></div>
        </div>
      </main>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-purple-50/50 dark:from-indigo-900/20 dark:via-blue-900/10 dark:to-purple-900/20 backdrop-blur-sm border-t py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-muted-foreground font-light">
                Have questions or want to be notified when we launch? We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Email Contact - Now triggers modal */}
              <EmailModalForm />

              <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up delay-200">
                <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full animate-pulse-slow">
                  <WhatsAppIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-green-800 dark:text-green-200">WhatsApp</p>
                  <a
                    href="https://wa.me/5491132346592"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-green-600 transition-colors font-light"
                  >
                    +54 9 11 3234 6592
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up delay-300">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full animate-pulse-slow">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-purple-800 dark:text-purple-200">Location</p>
                  <p className="text-sm text-muted-foreground font-light">
                    CABA, Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 animate-fade-in-up delay-400">
              <Button
                size="lg"
                className="px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Bug className="h-5 w-5 text-primary" />
              <span className="font-semibold tracking-tight">dovoqa.com</span>
              <span className="text-sm text-muted-foreground font-light">- Coming Soon</span>
            </div>
            <p className="text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} Dovoqa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
