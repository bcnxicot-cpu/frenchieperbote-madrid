import { ImageResponse } from "next/og";

export const alt = "Frenchieperbote — peluquería canina y formación";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#1644d5", color: "#fff", padding: "70px", fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "74%" }}>
        <div style={{ display: "flex", fontSize: 24, fontWeight: 800, letterSpacing: 5 }}>FRENCHIEPERBOTE</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, lineHeight: .86, fontWeight: 900, letterSpacing: -5 }}>
          <span>CADA PERRO</span><span>TIENE SU MANERA</span><span>DE ESTAR GUAPO.</span>
        </div>
        <div style={{ display: "flex", fontSize: 22 }}>Peluquería canina · Formación · Madrid</div>
      </div>
      <div style={{ position: "absolute", right: -90, top: 80, width: 390, height: 390, borderRadius: "50%", background: "#f3dd14" }} />
      <div style={{ position: "absolute", right: 70, bottom: 55, padding: "20px 30px", background: "#ff5c45", color: "#111214", fontSize: 38, fontWeight: 900, transform: "rotate(-5deg)" }}>4,9 / 5</div>
    </div>,
    size,
  );
}
