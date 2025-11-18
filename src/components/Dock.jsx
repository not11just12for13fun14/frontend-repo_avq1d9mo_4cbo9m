import React from 'react'
import { Safari, Folder, Music2, Settings, MessageSquare, AppWindow, Plus } from 'lucide-react'

const apps = [
  { id: 'finder', name: 'Finder', icon: <Folder className="w-6 h-6" /> },
  { id: 'browser', name: 'Safari', icon: <Safari className="w-6 h-6" /> },
  { id: 'music', name: 'Music', icon: <Music2 className="w-6 h-6" /> },
  { id: 'messages', name: 'Nachrichten', icon: <MessageSquare className="w-6 h-6" /> },
  { id: 'settings', name: 'Einstellungen', icon: <Settings className="w-6 h-6" /> },
]

export default function Dock({ onOpen }) {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-40">
      <div className="backdrop-blur-2xl bg-slate-900/40 rounded-2xl border border-white/10 px-3 py-2 shadow-2xl">
        <div className="flex items-end gap-3">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpen?.(app.id)}
              className="group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="text-slate-100">
                {app.icon}
              </div>
              <div className="absolute -bottom-2 text-[10px] text-slate-200/80 opacity-0 group-hover:opacity-100 transition-opacity">{app.name}</div>
            </button>
          ))}
          <button className="w-14 h-14 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-100">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
