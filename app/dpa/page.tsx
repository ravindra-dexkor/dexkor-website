import React from "react";
import LegalLayout from "@/components/layout/LegalLayout";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Data Processing Addendum - DexKor",
  description: "Enterprise-grade security and compliance. Read our Data Processing Addendum.",
};

export default function DPAPage() {
  return (
    <LegalLayout title="Data Processing Addendum" lastUpdated="20 December, 2024">
      <p className="text-lg">
        To support our customers’ compliance with data protection laws, including the EU General Data Protection Regulation (GDPR), the UK GDPR, and India’s Information Technology Act, 2000 and applicable rules, we offer a standard Data Processing Addendum (DPA) that governs the processing of personal data when you use our Services.
      </p>
      
      <p>
        Our Terms of Service incorporate the DPA by reference, effective from 20 December, 2024, eliminating the need for a separate signed document in most cases.
      </p>
      
      <div className="my-12 p-8 bg-blue-50 dark:bg-blue-500/5 rounded-3xl border border-blue-100 dark:border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 mt-0">Download DPA</h3>
          <p className="mb-0 text-slate-700 dark:text-slate-700 text-sm">Download the PDF version for your records and compliance requirements.</p>
        </div>
        <a 
          href="https://dexkor.com/richard/wp-content/uploads/2025/07/Data-Processing-Addendum-DPA.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95 shrink-0"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <p>
        If your organization requires a signed copy of the DPA for compliance or internal governance purposes, please email us at <a href="mailto:privacy@dexkor.com">privacy@dexkor.com</a>. We’ll be happy to review and return a countersigned copy of our standard DPA.
      </p>
      
      <div className="p-8 bg-amber-50/50 dark:bg-amber-500/5 rounded-3xl border border-amber-100 dark:border-amber-500/20 mt-12 mb-16">
        <p className="font-bold text-slate-900 dark:text-white mb-0 italic text-sm">
          ⚠️ Please note: To ensure consistency and compliance with our legal obligations, we are unable to sign customer-supplied DPAs or accept custom modifications to our standard terms.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8 text-slate-900 dark:text-white">Contact Us</h2>
      <p>For any questions regarding our DPA or data processing practices, please contact our legal team:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col gap-3">
          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
          <a href="mailto:privacy@dexkor.com" className="text-sm">privacy@dexkor.com</a>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col gap-3">
          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h4 className="font-bold text-slate-900 dark:text-white">Office</h4>
          <p className="text-sm">Innov8, Orchid Center, Gurgaon, Haryana, India</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col gap-3">
          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h4 className="font-bold text-slate-900 dark:text-white">Phone</h4>
          <p className="text-sm">+91 93547 41240</p>
        </div>
      </div>
    </LegalLayout>
  );
}
