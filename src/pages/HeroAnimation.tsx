import { motion } from "framer-motion";
import {
  Atom,
  Smartphone,
  FileCode2,
  Server,
  Layout,
  Database,
  Flame,
  Zap,
  Send,
  PenTool,
  Cpu,
  Code2
} from "lucide-react";
import React from "react";

export function HeroAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Orbits */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Inner Orbit Ring */}
        <div className="absolute w-[280px] h-[280px] rounded-full border border-blue-500/20 border-dashed animate-[spin_60s_linear_infinite]" />

        {/* Outer Orbit Ring */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-purple-500/10 border-dotted hidden md:block animate-[spin_80s_linear_infinite_reverse]" />
      </div>

      {/* Central Core */}
      <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 backdrop-blur-sm border border-white/10">
        <Cpu className="text-white w-10 h-10" />
      </div>

      {/* Orbiting Tech Stack - Inner Circle (Core Dev) */}
      <OrbitingIcons
        radius={140}
        duration={40}
        items={[
          { icon: <Atom />, label: "React", color: "text-cyan-400" },
          { icon: <Layout />, label: "Next.js", color: "text-white" },
          { icon: <FileCode2 />, label: "TypeScript", color: "text-blue-400" },
          { icon: <Smartphone />, label: "Flutter", color: "text-blue-300" },
          { icon: <Code2 />, label: "Dart", color: "text-cyan-300" },
          { icon: <Server />, label: "NestJS", color: "text-red-400" },
        ]}
      />

      {/* Orbiting Tech Stack - Outer Circle (Tools & Data) - Hidden on mobile to prevent clutter */}
      <div className="hidden md:block">
        <OrbitingIcons
          radius={220}
          duration={50}
          reverse
          items={[
            { icon: <Database />, label: "Postgres", color: "text-blue-300" },
            { icon: <Flame />, label: "Firebase", color: "text-orange-400" },
            { icon: <Zap />, label: "Supabase", color: "text-emerald-400" },
            { icon: <Send />, label: "Postman", color: "text-orange-500" },
            { icon: <PenTool />, label: "Figma", color: "text-purple-400" },
          ]}
        />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-10 pointer-events-none mix-blend-overlay">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-blue-400/30 rounded-full mx-auto my-auto shadow-[0_0_4px_1px_rgba(96,165,250,0.4)]" />
        ))}
      </div>
    </div>
  );
}

interface TechItem {
  icon: React.ReactNode;
  label: string;
  color: string;
}

function OrbitingIcons({ radius, duration, items, reverse = false }: { radius: number, duration: number, items: TechItem[], reverse?: boolean }) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 w-0 h-0"
    >
      {items.map((item, index) => {
        const angle = (index / items.length) * 360;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <motion.div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center group cursor-pointer"
            style={{
              left: x,
              top: y,
            }}
          >
            {/* Counter-rotate the icon container so text/icon stays upright */}
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="relative w-12 h-12 bg-[#181b25] border border-white/10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                <div className={`w-6 h-6 ${item.color}`}>
                  {item.icon}
                </div>

                {/* Tooltip Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-black/80 text-xs font-medium text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                  {item.label}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
