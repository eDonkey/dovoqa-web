import type React from "react"
import { MessageCircle } from "lucide-react" // Using Lucide React for the icon

interface WhatsAppIconProps {
  phoneNumber?: string
  message?: string
  className?: string
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  phoneNumber = "5491132346592", // Default to your provided number
  message = "Hello DovoQA, I would like to know more about your services.",
  className,
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle />
    </a>
  )
}

export default WhatsAppIcon
