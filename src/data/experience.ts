export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  focus: string;
  logo: string;
  logoTheme?: string;
  url?: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "PhAI Labs",
    role: "Research Intern",
    period: "Sep 2026 — now",
    focus: "LLM agents for science",
    logo: "/brands/phai-labs.png",
    logoTheme: "dark",
    url: "https://phai-labs.com/en/",
  },
  {
    company: "JD",
    role: "JD Retail · Intern",
    period: "Jul 2026 — Sep 2026",
    focus: "Sparse-view 3D/4D reconstruction for XR",
    logo: "/brands/jd.png",
    url: "https://www.jd.com/",
  },
];
