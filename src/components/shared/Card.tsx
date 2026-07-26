import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card p-6 ${className}`}>
      {children}
    </div>
  )
}

interface InteractiveCardProps {
  href: string
  title: string
  description: string
  icon?: ReactNode
  className?: string
}

export function InteractiveCard({ href, title, description, icon, className = '' }: InteractiveCardProps) {
  return (
    <Link href={href} className={`card-interactive block p-6 group ${className}`}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-navy-600 leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowRight 
          size={20} 
          className="flex-shrink-0 text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" 
        />
      </div>
    </Link>
  )
}

interface SymptomCardProps {
  title: string
  description: string
  className?: string
}

export function SymptomCard({ title, description, className = '' }: SymptomCardProps) {
  return (
    <div className={`card p-6 border-l-4 border-l-teal-500 ${className}`}>
      <h4 className="font-display font-semibold text-navy-900 mb-2">{title}</h4>
      <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
    </div>
  )
}

interface MaturityLevelCardProps {
  level: number
  name: string
  tagline: string
  description: string
  isActive?: boolean
  onClick?: () => void
}

export function MaturityLevelCard({ 
  level, 
  name, 
  tagline, 
  description, 
  isActive = false,
  onClick 
}: MaturityLevelCardProps) {
  const levelColors = {
    0: 'bg-maturity-0',
    1: 'bg-maturity-1',
    2: 'bg-maturity-2',
    3: 'bg-maturity-3',
    4: 'bg-maturity-4',
  }

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-card border-2 transition-all ${
        isActive 
          ? 'border-teal-500 bg-teal-50/50 shadow-glow' 
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`w-8 h-8 rounded-full ${levelColors[level as keyof typeof levelColors]} flex items-center justify-center text-white font-bold text-sm`}>
          {level}
        </span>
        <div>
          <span className="font-display font-semibold text-navy-900">{name}</span>
          <span className="text-xs text-navy-500 ml-2 italic">{tagline}</span>
        </div>
      </div>
      <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
    </button>
  )
}
