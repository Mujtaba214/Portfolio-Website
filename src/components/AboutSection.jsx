import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-26 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web & App Developer
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in web development and hands-on
              experience across multiple projects, I specialize in building
              responsive, user-friendly, and efficient web applications using
              technologies like React, Express, MongoDB, SQL, and React Native.
              My focus lies in creating seamless front-end experiences, robust
              back-end logic, and scalable full-stack solutions tailored to
              client needs.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about crafting clean, intuitive interfaces and
              solving complex problems with practical, scalable code. Whether
              it's designing a modern App Development or developing a full-stack
              application, I stay committed to learning new tools and best
              practices to keep pace with the rapidly evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Muhammad-Mujtaba-CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
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
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and single page application
                    with modern framework.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    App Design and Development
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive mobile interfaces and delivering
                    seamless app experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building robust server-side architecture and APIs to power
                    scalable applications.
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
