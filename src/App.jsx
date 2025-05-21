import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Freelance from "./sections/Freelance";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import GithubStats from "./sections/GithubStats";
import TechStack from "./sections/TechStack";
import DevAnim from "./sections/DevAnim";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageOverlay from "./components/PageOverlay";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3140);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
        <About />
        <Freelance />
        <Projects />
        <DevAnim />
        <TechStack />
        <GithubStats />
        <Blog />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
      <PageOverlay />
    </>
  );
}
