import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-green-500 py-8 mt-24 text-center text-zinc-400 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Alex Garin — Built with passion{" "}
          <span
            role="img"
            aria-label="heart"
            className="animate-pulse text-green-400"
          >
            ❤️
          </span>
        </p>
        <div className="flex space-x-6 text-green-400 text-xl">
          <a
            href="https://github.com/AlexLeDevDu22"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-green-500 transition-transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:alex.garin.pro@gmail.com"
            aria-label="Email"
            className="hover:text-green-500 transition-transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-garin-73428a367/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-500 transition-transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
