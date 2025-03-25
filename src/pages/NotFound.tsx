
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-health-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto text-center glass-panel p-12">
            <div className="w-20 h-20 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-health-primary"
              >
                <path
                  d="M12 9V13M12 17H12.01M3.44722 20.5528C1.56709 18.6726 2.37534 15.4888 3.20479 13.0024C4.07669 10.3843 5.04524 7.78403 6.10251 5.21599C7.04134 2.92136 9.3286 2.82541 10.4286 2.76978L10.5 2.76654C10.9833 2.74291 11.5084 2.7193 12 2.7193C12.4916 2.7193 13.0167 2.74291 13.5 2.76654L13.5714 2.76978C14.6714 2.82541 16.9587 2.92136 17.8975 5.21599C18.9548 7.78403 19.9233 10.3843 20.7952 13.0024C21.6247 15.4888 22.4329 18.6726 20.5528 20.5528C18.6726 22.4329 15.4888 21.6247 13.0024 20.7952C10.3843 19.9233 7.78403 18.9548 5.21599 17.8975C2.92136 16.9587 2.82541 14.6714 2.76978 13.5714L2.76654 13.5C2.74291 13.0167 2.7193 12.4916 2.7193 12C2.7193 11.5084 2.74291 10.9833 2.76654 10.5L2.76978 10.4286C2.82541 9.3286 2.92136 7.04134 5.21599 6.10251C7.78403 5.04524 10.3843 4.07669 13.0024 3.20479C15.4888 2.37534 18.6726 1.56709 20.5528 3.44722C22.4329 5.32736 21.6247 8.51118 20.7952 10.9976C19.9233 13.6157 18.9548 16.216 17.8975 18.784C16.9587 21.0786 14.6714 21.1746 13.5714 21.2302L13.5 21.2335C13.0167 21.2571 12.4916 21.2807 12 21.2807C11.5084 21.2807 10.9833 21.2571 10.5 21.2335L10.4286 21.2302C9.3286 21.1746 7.04134 21.0786 6.10251 18.784C5.04524 16.216 4.07669 13.6157 3.20479 10.9976C2.37534 8.51118 1.56709 5.32736 3.44722 3.44722"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">
              Oops! We couldn't find this page.
            </p>
            <a
              href="/"
              className="btn-primary inline-flex items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Return to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
