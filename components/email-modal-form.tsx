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
import { Textarea } from "@/components/ui/textarea"

export function EmailModalForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email data to your backend
    console.log("Email submitted:", { email, message })
    alert("Thank you for your message! We will get back to you soon.")
    setIsOpen(false)
    setEmail("")
    setMessage("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
          Email Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Send us an Email</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-lg">
              Your Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-lg">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
