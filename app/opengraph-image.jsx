import { ImageResponse } from "next/og";

export const alt = "College counseling for students who build things.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 84px",
          background: "#0f2440",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ color: "#b4521f", fontSize: 22, letterSpacing: 4, fontWeight: 700 }}>
          LAUNCH EDUCATIONAL CONSULTING
        </div>
        <div style={{ marginTop: 32, fontSize: 68, lineHeight: 1.14, fontWeight: 600, maxWidth: 980 }}>
          College counseling for students who build things.
        </div>
      </div>
    ),
    size,
  );
}
