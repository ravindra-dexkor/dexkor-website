import React from "react";
import LegalLayout from "@/components/layout/LegalLayout";
import { Mail, MapPin, ShieldCheck, UserCheck, Eye, Lock, Globe, Database, Settings, BarChart, Tag, AlertCircle, Scale, Activity, Share2, History, FileEdit } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - DexKor",
  description: "Learn how DexKor collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="20 December, 2024">
      <div className="flex flex-col gap-6 mb-12">
        <p className="text-lg leading-relaxed">
          DEXKORCRM PRIVATE LIMITED (“Company”, “we”, “us”, or “our”), a company registered under the laws of India, is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the “Services”).
        </p>
        <p className="leading-relaxed">
          We adhere to the applicable data protection laws in India, including the Information Technology Act, 2000 and its rules, and align with international best practices such as the General Data Protection Regulation (GDPR) where applicable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div className="p-8 rounded-[32px] bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/20">
          <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 mt-0">Contact Details</h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">Questions about this policy? Reach out to our Data Protection Officer.</p>
          <ul className="list-none pl-0 space-y-2 text-sm font-bold">
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:privacy@dexkor.com">privacy@dexkor.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Innov8, Orchid Center, Gurgaon, Haryana</span>
            </li>
          </ul>
        </div>
        
        <div className="p-8 rounded-[32px] bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/20">
          <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-4" />
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 mt-0">Your Protection</h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">We implement enterprise-grade safeguards to secure your personal data.</p>
          <div className="flex flex-wrap gap-2">
            {["SOC 2 Ready", "GDPR Compliant", "ISO 27001"].map(badge => (
              <span key={badge} className="px-2.5 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider">{badge}</span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Eye className="w-6 h-6 text-blue-600 shrink-0" />
        1. Data Collection
      </h2>
      <p className="leading-relaxed mb-8">We collect data to provide, improve, and protect our services. This includes:</p>
      
      <div className="space-y-4 my-8">
        {[
          { title: "Website Visitors", items: ["IP address", "Browser type", "Operating system", "Referring URLs", "Device identifiers"] },
          { title: "Registered Users", items: ["Name, email, phone number", "Company name", "Address", "Payment details", "GST/VAT ID", "Usage data", "User-uploaded content"] },
          { title: "Support & Marketing", items: ["Chat messages", "Attachments", "Marketing preferences", "Interaction data (clicks, opens)"] },
          { title: "Analytics & Advertising", items: ["Signup/Login events", "Conversion data", "Advertising IDs (Google/Facebook)", "Approximate location"] }
        ].map(group => (
          <div key={group.title} className="p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3 mt-0 uppercase text-[11px] tracking-widest">{group.title}</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {group.items.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Scale className="w-6 h-6 text-blue-600 shrink-0" />
        3. Legal Basis for Processing
      </h2>
      <p className="leading-relaxed mb-8">We process data under: <strong>Consent</strong> (subscriptions); <strong>Contractual necessity</strong> (account management); <strong>Legal obligations</strong> (tax); and <strong>Legitimate interests</strong> (security, analytics).</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Activity className="w-6 h-6 text-blue-600 shrink-0" />
        4. How We Use Your Data
      </h2>
      <p className="leading-relaxed mb-8">We use your data for: Delivering Services, Account administration, Customer support, Marketing (with consent), and Compliance with legal obligations.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Share2 className="w-6 h-6 text-blue-600 shrink-0" />
        5. Sharing of Personal Data
      </h2>
      <p className="leading-relaxed mb-8">We do not sell your personal data. We share it with trusted service providers (cloud, payments), legal authorities if required, and business partners during corporate transactions.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <History className="w-6 h-6 text-blue-600 shrink-0" />
        6. Data Retention
      </h2>
      <p className="leading-relaxed mb-8">We retain data as long as your account is active, or for <strong>6 months</strong> after termination unless otherwise required by law.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Lock className="w-6 h-6 text-blue-600 shrink-0" />
        7. Data Security
      </h2>
      <p className="leading-relaxed mb-8">We use organizational and technical safeguards to protect your data, though no internet transmission is 100% secure.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Globe className="w-6 h-6 text-blue-600 shrink-0" />
        8. International Data Transfers
      </h2>
      <p className="leading-relaxed mb-8">Your data may be processed outside of India by our trusted sub-processors. We ensure adequate safeguards (e.g., Standard Contractual Clauses) are in place.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <UserCheck className="w-6 h-6 text-blue-600 shrink-0" />
        9. Your Rights
      </h2>
      <p className="leading-relaxed mb-8">You have the right to access, correct, delete, or withdraw consent for your personal data. Contact us at <a href="mailto:privacy@dexkor.com">privacy@dexkor.com</a> to exercise these rights.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Settings className="w-6 h-6 text-blue-600 shrink-0" />
        10. Cookies & Tracking
      </h2>
      <p className="leading-relaxed mb-8">We use cookies to enhance your experience and analyze our traffic.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {[
          { label: "Essential", desc: "Required for core functionality." },
          { label: "Preference", desc: "Save your settings and preferences." },
          { label: "Analytics", desc: "Understand how users interact with the site." },
          { label: "Marketing", desc: "Deliver personalized advertisements." }
        ].map(cookie => (
          <div key={cookie.label} className="p-4 rounded-xl border border-slate-100 dark:border-white/10">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{cookie.label} Cookies</h4>
            <p className="text-xs text-slate-700 dark:text-slate-400">{cookie.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <Tag className="w-6 h-6 text-blue-600 shrink-0" />
        11. Advertising & Remarketing
      </h2>
      <p className="leading-relaxed mb-8">We use tools like Google Analytics, Meta Pixel, and LinkedIn Insights to understand user behavior and display targeted ads.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
        13. Children’s Privacy
      </h2>
      <p className="leading-relaxed mb-8">Our Services are not intended for children under the age of 18. We do not knowingly collect personal data from minors.</p>

      <h2 className="flex items-center gap-3 font-black text-xl md:text-xl mt-12 mb-6">
        <FileEdit className="w-6 h-6 text-blue-600 shrink-0" />
        14. Changes to This Policy
      </h2>
      <p className="leading-relaxed mb-8">We may update this policy from time to time. Continued use of our Services constitutes acceptance of the revised policy.</p>

      <div className="p-8 bg-blue-600 rounded-[32px] text-white mt-16 shadow-xl shadow-blue-500/20">
        <h3 className="text-2xl font-bold mb-4 mt-0">Have questions about your privacy?</h3>
        <p className="text-blue-100 mb-6">Our legal and privacy team is here to help you understand how we protect your data.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="mailto:privacy@dexkor.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all">
            Contact Privacy Team
          </a>
          <span className="text-blue-100 font-bold">privacy@dexkor.com</span>
        </div>
      </div>
    </LegalLayout>
  );
}
