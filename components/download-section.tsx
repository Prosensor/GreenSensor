"use client"

import { forwardRef, useRef, useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { WifiIcon } from "@/components/wifi-icon"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

// Hook personnalisé pour la taille de la fenêtre
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

// Composant AnimatedBeam
interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
  containerRef: React.RefObject<HTMLElement | null>
  gradientStartColor?: string
  gradientStopColor?: string
  pathColor?: string
  pathWidth?: number
  curvature?: number
  endYOffset?: number
  reverse?: boolean
  duration?: number
  isDotted?: boolean
}

function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  gradientStartColor = "#fff",
  gradientStopColor = "#fff",
  pathColor = "#fff",
  pathWidth = 1,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
  duration = 2.5,
  isDotted = false,
}: AnimatedBeamProps) {
  const [path, setPath] = useState("")
  const [gradientId] = useState(`gradient-${Math.random().toString(36).substring(2, 9)}`)
  const [pathLength, setPathLength] = useState(0)
  const pathRef = useRef<SVGPathElement>(null)
  const windowSize = useWindowSize()

  const calculatePath = useCallback(() => {
    if (!fromRef.current || !toRef.current || !containerRef.current) return ""

    const fromRect = fromRef.current.getBoundingClientRect()
    const toRect = toRef.current.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()

    const from = {
      x: fromRect.left + fromRect.width / 2 - containerRect.left,
      y: fromRect.top + fromRect.height / 2 - containerRect.top,
    }

    const to = {
      x: toRect.left + toRect.width / 2 - containerRect.left,
      y: toRect.top + toRect.height / 2 - containerRect.top + endYOffset,
    }

    const midX = (from.x + to.x) / 2
    const midY = (from.y + to.y) / 2 + curvature

    return `M ${from.x},${from.y} Q ${midX},${midY} ${to.x},${to.y}`
  }, [fromRef, toRef, containerRef, curvature, endYOffset])

  useEffect(() => {
    const updatePath = () => {
      const newPath = calculatePath()
      setPath(newPath)

      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength())
      }
    }

    updatePath()
  }, [calculatePath, windowSize])

  const dataPacketLength = isDotted ? 8 : pathLength / 5
  const dataGapLength = isDotted ? 12 : pathLength / 5

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 0 }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0.2" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <path ref={pathRef} d={path} fill="none" stroke="transparent" strokeWidth={0} />

      <path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth * 1.5}
        strokeDasharray={`${dataPacketLength}, ${dataGapLength}`}
        strokeDashoffset={pathLength}
        style={{
          animation: `${reverse ? "dataPacketReverse" : "dataPacket"} ${duration}s linear infinite`,
        }}
      />

      <style jsx>{`
        @keyframes dataPacket {
          from {
            stroke-dashoffset: ${pathLength};
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes dataPacketReverse {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: ${pathLength};
          }
        }
      `}</style>
    </svg>
  )
}

// Composant DataTransferAnimation
interface DataTransferAnimationProps {
  containerRef: React.RefObject<HTMLElement | null>
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
}

function DataTransferAnimation({ containerRef, fromRef, toRef }: DataTransferAnimationProps) {
  const [positions, setPositions] = useState({ from: { x: 0, y: 0 }, to: { x: 0, y: 0 } })
  const windowSize = useWindowSize()

  useEffect(() => {
    const updatePositions = () => {
      if (!fromRef.current || !toRef.current || !containerRef.current) return

      const fromRect = fromRef.current.getBoundingClientRect()
      const toRect = toRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      setPositions({
        from: {
          x: fromRect.left + fromRect.width / 2 - containerRect.left,
          y: fromRect.top - containerRect.top,
        },
        to: {
          x: toRect.left + toRect.width / 2 - containerRect.left,
          y: toRect.top + toRect.height / 2 - containerRect.top,
        },
      })
    }

    updatePositions()
  }, [fromRef, toRef, containerRef, windowSize])

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 0 }}>
      {[0, 1, 2].map((index) => (
        <g
          key={index}
          className="data-packet"
          style={{
            animation: `movePacketUp${index} 2s infinite ${index * 0.6}s`,
            transformOrigin: `${positions.from.x}px ${positions.from.y}px`,
          }}
        >
          <rect
            x={positions.from.x - 8}
            y={positions.from.y - 8}
            width={16}
            height={16}
            rx={4}
            fill="#3eab35"
            opacity={0.8}
          />
        </g>
      ))}

      <style jsx>{`
        @keyframes movePacketUp0 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, ${positions.to.y - positions.from.y}px) scale(1);
            opacity: 0;
          }
        }
        @keyframes movePacketUp1 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, ${positions.to.y - positions.from.y}px) scale(1);
            opacity: 0;
          }
        }
        @keyframes movePacketUp2 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, ${positions.to.y - positions.from.y}px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  )
}

// Composant Circle
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; imageUrl?: string }>(
  ({ className, children, imageUrl }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="Sonde" className="max-h-full max-w-full object-contain" />
        ) : (
          children
        )}
      </div>
    )
  },
)

Circle.displayName = "Circle"

// Composant CloudPlatform
const CloudPlatform = forwardRef<HTMLDivElement, { className?: string; imageUrl: string }>(
  ({ className, imageUrl }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-[150px] w-[250px] items-center justify-center rounded-lg border-2 bg-white p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        <img
          src={imageUrl}
          alt="Plateforme Cloud"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    )
  },
)

CloudPlatform.displayName = "CloudPlatform"

// Composant principal
export function DownloadSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const cloudRef = useRef<HTMLDivElement>(null)

  const scrollToDemo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <AnimatedSection id="architecture" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Contenu explicatif */}
          <div className="w-full max-w-xl space-y-6 p-8 lg:w-1/2">
            <motion.h2 
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Solution pour le <span className="text-[#3eab35]">Suivi du Compostage</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Notre système intégré combine des sondes de température sans fil de haute précision, une connectivité sécurisée et une
              plateforme cloud puissante pour un suivi en temps réel de vos processus de compostage.
            </motion.p>
            <motion.ul 
              className="space-y-2 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-[#3eab35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sondes sans fil précises à ±0.5°C
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-[#3eab35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Transmission de données sécurisée et fiable
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-[#3eab35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Alertes et rapports automatisés
              </li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-[#3eab35] text-white hover:bg-[#dd234b]"
                onClick={scrollToDemo}
              >
                Demander une présentation
              </Button>
            </motion.div>
          </div>

          {/* Démonstration visuelle */}
          <motion.div
            className="relative flex h-[700px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-white p-8 shadow-xl lg:w-1/2"
            ref={containerRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex size-full flex-col items-center justify-between">
              {/* Plateforme Cloud */}
              <div className="flex w-full justify-center pt-0">
                <CloudPlatform
                  ref={cloudRef}
                  className="border-[#d5f5e3]"
                  imageUrl="/dashboard.png"
                />
              </div>

              {/* Routeur */}
              <div className="flex w-full justify-center">
                <Circle ref={div4Ref} className="size-24 border-[#d5f5e3]">
                  <img
                    src="/router.png"
                    alt="Routeur"
                    className="max-h-full max-w-full object-contain"
                  />
                </Circle>
              </div>

              {/* Sondes */}
              <div className="flex w-full max-w-[400px] flex-col gap-12 pb-8">
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div1Ref}
                    className="border-[#d5f5e3]"
                    imageUrl="/sonde.png"
                  />
                  <Circle
                    ref={div5Ref}
                    className="border-[#d5f5e3]"
                    imageUrl="/sonde.png"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div2Ref}
                    className="border-[#d5f5e3]"
                    imageUrl="/sonde.png"
                  />
                  <Circle
                    ref={div6Ref}
                    className="border-[#d5f5e3]"
                    imageUrl="/sonde.png"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div3Ref}
                    className="border-[#d5f5e3]"
                    imageUrl="/sonde.png"
                  />
                  <Circle
                    ref={div7Ref}
                    className="border-[#d5f5e3]"
                    imageUrl="/sonde.png"
                  />
                </div>
              </div>
            </div>

            {/* Beams des sondes vers le routeur */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-70}
              endYOffset={-15}
              pathWidth={2}
              gradientStartColor="#3eab35"
              gradientStopColor="#186a3b"
              pathColor="#3eab35"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
              pathWidth={2}
              gradientStartColor="#3eab35"
              gradientStopColor="#186a3b"
              pathColor="#3eab35"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={70}
              endYOffset={15}
              pathWidth={2}
              gradientStartColor="#3eab35"
              gradientStopColor="#186a3b"
              pathColor="#3eab35"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={-70}
              endYOffset={-15}
              pathWidth={2}
              gradientStartColor="#3eab35"
              gradientStopColor="#186a3b"
              pathColor="#3eab35"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              pathWidth={2}
              gradientStartColor="#3eab35"
              gradientStopColor="#186a3b"
              pathColor="#3eab35"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              curvature={70}
              endYOffset={15}
              pathWidth={2}
              gradientStartColor="#3eab35"
              gradientStopColor="#186a3b"
              pathColor="#3eab35"
              duration={1.2}
              isDotted={true}
            />

            {/* Animation de transfert de données du routeur vers le cloud */}
            <DataTransferAnimation containerRef={containerRef} fromRef={div4Ref} toRef={cloudRef} />

            {/* Icônes Wifi */}
            <WifiIcon containerRef={containerRef} sourceRef={div1Ref} color="#3eab35" />
            <WifiIcon containerRef={containerRef} sourceRef={div2Ref} color="#3eab35" />
            <WifiIcon containerRef={containerRef} sourceRef={div3Ref} color="#3eab35" />
            <WifiIcon containerRef={containerRef} sourceRef={div5Ref} color="#3eab35" />
            <WifiIcon containerRef={containerRef} sourceRef={div6Ref} color="#3eab35" />
            <WifiIcon containerRef={containerRef} sourceRef={div7Ref} color="#3eab35" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

