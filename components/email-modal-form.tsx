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

export function EmailModalForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend or a service like Mailchimp
    console.log("Submitting email:", email)
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates from DovoQA soon.",
      variant: "default",
    })
    setIsOpen(false)
    setEmail("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground"
        >
          Subscribe to our Newsletter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50">
        <DialogHeader>
          <DialogTitle className="text-primary">Subscribe to our Newsletter</DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">
            Stay up-to-date with the latest from DovoQA.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@example.com"
              required
              className="col-span-3"
            />
          </div>
          <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white">
            Subscribe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
