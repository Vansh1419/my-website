import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 32, color: "#34d399" }}>Portfolio</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 44, color: "#a1a1aa", marginTop: 16 }}>{profile.role}</div>
      </div>
    ),
    size,
  );
}
