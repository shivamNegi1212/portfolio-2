'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS public key is not set. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment variables.");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID environment variables.");
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: "negishivam066@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        setMessage("✅ Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "इस्पे अभी काम चल रहा Mial या WhatsApp कर सकते हो";
      setMessage(`❌ ${errorMsg}`);
      console.error("EmailJS Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickMail = () => {
    window.location.href = "mailto:negishivam066@gmail.com";
  };

  return (
    <div
      id="contact"
      className="w-full py-20 px-10 md:px-20 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let&apos;s discuss and bring it to life!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(112,66,248,0.1)] border border-[rgba(112,66,248,0.3)] text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(112,66,248)] focus:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(112,66,248,0.1)] border border-[rgba(112,66,248,0.3)] text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(112,66,248)] focus:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(112,66,248,0.1)] border border-[rgba(112,66,248,0.3)] text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(112,66,248)] focus:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[rgba(112,66,248,0.1)] border border-[rgba(112,66,248,0.3)] text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(112,66,248)] focus:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300 resize-none"
              />
            </div>

            {message && (
              <p className={`text-sm ${message.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                {message}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <p className="text-gray-400 text-sm mb-2 font-semibold">Email</p>
                  <a
                    href="mailto:negishivam066@gmail.com"
                    className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    negishivam066@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <p className="text-gray-400 text-sm mb-2 font-semibold">Phone</p>
                  <a
                    href="tel:+919675086197"
                    className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    +91 9675086197
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <p className="text-gray-400 text-sm mb-2 font-semibold">Location</p>
                  <p className="text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    Chirag Delhi, New Delhi
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Quick Mail Button */}
            <motion.button
              onClick={handleQuickMail}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
            >
              ✉️ Quick Mail Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
