"use client"

import { useActionState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [state, formAction, isPending] = useActionState(sendContactEmail, null)

  // Show toast message based on action state
  if (state?.success) {
    toast({
      title: "Success!",
      description: state.message,
      variant: "default",
    })
    state.success = false // Reset state to prevent re-showing toast on re-renders
  } else if (state?.success === false) {
    toast({
      title: "Error!",
      description: state.message,
      variant: "destructive",
    })
    state.success = undefined // Reset state
  }

  return (
    <form action={formAction} className="space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-primary mb-4">Send us a message</h4>
      <div>
        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
          Name
        </Label>
        <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
          Email
        </Label>
        <Input id="email" name="email" type="email" placeholder="your@example.com" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
          Message
        </Label>
        <Textarea id="message" name="message" placeholder="Your message" required rows={5} className="mt-1" />
      </div>
      <Button type="submit" disabled={isPending} className="w-full bg-secondary hover:bg-secondary/90 text-white">
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
