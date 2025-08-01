import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Giulia Baracat</div>
                <div className="text-xs text-purple-400 font-medium">Full Stack Developer</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">Giulia Baracat</div>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Full Stack Developer</div>
            </div>
          </div>

          {/* CTA Badge */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-purple-500/30">
              <Zap className="h-4 w-4 text-purple-500 dark:text-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Freelas abertos 🚀</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium capitalize relative group"
              >
                {section === "home"
                  ? "início"
                  : section === "about"
                    ? "sobre"
                    : section === "skills"
                      ? "habilidades"
                      : section === "projects"
                        ? "projetos"
                        : "contato"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4 hover:bg-purple-500/20 transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-400" />
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-purple-500/20">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-400" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-purple-500/20"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-purple-500/20">
            <div className="flex flex-col space-y-4 px-6">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 capitalize"
                >
                  {section === "home"
                    ? "início"
                    : section === "about"
                      ? "sobre"
                      : section === "skills"
                        ? "habilidades"
                        : section === "projects"
                          ? "projetos"
                          : "contato"}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-purple-500/20">
                <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                  <Zap className="h-4 w-4 animate-pulse" />
                  <span className="text-sm font-medium">Freelas abertos 🚀</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
