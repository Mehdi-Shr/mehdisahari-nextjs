"use client";

import { motion } from "framer-motion";

/*
  Full SVG workflow schema — nodes, icons, edges, pulses.
  Everything in one SVG viewBox for pixel-perfect alignment.
*/

const W = 700;
const H = 260;
const NW = 86;
const NH = 54;
const R = 12;

interface WNode {
  id: number;
  cx: number;
  cy: number;
  label: string;
  icon: string; // SVG path data (stroke icons, 24x24 viewBox)
  delay: number;
}

// Lucide icon paths (24x24 viewBox)
const nodes: WNode[] = [
  {
    id: 1, cx: 80, cy: 130, label: "CRM", delay: 0.5,
    // Database
    icon: "M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v14c0 1.657-4.03 3-9 3s-9-1.343-9-3V5m18 7c0 1.657-4.03 3-9 3s-9-1.343-9-3",
  },
  {
    id: 2, cx: 260, cy: 60, label: "n8n", delay: 0.8,
    // GitBranch
    icon: "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-6c0-3.314 2.686-6 6-6h3",
  },
  {
    id: 3, cx: 260, cy: 200, label: "Email", delay: 0.9,
    // Mail
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm16 2-8 5-8-5",
  },
  {
    id: 4, cx: 440, cy: 130, label: "IA", delay: 1.1,
    // Brain
    icon: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18ZM12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18ZM12 5v13M9.5 8h5M8 14h8",
  },
  {
    id: 5, cx: 620, cy: 60, label: "Rapport", delay: 1.4,
    // BarChart3
    icon: "M3 3v18h18M7 16v-4m4 4V8m4 8v-6m4 6v-2",
  },
  {
    id: 6, cx: 620, cy: 200, label: "Slack", delay: 1.5,
    // MessageSquare
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
];

const edges = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 4, to: 6 },
];

function getNode(id: number) {
  return nodes.find((n) => n.id === id)!;
}

function edgePath(fromId: number, toId: number) {
  const f = getNode(fromId);
  const t = getNode(toId);
  const x1 = f.cx + NW / 2;
  const y1 = f.cy;
  const x2 = t.cx - NW / 2;
  const y2 = t.cy;
  const dx = (x2 - x1) * 0.45;
  return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
}

export default function WorkflowAnimation() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-3xl mx-auto hidden md:block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="wf-glow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Edges */}
      {edges.map((e, i) => (
        <motion.path
          key={`e${i}`}
          d={edgePath(e.from, e.to)}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* Pulses */}
      {edges.map((e, i) => {
        const d = edgePath(e.from, e.to);
        return (
          <motion.circle
            key={`p${i}`}
            r={3.5}
            fill="#60a5fa"
            filter="url(#wf-glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] } as never}
            transition={{ duration: 1.6, delay: 2 + i * 0.45, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((n) => (
        <motion.g
          key={n.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: n.delay }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        >
          {/* Background */}
          <rect
            x={n.cx - NW / 2} y={n.cy - NH / 2}
            width={NW} height={NH} rx={R} ry={R}
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth={1}
          />

          {/* Icon (24x24 scaled to 16x16, centered above label) */}
          <g
            transform={`translate(${n.cx - 8},${n.cy - 17}) scale(0.667)`}
            stroke="rgba(96,165,250,0.9)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d={n.icon} />
          </g>

          {/* Label */}
          <text
            x={n.cx} y={n.cy + 19}
            textAnchor="middle" dominantBaseline="central"
            fill="rgba(255,255,255,0.65)"
            fontSize={10}
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontWeight={500}
          >
            {n.label}
          </text>

          {/* Connectors */}
          <circle cx={n.cx - NW / 2} cy={n.cy} r={2.5} fill="rgba(96,165,250,0.45)" />
          <circle cx={n.cx + NW / 2} cy={n.cy} r={2.5} fill="rgba(96,165,250,0.45)" />
        </motion.g>
      ))}
    </svg>
  );
}
