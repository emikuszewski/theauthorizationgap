import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white text-sm font-bold">
                AG
              </span>
              <span className="font-display font-semibold text-lg">The Authorization Gap</span>
            </div>
            <p className="text-navy-300 text-sm max-w-md mb-6">
              An educational resource for understanding the gap between authentication 
              and true access control. Brought to you by PlainID.
            </p>
            <a 
              href="https://www.plainid.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Visit PlainID.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-navy-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#maturity-model" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Maturity Model
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Assessment
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Personas */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-navy-400 mb-4">
              Start Here
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/persona/security-leader" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Security Leaders
                </Link>
              </li>
              <li>
                <Link href="/persona/architect" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Architects
                </Link>
              </li>
              <li>
                <Link href="/persona/engineering-lead" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Engineering Leads
                </Link>
              </li>
              <li>
                <Link href="/deep-dive/build-vs-buy" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Build vs. Buy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} PlainID. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-navy-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a 
              href="https://www.plainid.com/policy-management-demo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
