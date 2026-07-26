import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AnimatedSection } from '@/components/shared'

export const metadata = {
  title: 'Privacy Policy | The Authorization Gap',
  description: 'Privacy policy for The Authorization Gap website.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="section-container">
        <AnimatedSection>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-teal-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </AnimatedSection>

        <article className="max-w-3xl mx-auto prose prose-navy">
          <AnimatedSection>
            <h1 className="text-3xl font-display font-semibold text-navy-900 mb-8">
              Privacy Policy
            </h1>

            <p className="text-navy-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              Overview
            </h2>
            <p className="text-navy-600 mb-4">
              The Authorization Gap is an educational resource provided by PlainID. We are committed 
              to protecting your privacy and being transparent about how we collect and use information.
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              Information We Collect
            </h2>
            
            <h3 className="text-lg font-display font-semibold text-navy-900 mt-6 mb-3">
              Assessment Data
            </h3>
            <p className="text-navy-600 mb-4">
              When you complete the Authorization Maturity Assessment, your responses are encoded 
              directly in the URL for sharing purposes. This data is not stored on our servers. 
              Your assessment results remain in your browser and in any URLs you choose to share.
            </p>

            <h3 className="text-lg font-display font-semibold text-navy-900 mt-6 mb-3">
              Analytics
            </h3>
            <p className="text-navy-600 mb-4">
              We may use privacy-focused analytics to understand how visitors use this site. This 
              includes aggregate data such as page views and general geographic regions, but does 
              not include personal identifying information.
            </p>

            <h3 className="text-lg font-display font-semibold text-navy-900 mt-6 mb-3">
              Contact Information
            </h3>
            <p className="text-navy-600 mb-4">
              If you choose to contact PlainID through links on this site, any information you 
              provide will be handled according to PlainID&apos;s privacy policy.
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              How We Use Information
            </h2>
            <p className="text-navy-600 mb-4">
              Any information collected is used solely to improve this educational resource and 
              understand how it serves visitors. We do not sell or share personal information 
              with third parties for marketing purposes.
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-navy-600 mb-4">
              This site may use essential cookies for basic functionality. We do not use 
              tracking cookies or third-party advertising cookies.
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              Third-Party Links
            </h2>
            <p className="text-navy-600 mb-4">
              This site contains links to PlainID.com and other external resources. These sites 
              have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              Contact
            </h2>
            <p className="text-navy-600 mb-4">
              If you have questions about this privacy policy, please contact PlainID through 
              the main website at{' '}
              <a 
                href="https://www.plainid.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                plainid.com
              </a>.
            </p>

            <h2 className="text-xl font-display font-semibold text-navy-900 mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-navy-600 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted 
              on this page with an updated revision date.
            </p>
          </AnimatedSection>
        </article>
      </div>
    </div>
  )
}
