"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <LampContainer>
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="text-center text-3xl font-bold tracking-tight text-transparent bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text md:text-5xl">
        Get in Touch
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        action="https://formspree.io/f/mdkarrwv"
        method="POST"
        className="w-full max-w-lg bg-white/80 p-8 shadow-2xl rounded-2xl border border-gray-200 backdrop-blur-md">
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-400 outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-400 outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-400 outline-none transition-all duration-300"
            rows={4}
            required></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-orange-600 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-all">
          Send Message
        </motion.button>
      </motion.form>
    </LampContainer>
  );
}

/* Lamp Container */
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[50vh] w-full max-w-[1200px] mx-auto flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 rounded-md z-0 px-6 py-12",
        className,
      )}>
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-56 w-56 bg-blue-500/30 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-50 flex flex-col items-center w-full max-w-2xl">
        {children}
      </div>
    </div>
  );
};
