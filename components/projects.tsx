'use client'
import { ExternalLink, Lock } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  stack?: string[]
  github?: string
  demo?: string
  image?: string
  isPrivate?: boolean
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Sistema de Gestão Interno — Padaria Santa Marcelina",
      description:
        "Sistema web de gestão para padaria: controle de estoque, vendas, relatórios e auditoria. Foco em usabilidade e performance.",
      stack: ["React", "Java", "Python"],
      github: "https://github.com/ggelman/Santa-Marcelina",
      demo: undefined,
      image: "/santa.png",
    },
    {
      title: "Q-Path — Quantum Career System",
      description:
        "Plataforma para organizar trilhas de aprendizagem, progresso semanal, tarefas e roadmap de carreira.",
      stack: ["Next.js", "Python", "LLM com RAG"],
      github: "https://github.com/ggelman/QPath",
      demo: undefined,
      image: "/qpath.png",
    },
  ]

  return (
    <section id="projects" className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Meus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                projetos
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Aqui você encontra alguns projetos pessoais e contribuições que mostram meu estilo de trabalho, atenção aos
              detalhes e paixão por desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              let repoButton = null
              if (project.github) {
                repoButton = (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent"
                    onClick={() => window.open(project.github!, "_blank")}
                  >
                    <SiGithub className="h-4 w-4" />
                    Ver no GitHub
                  </Button>
                )
              } else if (project.isPrivate) {
                repoButton = (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent opacity-60 cursor-not-allowed"
                    disabled
                  >
                    <Lock className="h-4 w-4" />
                    Repositório privado
                  </Button>
                )
              }

              return (
                <div
                  key={project.title}
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="overflow-hidden w-full h-64 md:h-72 lg:h-80">
                    <img
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        if (target.src.indexOf("placeholder.jpg") === -1) {
                          target.src = "/placeholder.jpg"
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-4">
                      {repoButton}
                      {project.demo && (
                        <Button
                          size="sm"
                          className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800"
                          onClick={() => project.demo && window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Quer ver mais do que eu já fiz, estou fazendo ou brinquei de testar?
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Meu GitHub é tipo meu laboratório: tem de tudo, de MVPs a experimentos malucos.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-teal-700 text-teal-700 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950 px-8 py-3 mb-4"
              onClick={() => window.open("https://github.com/ggelman", "_blank")}
            >
              <SiGithub className="h-5 w-5 mr-2" />
              github.com/ggelman
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
