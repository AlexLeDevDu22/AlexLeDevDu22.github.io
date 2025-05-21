import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollProgressBar() {
  const [, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollY(scrollPercent);
      controls.start({ scaleX: scrollPercent });
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-green-400 z-100"
      initial={{ scaleX: 0 }}
      animate={controls}
      style={{ transformOrigin: "left center" }}
    />
  );
}
