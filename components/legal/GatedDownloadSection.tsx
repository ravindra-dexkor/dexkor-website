"use client";

import React, { useState } from "react";
import { Download, ShieldCheck } from "lucide-react";
import ExpertFormModal from "@/components/ExpertFormModal";

interface GatedDownloadSectionProps {
  title: string;
  description: string;
  downloadUrl: string;
  buttonText: string;
}

export default function GatedDownloadSection({ 
  title, 
  description, 
  downloadUrl, 
  buttonText 
}: GatedDownloadSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="my-12 p-8 bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl border border-indigo-100 dark:border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-0 mt-0">{title}</h3>
          </div>
          <p className="mb-0 text-slate-700 dark:text-slate-700 text-sm">{description}</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0"
        >
          <Download className="w-4 h-4" />
          {buttonText}
        </button>
      </div>

      <ExpertFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="download"
        title={title}
        subtitle={`Please provide your details to download our ${title}.`}
        buttonText="Download Now"
        downloadUrl={downloadUrl}
      />
    </>
  );
}
