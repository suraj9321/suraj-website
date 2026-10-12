export const profile = {
  name: "Suraj Sah",
  lede: "Software engineer at Salesforce. Distributed systems, backend platforms, and — lately — AI agentic systems.",
  about: [
    "At Salesforce I build messaging platforms on Customer 360: the tools marketers from small businesses to enterprises use to reach their audience. It is a front-row seat to how hard it is for brands to cut through the noise.",
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
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Salesforce",
    role: "Software Development Engineer, Bellevue",
    when: "Dec 2023 – present",
    stack: "Java, Spring, JavaScript, Lightning Web Components",
    bullets: [
      "Led the Test Send capability for Marketing Cloud Engagement's messaging APIs, wiring CreateSendDefinition, SendPush and GetSendStatus end to end.",
      "Replaced blocking Apex calls with a UI polling mechanism, eliminating timeouts on high-volume push sends.",
      "Built a DataKit installation check on Connect APIs so customers see broken Data Streams and Calculated Insights before setup fails.",
      "Shipped the C2C developer page now used across teams to configure and onboard messaging services; wrote the troubleshooting guide for Core-MCE tenant provisioning after tracing root causes in Splunk.",
    ],
  },
  {
    company: "Rivian",
    role: "Software Development Engineer, Palo Alto",
    when: "Jan 2023 – Dec 2023",
    stack: "C++, Python, Bazel, CMake, Docker, Jenkins",
    bullets: [
      "Designed the camera-calibration system for autonomous-driving sensors and parallelised it so vehicles calibrate on the factory line in a fraction of the time.",
      "Wrote time-sensitive multithreaded services with unit and integration coverage, working with QA on regression for every release.",
      "Packaged flash images with Docker, set up remote-access test benches, and built Jenkins/EC2 pipelines for automated builds and deploys.",
    ],
  },
  {
    company: "Mastercard",
    role: "Software Development Engineer, India",
    when: "Jun 2019 – Aug 2021",
    stack: "Java, Spring Boot, Hibernate, Kafka, Oracle",
    bullets: [
      "Built services for the global corporate-card transaction platform used by 250+ banks.",
      "Drove the monolith-to-microservices migration: Maven/Gradle builds, WebSphere MQ and Axon (Kafka) for inter-service messaging, Flyway migrations, Swagger APIs.",
      "Introduced TDD and REST design conventions on the team; owned Splunk monitoring and on-call response for production.",
    ],
  },
  {
    company: "Airbus Engineering Centre",
    role: "Deep Learning Intern, India",
    when: "May – Jul 2018",
    stack: "Python, Keras",
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
};

export const projects: Project[] = [
  {
    title: "Nifty options backtesting framework",
    meta: "Python",
    href: "https://github.com/suraj9321/dhan-api-backtest-options-framework",
    blurb:
      "End-to-end quant research stack for systematic Nifty option selling: an event-driven backtester, volatility and variance-risk-premium signals, and a DhanHQ market-data pipeline.",
  },
  {
    title: "Momentum weekly investing",
    meta: "Java",
    href: "https://github.com/suraj9321/MomentumWeeklyInvesting",
    blurb: "Selects a portfolio of stocks showing price momentum and rebalances it at the end of every week.",
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
  {
    title: "Patent: secure card-based transactions",
    meta: "US20210383358A1",
    href: "https://patents.google.com/patent/US20210383358A1",
    blurb:
      "A transaction card with an embedded piezoelectric chip that only allows data exchange with a terminal when a deliberate tap produces a pulse above threshold.",
  },
];

export const skills: [string, string][] = [
  ["Languages", "Java, Python, C, C++, Go, JavaScript, TypeScript, SQL"],
  ["Frameworks", "Spring, Spring Boot, Hibernate / JPA, Flask, Nest.js, LangGraph"],
  ["Systems", "REST, Kafka, Docker, Node.js, POSIX, Bazel, CMake, shell"],
  ["Tooling", "Git, CI/CD, Jenkins, Splunk, SonarQube, IntelliJ, VS Code"],
];

export const education = [
  { school: "University at Buffalo, SUNY", degree: "MS, Computer Science", when: "2021 – 2022" },
  { school: "IIT Kharagpur", degree: "B.Tech and M.Tech, Electrical Engineering", when: "2014 – 2019" },
];

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
