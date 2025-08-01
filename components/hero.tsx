import { ArrowDown, MapPin, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = [
    "Transformando ideias em código limpo",
    "Foco em eficiência e entrega de valor",
    "Dev, estrategista e apaixonada por boas soluções",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 dark:bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal-style intro */}
          <div className="mb-8 bg-gray-800/90 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-300 dark:border-gray-700/50 max-w-md mx-auto">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-left text-sm font-mono">
              <span className="text-green-400">$</span>
              <span className="text-white ml-2">whoami</span>
              <div className="text-purple-400 mt-1">giulia_baracat</div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="block">Oi, eu sou a</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 animate-gradient-x">
              Giulia
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-gray-700 dark:text-gray-300">São Paulo, SP</span>
          </div>

          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
            Desenvolvedora Full Stack e Gerente de Projetos Júnior
          </h2>

          <div className="h-16 mb-12 flex items-center justify-center">
            <p className="text-lg md:text-xl text-purple-700 dark:text-purple-300 font-medium transition-all duration-1000">
              "{phrases[currentPhrase]}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Vamos trabalhar juntos?
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code className="mr-2 h-5 w-5" />
              Ver projetos
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
          >
            <ArrowDown className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
