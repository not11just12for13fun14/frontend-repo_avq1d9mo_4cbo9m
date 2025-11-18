import React from 'react'
import { Apple, Wifi, Battery, Volume2, ChevronDown } from 'lucide-react'

function formatTime() {
  const now = new Date()
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function MenuBar() {
  const [time, setTime] = React.useState(formatTime())
  React.useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-10 backdrop-blur-md bg-slate-900/40 border-b border-white/10 flex items-center px-3 z-40">
      <div className="flex items-center gap-3 text-slate-100">
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Liquid OS</span>
      </div>

      <div className="mx-auto text-slate-200 text-sm tracking-tight">
        Willkommen
      </div>

      <div className="ml-auto flex items-center gap-3 text-slate-200">
        <Wifi className="w-4 h-4" />
        <Volume2 className="w-4 h-4" />
        <Battery className="w-5 h-5" />
        <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
          <span className="text-xs tabular-nums">{time}</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </div>
      </div>
    </div>
  )
}
