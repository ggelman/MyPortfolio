import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Terminal } from "@/components/terminal"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { FloatingCTA } from "@/components/floating-cta"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <div className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Em ação no{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  terminal
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Veja como trabalho com Git e deploy no dia a dia. Automação, versionamento e entrega contínua em ação.
              </p>
            </div>

            <div className="flex justify-center">
              <Terminal />
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-green-500 mb-2">Git Flow</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Controle de versão profissional com commits semânticos
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-500 mb-2">CI/CD</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Deploy automatizado e integração contínua</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-500 mb-2">DevOps</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Monitoramento e otimização de performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Skills />
        <Projects />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Chatbot />
    </div>
  )
}
