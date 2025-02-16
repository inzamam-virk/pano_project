"use client"

import { useEffect, useRef } from "react"

export function CircularTimer({ time }: { time: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up the circle properties
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 80
    const strokeWidth = 8

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = "#333"
    ctx.lineWidth = strokeWidth
    ctx.stroke()

    // Draw progress circle (example: 75% complete)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, 2 * Math.PI * 0.75 - Math.PI / 2)
    ctx.strokeStyle = "#FF6B00"
    ctx.lineWidth = strokeWidth
    ctx.stroke()

    // Draw center text
    ctx.fillStyle = "#fff"
    ctx.font = "bold 24px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(time, centerX, centerY)
  }, [time])

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={200} height={200} className="h-48 w-48" />
    </div>
  )
}

