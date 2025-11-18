import React from 'react'
import { X, Minus, Maximize2 } from 'lucide-react'

export default function Window({ title, children, onClose, initialPos = { x: 140, y: 140 } }) {
  const winRef = React.useRef(null)
  const [pos, setPos] = React.useState(initialPos)
  const [dragging, setDragging] = React.useState(false)
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })

  const onMouseDown = (e) => {
    if (!winRef.current) return
    setDragging(true)
    const rect = winRef.current.getBoundingClientRect()
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const onMouseMove = (e) => {
    if (!dragging) return
    setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y })
  }

  const onMouseUp = () => setDragging(false)

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  })

  return (
    <div
      ref={winRef}
      style={{ left: pos.x, top: pos.y }}
      className="absolute w-[620px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl bg-slate-900/40 border border-white/10 select-none"
    >
      <div onMouseDown={onMouseDown} className="h-10 bg-white/5 flex items-center px-3 gap-2 cursor-move">
        <div className="flex items-center gap-2 mr-2">
          <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-red-500/90" />
          <button className="w-3.5 h-3.5 rounded-full bg-yellow-400/90" />
          <button className="w-3.5 h-3.5 rounded-full bg-green-500/90" />
        </div>
        <div className="text-sm text-slate-100/90 font-medium tracking-tight">{title}</div>
        <div className="ml-auto flex items-center gap-1 text-slate-300/80">
          <Minus className="w-4 h-4" />
          <Maximize2 className="w-4 h-4" />
          <X className="w-4 h-4" />
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
