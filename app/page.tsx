import Navigation from './Navigation'
import Image from "next/image";
import { Footer } from './footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="flex flex-row items-center justify-between max-w-5xl mx-auto px-8 py-16">
        <div className="flex flex-col text-left">
          <h1 className="text-gray-900 dark:text-gray-100 text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Suheyb
          </h1>
          <h3 className="text-gray-700 dark:text-gray-300 text-xl md:text-3xl mb-6">
            I'm a <span className="text-blue-500 text-4xl font-semibold">Frontend Developer</span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-balance text-left text-2xl leading-relaxed">
            I'm Suheyb, a Frontend Developer passionate about creating scalable and user-friendly web applications. 
            With skills in React, Next.js, TypeScript, and Tailwind CSS, I combine my formal education with a strong self-taught foundation to excel in modern web technologies. 
            At present, I'm enhancing my skills through advanced frontend courses and seeking my next big opportunity in web development.
          </p>
        </div>
        <Image
          src="/assets/Suheybimage.png"
          alt="Profile"
          width={240}
          height={240}
          className="size-60 object-cover rounded-full border-4 border-blue-800 ml-12 shrink-0"
        />
      </div>
      <Footer />
    </>
  );
}