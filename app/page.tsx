


// async function getProjects() {
//   const response = await fetch('http://localhost:3000/api/projects')
//   const projects = await response.json()
//   return projects
// }
// async function Home() {
//   const projects = await getProjects()

//   return (
//     <div className="App">
//       <h1> Hi My name is Suheyb. I am an apsiring frontend engineer</h1>
//       {/* Projects */}
//       <section>
//         <h2>Projects</h2>
//         <ul className="space-y-3">
//           {projects.map((project: any) => (
//             <li className="flex" key={project.id}>
//                 <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
//                   <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
//                   <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
//                   <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
//                 </svg>
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <p>Tech Stack: {project.techStack.join(', ')}</p>
//               {project.liveUrl && (
//                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                   Live Demo
//                 </a>
//               )}
//               {project.githubUrl && (
//                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                   GitHub
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
            
//       </section>
//     </div>
//   )
// }

// export default Home


async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  const projects = await response.json()
  return projects
}
async function Home() {
  const projects = await getProjects()
  return (

<div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
  <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
    <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
      <img src="/img/logo.svg" className="mb-11.5 h-6 dark:hidden" alt="Tailwind Play" />
      <div className="space-y-6">
        <p>Hi My name is Suheyb. I am an apsiring frontend engineer</p>
        <ul className="space-y-3">
        {projects.map((project: any) => (
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
      <hr className="my-6 w-full border-(--pattern-fg)" />
      <p className="mb-3 text-center">Made by Suheyb</p>
      
    </div>
  </div>
  <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
  <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
</div>
  )
}

export default Home