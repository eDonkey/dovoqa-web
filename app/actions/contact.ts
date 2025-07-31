"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields." }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "DovoQA Contact Form <onboarding@resend.dev>", // Replace with your verified Resend domain
      to: "hello@dovoqa.com", // Your actual recipient email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Resend email error:", error)
      return { success: false, message: "Failed to send email. Please try again later." }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}
