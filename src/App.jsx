import React, { useState, useEffect, useRef } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const mainCursorRef = useRef(null);
  const followerCursorRef = useRef(null);

  useEffect(() => {
    const moveCursors = (e) => {
      const { clientX, clientY } = e;
      if (mainCursorRef.current && followerCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        followerCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const addHoverEffect = () =>
      followerCursorRef.current?.classList.add("hovering");
    const removeHoverEffect = () =>
      followerCursorRef.current?.classList.remove("hovering");

    window.addEventListener("mousemove", moveCursors);

    document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursors);
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={mainCursorRef}
        className="fixed w-2 h-2 bg-red-500 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        ref={followerCursorRef}
        className="fixed w-8 h-8 border-2 border-red-500 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
      ></div>
      <style>{`
                @media (pointer: fine) {
                    .hovering {
                        transform: scale(2.5) !important;
                        background-color: rgba(239, 68, 68, 0.2);
                    }
                    html, body {
                        cursor: none;
                    }
                    a, button {
                        cursor: none;
                    }
                }
            `}</style>
    </>
  );
};

// --- CSS-based 3D F1 Car for the Hero Section ---
const F1CarModel = () => {
  const carRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;

      if (carRef.current) {
        carRef.current.style.transform = `rotateY(${x * 40}deg) rotateX(${
          -y * 40
        }deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0"
      style={{ perspective: "1500px" }}
    >
      <style>
        {`
                    .car {
                        width: 150px;
                        height: 300px;
                        position: relative;
                        transform-style: preserve-3d;
                        transition: transform 0.5s ease-out;
                    }
                    .car-part {
                        position: absolute;
                        transform-style: preserve-3d;
                        border: 1px solid rgba(239, 68, 68, 0.3);
                        background: rgba(239, 68, 68, 0.05);
                    }
                    /* Chassis */
                    .chassis { width: 100px; height: 250px; left: 25px; top: 25px; transform: translateZ(10px); }
                    /* Wings */
                    .front-wing { width: 150px; height: 20px; top: 25px; transform: translateZ(20px); }
                    .rear-wing { width: 150px; height: 20px; top: 255px; transform: translateZ(30px); }
                    /* Wheels */
                    .wheel { width: 30px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 5px; }
                    .fl-wheel { top: 50px; left: -10px; transform: translateZ(15px); }
                    .fr-wheel { top: 50px; left: 130px; transform: translateZ(15px); }
                    .rl-wheel { top: 220px; left: -10px; transform: translateZ(15px); }
                    .rr-wheel { top: 220px; left: 130px; transform: translateZ(15px); }

                    @keyframes slide-in-fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-slide-in { opacity: 0; animation: slide-in-fade-in 0.8s forwards ease-out; }
                    
                    /* Glitch Effect */
                    .glitch { position: relative; }
                    .glitch:hover:before, .glitch:hover:after {
                        content: 'Jash Parmar';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: #0a0a0a;
                        overflow: hidden;
                        clip: rect(0, 900px, 0, 0);
                    }
                    .glitch:hover:before { animation: glitch-anim-1 2s infinite linear alternate-reverse; left: 2px; text-shadow: -2px 0 #ef4444; }
                    .glitch:hover:after { animation: glitch-anim-2 2s infinite linear alternate-reverse; left: -2px; text-shadow: -2px 0 #3b82f6, 2px 2px #ef4444; }
                    @keyframes glitch-anim-1 { 0% { clip: rect(42px, 9999px, 44px, 0); } 5% { clip: rect(12px, 9999px, 60px, 0); } 10% { clip: rect(40px, 9999px, 62px, 0); } 15% { clip: rect(30px, 9999px, 50px, 0); } 20% { clip: rect(18px, 9999px, 40px, 0); } 25% { clip: rect(50px, 9999px, 70px, 0); } 30% { clip: rect(25px, 9999px, 45px, 0); } 35% { clip: rect(65px, 9999px, 85px, 0); } 40% { clip: rect(45px, 9999px, 65px, 0); } 45% { clip: rect(10px, 9999px, 30px, 0); } 50% { clip: rect(55px, 9999px, 75px, 0); } 55% { clip: rect(35px, 9999px, 55px, 0); } 60% { clip: rect(20px, 9999px, 40px, 0); } 65% { clip: rect(60px, 9999px, 80px, 0); } 70% { clip: rect(30px, 9999px, 50px, 0); } 75% { clip: rect(15px, 9999px, 35px, 0); } 80% { clip: rect(40px, 9999px, 60px, 0); } 85% { clip: rect(25px, 9999px, 45px, 0); } 90% { clip: rect(5px, 9999px, 25px, 0); } 95% { clip: rect(50px, 9999px, 70px, 0); } 100% { clip: rect(10px, 9999px, 30px, 0); } }
                    @keyframes glitch-anim-2 { 0% { clip: rect(65px, 9999px, 100px, 0); } 5% { clip: rect(75px, 9999px, 100px, 0); } 10% { clip: rect(55px, 9999px, 85px, 0); } 15% { clip: rect(45px, 9999px, 75px, 0); } 20% { clip: rect(65px, 9999px, 95px, 0); } 25% { clip: rect(35px, 9999px, 65px, 0); } 30% { clip: rect(5px, 9999px, 35px, 0); } 35% { clip: rect(85px, 9999px, 100px, 0); } 40% { clip: rect(25px, 9999px, 55px, 0); } 45% { clip: rect(45px, 9999px, 75px, 0); } 50% { clip: rect(15px, 9999px, 45px, 0); } 55% { clip: rect(75px, 9999px, 100px, 0); } 60% { clip: rect(55px, 9999px, 85px, 0); } 65% { clip: rect(5px, 9999px, 35px, 0); } 70% { clip: rect(95px, 9999px, 100px, 0); } 75% { clip: rect(35px, 9999px, 65px, 0); } 80% { clip: rect(15px, 9999px, 45px, 0); } 85% { clip: rect(65px, 9999px, 95px, 0); } 90% { clip: rect(5px, 9999px, 35px, 0); } 95% { clip: rect(85px, 9999px, 100px, 0); } 100% { clip: rect(25px, 9999px, 55px, 0); } }

                    /* Redacted effect */
                    .redacted { position: relative; display: inline-block; transform: translateX(-100%); animation: reveal-redacted 1s forwards cubic-bezier(0.76, 0, 0.24, 1); animation-delay: 500ms;}
                    .redacted-text { opacity: 0; animation: fade-in-text 0.5s forwards; animation-delay: 1s; }
                    @keyframes reveal-redacted { to { transform: translateX(0); } }
                    @keyframes fade-in-text { to { opacity: 1; } }
                `}
      </style>
      <div ref={carRef} className="car">
        <div className="car-part chassis"></div>
        <div className="car-part front-wing"></div>
        <div className="car-part rear-wing"></div>
        <div className="car-part wheel fl-wheel"></div>
        <div className="car-part wheel fr-wheel"></div>
        <div className="car-part wheel rl-wheel"></div>
        <div className="car-part wheel rr-wheel"></div>
      </div>
    </div>
  );
};

// --- Scroll Animation Component ---
const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "dark"; // Default to dark theme
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="bg-gray-100 dark:bg-[#0a0a0a] overflow-x-hidden">
      <AnimatedGradientBackground />
      <CustomCursor />
      <div className="relative z-10 text-gray-900 dark:text-gray-100 font-sans antialiased">
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold font-serif text-gray-900 dark:text-white relative group"
            >
              <span>JP</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-black/20 backdrop-blur-md px-6 py-2 rounded-full">
              <a
                href="#about"
                className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white/80 dark:bg-black/50 backdrop-blur-lg mt-2 mx-4 rounded-lg">
              <div className="flex flex-col items-center space-y-6 py-6 text-gray-600 dark:text-gray-300">
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Contact
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mt-4"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          )}
        </header>

        <main className="container mx-auto px-6">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />

        {showScrollTop && (
          <button
            onClick={scrollTop}
            className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

// --- Loading Screen Component ---
const LoadingScreen = () => {
  const greetings = [
    "Hello",
    "नमस्ते",
    "Bonjour",
    "Hola",
    "Ciao",
    "こんにちは",
    "안녕하세요",
    "你好",
  ];
  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % greetings.length;
      setGreeting(greetings[index]);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center bg-gray-100 dark:bg-[#0a0a0a]">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white transition-opacity duration-500">
        {greeting}
      </h1>
    </div>
  );
};

// --- Hero Section ---
const AnimatedGradientBackground = () => (
  <>
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-red-500/20 via-transparent to-transparent animate-spin-slow"></div>
      <div className="absolute top-[-50%] left-[50%] w-[200%] h-[200%] bg-gradient-radial from-blue-500/20 via-transparent to-transparent animate-spin-slow-reverse"></div>
    </div>
    <style>{`
            @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .animate-spin-slow { animation: spin-slow 40s linear infinite; }
            @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            .animate-spin-slow-reverse { animation: spin-slow-reverse 40s linear infinite; }
        `}</style>
  </>
);

const HeroSection = () => {
  const text = "Jash Parmar";
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center"
    >
      <F1CarModel />
      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-8xl font-extrabold font-serif leading-tight text-gray-900 dark:text-white glitch">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="animate-slide-in inline-block"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          <span className="redacted">
            <span className="redacted-text">
              Creative Developer & Software Engineer
            </span>
          </span>{" "}
          crafting elegant, efficient, and user-centric digital experiences.
        </p>
        <div
          className="flex items-center justify-center flex-wrap gap-4 pt-4 animate-slide-in"
          style={{ animationDelay: "1000ms" }}
        >
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/20 hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-500/40"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1Bn5-CxvjTfu15VSkCzHvx0HzDsKrzYbd/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-semibold"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Glass Card Component ---
const GlassCard = ({ children, className }) => (
  <div
    className={`bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl p-8 ${className}`}
  >
    {children}
  </div>
);

// --- About Section ---
const AboutSection = () => (
  <section id="about" className="py-24">
    <AnimatedSection>
      <GlassCard>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a dedicated problem-solver with a strong foundation in Data
              Structures & Algorithms and a passion for web development. I
              thrive in collaborative environments and am always eager to learn
              new technologies.
            </p>
            <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900 dark:text-white">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700 dark:text-gray-200">
              {[
                "C++",
                "Python",
                "JavaScript",
                "React.js",
                "TypeScript",
                "SQL",
                "Node.js",
                "Tailwind CSS",
                "Git & GitHub",
                "Data Structures",
                "Algorithms",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <div className="w-full max-w-xs">
              <img
                src="https://i.ibb.co/7dR76Z0r/jash.jpg"
                alt="Jash Parmar"
                className="relative w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </AnimatedSection>
  </section>
);

// --- Interactive 3D Project Card ---
const Interactive3DCard = ({ children, href }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    const rotateX = (y - 0.5) * -25;
    const rotateY = (x - 0.5) * 25;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    cardRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group block relative bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl p-8 transition-all duration-300"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(239, 68, 68, 0.15), transparent 40%)",
        }}
      ></div>
      <div style={{ transform: "translateZ(40px)" }}>{children}</div>
    </a>
  );
};

// --- Projects Section ---
const projects = [
  {
    title: "Copacetic Word Memory",
    description:
      "A vocabulary app using spaced repetition to boost retention, featuring 500+ words and optimized with local storage.",
    tags: ["React", "JavaScript", "Local Storage"],
    link: "https://copacetic-lyart.vercel.app/",
  },
  {
    title: "Zepto Data Analysis",
    description:
      "Analyzed inventory data to uncover pricing trends and stock inefficiencies, proposing data-driven improvements.",
    tags: ["SQL", "Data Analysis", "Python"],
    link: "https://github.com/jash2884/zepto-SQL-analysis",
  },
  {
    title: "Weather Forecast App",
    description:
      "Integrated the OpenWeather API to fetch and display real-time weather data for over 200,000 cities worldwide.",
    tags: ["React", "TypeScript", "API"],
    link: "https://github.com/jash2884/weather-app",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <AnimatedSection>
      <h2 className="text-4xl font-bold font-serif text-center mb-12 text-gray-900 dark:text-white">
        Selected Works
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Interactive3DCard href={project.link} key={index}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <ArrowUpRight
                className="text-gray-400 group-hover:text-red-400 transition-transform duration-300 group-hover:rotate-45"
                size={20}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-medium">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Interactive3DCard>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

// --- Contact Section ---
const ContactSection = () => (
  <section id="contact" className="py-24">
    <AnimatedSection>
      <GlassCard className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-serif mb-4 text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          Have a project in mind, a question, or just want to say hello? My
          inbox is always open.
        </p>
        <a
          href={`mailto:jash.parmar.dev@gmail.com`}
          className="inline-block px-10 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/20 hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-500/40"
        >
          Say Hello
        </a>
      </GlassCard>
    </AnimatedSection>
  </section>
);

// --- Magnetic Link Component ---
const MagneticLink = ({ children, ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
      className="transition-transform duration-200 ease-out"
      data-magnetic
    >
      {children}
    </a>
  );
};

// --- Live Clock Component ---
const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-2">
      <span>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </span>
      <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
      <span>IST</span>
    </div>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
        <span>&copy; 2025 Jash Parmar</span>
        <LiveClock />
      </div>
      <div className="flex space-x-6 text-gray-400">
        <MagneticLink
          href="https://github.com/jash2884"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="GitHub"
        >
          <Github size={20} />
        </MagneticLink>
        <MagneticLink
          href="https://www.linkedin.com/in/jash-parmar-7973b255/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </MagneticLink>
        <MagneticLink
          href="https://www.instagram.com/jash.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </MagneticLink>
      </div>
    </div>
  </footer>
);

export default App;
