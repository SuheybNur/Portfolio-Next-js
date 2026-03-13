import { Project } from "@/types/portfolio";
let projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Store",
    description: "A full-stack shop built with Next.js and Stripe",
    techStack: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    liveUrl: "https://mystore.vercel.app",
    githubUrl: "https://github.com/user/store",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather app using OpenWeather API",
    techStack: ["React", "Tailwind", "OpenWeather API"],
    liveUrl: "https://mystore.vercel.app",
    githubUrl: "https://github.com/user/store",
    featured: false,
  },
];

// READ — show all projects on the portfolio page
export async function GET() {
  return Response.json(projects);
}

// CREATE — add a new project (admin only in real life)
export async function POST(request: Request) {
  const body = await request.json();
  const newProject: Project = { id: Date.now(), ...body };
  projects.push(newProject);
  return Response.json(newProject, { status: 201 });
}