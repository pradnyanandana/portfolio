"use client";

import { useRef } from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = () => {
    const name = nameRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";
    window.location.href =
      "mailto:pradnyanandana@gmail.com?subject=Portfolio%20-%20Get%20In%20Touch&body=Hello%2C%20my%20name%20is%20" +
      encodeURIComponent(name) +
      "%0D%0A%0D%0AMessage:%0D%0A" +
      encodeURIComponent(message);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — Info */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-orange-600 font-inter">Contact</span>
            </div>
            <h2 className="text-3xl xl:text-5xl font-bold font-worksans tracking-tight text-gray-900 leading-tight mb-4">
              Let&apos;s Work <br />Together
            </h2>
            <p className="text-base lg:text-lg text-gray-500 font-inter leading-relaxed mb-10 max-w-sm">
              My inbox is always open for questions, collaborations, or just to say hi. I&apos;ll get back to you soon!
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:pradnyanandana@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-orange-500 font-inter transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-100 text-orange-500">
                  <MdEmail size={18} />
                </span>
                pradnyanandana@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-700 font-inter">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-100 text-orange-500">
                  <MdLocationPin size={18} />
                </span>
                Bali, Indonesia
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/pradnyanandana/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-500 hover:text-orange-500 hover:border-orange-200 transition-all duration-200"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://github.com/pradnyanandana"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-500 hover:text-orange-500 hover:border-orange-200 transition-all duration-200"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1 w-full bg-white border border-gray-100 rounded-2xl p-8 lg:p-10">
            <div className="mb-6">
              <label className="block text-sm font-medium font-inter text-gray-700 mb-2">Your Name</label>
              <input
                ref={nameRef}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 text-base font-inter text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium font-inter text-gray-700 mb-2">Message</label>
              <textarea
                ref={messageRef}
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 text-base font-inter text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200 resize-none"
              />
            </div>
            <button
              onClick={sendEmail}
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold font-inter rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
