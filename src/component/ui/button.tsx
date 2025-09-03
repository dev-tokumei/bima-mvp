import React from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'w-full h-full px-4 py-2 rounded-md font-semibold transition-all duration-200  cursor-pointer'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#fbbe07] text-white hover:bg-[#fbbe0780] hover:shadow-md',
    outline: 'bg-transparent text-[#242729] hover:text-[#fbbe07] shdw',
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
