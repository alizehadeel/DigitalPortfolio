"use client";

import { Mail, Terminal } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-gray-900 bg-[#030712] py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div
          onClick={handleScrollToTop}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-indigo-600/10 p-1.5 rounded-lg border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
            <Terminal className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="font-heading font-semibold text-sm tracking-tight text-white">
            Alizeh<span className="text-indigo-400">.Adeel</span>
          </span>
        </div>

        {/* Copy text */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Alizeh Adeel. All rights reserved.
        </p>

        {/* Social Shortcuts */}
        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="http://github.com/alizehadeel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="http://www.linkedin.com/in/alizeh-adeel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:alizehadeel12@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
