'use client'
import { Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">Currículo</h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Confira minha experiência completa, formação acadêmica e certificações. Disponível para download ou
            visualização online.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Giulia Helena Gelman F. Baracat
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Desenvolvedora Full Stack</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Eye className="h-4 w-4" /> Visualizar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => window.open('/cv/pt', '_blank')}>Português</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.open('/cv/en', '_blank')}>English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800">
                      <Download className="h-4 w-4" /> Download PDF
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => (window.location.href = '/cv/pt?download=1')}>
                      Português
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => (window.location.href = '/cv/en?download=1')}>
                      English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-2">2+</div>
              <p className="text-gray-600 dark:text-gray-400">Anos de experiência</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Projetos concluídos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-400">Disponível para freelas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
