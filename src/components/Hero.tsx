
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-enter");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-health-background bg-texture-dot -z-10"></div>
      <div className="absolute top-1/4 -left-10 w-64 h-64 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="animate-on-scroll stagger-1 inline-block px-3 py-1 mb-6 text-sm font-medium text-health-primary bg-health-primary/10 rounded-full">
            Decentralized Health Records
          </span>
          <h1 className="animate-on-scroll stagger-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Your Health Data.
            <br />
            Your Control.
          </h1>
          <p className="animate-on-scroll stagger-3 text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A secure, blockchain-based personal health record system that ensures only you control who accesses your medical information.
          </p>
          <div className="animate-on-scroll stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#dashboard" className="btn-primary">
              Get Started
            </a>
            <a href="#how-it-works" className="btn-outline">
              Learn How It Works
            </a>
          </div>

          <div className="animate-on-scroll stagger-5 mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-health-background to-transparent z-10 h-12 bottom-0 rounded-b-xl"></div>
            <div className="glass-panel relative overflow-hidden rounded-xl shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Patient-controlled health dashboard"
                className="w-full h-auto rounded-xl shadow-md transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-soft from-health-primary/10 to-transparent opacity-60 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
