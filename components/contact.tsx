"use client"

import { Mail } from "lucide-react"
import { SiLinkedin, SiGithub } from "react-icons/si"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 text-gray-900 dark:text-white">Contato</h2>

          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
            Ficou com uma ideia na cabeça? Bora tirar do papel.
          </p>

          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Estou disponível para freelas, parcerias e oportunidades tech interessantes. Fale comigo pelos canais abaixo.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-md space-y-4">
              <a
                href="mailto:ggbaracat@gmail.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group"
              >
                <Mail className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    E-mail
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">ggbaracat@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/giulia-baracat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group"
              >
                <SiLinkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">/in/giulia-baracat</div>
                </div>
              </a>

              <a
                href="https://github.com/ggelman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group"
              >
                <SiGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    GitHub
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">github.com/ggelman</div>
                </div>
              </a>
            </div>

            <div className="w-full max-w-md bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-950 dark:to-purple-950 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Disponível para freelances</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Estou aceitando novos projetos e colaborações. Respondo a todas as mensagens em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

