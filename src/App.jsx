import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import BlurBg from "./components/BlurBg";


export default function App() {
  const { theme } = useContext(ThemeContext);

  const gridColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridOpacity = theme === "dark" ? 0.08 : 0.10;

  return (
    <div className="min-h-screen relative overflow-hidden bg-(--color-bg) text-(--color-text)">
      <BlurBg />
      {/* GRID */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          opacity: gridOpacity,
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",

          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,

          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />



      <Navbar />

      <main className="relative z-20 max-w-5xl mx-auto px-4 pt-28 pb-20 space-y-32">
        <Home />
      </main>

      <Footer />
    </div>
  );
}
