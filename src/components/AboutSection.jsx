import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Who am<span className="text-primary"> I?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate DevOps and cloud engineer
            </h3>

            <p className="text-muted-foreground">
              A junior DevOps engineer with over a year of experience.
              I specialize in creating cloud infrastructure in AWS and deploying solutions using current day technologies. 
            </p>

            <p className="text-muted-foreground">
              I am someone who enjoys making life easier by creating automation solutions.
              Whether that is infrastructure as code, automatic deployments or scripts.
              I am also someone who always keeps up with the up and coming technologies and
              use it to create even more effecient solutions to current day problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/drive/folders/1OogiDqzBMaUMCk0RvtKGUOD1MwbS85wu?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> DevOps engineer</h4>
                  <p className="text-muted-foreground">
                    Automating system deployments and enhancing monitoring using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud engineer</h4>
                  <p className="text-muted-foreground">
                    Create and deploy infrastructure on cloud environments like AWS,
                    as well as saving the infrastructure as a code to ensure ease of creation.
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software engineer</h4>
                  <p className="text-muted-foreground">
                    Capable of creating custom solutions using python and automate
                    monotonous processes using scripts and tools.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
