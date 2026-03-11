"use client";

import { useRef } from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";

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
    <section id="contact" className="skewed-bottom-right">
      <div className="bg-indigo-50 py-12 lg:py-20">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col lg:flex-row -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0">
              <h2 className="mb-4 text-3xl xl:text-4xl font-worksans my-3 font-bold">
                <span>Let&apos;s Get In Touch!</span>
              </h2>
              <p className="text-base mb-4 font-inter text-gray-900">
                My inbox is always open for questions, collaborations, or just say hi. Feel free to use the provided form, I&apos;ll try to get back to you soon!
              </p>
              <div className="contact-information">
                <span className="flex items-center text-base font-inter mb-2 text-gray-900">
                  <MdEmail className="mr-2 text-orange-500 text-xl" />
                  pradnyanandana@gmail.com
                </span>
                <span className="flex items-center text-base font-inter text-gray-900">
                  <MdLocationPin className="mr-2 text-orange-500 text-xl" />
                  Bali, Indonesia
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:mb-0">
              <div className="mb-3 pt-0">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="What is your name?"
                  className="px-3 py-3 placeholder-gray-400 text-gray-900 relative text-base font-inter border-b border-gray-300 bg-transparent outline-none focus:outline-none w-full"
                />
              </div>
              <div className="mb-6 pt-0">
                <textarea
                  ref={messageRef}
                  rows={4}
                  placeholder="How can I help you?"
                  className="px-3 py-3 placeholder-gray-400 text-gray-900 relative text-base font-inter border-b border-gray-300 bg-transparent outline-none focus:outline-none w-full"
                />
              </div>
              <div className="text-center lg:text-left">
                <button
                  onClick={sendEmail}
                  className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 sm:mb-0 sm:mr-3 text-base text-white text-center font-inter leading-none bg-orange-500 hover:bg-yellow-600 uppercase rounded-full cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
