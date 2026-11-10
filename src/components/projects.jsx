import { useState } from "react";
import { ChevronRight, ExternalLink, GitBranch } from "lucide-react";
import Sticker from "./stiker";

export default function Projects({
  selectedCategory = "ALL",
  onSelectProject,
}) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: "hyper-inv",
      title: "HyperStock - Express Inventory & POS",
      category: "FULLSTACK",
      desc: "Real-time multi-warehouse inventory system with barcode scanner support, auto-restock alerts & RESTful API built on Express.js.",
      tech: [
        "React.js",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT",
      ],
      metrics: "⚡ 50ms avg response time | 10k+ SKU handler",
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Express middleware for role-based access control (RBAC)",
        "Optimized PostgreSQL query index for large inventory logs",
        "Zod schema validation on all incoming API payloads",
      ],
    },
    {
      id: "flow-api",
      title: "DevPulse - Express Microservice Engine",
      category: "BACKEND",
      desc: "Lightweight REST API Gateway and microservice monitor with automatic docs generator, rate limiter & Redis caching layer.",
      tech: ["Express.js", "Node.js", "Redis", "Docker", "Swagger", "Zod"],
      metrics: "🔥 15,000 req/sec capability",
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Rate-limiting middleware using Redis store",
        "Custom error handler middleware for standardized JSON responses",
        "Integrated Winston & Morgan structured logging",
      ],
    },
    {
      id: "cyber-shop",
      title: "NeonCart - Gen-Z E-Commerce",
      category: "FRONTEND",
      desc: "Ultra-fast React e-commerce frontend with optimistic UI updates, Framer Motion animations, and Stripe Express API webhooks.",
      tech: ["React.js", "Tailwind CSS", "Zustand", "Express.js", "Stripe API"],
      metrics: "🚀 99/100 Lighthouse Performance",
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Instant cart updates using optimistic UI pattern",
        "Responsive layout designed for mobile-first shoppers",
        "Seamless integration with Express payment backend",
      ],
    },
    {
      id: "task-flow",
      title: "KanbanSync - Realtime Project Board",
      category: "FULLSTACK",
      desc: "Collaborative task management platform with drag-and-drop React UI and WebSocket-powered Express event server.",
      tech: ["React.js", "Socket.io", "Express.js", "MongoDB", "Tailwind CSS"],
      metrics: "⚡ Live sync under 20ms latency",
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Bi-directional WebSocket connection for instant updates",
        "Express JSON Web Token authentication flow",
        "Custom drag-and-drop context without external heavy libraries",
      ],
    },
  ];

  const handleOpenDetails = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setActiveModalProject(project);
    }
  };

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="bg-zinc-950 border-2 border-zinc-800 hover:border-[#CCFF00] transition-all group flex flex-col justify-between overflow-hidden shadow-[6px_6px_0px_0px_#18181b]"
        >
          {/* Project Image & Badge Overlay */}
          <div className="relative h-56 overflow-hidden bg-zinc-900 border-b-2 border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute top-3 left-3">
              <Sticker color="bg-[#CCFF00]">{project.category}</Sticker>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-zinc-700 px-3 py-1 font-mono text-[11px] text-[#CCFF00]">
              {project.metrics}
            </div>
          </div>

          {/* Card Details */}
          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#CCFF00] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm line-clamp-2">
                {project.desc}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                <button
                  type="button"
                  onClick={() => handleOpenDetails(project)}
                  className="font-mono text-xs font-bold text-[#CCFF00] uppercase hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Details & Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {/* Tombol GitHub Repo */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 font-mono text-xs font-bold text-white uppercase hover:bg-zinc-800 flex items-center gap-2"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>

                  {/* Tombol Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase hover:bg-[#b3e600] flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
