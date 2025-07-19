export const BiographySection = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-about-primary">
            About Me
          </h2>
          <div className="w-24 h-px bg-about-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&h=600&fit=crop"
                alt="About me"
                className="w-full rounded-sm shadow-soft grayscale"
              />
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <p className="text-lg text-about-secondary leading-relaxed font-light">
                Hello! I'm Alex, a passionate creative developer with over 5 years of experience 
                crafting beautiful, functional digital experiences. I specialize in front-end 
                development and UI/UX design, always striving to bridge the gap between design 
                and technology.
              </p>
              
              <p className="text-lg text-about-secondary leading-relaxed font-light">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or experimenting with the latest web technologies. I believe 
                in creating solutions that are not only visually appealing but also accessible 
                and user-friendly.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "Figma", "Adobe CC"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-about-secondary/20 text-about-secondary rounded-sm text-sm font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};