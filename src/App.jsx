import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";

function App() { //total height of screensize
    return (
      <div className="min-h-screen overflow-x-hidden relative">
        <Navbar />
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#f5fffe",
                left: `${(i * 37) % 100}%`,
                top: `${(i * 61) % 100}%`,
                animation: `slow-drift ${15 + (i * 7) % 20}s ease-in-out infinite`,
                animationDelay: `${(i * 13) % 5}s`,
              }}
            />
          ))}
        </div>
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
    </div>
    );
}

export default App;
