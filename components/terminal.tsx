

import { useEffect, useState } from "react"

export function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [cycleCount, setCycleCount] = useState(0)

  const commands = [
    {
      command: "git status",
      output: [
        "On branch main",
        "Your branch is up to date with 'origin/main'.",
        "",
        "Changes to be committed:",
        '  (use "git reset HEAD <file>..." to unstage)',
        "",
        "        modified:   portfolio.tsx",
        "        new file:   components/awesome-feature.tsx",
      ],
    },
    {
      command: "git add .",
      output: [],
    },
    {
      command: 'git commit -m "feat: add new interactive portfolio"',
      output: ["[main 7f8a9b2] feat: add new interactive portfolio", " 2 files changed, 127 insertions(+)"],
    },
    {
      command: "git push origin main",
      output: [
        "Enumerating objects: 8, done.",
        "Counting objects: 100% (8/8), done.",
        "Delta compression using up to 8 threads",
        "Compressing objects: 100% (4/4), done.",
        "Writing objects: 100% (5/5), 2.1 KiB | 2.1 MiB/s, done.",
        "Total 5 (delta 2), reused 0 (delta 0)",
        "To github.com:ggelman/portfolio.git",
        "   a1b2c3d..7f8a9b2  main -> main",
      ],
    },
    {
      command: "npm run deploy",
      output: [
        "✓ Build completed successfully",
        "✓ Optimizing assets...",
        "✓ Deploying to production...",
        "✓ Deployment successful!",
        "",
        "🚀 Live at: https://giuliabaracat.dev",
      ],
    },
  ]

  useEffect(() => {
    let isMounted = true

    const typeCommand = async () => {
      if (!isMounted) return

      setIsTyping(true)
      const cmd = commands[currentCommand]

      for (let i = 0; i <= cmd.command.length; i++) {
        if (!isMounted) return
        setDisplayText(`$ ${cmd.command.slice(0, i)}`)
        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      await new Promise((resolve) => setTimeout(resolve, 500))

      if (cmd.output.length > 0) {
        for (let i = 0; i < cmd.output.length; i++) {
          if (!isMounted) return
          setDisplayText((prev) => prev + "\n" + cmd.output[i])
          await new Promise((resolve) => setTimeout(resolve, 100))
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))

      if (!isMounted) return
      setIsTyping(false)

      if (currentCommand === commands.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        if (!isMounted) return
        setDisplayText("")
        setCurrentCommand(0)
        setCycleCount((prev) => prev + 1)
      } else {
        setCurrentCommand((prev) => prev + 1)
      }
    }

    typeCommand()

    return () => {
      isMounted = false
    }
  }, [currentCommand, cycleCount])

  return (
    <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm shadow-2xl border border-gray-800 w-full max-w-4xl mx-auto">
      <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-4">giulia@dev:~/portfolio</span>
      </div>

      <div className="text-green-400 h-80 overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {displayText}
        {isTyping && <span className="animate-pulse text-green-400">|</span>}
        {!displayText && !isTyping && (
          <div className="text-gray-500 flex items-center h-full">
            <div>
              <span className="text-green-400">$</span> Iniciando simulação...
              <div className="mt-2 text-xs text-gray-600">Aguarde enquanto carrego os comandos Git...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
