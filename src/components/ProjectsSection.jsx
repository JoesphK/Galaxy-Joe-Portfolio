import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Monitoring application deployment using ArgoCD",
    description: "Simplify deploying an open source application using K8s, EKS and ArgoCD.",
    image: "/projects/project1.png",
    tags: ["EKS", "Kubernetes", "ArgoCD"],
    demoUrl: "https://github.com/JoesphK/Dependency-Track-ArgoCD-edition",
    githubUrl: "https://github.com/JoesphK/Dependency-Track-ArgoCD-edition",
  },
  {
    id: 2,
    title: "AWS infrastructure with terraform",
    description:
      "Deploy your AWS cloud infrastructure and save it as code. Supports modules like EC2 and ASG.",
    image: "/projects/project2.png",
    tags: ["AWS", "Terraform"],
    demoUrl: "https://github.com/JoesphK/AWS-infra-by-Terraform",
    githubUrl: "https://github.com/JoesphK/AWS-infra-by-Terraform",
  },
  {
    id: 3,
    title: "Application migration to AWS",
    description:
      "Migration of an application from Azure to AWS while ensuring reselience, monitoring and high availability.",
    image: "/projects/project3.png",
    tags: ["AWS RDS", "AWS cloudwatch", "AWS ALB"],
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7364988418679885826/",
    githubUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7364988418679885826/",
  },
    {
    id: 4,
    title: "Ephemeral test environment deployer",
    description:
      "With a click of a button, your project will be deployed as a container on a AWS machine.",
    image: "/projects/project4.png",
    tags: ["Ansible", "GitHub Actions", "AWS ECR", "AWS SSM"],
    demoUrl: "https://github.com/JoesphK/Container-DT-Backend",
    githubUrl: "https://github.com/JoesphK/Container-DT-Backend",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was designed to be scalable, resilent and
          automated.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
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
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/JoesphK"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
