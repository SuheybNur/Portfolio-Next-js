 "use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 sm:gap-3 flex-shrink-0 cursor-pointer group"
              >
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Suheyb Nur
                </span>
              </button>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Aspiring Frontend Engineer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:Suheybnur14@gmail.com"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 rounded-full flex items-center justify-center transition-all border border-slate-700 hover:border-blue-500/50"
                title="Email"
              >
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://github.com/SuheybNur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 rounded-full flex items-center justify-center transition-all border border-slate-700 hover:border-blue-500/50"
                title="GitHub"
              >
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Tech Stack</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                React & Next.js
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                JavaScript
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Suheyb Nur. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Built with Next.js, React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};