import { ExternalLink, Github, Lock } from "lucide-react"
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
      title: "Sistema de Gestão Interno – Padaria Santa Marcelina",
      description:
        "Aplicação web que conecta empresas e fornecedores com foco em eficiência de negociação. Sistema completo de gestão de relacionamento com fornecedores.",
      stack: [],
      github: "https://github.com/ggelman/frontendGoDigital?tab=readme-ov-file",
      demo: undefined,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Consolidator Flux (Hiperstream)",
      description:
        "Participação ativa no desenvolvimento e testes de fluxos de consolidação de dados financeiros com alta performance e confiabilidade.",
      stack: ["C#", ".NET", "Google Spanner", "xUnit", "GCP"],
      github: undefined,
      demo: undefined,
      isPrivate: true,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-8 text-gray-900 dark:text-white">Projetos</h2>

          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            Aqui você encontra alguns projetos pessoais e contribuições que mostram meu estilo de trabalho, atenção aos
            detalhes e paixão por desenvolvimento.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              let repoButton = null
              if (project.github) {
                repoButton = (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4" />
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
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
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

                    <div className="flex gap-3">
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
              <Github className="h-5 w-5 mr-2" />
              github.com/ggelman
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
