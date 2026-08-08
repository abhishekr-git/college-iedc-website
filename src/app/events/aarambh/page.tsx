import { Metadata } from "next";
import { AarambhClient } from "./AarambhClient";

export const metadata: Metadata = {
  title: "Aarambh 3.0 | Flagship Innovation Summit",
  description: "Experience Aarambh 3.0, CEKNPY's signature multi-track entrepreneurial summit featuring HackCraft 24h hackathon, IgnitePitch VC arena, and Maker Expo.",
};

export default function AarambhPage() {
  return <AarambhClient />;
}
