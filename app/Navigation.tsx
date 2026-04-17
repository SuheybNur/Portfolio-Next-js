"use client"
import Link from 'next/link'

async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  const projects = await response.json()
  return projects
}

function Navigation() {
  return (
    <div className="">
      <div className="flex fixed top-0 z-10 w-full items-center bg-slate-900 justify-between items-start gap-4">
        <Link href="/">
          <div className="p-0">S</div>
        </Link>
        <div className="flex gap-4">
          <Link href="/projects">
            <div className="p-0">Projects</div>
          </Link>
          <Link href="/about">
            <div className="p-0">About</div>
          </Link>
          <Link href="/contact">
            <div className="p-0">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
