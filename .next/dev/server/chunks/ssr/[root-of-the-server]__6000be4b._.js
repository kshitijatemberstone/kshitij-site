module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/data.ts
__turbopack_context__.s([
    "experience",
    ()=>experience,
    "principles",
    ()=>principles,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills
]);
const projects = [
    {
        id: "mashreq",
        label: "Fintech · Enterprise",
        title: "Mashreq Bank — Retail & Corporate Banking Portal",
        summary: "Banking portal with micro frontends for retail and corporate customers, built with React, TypeScript, Nx and Azure.",
        outcomes: [
            "Cut response times on key journeys by ~90%",
            "Increased engagement on core dashboards by ~80%",
            "Led a team of 6 frontend engineers"
        ],
        stack: [
            "React",
            "TypeScript",
            "Nx",
            "Azure",
            "Micro frontends"
        ]
    },
    {
        id: "repos",
        label: "Energy · Logistics",
        title: "Repos Energy — Fleet & Fuel Management Platform",
        summary: "End-to-end platform for energy distribution, logistics orchestration, and operational analytics.",
        outcomes: [
            "Architected core web portal with React & Node",
            "Implemented secure integrations & internal tools",
            "Recognised as “Best Developer” 3 years in a row"
        ],
        stack: [
            "React",
            "Node.js",
            "AWS",
            "REST APIs"
        ]
    },
    {
        id: "emberstone",
        label: "Brand · Commerce",
        title: "Emberstone Lifestyle — D2C Brand & Commerce",
        summary: "Scalable foundation for a lifestyle brand with focus on UX, design system and experimentation speed.",
        outcomes: [
            "Defined frontend & backend architecture on AWS",
            "Built reusable UI system for rapid experiments",
            "Optimised for fast page loads & lean bundles"
        ],
        stack: [
            "React",
            "Node.js",
            "AWS",
            "Design systems"
        ]
    }
];
const experience = [
    {
        period: "2022 – 2025",
        role: "Senior Frontend Developer",
        company: "Mashreq Bank · Dubai",
        bullets: [
            "Owned micro frontend architecture for retail and corporate banking portals.",
            "Focused on performance, internationalisation and frontend quality at scale.",
            "Collaborated with cloud, backend and product teams in agile squads."
        ]
    },
    {
        period: "2019 – 2022",
        role: "Associate Lead – Full Stack",
        company: "Repos Energy India · Pune",
        bullets: [
            "Led frontend and backend delivery with React, Node and AWS.",
            "Reduced response times by ~90% and improved engagement on core flows.",
            "Awarded “Best Developer” for 3 consecutive years."
        ]
    },
    {
        period: "2018 – 2019",
        role: "Web Developer",
        company: "SuperSourcing · Pune",
        bullets: [
            "Built responsive portals with AngularJS, HTML5, CSS3 and REST APIs.",
            "Worked closely with designers to ship consistent UX across devices."
        ]
    }
];
const skills = {
    core: [
        "React, Next.js, TypeScript",
        "Micro frontends, architecture, Nx monorepos",
        "Design systems, component libraries, UI patterns",
        "Performance tuning: Core Web Vitals, bundle & TTI optimisation"
    ],
    backendAndCloud: [
        "Node.js, Express.js, REST APIs",
        "MongoDB, MySQL, Redis",
        "Secure API design, authentication & authorisation",
        "AWS (EC2, S3), Azure, Docker, CI/CD pipelines"
    ],
    leadership: [
        "Leading teams of 4–6 engineers",
        "Code reviews, mentoring and pairing",
        "Breaking down fuzzy requirements into shippable work",
        "Working directly with product, design and business stakeholders"
    ]
};
const principles = [
    {
        title: "Performance as product behaviour",
        body: "Fast isn’t a nice-to-have in fintech. I treat performance as behaviour — measuring, profiling and optimising flows that move money or drive decisions."
    },
    {
        title: "Systems over one-off screens",
        body: "I design micro frontends, UI kits and shared tooling so teams move faster without throwing quality away on every sprint."
    },
    {
        title: "Ownership, not just tickets",
        body: "From debugging production incidents to pushing back on risky scope, I prefer owning outcomes instead of simply closing Jira tickets."
    }
];
}),
"[project]/src/components/section-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/section-header.tsx
__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SectionHeader({ id, eyebrow, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: id,
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/section-header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-space text-xl font-semibold text-slate-50 md:text-2xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/section-header.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-2xl text-sm text-slate-300",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/section-header.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/section-header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/timeline.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/timeline.tsx
__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/section-header.tsx [app-rsc] (ecmascript)");
;
;
;
function Timeline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-8",
        id: "timeline",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                eyebrow: "Journey",
                title: "From Pune to Dubai and back.",
                description: "A quick map of where I’ve been focusing my energy so far."
            }, void 0, false, {
                fileName: "[project]/src/components/timeline.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-l border-slate-800 pl-4 md:pl-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 h-3 w-3 -translate-x-[7px] rounded-full bg-sky-500 shadow-[0_0_18px_rgba(56,189,248,0.9)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/timeline.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 h-3 w-3 -translate-x-[7px] translate-y-[10px] rounded-full bg-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/timeline.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeline"].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400",
                                        children: entry.period
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/timeline.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-slate-50",
                                        children: entry.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/timeline.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-slate-300",
                                        children: entry.company
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/timeline.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[11px] text-slate-300",
                                        children: entry.details.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-[6px] h-1 w-3 rounded-full bg-slate-500/60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/timeline.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: d
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/timeline.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, d, true, {
                                                fileName: "[project]/src/components/timeline.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/timeline.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, entry.period, true, {
                                fileName: "[project]/src/components/timeline.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/timeline.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/timeline.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/timeline.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // src/app/page.tsx
// import { ProfileRail } from "@/components/profile-rail";
// import { SectionWork } from "@/components/section-work";
// import { SectionExperience } from "@/components/section-experience";
// import { SectionSkills } from "@/components/section-skills";
// import { SectionPrinciples } from "@/components/section-principles";
// import { SectionContact } from "@/components/section-contact";
// export default function HomePage() {
//   return (
//     <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
//       <ProfileRail />
//       <div className="space-y-16 md:space-y-20">
//         <SectionWork />
//         <SectionExperience />
//         <SectionSkills />
//         <SectionPrinciples />
//         <SectionContact />
//       </div>
//     </div>
//   );
// }
// import { HeroRecord } from "@/components/HeroRecord";
// import { WorkLogs } from "@/components/WorkLogs";
// export default function Home() {
//   return (
//     <main className="space-y-32">
//       <HeroRecord />
//       <WorkLogs />
//     </main>
//   );
// }
// src/app/page.tsx
// src/app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline.tsx [app-rsc] (ecmascript)");
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-24 md:space-y-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6000be4b._.js.map