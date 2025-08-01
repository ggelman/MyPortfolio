import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Download, Mail, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  actions?: Array<{
    label: string
    action: () => void
    icon?: React.ReactNode
  }>
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage("Oi! 👋 Eu sou a assistente virtual da Giulia. Como posso te ajudar hoje?", [
          {
            label: "Ver projetos",
            action: () => handleQuickAction("projetos"),
            icon: <User className="h-4 w-4" />,
          },
          {
            label: "Baixar currículo",
            action: () => handleQuickAction("curriculo"),
            icon: <Download className="h-4 w-4" />,
          },
          {
            label: "Falar sobre freela",
            action: () => handleQuickAction("freela"),
            icon: <Mail className="h-4 w-4" />,
          },
        ])
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (
    text: string,
    actions?: Array<{
      label: string
      action: () => void
      icon?: React.ReactNode
    }>,
  ) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      actions,
    }
    setMessages((prev) => [...prev, message])
  }

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, message])
  }

  const handleQuickAction = (action: string) => {
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)

      switch (action) {
        case "projetos":
          addBotMessage(
            "A Giulia tem vários projetos interessantes! 🚀\n\n• **Clube de Compras**: Plataforma SRM com Vue.js e MongoDB\n• **Consolidator Flux**: Sistema financeiro na Hiperstream\n• **Portfólio**: Este site que você está vendo agora!\n\nQuer saber mais detalhes sobre algum projeto específico?",
            [
              {
                label: "Ver todos os projetos",
                action: () => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                },
              },
            ],
          )
          break

        case "curriculo":
          addBotMessage(
            "Perfeito! 📄 Vou te ajudar com o currículo da Giulia.\n\nEle tem todas as informações sobre experiência, formação e habilidades técnicas.",
            [
              {
                label: "Baixar PDF",
                action: () => {
                  const link = document.createElement("a")
                  link.href = "#"
                  link.download = "Giulia_Baracat_CV.pdf"
                  link.click()
                  addBotMessage("Download iniciado! 📥")
                },
                icon: <Download className="h-4 w-4" />,
              },
              {
                label: "Ver online",
                action: () => {
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                },
              },
            ],
          )
          break

        case "freela":
          addBotMessage(
            "Que ótimo! 🎉 A Giulia está disponível para novos projetos.\n\nEla trabalha com:\n• Desenvolvimento Full Stack\n• Gerenciamento de projetos\n• Consultoria técnica\n• Soluções personalizadas\n\nVamos conversar?",
            [
              {
                label: "Enviar e-mail",
                action: () => {
                  window.location.href =
                    "mailto:ggbaracat@gmail.com?subject=Oportunidade de Freelance&body=Olá Giulia, vi seu portfólio e gostaria de conversar sobre um projeto..."
                },
                icon: <Mail className="h-4 w-4" />,
              },
              {
                label: "Ir para contato",
                action: () => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                },
              },
            ],
          )
          break

        default:
          addBotMessage("Desculpa, não entendi. Pode reformular a pergunta? 🤔")
      }
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    addUserMessage(userMessage)
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)

      const lowerMessage = userMessage.toLowerCase()

      if (lowerMessage.includes("projeto") || lowerMessage.includes("trabalho")) {
        handleQuickAction("projetos")
      } else if (lowerMessage.includes("curriculo") || lowerMessage.includes("cv")) {
        handleQuickAction("curriculo")
      } else if (lowerMessage.includes("freela") || lowerMessage.includes("contato")) {
        handleQuickAction("freela")
      } else if (lowerMessage.includes("oi") || lowerMessage.includes("olá")) {
        addBotMessage("Oi! 😊 Como posso te ajudar hoje?", [
          { label: "Ver projetos", action: () => handleQuickAction("projetos") },
          { label: "Baixar currículo", action: () => handleQuickAction("curriculo") },
          { label: "Falar sobre freela", action: () => handleQuickAction("freela") },
        ])
      } else {
        addBotMessage(
          "Interessante! 🤔 Posso te ajudar com informações sobre os projetos da Giulia, seu currículo ou oportunidades de freelance. O que te interessa mais?",
          [
            { label: "Projetos", action: () => handleQuickAction("projetos") },
            { label: "Currículo", action: () => handleQuickAction("curriculo") },
            { label: "Freelance", action: () => handleQuickAction("freela") },
          ],
        )
      }
    }, 1000)
  }

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 rounded-full p-4 group"
          size="lg"
        >
          {isOpen ? (
            <X className="h-6 w-6 group-hover:scale-110 transition-transform" />
          ) : (
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[500px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-50 flex flex-col animate-fade-in-up">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-2xl bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Assistente da Giulia</h3>
                  <p className="text-xs text-purple-100">Online agora</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div className="max-w-[80%]">
                  <div
                    className={`p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>

                  {message.actions && (
                    <div className="mt-2 space-y-1">
                      {message.actions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={action.action}
                          className="w-full justify-start text-xs bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700"
                        >
                          {action.icon && <span className="mr-2">{action.icon}</span>}
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
