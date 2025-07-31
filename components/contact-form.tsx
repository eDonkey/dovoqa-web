"use client"

import { useActionState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [state, formAction, isPending] = useActionState(sendContactEmail, null)

  // Show toast message based on action state
  if (state?.message) {
    toast({
      title: state.success ? "Success!" : "Error!",
      description: state.message,
      variant: state.success ? "success" : "destructive",
    })
    // Reset state message after showing toast to prevent re-showing on re-renders
    state.message = undefined
  }

  return (
    <form action={formAction} className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div>
        <Label htmlFor="name" className="text-lg">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="mt-2 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
          disabled={isPending}
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-lg">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          className="mt-2 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
          disabled={isPending}
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-lg">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={5}
          required
          className="mt-2 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
          disabled={isPending}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
