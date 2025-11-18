import React from 'react'
import { Search, Globe, PlayCircle, PauseCircle } from 'lucide-react'
import MenuBar from './components/MenuBar'
import Dock from './components/Dock'
import Window from './components/Window'
import Hero from './components/Hero'

function FinderContent() {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    name: `Datei ${i + 1}`,
  }))
  return (
    <div className="grid grid-cols-4 gap-4 p-2">
      {items.map((it, idx) => (
        <div key={idx} className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400/70 to-blue-600/70" />
          <div className="text-xs text-slate-200/90">{it.name}</div>
        </div>
      ))}
    </div>
  )
}

function SafariContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
        <Globe className="w-4 h-4 text-slate-300" />
        <input placeholder="Suche oder gib eine Webadresse ein" className="bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-400 w-full" />
        <Search className="w-4 h-4 text-slate-400" />
      </div>
      <div className="rounded-xl overflow-hidden border border-white/10">
        <div className="h-40 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-slate-100 font-medium">Willkommen im Web</div>
            <div className="text-slate-300/80 text-sm">Minimaler, flüssiger Browser-Mock</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MusicContent() {
  const [playing, setPlaying] = React.useState(false)
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-pink-500/70 to-violet-600/70" />
      <div className="flex-1">
        <div className="text-slate-100 font-medium">Liquid Dreams</div>
        <div className="text-slate-300/70 text-sm">Flames · Single</div>
        <div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 bg-white/40" />
        </div>
      </div>
      <button onClick={() => setPlaying(v => !v)} className="text-slate-100">
        {playing ? <PauseCircle className="w-10 h-10" /> : <PlayCircle className="w-10 h-10" />}
      </button>
    </div>
  )
}

function MessagesContent() {
  return (
    <div className="space-y-3">
      <div className="max-w-[70%] rounded-2xl px-3 py-2 bg-white/10 text-slate-100">Hey! Willkommen in Liquid OS 👋</div>
      <div className="max-w-[70%] rounded-2xl px-3 py-2 bg-sky-500/30 text-slate-100 ml-auto">Sieht richtig smooth aus!</div>
      <div className="max-w-[70%] rounded-2xl px-3 py-2 bg-white/10 text-slate-100">Zieh die Fenster herum, öffne Apps im Dock ↓</div>
    </div>
  )
}

function SettingsContent() {
  const [dark, setDark] = React.useState(true)
  const [motion, setMotion] = React.useState(true)
  return (
    <div className="space-y-4">
      <label className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
        <span className="text-slate-200">Dark Mode</span>
        <input type="checkbox" checked={dark} onChange={() => setDark(v => !v)} />
      </label>
      <label className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
        <span className="text-slate-200">Bewegung</span>
        <input type="checkbox" checked={motion} onChange={() => setMotion(v => !v)} />
      </label>
    </div>
  )
}

export default function App() {
  const [windows, setWindows] = React.useState([])

  const openApp = (id) => {
    const exists = windows.find(w => w.id === id)
    if (exists) return
    const base = { id }
    if (id === 'finder') setWindows(w => [...w, { ...base, title: 'Finder', content: <FinderContent />, pos: { x: 100, y: 180 } }])
    if (id === 'browser') setWindows(w => [...w, { ...base, title: 'Safari', content: <SafariContent />, pos: { x: 280, y: 220 } }])
    if (id === 'music') setWindows(w => [...w, { ...base, title: 'Musik', content: <MusicContent />, pos: { x: 180, y: 260 } }])
    if (id === 'messages') setWindows(w => [...w, { ...base, title: 'Nachrichten', content: <MessagesContent />, pos: { x: 380, y: 200 } }])
    if (id === 'settings') setWindows(w => [...w, { ...base, title: 'Einstellungen', content: <SettingsContent />, pos: { x: 220, y: 160 } }])
  }

  const closeApp = (id) => setWindows(w => w.filter(x => x.id !== id))

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Soft liquid glow background */}
      <div className="absolute -top-32 -left-24 w-[620px] h-[620px] rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 w-[680px] h-[680px] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_10%_-10%,rgba(56,189,248,0.10),transparent),radial-gradient(800px_400px_at_90%_110%,rgba(99,102,241,0.12),transparent)]" />

      <MenuBar />

      {/* Hero as dynamic wallpaper */}
      <div className="pt-10">
        <Hero />
      </div>

      {/* Desktop area */}
      <main className="relative z-10 min-h-[60vh] pb-28">
        <div className="px-6">
          <div className="text-slate-200/80 text-sm">Willkommen bei Liquid iOS 25</div>
        </div>

        {/* Windows */}
        <div className="relative">
          {windows.map(w => (
            <Window key={w.id} title={w.title} onClose={() => closeApp(w.id)} initialPos={w.pos}>
              {w.content}
            </Window>
          ))}
        </div>
      </main>

      <Dock onOpen={openApp} />
    </div>
  )
}
