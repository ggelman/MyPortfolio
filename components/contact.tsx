import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Form submitted:", formData)

    // Simular envio bem-sucedido
    alert("Mensagem enviada com sucesso! Retornarei em breve.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-8 text-gray-900 dark:text-white">Contato</h2>

          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
            Ficou com uma ideia na cabeça? Bora tirar do papel.
          </p>

          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Estou disponível para freelas, parcerias e oportunidades tech interessantes. Me chama aqui ou manda uma DM
            no LinkedIn — eu respondo rapidinho (ou quase isso, se for dia de deploy 😅).
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Envie uma mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Enviar
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Ou, se preferir:</h3>

                <div className="space-y-4">
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
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        GitHub
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">github.com/ggelman</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-950 dark:to-purple-950 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Disponível para freelances</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Estou aceitando novos projetos e colaborações. Respondo a todas as mensagens em até 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
