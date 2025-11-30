// lib/data.ts
export const projects = [
  {
    id: "mashreq",
    label: "Fintech · Enterprise",
    title: "Mashreq Bank – Retail & Corporate Banking Portal",
    summary:
      "Micro frontend architecture for high-traffic banking flows, built with React, TypeScript, Nx & Azure.",
    outcomes: [
      "↓ 90% response times on key journeys",
      "↑ 80% engagement on critical dashboard modules",
      "Led team of 6 developers across frontend delivery"
    ],
    stack: ["React", "TypeScript", "Nx", "Azure", "Micro frontends"]
  },
  {
    id: "repos",
    label: "Energy · Logistics",
    title: "Repos Energy – Full-stack Fleet & Fuel Management",
    summary:
      "End-to-end web platform for energy distribution, logistics orchestration, and analytics.",
    outcomes: [
      "Architected core web portal with React & Node",
      "Designed secure integrations and internal tooling",
      "Awarded 'Best Developer' 3 years in a row"
    ],
    stack: ["React", "Node.js", "AWS", "REST APIs"]
  },
  {
    id: "emberstone",
    label: "Brand · E-commerce",
    title: "Emberstone Lifestyle – Commerce & Brand Platform",
    summary:
      "Founder-led initiative designing a scalable web architecture for an apparel & lifestyle brand.",
    outcomes: [
      "Designed microservices-inspired architecture with Node & React",
      "Deployed on AWS with CI/CD for quick experiments",
      "Focus on performance and brand-first UX"
    ],
    stack: ["React", "Node.js", "AWS", "Design systems"]
  }
];

export const skills = {
  frontend: [
    "React · Next.js · TypeScript",
    "Micro frontends · Nx · Module boundaries",
    "Design systems & component libraries",
    "Performance: Core Web Vitals, bundle optimization"
  ],
  backend: [
    "Node.js · Express.js · REST APIs",
    "MongoDB · MySQL · Redis",
    "AuthN/AuthZ, secure API design",
    "AWS (EC2, S3) · Azure · Docker · CI/CD"
  ],
  leadership: [
    "Leading teams of 4–6 engineers",
    "Code reviews, pairing, mentoring",
    "Breaking down requirements & delivery planning",
    "Stakeholder communication in fintech & enterprise"
  ]
};

export const timeline = [
  {
    period: "2018 – 2019",
    role: "Web Developer",
    company: "SuperSourcing · Pune",
    details: [
      "Built responsive web portals using AngularJS, HTML5, CSS3",
      "Integrated REST APIs and optimized UX across devices"
    ]
  },
  {
    period: "2019 – 2022",
    role: "Associate Lead – Full Stack",
    company: "Repos Energy India · Pune",
    details: [
      "Led frontend and backend delivery with React & Node",
      "Reduced response times by ~90% and boosted engagement",
      "Recognized as 'Best Developer' for 3 consecutive years"
    ]
  },
  {
    period: "2022 – 2025",
    role: "Senior Frontend Developer",
    company: "Mashreq Bank · Dubai",
    details: [
      "Architected micro frontends for retail & corporate banking",
      "Owned performance, internationalization, and FE quality",
      "Worked in cross-functional squads with cloud & backend teams"
    ]
  }
];

export const principles = [
  {
    title: "Performance as a product feature",
    body: "Users don't ask for fast apps; they assume them. I treat performance as core UX, profiling, measuring, and optimizing critical paths."
  },
  {
    title: "Systems, not one-off pages",
    body: "I prefer building composable systems—design systems, micro frontends, shared tooling—so teams ship consistently without reinventing patterns."
  },
  {
    title: "Ownership beyond tickets",
    body: "I’m comfortable owning outcomes: debugging production, clarifying ambiguous requirements, and pushing back when scope hurts quality."
  }
];