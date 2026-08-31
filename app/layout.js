import "./globals.css";

export const metadata = {
  title: "Deploy Desk Studio — Where Every Frame Tells a Story",
  description:
    "Premium video editing, color grading, motion graphics & sound design. Deploy Desk Studio transforms raw footage into cinematic masterpieces.",
  keywords: "video editing, color grading, motion graphics, sound design, video production, cinematic",
  openGraph: {
    title: "Deploy Desk Studio — Where Every Frame Tells a Story",
    description:
      "Premium video editing, color grading, motion graphics & sound design.",
    type: "website",
  },
};

import Preloader from "../components/Preloader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
