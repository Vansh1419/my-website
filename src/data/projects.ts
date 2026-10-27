export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  notionUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "RAG Document Intelligence Chatbot",
    description:
      "Conversational search across uploaded documents for internal teams. Cut document analysis time by 90%.",
    tech: ["LangChain", "FastAPI", "RAG"],
  },
  {
    title: "Custom ATS Evaluation Pipeline",
    description:
      "Role-specific scoring engine for resume evaluation. Cut manual screening by 70% for hiring stakeholders.",
    tech: ["AI", "Automation"],
  },
  {
    title: "GCS Defence Platform",
    description:
      "Ground Control System app for drones with live telemetry and mapping. Part of the team that won the DRDO iDEX competition.",
    tech: ["React Native", "MAVLink", "Mapbox"],
  },
  {
    title: "Multi-integration Config-Switching System",
    description:
      "Onboards new defence units onto the GCS platform with zero downtime, using native modules.",
    tech: ["React Native", "NativeModules"],
  },
  {
    title: "HopeVCare Website",
    description: "A website with 20+ interdependent features.",
    tech: ["React.js", "Supabase"],
  },
];
