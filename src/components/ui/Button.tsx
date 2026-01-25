import * as React from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        // Map props to semantic classes defined in index.css
        const variantClass = `btn-${variant}`;
        const sizeClass = `btn-${size}`;

        return (
            <button
                ref={ref}
                className={cn("btn", variantClass, sizeClass, className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
