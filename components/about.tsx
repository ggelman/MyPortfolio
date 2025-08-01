import { useEffect, useRef } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white fade-in-element">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">mim</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center fade-in-element">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-purple-300 dark:border-purple-500/30 animate-spin-slow"></div>
                <div
                  className="absolute inset-4 rounded-full border border-blue-300 dark:border-blue-500/30 animate-spin-slow"
                  style={{ animationDirection: "reverse", animationDuration: "12s" }}
                ></div>
                <div className="absolute inset-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl font-light text-purple-600 dark:text-purple-400 z-10">G</span>

                    <div className="absolute inset-0 opacity-20">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(147, 51, 234, 0.3) 50%, transparent 60%)`,
                          backgroundSize: "20px 20px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center animate-bounce">
                  <span className="text-white text-xs font-bold">JS</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-white text-xs font-bold">C#</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 fade-in-element">
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Sou estudante de{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 font-semibold">
                      Sistemas de Informação na FIAP
                    </span>{" "}
                    e atuo como estagiária em Desenvolvimento de Sistemas na{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 font-semibold">
                      Hiperstream
                    </span>
                    , uma empresa referência em soluções SaaS para o setor financeiro.
                  </p>

                  <p className="text-lg">
                    Já passei pela área de projetos, o que me deu uma base sólida de comunicação com stakeholders,
                    organização e gestão de demandas. Hoje, somo isso ao código:{" "}
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">programo com propósito</span>,
                    buscando sempre clareza, entrega de valor e agilidade.
                  </p>

                  <p className="text-lg">
                    Hoje sou responsável por estruturar fluxos de dados, criar testes e manter aplicações rodando com
                    qualidade e foco em SLA. Trabalho diariamente com Git, Azure, .NET, banco de dados (Spanner, SQL
                    Server, DBeaver), e consumo de APIs — tudo isso em um ambiente orientado a dados e colaboração.
                  </p>

                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 p-6 rounded-xl border border-purple-200 dark:border-purple-500/20">
                    <p className="text-lg italic text-purple-700 dark:text-purple-300">
                      "Quando não estou codando, provavelmente estou treinando Jiu-Jitsu, organizando planos de
                      dominação mundial ou ouvindo uma playlist com mais bugs do que a sprint passada. 😄"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
