"use client"

import { useEffect, useState } from "react"

interface WifiIconProps {
  containerRef: React.RefObject<HTMLElement | null>
  sourceRef: React.RefObject<HTMLElement | null>
  color?: string
}

export function WifiIcon({ containerRef, sourceRef, color = "#4ade80" }: WifiIconProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const updatePosition = () => {
      if (!sourceRef.current || !containerRef.current) return

      const sourceRect = sourceRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      setPosition({
        x: sourceRect.left + sourceRect.width / 2 - containerRect.left,
        y: sourceRect.top + sourceRect.height / 2 - containerRect.top,
      })
    }

    updatePosition()
  }, [sourceRef, containerRef, windowSize])

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 1 }}>
      {/* Point central */}
      <circle cx={position.x} cy={position.y - 20} r={3} fill={color} />

      {/* Arcs de signal - statiques */}
      {[15, 25, 35].map((radius) => (
        <path
          key={radius}
          d={`M ${position.x - radius},${position.y - 20} 
              a ${radius},${radius} 0 0 1 ${radius * 2},0`}
          fill="none"
          stroke={color}
          strokeWidth={2}
          opacity={0.7}
        />
      ))}
    </svg>
  )
} 