
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Own Your Health Data",
    description:
      "With blockchain technology, you hold the private keys that grant access to your health records. No third party can access your data without your explicit permission.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M9 12H15M12 9V15M5.2 9H18.8C19.9201 9 20.4802 9 20.908 8.78201C21.2843 8.58892 21.5889 8.28431 21.782 7.90798C22 7.48016 22 6.92011 22 5.8V4.2C22 3.07989 22 2.51984 21.782 2.09202C21.5889 1.71569 21.2843 1.41108 20.908 1.21799C20.4802 1 19.9201 1 18.8 1H5.2C4.07989 1 3.51984 1 3.09202 1.21799C2.71569 1.41108 2.41108 1.71569 2.21799 2.09202C2 2.51984 2 3.07989 2 4.2V5.8C2 6.92011 2 7.48016 2.21799 7.90798C2.41108 8.28431 2.71569 8.58892 3.09202 8.78201C3.51984 9 4.07989 9 5.2 9ZM5.2 23H18.8C19.9201 23 20.4802 23 20.908 22.782C21.2843 22.5889 21.5889 22.2843 21.782 21.908C22 21.4802 22 20.9201 22 19.8V18.2C22 17.0799 22 16.5198 21.782 16.092C21.5889 15.7157 21.2843 15.4111 20.908 15.218C20.4802 15 19.9201 15 18.8 15H5.2C4.07989 15 3.51984 15 3.09202 15.218C2.71569 15.4111 2.41108 15.7157 2.21799 16.092C2 16.5198 2 17.0799 2 18.2V19.8C2 20.9201 2 21.4802 2.21799 21.908C2.41108 22.2843 2.71569 22.5889 3.09202 22.782C3.51984 23 4.07989 23 5.2 23Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Secure Sharing",
    description:
      "Share only what's needed using zero-knowledge proofs. Healthcare providers can verify specific information without accessing your complete medical history.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 8H22M2 8H6M16 20C16 17.7909 14.2091 16 12 16C9.79086 16 8 17.7909 8 20M18 20H22M2 20H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Emergency Access",
    description:
      "In critical situations, authorized emergency responders can quickly access vital information like allergies and medications, potentially saving your life.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Interoperability",
    description:
      "Connect with existing healthcare systems through standards-compliant APIs. Your records stay unified regardless of how many providers you see.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8L8 16M16 16L8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Legacy Integration",
    description:
      "Easily convert existing paper records and PDFs into your secure digital health portfolio using our AI-powered scanning and data extraction.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M9 17L15 17M9 13L17 13M9 9L13 9M3 15L3.10512 15M3 11L3.10512 11M3 7L3.10512 7M6 20.4L6.06096 20.451C6.92211 21.129 7.34574 21.5 8.00122 21.5M9 21.5L15.9988 21.5C16.9354 21.5 17.404 21.5 17.7731 21.302C18.1423 21.1039 18.395 20.7483 18.9003 20.037C18.966 19.9444 19.0341 19.8504 19.1044 19.755M20.5 18L20.5 8.2C20.5 7.07989 20.5 6.51984 20.282 6.09202C20.0903 5.71569 19.7843 5.40974 19.408 5.21799C18.9802 5 18.4201 5 17.3 5M12 5L9.2 5C8.07989 5 7.51984 5 7.09202 5.21799C6.71569 5.40973 6.40973 5.71569 6.21799 6.09202C6 6.51984 6 7.0799 6 8.2L6 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Insights",
    description:
      "Our system intelligently analyzes your health data to flag potential contradictions in your records and suggest optimizations for your care.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M12 6.5V14.5M12 14.5L16 10.5M12 14.5L8 10.5M12 2C15.866 2 19 5.13401 19 9C19 11.8389 17.2676 14.2885 14.8062 15.387C14.3149 15.6192 14 16.1103 14 16.6562V17C14 17.5523 13.5523 18 13 18H11C10.4477 18 10 17.5523 10 17V16.6562C10 16.1103 9.68513 15.6192 9.19385 15.387C6.73242 14.2885 5 11.8389 5 9C5 5.13401 8.13401 2 12 2ZM9 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const Features = () => {
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

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-24 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-health-background bg-texture-dot -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="animate-on-scroll inline-block px-3 py-1 mb-4 text-sm font-medium text-health-primary bg-health-primary/10 rounded-full">
            Key Features
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your Health, Your Terms
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600">
            PatientGuard gives you complete control over your health data while making it instantly accessible when needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-on-scroll glass-panel p-6 flex flex-col card-hover"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-health-primary/10 text-health-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
