"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactForm, LampContainer } from "../component/ui/lamp";

export function Contact() {
  return (
    <div id="contact">
      <LampContainer>
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Contact Us
        </motion.h1>

        {/* Centered Form */}
        <div className="flex items-center justify-center w-full px-4 py-12">
          <ContactForm />
        </div>
      </LampContainer>
    </div>
  );
}
