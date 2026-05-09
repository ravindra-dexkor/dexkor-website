"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpertFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = [
  "Sales",
  "Support",
  "Project Management",
  "Customer Success",
  "AI Intelligence"
];

const ExpertFormModal: React.FC<ExpertFormModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    country: "",
    product: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.product) {
      setError("Please select a product interest.");
      return;
    }
    setLoading(true);
    setError(null);

    const payload = {
      name: formData.name,
      lead_email: formData.email,
      lead_mobile: formData.phone,
      designation: formData.designation,
      country: formData.country,
      description: `Interested in Product: ${formData.product}`,
      lead_source: "dexkor website",
      source_url: "www.dexkor.com",
      lead_status: "New",
      text_1: formData.product // Mapping product to text_1 as well just in case
    };

    const token = "9eefd345dc4ebff428a030c215e75df0:f0efab1dbf02cffa2252a1c2883a9e506c6fcc093bbe4e849519a999fe187843ea740e22ee5823358538111c6b6ea6b88652044372feabe4864568293175c80c4bad4b64625c129b406d4a1742e00882bb2987221bb6be06ad80206f33e6548d8f883f7943664ec520392131c3fd0d0947820382b79e063c60ff7f14219ce0466acad3cc7bd7c26633a1aa929806741df34e53f40810ec67b9e54775367813d73dfc7e7697c4c6f7fd425d1d54498a9ff9fa189404c603803fef8e3ff2244e0677f048e94a8a5f244bfe8612cd51362c38e6a10695613bcc:cca276dac7f9dd8bf6c92026d98c8d56";
    const API_URL = "https://api-prod.dexkor.com/api/v1/saleshub/external/leads";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({ name: "", email: "", phone: "", designation: "", country: "", product: products[0] });
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02]">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Request a Demo</h3>
                <p className="text-xs text-slate-700 font-medium mt-1">Fill out the form and our team will be in touch.</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {success ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Sent!</h4>
                  <p className="text-slate-700 dark:text-slate-700">Our experts will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest pl-1">Full Name</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest pl-1">Work Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest pl-1">Phone Number</label>
                      <input
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest pl-1">Designation</label>
                      <input
                        required
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="e.g. VP of Operations"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest pl-1">Country</label>
                      <input
                        required
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="India"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest pl-1">Product Interest</label>
                      <div className="relative">
                        <select
                          required
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm font-medium appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-slate-700">Select a product</option>
                          {products.map((p) => (
                            <option key={p} value={p} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                              {p}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold rounded-full transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 active:scale-[0.98]"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Request a Demo <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExpertFormModal;
