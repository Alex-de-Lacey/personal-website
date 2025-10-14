import { useEffect, useRef } from "react";
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import ThemeToggle from './ThemeToggle';

const socials = [
  {
    label: "Email",
    url: "#contact",
    icon: faEnvelope
  },
  {
    label: "GitHub", 
    url: "https://github.com/Alex-de-Lacey/personal-website",
    icon: faGithub
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/alex-de-lacey",
    icon: faLinkedin
  }
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const previousScrollY = useRef(0);

  // Logic for the navbar to hide/show on scroll
  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollContainer = event.target as HTMLElement;
      const currentScrollY = scrollContainer.scrollTop;

      if (headerRef.current) {
        if (currentScrollY > previousScrollY.current && currentScrollY > 100) {
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }

      previousScrollY.current = currentScrollY;
    };

    // Find the scroll container to hide navbar on scroll
    let scrollContainer = document.querySelector('.snap-y');

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNavClick = (anchor: string) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-background/80 backdrop-blur-sm border-b border-zinc-700/50",
        "transform transition-transform duration-300 ease-in-out"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button
              onClick={handleNavClick("overview")}
              className="text-primary text-xl hover:text-foreground transition-colors cursor-pointer"
            >
              Alex 👋
            </button>
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {socials.slice(0, socials.length).map((social, index) => {
              if (social.url.startsWith('#')) {
                return (
                  <button
                    key={index}
                    onClick={handleNavClick(social.url.substring(1))}
                    className="text-primary transition-colors cursor-pointer w-6 h-6 flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-full h-full" style={{ fontSize: '24px' }}/>
                  </button>
                );
              }
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors cursor-pointer w-6 h-6 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-full h-full" style={{ fontSize: '24px' }}/>
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}