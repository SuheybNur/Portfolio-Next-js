"use client"
import Navigation from '../Navigation'
import { Footer } from "../footer";

export default function Contact() {
  return (
    <>
     <Navigation /> 
    <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
      <div className="col-start-3 row-start-1 row-span-5 flex max-w-3xl flex-col bg-gray-100 p-4 dark:bg-white/10">
        <div className="rounded-xl bg-white p-12 text-base/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300 h-full flex flex-col shadow-lg border border-gray-200 dark:border-gray-800">
          <h1 className="text-5xl font-bold mb-10 text-gray-900 dark:text-white">Contact Me</h1>
          <div className="space-y-8 flex-1 flex flex-col justify-center">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">Feel free to reach out to me for any inquiries.</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300 min-w-[60px]">Email:</span>
                <a href="mailto:Suheybnur14@gmail.com" className="text-lg text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200 font-medium">
                  Suheybnur14@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300 min-w-[60px]">GitHub:</span>
                <a href="https://github.com/SuheybNur" className="text-lg text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200 font-medium">
                  github.com/SuheybNur
                </a>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">I'm open to discussing new opportunities and/or projects.</p>
          </div>
        </div>
      </div>
    </div>
     <Footer />
    </>
  );
}
