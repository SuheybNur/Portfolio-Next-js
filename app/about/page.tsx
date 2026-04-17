"use client"
import Navigation from '../Navigation'
import { Footer } from "../footer";

export default function About() {
  return (
<>
  <Navigation />
    <div className="min-h-screen transition-colors duration-300 pt-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto mb-8 w-full max-w-[240px]">
        </div>
        <p className="text-gray-900 dark:text-gray-100 text-lg max-w-3xl mx-auto">
          Placeholder text for about page. 
        </p>
      </div>
    </div>
     <Footer />
</>
  );
}
