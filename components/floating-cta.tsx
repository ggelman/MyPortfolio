"use client"

import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleEmailClick = () => {
    window.location.href =
      "mailto:ggbaracat@gmail.com?subject=Oportunidade de Freelance&body=Olá Giulia, gostaria de conversar sobre um projeto..."
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-purple-500/20 max-w-sm animate-fade-in-up">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-1">Vamos conversar?</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Disponível para freelas e parcerias</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-white h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <Button
              onClick={handleEmailClick}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Enviar e-mail
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full border-purple-500/50 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-500/10"
            >
              Canais de contato
            </Button>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 rounded-full p-4 group"
        size="lg"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <span className="ml-2 hidden sm:inline font-medium">Freelas abertos</span>
      </Button>
    </div>
  )
}
