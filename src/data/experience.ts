export type Experience = {
  role: string;
  org: string;
  start: string;
  end: string;
  points: string[];
};

// Newest first.
export const experience: Experience[] = [
  {
    role: "Frontend Engineer (Software)",
    org: "Botlab Dynamics, Noida",
    start: "Jun 2025",
    end: "Present",
    points: [
      "Lead development and deployment of an indigenous Ground Control System for the company's new defence vertical.",
      "Deployed a RAG-based document intelligence chatbot for internal teams, from requirement gathering to production. Cut document analysis time by 90%.",
      "Built an ATS and resume evaluation pipeline with role-specific scoring. Reduced manual screening by 70%.",
      "Designed an integration and config-switching system to onboard new defence units onto the GCS platform with zero downtime.",
      "Built a 3-tier QA pipeline (2 manual, 1 automated via SITL and react-jest) for reliable field deployment.",
      "Optimised the app from 289MB to 57.4MB and cut CPU usage from 60% to 35% with Java multithreading.",
      "Designed a path-planning and terrain-mapping feature using RNMapbox and photogrammetry.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Botlab Dynamics, Noida",
    start: "Dec 2023",
    end: "Jun 2025",
    points: [
      "Led 60% of the codebase for a TypeScript React Native GCS app and managed a team of 5. Key contributor to winning the DRDO iDEX competition.",
      "Resolved a critical live-ops crash with a custom throttling hook that stabilised drone telemetry (<100ms) from Java MAVLink to the React Native frontend.",
      "Shipped 60+ animated screens at 60fps using React Native Reanimated, SOLID principles, Redux, useMemo and useCallback.",
      "Integrated field-critical features: media management, screen recording, native module bindings and Mapbox visualisation.",
    ],
  },
  {
    role: "Co-founder & Technical Lead",
    org: "TravelTech & Cloud Kitchen Startups, NIT Srinagar",
    start: "2022",
    end: "2024",
    points: [
      "Scaled two ventures end-to-end: system design, full-stack build (Next.js/Firebase), CMS, order flow and WhatsApp notifications.",
      "Generated ₹20L+ revenue and launched NIT Srinagar's first profitable student venture.",
    ],
  },
  {
    role: "B.Tech, Electrical Engineering",
    org: "National Institute of Technology, Srinagar",
    start: "Oct 2021",
    end: "Jun 2025",
    points: [
      "AIR 28 at Aerothon '23, a national-level drone innovation challenge.",
      "Final-year research on optimisation algorithms in MATLAB/C++.",
    ],
  },
];
