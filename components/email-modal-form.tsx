"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { sendContactEmail } from "@/app/actions/contact" // Reusing the contact action for simplicity

export function EmailModalForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("name", "Modal Subscriber") // Generic name for modal submissions
    formData.append("email", email)
    formData.append("message", "Subscription request from email modal.")

    const result = await sendContactEmail(formData)

    if (result.success) {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will be in touch.",
        variant: "success",
      })
      setEmail("")
      setIsOpen(false)
    } else {
      toast({
        title: "Error!",
        description: result.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 bg-secondary text-white hover:bg-secondary/90 shadow-lg">
          Subscribe for Updates
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:text-gray-50">
        <DialogHeader>
          <DialogTitle className="text-primary">Stay Updated with DovoQA</DialogTitle>
          <DialogDescription className="dark:text-gray-300">
            Enter your email below to receive news, updates, and exclusive offers from DovoQA.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="bg-primary text-white hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
