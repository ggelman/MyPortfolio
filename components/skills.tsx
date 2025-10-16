"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Brain, MessageSquare, Target, Zap, CheckCircle, Award, Lightbulb } from "lucide-react"

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const softSkills = [
    {
      name: "Gestão de stakeholders",
      icon: Users,
      level: 95,
      description: "Comunicação eficaz com clientes e equipes",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Metodologias ágeis",
      icon: Target,
      level: 90,
      description: "Scrum, Kanban e entrega contínua",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Comunicação clara",
      icon: MessageSquare,
      level: 95,
      description: "Traduzir técnico para negócio",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Pensamento crítico",
      icon: Brain,
      level: 88,
      description: "Análise e resolução de problemas",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Entrega de valor",
      icon: CheckCircle,
      level: 92,
      description: "Foco em resultados e impacto",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Proatividade",
      icon: Zap,
      level: 90,
      description: "Antecipo demandas e soluções",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Liderança técnica",
      icon: Award,
      level: 70,
      description: "Mentoria e direcionamento de equipes",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Inovação",
      icon: Lightbulb,
      level: 87,
      description: "Busca constante por melhorias",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Skills em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ação</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Habilidades comportamentais que fazem a diferença na entrega de projetos excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 h-full">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">{skill.name}</h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="hidden">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiência</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Mais que código,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  entrego resultados
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Combino expertise técnica com habilidades de gestão para garantir que cada projeto seja um sucesso
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Comunicação eficaz
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Entregas no prazo
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Qualidade garantida
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Foco no cliente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
