// src/lib/data.ts
// export const projects = [
//   {
//     id: "mashreq",
//     label: "Fintech · Enterprise",
//     title: "Mashreq Bank — Retail & Corporate Banking Portal",
//     summary:
//       "Banking portal with micro frontends for retail and corporate customers, built with React, TypeScript, Nx and Azure.",
//     outcomes: [
//       "Cut response times on key journeys by ~90%",
//       "Increased engagement on core dashboards by ~80%",
//       "Led a team of 6 frontend engineers",
//     ],
//     stack: ["React", "TypeScript", "Nx", "Azure", "Micro frontends"],
//   },
//   {
//     id: "repos",
//     label: "Energy · Logistics",
//     title: "Repos Energy — Fleet & Fuel Management Platform",
//     summary:
//       "End-to-end platform for energy distribution, logistics orchestration, and operational analytics.",
//     outcomes: [
//       "Architected core web portal with React & Node",
//       "Implemented secure integrations & internal tools",
//       "Recognised as “Best Developer” 3 years in a row",
//     ],
//     stack: ["React", "Node.js", "AWS", "REST APIs"],
//   },
//   {
//     id: "emberstone",
//     label: "Brand · Commerce",
//     title: "Emberstone Lifestyle — D2C Brand & Commerce",
//     summary:
//       "Scalable foundation for a lifestyle brand with focus on UX, design system and experimentation speed.",
//     outcomes: [
//       "Defined frontend & backend architecture on AWS",
//       "Built reusable UI system for rapid experiments",
//       "Optimised for fast page loads & lean bundles",
//     ],
//     stack: ["React", "Node.js", "AWS", "Design systems"],
//   },
// ];

export const experience = [
  {
    period: "2022 – 2025",
    role: "Senior Frontend Developer",
    company: "Mashreq Bank · Dubai",
    bullets: [
      "Owned micro frontend architecture for retail and corporate banking portals.",
      "Focused on performance, internationalisation and frontend quality at scale.",
      "Collaborated with cloud, backend and product teams in agile squads.",
    ],
  },
  {
    period: "2019 – 2022",
    role: "Associate Lead – Full Stack",
    company: "Repos Energy India · Pune",
    bullets: [
      "Led frontend and backend delivery with React, Node and AWS.",
      "Reduced response times by ~90% and improved engagement on core flows.",
      "Awarded “Best Developer” for 3 consecutive years.",
    ],
  },
  {
    period: "2018 – 2019",
    role: "Web Developer",
    company: "SuperSourcing · Pune",
    bullets: [
      "Built responsive portals with AngularJS, HTML5, CSS3 and REST APIs.",
      "Worked closely with designers to ship consistent UX across devices.",
    ],
  },
];

export const skills = {
  core: [
    "React, Next.js, TypeScript",
    "Micro frontends, architecture, Nx monorepos",
    "Design systems, component libraries, UI patterns",
    "Performance tuning: Core Web Vitals, bundle & TTI optimisation",
  ],
  backendAndCloud: [
    "Node.js, Express.js, REST APIs",
    "MongoDB, MySQL, Redis",
    "Secure API design, authentication & authorisation",
    "AWS (EC2, S3), Azure, Docker, CI/CD pipelines",
  ],
  leadership: [
    "Leading teams of 4–6 engineers",
    "Code reviews, mentoring and pairing",
    "Breaking down fuzzy requirements into shippable work",
    "Working directly with product, design and business stakeholders",
  ],
};

export const principles = [
  {
    title: "Performance as product behaviour",
    body: "Fast isn’t a nice-to-have in fintech. I treat performance as behaviour — measuring, profiling and optimising flows that move money or drive decisions.",
  },
  {
    title: "Systems over one-off screens",
    body: "I design micro frontends, UI kits and shared tooling so teams move faster without throwing quality away on every sprint.",
  },
  {
    title: "Ownership, not just tickets",
    body: "From debugging production incidents to pushing back on risky scope, I prefer owning outcomes instead of simply closing Jira tickets.",
  },
];

// src/lib/data.ts
// export const projects = [
//   {
//     id: "mashreq",
//     label: "Fintech · Enterprise",
//     title: "Mashreq Bank — Retail & Corporate Banking Portal",
//     summary:
//       "Banking portal with micro frontends for retail and corporate customers, built with React, TypeScript, Nx and Azure.",
//     outcomes: [
//       "Cut response times on key journeys by ~90%",
//       "Increased engagement on core dashboards by ~80%",
//       "Led a team of 6 frontend engineers",
//     ],
//     stack: ["React", "TypeScript", "Nx", "Azure", "Micro frontends"],
//     links: [
//       {
//         label: "Retail lending experience",
//         href: "https://digital.mashreqbank.com/lending-app-client/signup",
//       },
//     ],
//   },
//   {
//     id: "repos",
//     label: "Energy · Logistics",
//     title: "Repos Energy — Fleet & Fuel Management Platform",
//     summary:
//       "End-to-end platform for energy distribution, logistics orchestration, and operational analytics.",
//     outcomes: [
//       "Architected core web portal with React & Node",
//       "Implemented secure integrations & internal tools",
//       "Recognised as “Best Developer” 3 years in a row",
//     ],
//     stack: ["React", "Node.js", "AWS", "REST APIs"],
//     links: [
//       {
//         label: "Customer portal",
//         href: "https://customer.reposenergy.com/login",
//       },
//       {
//         label: "Partner portal",
//         href: "https://partner.reposenergy.com/login",
//       },
//       {
//         label: "Admin portal",
//         href: "https://portal.reposenergy.com/login",
//       },
//     ],
//   },
//   // emberstone project as-is, ya usme bhi live link ho to add
// ];

export const projects = [
  {
    id: "mashreq",
    label: "Fintech · Enterprise",
    title: "Mashreq Bank — Retail & Corporate Banking Portal",
    summary:
      "Retail & corporate banking portal serving UAE customers using micro frontends built with React, TypeScript, Nx and Azure.",
    outcomes: [
      "Cut response times on key journeys by ~90%",
      "Increased engagement by ~80%",
      "Led frontend team of 6 engineers"
    ],
    stack: ["React", "TypeScript", "Nx", "Azure"],
    links: [
      {
        label: "Live experience",
        href: "https://digital.mashreqbank.com/lending-app-client/signup",
      },
    ],
    screenshots: [
      "/work/mashreq/1.png"
    ]
  },

  {
    id: "repos",
    label: "Energy · Logistics",
    title: "Repos Energy — Fleet & Fuel Management",
    summary:
      "Customer, partner and admin portals powering fleet tracking and fuel logistics across India.",
    outcomes: [
      "Built React + Node ecosystem",
      "Optimized performance",
      "Awarded Best Developer (3x)"
    ],
    stack: ["React", "Node.js", "AWS"],
    links: [
      { label: "Customer", href: "https://customer.reposenergy.com/login" },
      { label: "Partner", href: "https://partner.reposenergy.com/login" },
      { label: "Admin", href: "https://portal.reposenergy.com/login" },
    ],
    screenshots: [
      "/work/repos/1.png",
      "/work/repos/2.png",
      "/work/repos/3.png"
    ]
  },
  {
    id: "emberstone",
    label: "Brand · Commerce",
    title: "Emberstone Lifestyle — D2C Brand & Commerce",
    summary:
      "Scalable foundation for a lifestyle brand with focus on UX, design system and experimentation speed.",
    outcomes: [
      "Defined frontend & backend architecture on AWS",
      "Built reusable UI system for rapid experiments",
      "Optimised for fast page loads & lean bundles",
    ],
    stack: ["React", "Node.js", "AWS", "Design systems"],
    links: [
      {label: "visit emberstone", href: "https://emberstone.life"}
    ]
  },
];