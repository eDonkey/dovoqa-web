import Link from "next/link"
import { MessageCircle } from "lucide-react"

interface WhatsAppIconProps {
  phoneNumber: string
  message?: string
  className?: string
}

export function WhatsAppIcon({ phoneNumber, message, className }: WhatsAppIconProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className={className}>
      <MessageCircle className="h-6 w-6 text-green-500 hover:text-green-600 transition-colors" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Link>
  )
}
