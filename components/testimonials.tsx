import { Star, Quote, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Anderson",
      role: "Gerente de Projetos",
      company: "Hiperstream",
      content:
        "Giulia conseguiu estabelecer uma relação de confiança sólida, mostrando não apenas um excelente domínio no atendimento ao cliente, mas também uma capacidade excepcional de compreender e atender às necessidades dos clientes de forma personalizada. Sua proatividade é um grande diferencial.",
      rating: 5,
      avatar: "RM",
      color: "from-blue-500 to-cyan-500",
      highlight: "Proatividade excepcional",
    },
    {
      name: "Ana",
      role: "Tech Lead",
      company: "StartupTech",
      content:
        "O que mais me impressiona na Giulia é sua capacidade de antecipar demandas e contribuir diretamente para a eficiência dos processos. Esse engajamento constante agrega valor real ao sucesso das nossas entregas, impactando positivamente os resultados.",
      rating: 5,
      avatar: "AC",
      color: "from-purple-500 to-pink-500",
      highlight: "Antecipa demandas",
    },
    {
      name: "Carlos",
      role: "Product Owner",
      company: "FinTech Solutions",
      content:
        "Trabalhar com a Giulia é ter a certeza de que o projeto será entregue com qualidade. Ela tem uma visão estratégica incrível e sempre sugere melhorias que fazem toda a diferença no produto final. Comunicação impecável e resultados consistentes.",
      rating: 5,
      avatar: "CS",
      color: "from-green-500 to-emerald-500",
      highlight: "Visão estratégica",
    },
    {
      name: "Marina",
      role: "Scrum Master",
      company: "AgileTeam",
      content:
        "A Giulia tem uma habilidade única de transformar requisitos complexos em soluções elegantes. Sua dedicação e atenção aos detalhes são admiráveis. Além disso, ela sempre mantém o time motivado e focado nos objetivos.",
      rating: 5,
      avatar: "MO",
      color: "from-orange-500 to-red-500",
      highlight: "Soluções elegantes",
    },
    {
      name: "João",
      role: "CTO",
      company: "InnovaCorp",
      content:
        "Giulia demonstra não apenas competência técnica excepcional, mas também uma maturidade profissional impressionante. Ela consegue equilibrar perfeitamente desenvolvimento e gestão, sempre entregando resultados que superam as expectativas.",
      rating: 5,
      avatar: "JS",
      color: "from-indigo-500 to-purple-500",
      highlight: "Equilibra dev e gestão",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              O que dizem{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                sobre mim
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Feedback real de colegas e líderes que trabalharam comigo
            </p>
          </div>

          <div className="relative mb-16">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200/50 dark:border-gray-800/50 transition-all duration-700 hover:shadow-3xl">
              <div className="flex justify-center mb-8">
                <div
                  className={`p-6 rounded-3xl bg-gradient-to-br ${testimonials[currentTestimonial].color} shadow-lg`}
                >
                  <Quote className="h-10 w-10 text-white" />
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div
                  className={`px-6 py-2 rounded-full bg-gradient-to-r ${testimonials[currentTestimonial].color} text-white text-sm font-semibold shadow-lg`}
                >
                  ✨ {testimonials[currentTestimonial].highlight}
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed font-light italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </div>

              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-6">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                >
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white text-2xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-purple-600 w-12"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-3"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  index === currentTestimonial
                    ? "bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-600 shadow-xl"
                    : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{testimonial.company}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div
                  className={`text-xs font-semibold mb-2 px-2 py-1 rounded-full bg-gradient-to-r ${testimonial.color} text-white inline-block`}
                >
                  {testimonial.highlight}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-3xl p-12 border border-purple-200/50 dark:border-purple-800/50">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <Heart className="h-12 w-12 text-purple-500 animate-pulse" />
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Vamos construir algo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  incrível
                </span>{" "}
                juntos?
              </h3>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Cada projeto é uma oportunidade de criar algo único. Estou pronta para transformar sua ideia em
                realidade com dedicação, qualidade e muito carinho pelos detalhes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    window.location.href =
                      "mailto:ggbaracat@gmail.com?subject=Vamos construir algo incrível juntos!&body=Olá Giulia, vi seu portfólio e fiquei impressionado(a) com seu trabalho. Gostaria de conversar sobre um projeto..."
                  }}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Começar nosso projeto
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950/50 px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Saber mais sobre mim
                </Button>
              </div>

              <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                💜 Respondo todas as mensagens em até 24 horas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
