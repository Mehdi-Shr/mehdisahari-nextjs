import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Mehdi Sahari — Consultant en Automatisation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #1d4ed8 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#60a5fa",
            }}
          />
          <span
            style={{
              color: "#93c5fd",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            FREELANCE · MONTPELLIER
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            color: "white",
            fontSize: "86px",
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          Mehdi Sahari
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(147,197,253,0.85)",
            fontSize: "32px",
            fontWeight: 600,
            marginBottom: "50px",
          }}
        >
          Consultant Automatisation & IA
        </div>

        {/* Services */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {["Agents IA & Automatisation n8n", "Création de SaaS & Applications web", "Sites Web · SEO · Dashboards"].map(
            (service) => (
              <div key={service} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: "#3b82f6",
                  }}
                />
                <span style={{ color: "white", fontSize: "22px", fontWeight: 600 }}>{service}</span>
              </div>
            )
          )}
        </div>

        {/* URL badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            background: "rgba(255,255,255,0.11)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "10px",
            padding: "12px 40px",
            alignSelf: "flex-start",
          }}
        >
          <span style={{ color: "white", fontSize: "18px", fontWeight: 700, letterSpacing: "0.04em" }}>
            mehdisahari.fr
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
