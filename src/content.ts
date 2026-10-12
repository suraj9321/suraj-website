export const profile = {
  name: "Suraj Sah",
  headline: "Building systems that find the signal in the noise.",
  lede: "Software engineer at Salesforce. Distributed systems, backend platforms, and lately AI agentic systems.",
  about: [
    "At Salesforce I built messaging platforms on Customer E360: the messaging channels marketers from small businesses to enterprises use to reach their audience. It is a front row seat to how hard it is for brands to cut through the noise.",
    "Before that, I worked on perception software for Rivian's self-driving stack, built secure financial APIs and microservices at Mastercard that serve more than 250 banks, and trained deep-learning models to classify aerospace patents at Airbus. Different industries, same job: find the signal in the data.",
    "Right now I'm building agentic AI systems, which I think are the next frontier of software.",
  ],
  email: "suraj9321@gmail.com",
  linkedin: "https://linkedin.com/in/surajsahiitkgp",
  github: "https://github.com/suraj9321",
};

export type Job = {
  company: string;
  role: string;
  when: string;
  stack: string;
  /** One line for the timeline card. */
  summary: string;
  bullets: string[];
  /** Path under /public. */
  logo: string;
};

export const experience: Job[] = [
  {
    company: "Salesforce",
    logo: "/logos/salesforce.svg",
    role: "Software Development Engineer, Bellevue",
    when: "Dec 2023 – June 2026",
    stack: "Java, Spring, JavaScript, Lightning Web Components",
    summary:
      "Messaging platforms on Customer 360: building Salesforce Data Cloud integrated marketing channels like WhatsApp, Push Notification",
    bullets: [
      "Led the Test Send capability for Marketing Cloud Engagement's messaging APIs, wiring CreateSendDefinition, SendPush and GetSendStatus end to end.",
      "Replaced blocking Apex calls with a UI polling mechanism, eliminating timeouts on high-volume push sends.",
      "Built a DataKit installation check on Connect APIs so customers see broken Data Streams and Calculated Insights before setup fails.",
      "Shipped the C2C developer page now used across teams to configure and onboard messaging services; wrote the troubleshooting guide for Core-MCE tenant provisioning after tracing root causes in Splunk.",
    ],
  },
  {
    company: "Rivian",
    logo: "/logos/rivian.svg",
    role: "Software Development Engineer, Palo Alto",
    when: "Jan 2023 – Dec 2023",
    stack: "C++, Python, Bazel, CMake, Docker, Jenkins",
    summary:
      "Camera-calibration system for autonomous-driving sensors, parallelised to cut factory-line time; multithreaded C++ services, Docker-packaged flash images, Jenkins/EC2 pipelines.",
    bullets: [
      "Designed the camera-calibration system for autonomous-driving sensors and parallelised it so vehicles calibrate on the factory line in a fraction of the time.",
      "Wrote time-sensitive multithreaded services with unit and integration coverage, working with QA on regression for every release.",
      "Packaged flash images with Docker, set up remote-access test benches, and built Jenkins/EC2 pipelines for automated builds and deploys.",
    ],
  },
  {
    company: "Mastercard",
    logo: "/logos/mastercard.svg",
    role: "Software Development Engineer, India",
    when: "Jun 2019 – Aug 2021",
    stack: "Java, Spring Boot, Hibernate, Kafka, Oracle",
    summary:
      "Corporate-card transaction platform serving 250+ banks; drove the monolith-to-microservices migration with Kafka messaging, Flyway and Swagger, and owned production monitoring on Splunk.",
    bullets: [
      "Built services for the global corporate-card transaction platform used by 250+ banks.",
      "Drove the monolith-to-microservices migration: Maven/Gradle builds, WebSphere MQ and Axon (Kafka) for inter-service messaging, Flyway migrations, Swagger APIs.",
      "Introduced TDD and REST design conventions on the team; owned Splunk monitoring and on-call response for production.",
    ],
  },
  {
    company: "Airbus Engineering Centre",
    logo: "/logos/airbus.svg",
    role: "Deep Learning Intern, India",
    when: "May – Jul 2018",
    stack: "Python, Keras",
    summary:
      "Anomaly detection over flight time-series data and a CNN patent classifier (0.86 accuracy) that beat the previous LSTM model.",
    bullets: [
      "Built an anomaly-detection model over flight time-series data (SVMs and decision trees, 0.76 accuracy) to flag critical deviations.",
      "Trained a CNN patent classifier for five Flight Physics subclasses at 0.86 accuracy, beating the previous LSTM model and speeding up patent processing.",
    ],
  },
];

export type Project = {
  title: string;
  meta: string;
  href?: string;
  blurb: string;
  points?: string[];
};

export const projects: Project[] = [
  {
    title: "Options data pipeline and volatility analytics framework",
    meta: "Python, DuckDB, Parquet, GARCH, LLM coding agents",
    href: "https://github.com/suraj9321/dhan-api-backtest-options-framework",
    blurb:
      "A reproducible, leakage-safe data platform for Nifty options research, built end to end with AI coding agents.",
    points: [
      "Resumable, idempotent pipeline that ingested about 39.4 million minute-level option-chain bars (five years, weekly and monthly expiries) from the DhanHQ API, caching every raw response by request identity so multi-hour pulls resume where they stopped.",
      "A 40M-row columnar store in partitioned Parquet, sorted for row-group pruning and queried in place with DuckDB, with no ETL or import step.",
      "Append-only enrichment layer adding per-bar Greeks and implied volatility over all 39M bars, using Black-76 on a put-call-parity-implied forward.",
      "GARCH, EWMA and HAR-RV realized-volatility forecasts and a variance-risk-premium signal, kept honest by expanding-window refits and a T-1 signal wall so nothing can see same-day data, the same discipline trustworthy train/eval splits need.",
      "An AI-agent-ready codebase: reusable agent skills for Claude Code and Cursor plus a structured knowledge vault that acts as retrieval context for LLM agents, with CI running a data-free test suite on every push.",
    ],
  },
  {
    title: "Distributed protocols in Go",
    meta: "Go",
    blurb:
      "A fault-tolerant MapReduce library over RPC, the Chandy-Lamport distributed snapshot on a token-passing system, and Raft leader election with a replicated key/value store.",
  },
  {
    title: "Pintos: priority scheduling and MLFQS",
    meta: "C",
    blurb:
      "Priority scheduling with nested priority donation for locks, plus the multi-level feedback queue scheduler using fixed-point math over nice and recent-CPU values.",
  },
  {
    title: "Cryptography and return-to-libc",
    meta: "Python, C",
    blurb:
      "Benchmarked symmetric and asymmetric ciphers, then exploited a buffer overflow on a non-executable stack by chaining into libc's system().",
  },
];

export type Patent = {
  title: string;
  number: string;
  when: string;
  assignee: string;
  href: string;
  blurb: string;
};

export const patents: Patent[] = [
  {
    title: "Method and system for facilitating secure card-based transactions",
    number: "US 2021/0383358 A1",
    when: "Filed January 2020",
    assignee: "Mastercard",
    href: "https://patents.google.com/patent/US20210383358A1",
    blurb:
      "A transaction card with an embedded piezoelectric chip that senses a deliberate tap and generates an electrical pulse. Processing circuitry exchanges data with the terminal only when that pulse exceeds a threshold, so a card cannot be read without the holder's intent.",
  },
];

export const skills: [string, string][] = [
  ["Languages", "Java, Python, C, C++, Go, JavaScript, TypeScript, SQL"],
  ["Frameworks", "Spring, Spring Boot, Hibernate / JPA, Flask, Nest.js, LangGraph"],
  ["Systems", "REST, Kafka, Docker, Node.js, POSIX, Bazel, CMake, shell"],
  ["Tooling", "Git, CI/CD, Jenkins, Splunk, SonarQube, IntelliJ, VS Code"],
];

export const education = [
  { school: "University at Buffalo, SUNY", degree: "MS, Computer Science", when: "2021 – 2022", logo: "/logos/ub.svg" },
  { school: "IIT Kharagpur", degree: "B.Tech and M.Tech, Electrical Engineering", when: "2014 – 2019", logo: "/logos/iitkgp.svg" },
];

// Flat list for the skill chips on the About page.
export const skillChips = skills.flatMap(([, list]) => list.split(",").map((s) => s.trim()));

export type PortfolioItem = {
  kind: "Project" | "Patent";
  title: string;
  desc: string;
  meta: string;
  href?: string;
  cta: string;
  /** Tailwind gradient stops for the panel. */
  color: string;
};

// Panels for the horizontal-scroll Portfolio page: the patent leads, then projects.
export const portfolio: PortfolioItem[] = [
  {
    kind: "Patent",
    title: patents[0].title,
    desc: patents[0].blurb,
    meta: `${patents[0].assignee} · ${patents[0].number} · ${patents[0].when}`,
    href: patents[0].href,
    cta: "Read the patent",
    color: "from-red-300 to-blue-300",
  },
  ...projects.map((p, i) => ({
    kind: "Project" as const,
    title: p.title,
    desc: p.points ? `${p.blurb} ${p.points[0]}` : p.blurb,
    meta: p.meta,
    href: p.href,
    cta: "See on GitHub",
    color: ["from-blue-300 to-violet-300", "from-violet-300 to-purple-300", "from-purple-300 to-red-300", "from-red-300 to-blue-300"][i % 4],
  })),
];
