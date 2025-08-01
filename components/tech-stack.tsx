import { useEffect, useRef, useState } from "react"
import { Database, Globe, Server, Zap } from "lucide-react"

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      techs: [
        { name: "HTML5", proficiency: 95, icon: "🌐" },
        { name: "CSS3", proficiency: 90, icon: "🎨" },
        { name: "JavaScript", proficiency: 88, icon: "⚡" },
        { name: "Vue.js", proficiency: 85, icon: "💚" },
        { name: "React", proficiency: 80, icon: "⚛️" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      techs: [
        { name: "Node.js", proficiency: 85, icon: "🟢" },
        { name: "C#", proficiency: 82, icon: "🔷" },
        { name: ".NET", proficiency: 80, icon: "🔵" },
        { name: "Java", proficiency: 75, icon: "☕" },
        { name: "APIs REST", proficiency: 88, icon: "🔗" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      techs: [
        { name: "SQL Server", proficiency: 85, icon: "🗄️" },
        { name: "Google Spanner", proficiency: 75, icon: "☁️" },
        { name: "MongoDB", proficiency: 70, icon: "🍃" },
        { name: "DBeaver", proficiency: 80, icon: "🔧" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      techs: [
        { name: "Git", proficiency: 92, icon: "📝" },
        { name: "Azure DevOps", proficiency: 78, icon: "☁️" },
        { name: "Docker", proficiency: 70, icon: "🐳" },
        { name: "CI/CD", proficiency: 75, icon: "🔄" },
        { name: "Testing (xUnit)", proficiency: 80, icon: "🧪" },
      ],
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tecnologias que domino e uso para criar soluções eficientes e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="group relative"
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {category.techs.map((tech, techIndex) => (
                        <div key={tech.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{tech.icon}</span>
                              <span className="font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                            </div>
                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                              {tech.proficiency}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isVisible ? `${tech.proficiency}%` : "0%",
                                transitionDelay: `${categoryIndex * 200 + techIndex * 100}ms`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
