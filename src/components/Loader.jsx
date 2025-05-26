import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <svg
        viewBox="0 0 200 100"
        className="mx-auto w-[320px] h-[310px] drop-shadow-[0_0_25px_#22c55e] text-green-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <g transform="translate(30,0)">
          {/* A */}
          <motion.path
            d="M30 80 L50 20 L70 80 M40 60 H60"
            stroke="url(#glow)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={controls}
            variants={{
              visible: {
                pathLength: [0, 1, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          />
          {/* G */}
          <motion.path
            d="M100 25 C70 40 80 75 105 73 C115 73 125 63 117 52 H100"
            stroke="url(#glow)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={controls}
            variants={{
              visible: {
                pathLength: [0, 1, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                },
              },
            }}
          />
        </g>
      </svg>
    </div>
  );
}
