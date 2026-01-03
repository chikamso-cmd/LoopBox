import React from "react";
import { LayoutGrid, Fingerprint, Sparkles } from "lucide-react";
import { ScreenType, OnboardingStep } from "./types";

export const COLORS = {
  primary: "#002B7F",
  secondary: "#D4A056",
  accent: "#F1F5F9",
  text: "#111827",
  muted: "#6B7280",
};

export const ONBOARDING_STEPS = [
  {
    id: ScreenType.WELCOME,
    title: "Financial Goals,\nAchieved Together.",
    description:
      "Transform individual savings into community power. Loop Box automates your contributions so you never miss a beat.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    buttonLabel: "Join the Loop",
  },
  {
    id: ScreenType.TRACK,
    title: "Transparent from\nthe First Cent.",
    description:
      "Real-time ledger updates mean everyone in the box stays informed. No more awkward manual tracking or spreadsheets.",
    icon: <LayoutGrid size={72} strokeWidth={1.5} className="text-[#002B7F]" />,
    buttonLabel: "See How It Works",
  },
  {
    id: ScreenType.SECURE,
    title: "Your Security is our\nCore Priority.",
    description:
      "Biometric locks and multi-tier encryption protect every penny. We use bank-grade protocols to keep your circle safe.",
    icon: (
      <Fingerprint size={72} strokeWidth={1.5} className="text-[#002B7F]" />
    ),
    buttonLabel: "Next",
  },
  {
    id: ScreenType.READY,
    title: "Start Building Your\nWealth Circle.",
    description:
      "Invite friends, set your targets, and watch the box grow. Your financial journey is better when shared.",
    icon: <Sparkles size={72} strokeWidth={1.5} className="text-[#002B7F]" />,
    buttonLabel: "Launch Loop Box",
  },
];
