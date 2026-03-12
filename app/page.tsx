


async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  const projects = await response.json()
  return projects
}
async function Home() {
  const projects = await getProjects()

  return (
    <div className="App">
      <h1> Hi My name is Suheyb. I am an apsiring frontend engineer</h1>
      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project: any) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Tech Stack: {project.techStack.join(', ')}</p>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
