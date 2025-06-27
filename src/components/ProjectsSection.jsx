import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // assuming you use cn like in SkillsSection

const projects = [
  {
    id: 2,
    title: "Hotels Management System",
    description:
      "A full-featured system to manage restaurant orders, inventory, staff, and billing seamlessly.",
    image: "/projects/RestaurantManagementSystem.png",
    tags: ["React", "MUI", "Firebase", "Dashboards"],
    category: "Frontend",
    demoUrl: "https://hotel-management-system-mujtaba.vercel.app/",
    githubUrl: "https://github.com/Mujtaba214/Hotel-M-S",
  },
  {
    id: 1,
    title: "Virtual Build Tools Landing Page",
    description:
      "Showcasing next-gen virtual tools that streamline your development workflow with speed, flexibility, and power",
    image: "/projects/LandingPage.png",
    tags: ["React", "TailwindCSS", "Lucide-React", "UI/UX"],
    category: "Frontend",
    demoUrl: "https://virtual-build-tools-landing.vercel.app/",
    githubUrl: "https://github.com/Mujtaba214/React-page-01",
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "An interactive platform for managing courses, tracking student progress, and delivering online education efficiently.",
    image: "/projects/LearningManagementSystem.png",
    tags: ["React", "MUI", "Firebase", "Dashboards"],
    category: "Frontend",
    demoUrl: "https://lms-mujtaba.vercel.app/login",
    githubUrl: "https://github.com/Mujtaba214/LMS",
  },
  {
    id: 4,
    title: "Beauty and Mindful",
    description: "Beauty and Mindful – Where outer elegance meets inner peace.",
    image: "/projects/BandM.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://beautyandmindful.com/",
    // githubUrl: "#",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "An interactive platform for managing courses, tracking student progress, and delivering online education efficiently.",
    image: "/projects/rw.png",
    tags: ["Frontend", "Bootstrap", "HTML", "CSS", "TailwindCSS"],
    category: "Frontend",
    demoUrl: "https://mujtaba214.github.io/restaurant-web/",
    githubUrl: "https://github.com/Mujtaba214/Restaurant",
  },
  {
    id: 6,
    title: "Brilliant Media",
    description:
      "Brilliant Media helps entrepreneurs become thought leaders.It’s time to write your business-building bestseller.",
    image: "/projects/dm.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://www.brilliantmedia.co/",
    // githubUrl: "#",
  },
  {
    id: 7,
    title: "Autos Insight",
    description:
      "Autos Insight, a global leader in providing vehicle history reports, is committed to enhancing road safety and promoting transparency in the worldwide used car market.",
    image: "/projects/ainsight.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://autos-insight.com/",
    // githubUrl: "#",
  },
  {
    id: 8,
    title: "Mursheed Protections",
    description:
      "Mursheed Protection, Inc., Southern California’s premier full service private security company. We provide cost-effective professional and reliable on-site security.",
    image: "/projects/mp.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://mursheedprotection.us/",
    // githubUrl: "#",
  },
  {
    id: 9,
    title: "Rivet Leathers",
    description:
      "Rivet Leathers – Crafted to Endure, Styled to Impress.Where timeless craftsmanship meets bold sophistication.Elevate your everyday with premium leather goods.",
    image: "/projects/rl.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://rivetleathers.com/",
    // githubUrl: "#",
  },
];

const categories = ["All", "Frontend", "Fullstack", "CMS"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mujtaba214"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
