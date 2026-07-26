import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  icon?: boolean
  className?: string
}

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  external = false,
  icon = true,
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-teal-500',
    secondary: 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600 hover:text-teal-700 focus:ring-teal-500',
    ghost: 'text-navy-600 hover:text-teal-600 hover:bg-gray-50 focus:ring-gray-300',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const iconElement = external 
    ? <ExternalLink size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} /> 
    : <ArrowRight size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles}
        >
          {children}
          {icon && iconElement}
        </a>
      )
    }
    return (
      <Link href={href} className={styles}>
        {children}
        {icon && iconElement}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
      {icon && iconElement}
    </button>
  )
}
