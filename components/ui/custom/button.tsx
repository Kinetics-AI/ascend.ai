import * as React from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"



export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}



export function CustomButtonV1({
    className,
    variant = "default",
    size = "default",
    ...props
}: AppButtonProps) {
    return (
        <Button
            variant={variant}
            size={size}
            className={cn(
                "bg-foreground/30 hover:bg-foreground/60",
                "text-background",
                "rounded-full",
                "transition delay-100 duration-200",
                className
            )}
            {...props}
        />
    )
}
