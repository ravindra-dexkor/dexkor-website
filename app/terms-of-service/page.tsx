import React from "react";
import LegalLayout from "@/components/layout/LegalLayout";
import { Scale, FileText, CreditCard, ShieldAlert, Gavel, Mail, RefreshCw, BarChart3, XCircle, AlertCircle, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service - DexKor",
  description: "Read our terms and conditions for using the DexKor platform and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="20 December, 2024">
      <div className="flex flex-col gap-6">
        <p className="text-lg">
          These Terms of Service (the “Terms”) govern your access to and use of the website, platform, mobile applications, and associated services (collectively, the “Service”) provided by DEXKORCRM PRIVATE LIMITED, a company incorporated under the laws of India (“Company”, “we”, “us” or “our”).
        </p>
        <p>
          By using our Service, you (“you”, “your”, or “Customer”) agree to these Terms, our <a href="/privacy-policy">Privacy Policy</a>, and the <a href="/dpa">Data Processing Addendum</a>, all of which are incorporated by reference. If you do not agree, you must not access or use the Service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Legal Eligibility</h4>
            <p className="text-xs text-slate-700 dark:text-slate-700 font-medium leading-relaxed">You must be 18+ and have authority to bind your organization.</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Service License</h4>
            <p className="text-xs text-slate-700 dark:text-slate-700 font-medium leading-relaxed">A limited, non-exclusive license for internal business use.</p>
          </div>
        </div>
      </div>

      <h2>1. Eligibility & Account Registration</h2>
      <p>You must be at least 18 years old and have the legal authority to bind your company or organization to these Terms. You agree to provide accurate, current, and complete information when creating an account and to keep your login credentials secure.</p>

      <h2>2. Use of the Service</h2>
      <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service solely for your business’s internal purposes. You may not:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 my-8">
        {[
          "Reverse engineer, copy, or modify any part of the Service",
          "Use the Service for unlawful, harmful, or fraudulent purposes",
          "Transmit viruses, spam, or unsolicited messages",
          "Attempt to gain unauthorized access to our systems",
          "Resell, sublicense, or commercially exploit the Service"
        ].map(item => (
          <div key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-700 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            {item}
          </div>
        ))}
      </div>

      <h2>3. Subscription & Payment</h2>
      <p>Access to certain features of the Service may require a paid subscription. Plans, pricing, and billing cycles are available on our pricing page.</p>
      <ul className="space-y-4 my-8 list-none pl-0">
        {[
          { title: "Taxes", desc: "All fees are exclusive of applicable taxes and levies." },
          { title: "Processing", desc: "Payments are processed via third-party payment gateways." },
          { title: "Flexibility", desc: "You may upgrade, downgrade, or cancel your subscription at any time." },
          { title: "Cancellations", desc: "Cancellations take effect at the end of the billing cycle. No refunds for partial periods." },
          { title: "Free Trials", desc: "We may offer a free trial for new customers. Abuse of trial policy may result in termination." }
        ].map(point => (
          <li key={point.title} className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white mr-2">{point.title}:</span>
              <span className="text-slate-700 dark:text-slate-700 font-medium">{point.desc}</span>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="flex items-center gap-3">
        <RefreshCw className="w-6 h-6 text-blue-600" />
        4. Refund Policy
      </h2>
      <p>Refunds are issued at our sole discretion and will be considered only in the event of:</p>
      <ul className="space-y-2 my-6">
        <li>Technical issues that prevent meaningful use of the Service</li>
        <li>Duplicate charges</li>
        <li>Errors in billing or accidental overcharges</li>
      </ul>
      <p>Refund requests must be made within <strong>7 days</strong> of the transaction. Approved refunds will be processed to the original payment method within 10 business days.</p>

      <h2>5. Data Protection & Privacy</h2>
      <p>We process your data in accordance with our Privacy Policy and applicable data protection laws including the Indian Information Technology Act, 2000 and its amendments, the EU GDPR, and other international standards.</p>
      <p>We offer a <a href="/dpa">Data Processing Addendum (DPA)</a> for customers who require contractual assurance for GDPR compliance.</p>

      <h2>6. Intellectual Property</h2>
      <p>All content, trademarks, software, and intellectual property associated with the Service are owned by or licensed to the Company. No rights are granted except as explicitly mentioned.</p>
      <p><strong>You may not:</strong> Use our brand, logo, or materials without consent; Resell, distribute, or modify our software; Remove copyright or proprietary notices.</p>

      <h2 className="flex items-center gap-3">
        <BarChart3 className="w-6 h-6 text-blue-600" />
        7. Service Limitations
      </h2>
      <p>We reserve the right to limit usage (e.g., Monthly Active Users, API calls) based on your plan. If you exceed limits, we may notify you to upgrade or suspend service until compliance is restored.</p>

      <h2 className="flex items-center gap-3">
        <XCircle className="w-6 h-6 text-blue-600" />
        8. Prohibited Activities
      </h2>
      <p>The following use cases are not permitted:</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 my-6">
        <li>Spam, phishing, or illegal advertising</li>
        <li>Pornographic or adult content</li>
        <li>Gambling or betting services</li>
        <li>Pyramid or multi-level marketing schemes</li>
        <li>Promotion of harmful, hateful, or violent content</li>
      </ul>
      <p>We reserve the right to terminate accounts that violate these policies or applicable laws, including the Indian IT Act, GDPR, or CAN-SPAM regulations.</p>

      <h2>9. Third-Party Links & Services</h2>
      <p>Our Service may contain links to third-party sites or tools. We do not control or endorse these services and are not liable for any content, terms, or practices associated with them.</p>

      <h2 className="flex items-center gap-3">
        <Clock className="w-6 h-6 text-blue-600" />
        10. Termination
      </h2>
      <p>We may suspend or terminate your access to the Service if: You breach these Terms; Your account remains inactive for a prolonged period; Required payments are not made.</p>
      <p>Upon termination, your access will be revoked, and your data may be deleted after a reasonable retention period.</p>

      <h2 className="flex items-center gap-3">
        <AlertCircle className="w-6 h-6 text-blue-600" />
        11. Limitation of Liability
      </h2>
      <p>To the fullest extent permitted by law:</p>
      <ul className="space-y-4 my-6">
        <li>The Service is provided <strong>“as is”</strong> without warranties of any kind.</li>
        <li>We shall not be liable for any indirect, incidental, or consequential damages including lost profits, data loss, or reputational damage.</li>
        <li>Our total liability shall not exceed the amount paid by you in the previous 6 months.</li>
      </ul>

      <h2 className="flex items-center gap-3">
        <Gavel className="w-6 h-6 text-blue-600" />
        12. Governing Law & Jurisdiction
      </h2>
      <p>
        These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India. For customers outside India, we strive to comply with applicable local laws, but the governing law remains Indian law.
      </p>

      <h2 className="flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-blue-600" />
        13. Changes to Terms
      </h2>
      <p>We may modify these Terms from time to time. We will notify you of significant changes via email or in-product notice. Continued use after the effective date constitutes acceptance.</p>

      <div className="mt-16 pt-8 border-t border-slate-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Still have questions?</h4>
          <p className="text-sm text-slate-700 dark:text-slate-700 font-medium">Contact our legal team for clarification on any of these terms.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="mailto:legal@dexkor.com" 
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:opacity-90 transition-all shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Email Legal
          </a>
          <span className="text-sm font-bold text-slate-900 dark:text-white">legal@dexkor.com</span>
        </div>
      </div>
    </LegalLayout>
  );
}
