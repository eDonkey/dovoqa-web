"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
  // Check if formData exists
  if (!formData) {
    return {
      success: false,
      error: "Form data is missing. Please try again.",
    }
  }

  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Dovoqa Contact Form <onboarding@webmailer.dovoqa.com>", // Updated from address
      to: ["hello@dovoqa.com"], // Your recipient email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("Resend email error:", error)
      return {
        success: false,
        error: `Failed to send message: ${error.message || "Unknown error"}`,
      }
    }

    console.log("Email sent successfully via Resend:", data)

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error processing form:", error)
    return {
      success: false,
      error:
        "Sorry, there was an error sending your message. Please try again or contact us directly at hello@dovoqa.com.",
    }
  }
}
