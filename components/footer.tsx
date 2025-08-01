import { CoffeeIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-light mb-2">Giulia Baracat</h3>
            <p className="text-gray-400">Desenvolvedora Full Stack • São Paulo, SP</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Feito com</span>
            <CoffeeIcon className="h-4 w-4 fill-current text-accent-foreground" />
            <span>e muito código</span>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Giulia Helena Gelman F. Baracat. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
