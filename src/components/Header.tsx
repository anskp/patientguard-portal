
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 w-full",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 focus-ring">
            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-health-primary to-health-accent flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-health-primary to-health-accent">
              PatientGuard
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "How it Works", "Security", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-gray-700 hover:text-health-primary transition-colors focus-ring"
            >
              {item}
            </a>
          ))}
          <a
            href="#dashboard"
            className="btn-primary py-2 px-4 text-sm rounded-lg"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden focus-ring"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {["Features", "How it Works", "Security", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-medium text-gray-700 hover:text-health-primary py-2 focus-ring"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#dashboard"
            className="btn-primary py-2 px-4 text-center mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
