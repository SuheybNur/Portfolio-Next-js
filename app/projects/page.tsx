import Navigation from '../Navigation'
import Image from 'next/image'
import { Footer } from "../footer";
export const dynamic = 'force-dynamic'

async function getProjects() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const response = await fetch(`${base}/api/projects`, { cache: 'no-store' })
  if (!response.ok) return []
  return response.json()
}

async function Home() {
  const projects = await getProjects()
  return (
<>
   <Navigation />
    <div className="pt-24 rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
      <div className='flex justify-between items-start mb-11.5'>
  
      </div>
<Image
          src="/img/logo.svg"
          alt="placeholder image"
          width={240}
          height={240}
          className="mb-11.5 h-6 dark:hidden"
        />
      <div className="space-y-6">
        <p>Placeholder text goes here</p>
        <ul className="space-y-3">
        {projects.map((project: { id: number; title: string; description: string; techStack: string[]; liveUrl: string; githubUrl: string }) => (
            <li className="flex" key={project.id}>
              <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                      <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
              </svg>
              <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white ml-2">{project.title}</h3>
                  <p>{project.description}</p> 
                  <p className="mt-1">Tech Stack: {project.techStack.join(', ')}</p>    
                  <div className="mt-2 space-x-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-gray-400">
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-gray-400">
                        GitHub
                      </a>
                    )}  
                  </div>
              </div>
                  
            </li>     
          ))}
        </ul>
      </div>
    </div>
 
  <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
  <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
  <Footer />
</>
  )
}

export default Home
