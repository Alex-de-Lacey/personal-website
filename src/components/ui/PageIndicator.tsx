import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

const sections = ['overview', 'about', 'experience', 'thoughts', 'contact'];

export default function PageIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.snap-y');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      const sectionIndex = Math.round(scrollTop / containerHeight);
      
      setActiveIndex(Math.max(0, Math.min(sections.length - 1, sectionIndex)));
    };

    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClick = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-3">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={cn(
            'w-3 h-3 rounded-full transition-all duration-300 cursor-pointer bg-primary',
            index === activeIndex 
              ? 'bg-primary scale-125' 
              : 'bg-primary/10 hover:bg-primary/50'
          )}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
}