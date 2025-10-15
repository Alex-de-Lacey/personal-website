import { useTheme } from '../../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-primary/50 transition-colors duration-200 ease-in-out"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Toggle slider */}
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-[1.5rem]'
        }`}
      >
        {/* Icon inside the slider */}
        <span className="text-xs leading-none flex items-center justify-center">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  )
}

