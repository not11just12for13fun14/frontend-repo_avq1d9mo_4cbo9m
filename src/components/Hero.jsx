import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center pointer-events-none">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
            Liquid iOS 25 — Minimal, Modern, Fluid
          </h1>
          <p className="mt-4 text-slate-200/80 text-base md:text-lg">
            Eine spielerische, interaktive Oberfläche, die sich wie ein Betriebssystem anfühlt — direkt im Browser.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
    </section>
  )
}
