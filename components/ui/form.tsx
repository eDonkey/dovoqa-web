import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import {
  // FormProvider,
  useFormContext,
  // useForm,
  // useFormState
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = ({ className, ...props }: React.HTMLAttributes<HTMLFormElement>) => (
  <form className={cn("space-y-8", className)} {...props} />
)
Form.displayName = "Form"

const FormField = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-2", className)} {...props} />
)
FormField.displayName = "FormField"

const FormLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentPropsWithoutRef<typeof Label>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormContext() // Assuming useFormContext provides error and formItemId
    return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />
  },
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { formDescriptionId, formItemId, formMessageId } = useFormContext() // Assuming useFormContext provides these
    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!formDescriptionId ? `${formDescriptionId} ${formMessageId}` : formMessageId}
        aria-invalid={!!useFormContext().error} // Assuming useFormContext provides error
        {...props}
      />
    )
  },
)
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormContext() // Assuming useFormContext provides formDescriptionId
    return (
      <p ref={ref} id={formDescriptionId} className={cn("text-[0.8rem] text-muted-foreground", className)} {...props} />
    )
  },
)
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormContext() // Assuming useFormContext provides error and formMessageId
    const body = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    )
  },
)
FormMessage.displayName = "FormMessage"

export { Form, FormField, FormControl, FormDescription, FormMessage, FormLabel }
