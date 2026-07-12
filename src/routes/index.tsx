import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------- data ---------- */

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI / LLM Engineer",
  "Cloud & Data Enthusiast",
  "Cybersecurity Minor",
  "Gen-AI Explorer",
];

const SKILLS = {
  Languages: ["Java", "C++", "JavaScript", "TypeScript", "Python", "SQL"],
  "Frontend / Web": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design", "Vite", "Streamlit"],
  "Backend / APIs": [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST APIs",
    "Microservices",
    "JWT & OAuth",
    "WebSockets",
  ],
  "AI / LLMs / GenAI": [
    "LangChain",
    "LangGraph",
    "RAG",
    "Prompt Eng.",
    "Vector DBs",
    "Transformers",
    "TensorFlow",
    "Scikit-learn",
    "Fuzzy Logic",
    "Gemini API",
    "Vertex AI",
    "MLOps",
    "Responsible AI",
  ],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Qdrant"],
  "Cloud / DevOps": [
    "AWS (S3, EC2)",
    "Google Cloud",
    "Oracle Cloud",
    "Docker",
    "Docker Compose",
    "CI/CD",
    "Git",
    "GitHub",
    "Firebase",
    "Vercel",
    "Render",
    "Netlify",
  ],
  "Practices / Data": ["Agile", "Jest Unit Testing", "System Design", "DSA", "OOP", "DBMS", "Power BI", "Tableau", "Snowflake", "Pandas", "NumPy"],
};

const EXPERIENCE = [
  {
    company: "Apna College",
    role: "Teaching Assistant (MERN Stack)",
    where: "Remote · Work from Home",
    when: "Jun 2026 — Oct 2026",
    color: "lemon",
    bullets: [
      "Mentored and communicated technical concepts to 500+ students in MERN Stack and DSA, resolving 300+ debugging queries.",
      "Solved 10–14 student doubts daily on the MERN stack via text solutions, debugging sessions and voice calls.",
      "Debugged full-stack JavaScript, React, Node.js, Express and MongoDB code while explaining concepts clearly.",
      "Lifted student project completion rates by 30% through consistent availability, cleared backlogs and high-rated support.",
    ],
  },
  {
    company: "TrueVows App",
    role: "Full Stack Developer",
    where: "Dublin, Ireland · Remote",
    when: "Nov 2025 — May 2026",
    color: "peach",
    bullets: [
      "Shipped 15+ full-stack features using Next.js, React, TypeScript, Node.js, Express.js and MongoDB — responsive UI plus 20+ secure REST API endpoints with JWT authentication.",
      "Localized 29+ components into 3 languages (English, Spanish, French) using react-i18next, expanding the addressable user base by 25%.",
      "Reduced average API response time by 35% by profiling and optimizing authentication, messaging and membership modules across 40+ peer-reviewed Git pull requests.",
      "Deployed production builds on Vercel & Netlify — 40% faster load times and stronger SEO scores with accessible, maintainable UI patterns (Tailwind CSS & shadcn/ui).",
    ],
  },
  {
    company: "SmartBridge",
    role: "Google Cloud Generative AI Virtual Intern",
    where: "Remote",
    when: "Sep 2025 — Oct 2025",
    color: "sky",
    bullets: [
      "Built 3+ Generative AI applications on Google Cloud Vertex AI, applying LLMs, Prompt Engineering and RAG to improve response relevance by 40%.",
      "Deployed 5+ AI-integrated cloud services using Vertex AI, Cloud Run, Cloud Storage, IAM and BigQuery, reducing deployment time by 30% through containerization.",
      "Developed a RAG pipeline over 1,000+ documents with vector embeddings, raising answer accuracy by 35% and lowering LLM hallucination on domain queries.",
      "Explored Responsible AI, evaluation and monitoring workflows for production-grade generative applications.",
    ],
  },
];

const PROJECTS = [
  {
    name: "CortexAI",
    tag: "Multi-Agent AI Platform · MERN + LangGraph",
    accent: "primary",
    when: "Apr 2026 — Present",
    stack: ["MERN", "LangGraph", "LangChain", "Qdrant", "Docker", "AWS", "Redis", "Firebase Auth"],
    desc:
      "MERN microservices AI platform — 6+ microservices on Docker, AWS, API Gateway, MongoDB, Redis & Firebase Auth supporting 1,000+ concurrent users at 99.9% uptime. Orchestrates 8+ AI agents via LangGraph, LangChain, RAG and Qdrant Vector DB across 6 workflows (chat, code-gen, web search, vision, PDF & PPT generation), boosting retrieval accuracy by 45%. Integrated AWS S3, Razorpay and Monaco Editor for secure payments, artifact storage, live code editing and a credit-based AI usage system.",
    stats: [
      { k: "1K+", v: "concurrent users" },
      { k: "8+", v: "AI agents" },
      { k: "99.9%", v: "uptime" },
    ],
    link: "https://github.com/prajaktaukirde/cortex-ai",
  },
  {
    name: "Booking Platform REST API",
    tag: "NestJS · PostgreSQL · Production API",
    accent: "mint",
    when: "Jun 2026 — Present",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Docker", "Swagger", "Jest"],
    desc:
      "Production-ready REST API with NestJS, PostgreSQL, TypeORM, JWT and refresh-token rotation — 10+ secure, role-based endpoints handling 500+ requests/day. Cut invalid bookings by 60% by enforcing 8+ business rules across duplicate prevention, status transitions, input validation, pagination and centralized exception handling. Automated testing & deployment with Swagger, Docker, migrations and Jest — 85%+ test coverage and 50% faster setup.",
    stats: [
      { k: "-60%", v: "invalid bookings" },
      { k: "85%+", v: "test coverage" },
      { k: "500+", v: "requests/day" },
    ],
    link: "https://github.com/prajaktaukirde/Booking-Platform-RESTAPI",
  },
  {
    name: "AgriNLP · sFET",
    tag: "Fuzzy Evolutionary Transformer · Agri Advisory",
    accent: "peach",
    when: "2025",
    stack: ["React", "Python", "Transformers", "Fuzzy Logic", "RAG", "Vercel"],
    desc:
      "Multilingual (English–Marathi) web app for smart agri advisory. Integrates fuzzy logic + evolutionary algorithms + transformers with a RAG knowledge base of 20+ ICAR/FAO guidelines. Voice & image input, analytics dashboard, explainable AI.",
    stats: [
      { k: "91%+", v: "accuracy" },
      { k: "+22%", v: "clarity" },
      { k: "-80%", v: "cost" },
    ],
    link: "https://github.com/prajaktaukirde/AgriNLP",
  },
  {
    name: "100 Apps, One Agent",
    tag: "API Buildability · Case Study",
    accent: "mint",
    when: "2026",
    stack: ["React", "TanStack Start", "Tailwind v4", "Python", "Gemini"],
    desc:
      "Automated research pipeline auditing 100 SaaS APIs for AI-agent buildability. Fan-out research agents extract schemas + evidence; adversarial judge loop verifies claims. Served as an interactive matrix + live runner.",
    stats: [
      { k: "100", v: "apps" },
      { k: "10", v: "agents" },
      { k: "100%", v: "verified" },
    ],
    link: "https://github.com/prajaktaukirde/app-discover-guild",
  },
  {
    name: "AI Detection Hub",
    tag: "Flask · scikit-learn · 3-in-1 ML",
    accent: "sky",
    when: "2025",
    stack: ["Python", "Flask", "scikit-learn", "TF-IDF", "Random Forest"],
    desc:
      "A Flask app with three ML detection systems — Email Spam, Fake News & Phishing URLs — powered by Logistic Regression + TF-IDF and a Random Forest URL classifier.",
    stats: [
      { k: "97%", v: "spam acc." },
      { k: "98.6%", v: "news acc." },
      { k: "96%", v: "url acc." },
    ],
    link: "https://github.com/prajaktaukirde/AI-Detection",
  },
  {
    name: "Weather Dashboard",
    tag: "Power BI · Data Storytelling",
    accent: "lavender",
    when: "2024",
    stack: ["Power BI", "DAX", "Data Modeling"],
    desc:
      "Interactive weather dashboard visualising real-time and historical data. DAX measures surface trends in temperature and rainfall — designed for clarity and user-friendly storytelling.",
    stats: [
      { k: "DAX", v: "measures" },
      { k: "Realtime", v: "data" },
      { k: "UX-first", v: "visuals" },
    ],
    link: "https://github.com/prajaktaukirde/Weather-Dashboard",
  },
];

const EDUCATION = [
  {
    icon: "🎓",
    title: "B.Tech · Computer Science & Engineering",
    where: "M.G.M's Jawaharlal Nehru College of Engineering",
    when: "Jul 2023 — Jul 2027",
    tag: "CGPA 8.61 · Cybersecurity Minor",
    color: "bg-peach",
  },
  {
    icon: "📚",
    title: "Higher Secondary (HSC)",
    where: "Vidhyadam Junior College",
    when: "2022",
    tag: "Completed",
    color: "bg-mint",
  },
  {
    icon: "📖",
    title: "Secondary School (SSC)",
    where: "St. Lawrence High School",
    when: "2020",
    tag: "Completed",
    color: "bg-sky",
  },
];

const CERTS = [
  {
    org: "Oracle Cloud",
    items: [
      "Generative AI Professional",
      "DevOps Professional",
      "Data Science Professional",
      "AI Foundations Associate",
    ],
  },
  {
    org: "Google Cloud",
    items: [
      "Gen AI Learning Path",
      "Gen AI Apps · Gemini & Streamlit",
      "Google Data Analytics",
    ],
  },
  {
    org: "Snowflake · Hashgraph",
    items: [
      "SnowPro Associate — Platform",
      "Hashgraph Developer Program",
    ],
  },
  {
    org: "Apna College",
    items: [
      "DSA with C++",
      "Sigma 9.0 — Full Stack Web Dev",
    ],
  },
  {
    org: "Cisco · Infosys",
    items: [
      "Cisco Networking Academy",
      "Intro to Cyber Security — Cisco",
      "Programming Using Java — Infosys",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Top 10 Performer · GDSC",
    desc: "Ranked in the top 10 among 200+ members of the Google Developer Student Club for technical contributions and delivering 5+ community-led projects.",
  },
  {
    icon: "🧑‍🏫",
    title: "MERN Stack Teaching Assistant · Apna College",
    desc: "Mentored 500+ students in MERN Stack and DSA, resolved 300+ debugging queries and lifted project completion rates by 30%.",
  },
];

const MARQUEE = [
  "TypeScript", "React.js", "Next.js", "Node.js", "NestJS", "MongoDB",
  "PostgreSQL", "Redis", "LangChain", "LangGraph", "RAG", "Qdrant",
  "Vertex AI", "Gemini API", "Transformers", "AWS", "Docker", "CI/CD",
  "Python", "Java", "Power BI", "Snowflake",
];

/* ---------- utilities ---------- */

const colorMap: Record<string, string> = {
  peach: "bg-peach",
  mint: "bg-mint",
  sky: "bg-sky",
  lavender: "bg-lavender",
  lemon: "bg-lemon",
};

function useMagnetic(strength = 25) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x.set(((e.clientX - r.left) / r.width - 0.5) * strength);
      y.set(((e.clientY - r.top) / r.height - 0.5) * strength);
    };
    const leave = () => { x.set(0); y.set(0); };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength, x, y]);

  return { ref, x: sx, y: sy };
}

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), pause);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

/* ---------- component pieces ---------- */

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setBig(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", m);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", m);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      animate={{ x: pos.x - (big ? 24 : 8), y: pos.y - (big ? 24 : 8), scale: big ? 1 : 0.6 }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.4 }}
    >
      <div className="size-12 rounded-full bg-primary mix-blend-multiply opacity-70" />
    </motion.div>
  );
}

function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1], duration: 0.9 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-card/80 backdrop-blur-md sticker rounded-full px-2 py-1.5"
    >
      {["work", "skills", "education", "about", "contact"].map((s) => (
        <a
          key={s}
          href={`#${s}`}
          className="text-[11px] font-mono-tech uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-ink hover:text-cream transition-colors hidden sm:inline-block"
        >
          {s}
        </a>
      ))}
      <a
        href="#contact"
        className="text-[11px] font-mono-tech uppercase tracking-wider bg-ink text-cream px-3 py-1.5 rounded-full ml-1"
      >
        Let's talk →
      </a>
    </motion.nav>
  );
}

function Sticker({ children, rotate = -4, className = "", float = true }: { children: React.ReactNode; rotate?: number; className?: string; float?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate - 20 }}
      whileInView={{ scale: 1, rotate }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      whileHover={{ rotate: 0, scale: 1.08 }}
      className={`${className} ${float ? "animate-float" : ""} sticker font-mono-tech uppercase font-bold`}
      style={{ ["--tw-rotate" as string]: `${rotate}deg` }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const magnet = useMagnetic(30);
  const reveal = { initial: { y: "110%" }, animate: { y: 0 } };
  const typed = useTypewriter(ROLES);

  return (
    <section ref={heroRef} className="relative pt-20 pb-12 px-4 md:px-8 grain-bg overflow-hidden">
      {/* blob background */}
      <div className="absolute top-20 -left-20 size-[420px] bg-peach animate-blob animate-pulse-glow opacity-70 -z-10" />
      <div className="absolute -top-10 right-0 size-[320px] bg-mint animate-blob animate-pulse-glow opacity-70 -z-10" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 size-[260px] bg-lavender animate-blob animate-pulse-glow opacity-60 -z-10" style={{ animationDelay: "4s" }} />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto grid grid-cols-12 gap-3 md:gap-5">
        {/* NAME */}
        <div className="col-span-12 md:col-span-8 bg-card sticker rounded-4xl p-5 md:p-8 pb-16 md:pb-20 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
            <span className="font-mono-tech text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground">
              (portfolio · vol_01) — 2026
            </span>
            <span className="flex items-center gap-2 text-[10px] md:text-[11px] font-mono-tech uppercase">
              <span className="size-2 bg-primary rounded-full animate-pulse-glow" /> Available
            </span>
          </div>

          <p className="font-mono-tech text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1">
            hi there, i'm
          </p>

          <h1 className="font-display font-black leading-[0.82] tracking-tighter text-[12vw] md:text-[7.2vw]">
            <span className="block overflow-hidden">
              <motion.span {...reveal} transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block">
                Prajakta
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span {...reveal} transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block italic text-primary">
                Ukirde<span className="text-ink">.</span>
              </motion.span>
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest">i'm into →</span>
            <span className="font-display italic text-xl md:text-2xl bg-lemon px-2.5 py-0.5 rounded-lg border-[1.5px] border-ink">
              {typed}
              <span className="inline-block w-[2px] h-5 bg-ink align-middle ml-0.5 animate-pulse" />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-4 max-w-xl text-[14px] md:text-[16px] leading-relaxed text-muted-foreground"
          >
            Full Stack (<span className="bg-peach px-1.5 rounded-md text-ink font-semibold">MERN</span>) developer & AI/LLM
            engineer — CSE '27 (CGPA 8.61) with a{" "}
            <span className="bg-sky px-1.5 rounded-md text-ink font-semibold">Cybersecurity</span> minor, building{" "}
            <span className="italic font-display text-ink font-bold">intelligent</span>, animated web experiences —
            from <span className="bg-lemon px-1.5 rounded-md text-ink font-semibold">multi-agent AI</span> to{" "}
            <span className="bg-mint px-1.5 rounded-md text-ink font-semibold">cloud-scale</span> data systems.
          </motion.p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="#work"
              data-cursor
              className="bg-ink text-cream sticker rounded-full px-4 py-2 font-mono-tech text-[10px] md:text-[11px] uppercase tracking-wider hover:bg-primary transition-colors"
            >
              See my work →
            </a>
            <a
              href="mailto:prajaktaukirde576@gmail.com"
              data-cursor
              className="bg-card sticker rounded-full px-4 py-2 font-mono-tech text-[10px] md:text-[11px] uppercase tracking-wider hover:bg-lemon transition-colors"
            >
              ✉ Say hi
            </a>
          </div>

          {/* inner marquee */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap border-t-[1.5px] border-ink py-2.5 bg-mint">
            <div className="inline-block marquee-track font-mono-tech text-[11px] tracking-tight uppercase">
              {Array(2).fill(0).map((_, i) => (
                <span key={i}>
                  {["full stack developer · ", "mern stack · ", "ai / llm engineer · ", "cs @ jnec '27 · ", "cgpa 8.61 · ", "aurangabad, india · ", "open to work · "].join("").repeat(2)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PORTRAIT / MONOGRAM */}
        <motion.div
          ref={magnet.ref}
          style={{ x: magnet.x, y: magnet.y }}
          className="col-span-12 md:col-span-4 bg-primary sticker rounded-4xl p-5 md:p-8 relative overflow-hidden min-h-[260px] md:min-h-0 flex flex-col justify-between text-primary-foreground"
          data-cursor
        >
          <div className="absolute -bottom-16 -right-16 size-64 rounded-full border-[1.5px] border-primary-foreground/40 animate-spin-slow" />
          <div className="absolute -bottom-24 -right-24 size-80 rounded-full border-[1.5px] border-primary-foreground/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full bg-primary-foreground/10 blur-2xl -z-0" />

          <div className="flex justify-between items-start relative z-10">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-80">The engineer</span>
            <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-80">'27</span>
          </div>

          {/* Big monogram + name stack */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center py-4">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic font-black text-[22vw] md:text-[8vw] leading-[0.75] drop-shadow-[3px_3px_0_rgba(0,0,0,0.15)]"
            >
              P<span className="text-primary-foreground/60">U</span>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-2 font-display italic text-xl md:text-2xl leading-tight"
            >
              Build &<br/>
              <span className="not-italic font-black tracking-tight">Scale.</span>
            </motion.div>
            <div className="mt-2 inline-flex items-center gap-1.5 bg-primary-foreground/15 border border-primary-foreground/40 rounded-full px-3 py-1 font-mono-tech text-[9px] md:text-[10px] uppercase tracking-widest">
              <span className="size-1.5 rounded-full bg-primary-foreground animate-pulse-glow" />
              AI · Full-Stack · Cloud
            </div>
          </div>

          <div className="relative z-10">
            <div className="font-mono-tech text-[10px] uppercase opacity-80">
              Aurangabad · Maharashtra
            </div>
            <div className="font-mono-tech text-[10px] uppercase mt-1 opacity-80">
              CS + Cybersecurity Minor
            </div>
          </div>
        </motion.div>

        {/* stat cards */}
        <div className="col-span-6 md:col-span-2 bg-lemon sticker rounded-4xl p-4 md:p-5 flex flex-col justify-between min-h-[120px] md:min-h-[130px]">
          <span className="font-mono-tech text-[10px] uppercase">Features shipped</span>
          <div className="font-display font-black text-4xl md:text-5xl leading-none">15<span className="text-primary">+</span></div>
          <span className="font-mono-tech text-[10px] uppercase text-muted-foreground">full-stack @ TrueVows</span>
        </div>

        <div className="col-span-6 md:col-span-2 bg-sky sticker rounded-4xl p-4 md:p-5 flex flex-col justify-between min-h-[120px] md:min-h-[130px]">
          <span className="font-mono-tech text-[10px] uppercase">Certs</span>
          <div className="font-display font-black text-4xl md:text-5xl leading-none">14<span className="text-primary">+</span></div>
          <span className="font-mono-tech text-[10px] uppercase text-muted-foreground">Oracle · Google · Cisco</span>
        </div>

        <div className="col-span-12 md:col-span-4 bg-card sticker rounded-4xl p-4 md:p-5 flex flex-col justify-between">
          <span className="font-mono-tech text-[10px] uppercase mb-1">Currently</span>
          <p className="font-display italic text-lg md:text-xl leading-tight">
            Building <span className="not-italic bg-primary text-primary-foreground px-1.5 rounded">CortexAI</span> —
            8+ LangGraph agents, 6+ microservices, 1K+ concurrent users at 99.9% uptime.
          </p>
        </div>

        <a
          href="#work"
          className="col-span-12 md:col-span-4 bg-ink text-cream sticker rounded-4xl p-4 md:p-5 flex items-center justify-between group hover:bg-primary hover:text-primary-foreground transition-colors"
          data-cursor
        >
          <span className="font-display italic text-xl md:text-3xl">See the work</span>
          <span className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center text-xl group-hover:bg-cream group-hover:text-ink transition-all group-hover:rotate-45">↓</span>
        </a>
      </motion.div>
    </section>
  );
}

/* ---------- MARQUEE STRIP ---------- */

function MarqueeStrip() {
  return (
    <section className="py-6 border-y-[1.5px] border-ink bg-primary text-primary-foreground overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {Array(2).fill(0).map((_, i) => (
          <div key={i} className="flex gap-8 pr-8 items-center font-display italic text-4xl md:text-6xl">
            {MARQUEE.map((s) => (
              <span key={`${i}-${s}`} className="flex items-center gap-8">
                {s}
                <span className="size-3 rounded-full bg-primary-foreground shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- WORK ---------- */

function Work() {
  return (
    <section id="work" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHead num="01" title="Selected work" tag="Projects" />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-cursor
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`${colorMap[p.accent]} sticker sticker-hover rounded-4xl p-7 md:p-9 group relative overflow-hidden block`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono-tech text-[10px] uppercase tracking-widest">{p.when}</span>
                <span className="size-10 rounded-full bg-ink text-cream grid place-items-center group-hover:rotate-45 transition-transform">↗</span>
              </div>
              <h3 className="font-display font-black text-4xl md:text-5xl leading-none mb-2">{p.name}</h3>
              <p className="font-mono-tech text-[11px] uppercase tracking-wider text-muted-foreground mb-5">{p.tag}</p>
              <p className="text-[15px] leading-relaxed mb-6">{p.desc}</p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                {p.stats.map((s) => (
                  <div key={s.k} className="bg-card sticker rounded-2xl p-3 text-center">
                    <div className="font-display font-black text-2xl leading-none">{s.k}</div>
                    <div className="font-mono-tech text-[9px] uppercase mt-1 text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="text-[10px] font-mono-tech uppercase tracking-wider bg-card border-[1.5px] border-ink rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 grain-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHead num="02" title="Toolkit" tag="Skills" />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {Object.entries(SKILLS).map(([group, items], i) => {
            const bgs = ["bg-peach", "bg-mint", "bg-sky", "bg-lavender", "bg-lemon", "bg-card"];
            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ y: -4, rotate: 1 }}
                className={`${bgs[i % bgs.length]} sticker sticker-hover rounded-3xl p-6`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-black text-2xl">{group}</h3>
                  <span className="font-mono-tech text-[10px] uppercase text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="bg-card border-[1.5px] border-ink text-xs px-3 py-1 rounded-full font-medium hover:bg-ink hover:text-cream transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- EDUCATION ---------- */

function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHead num="03" title="Education" tag="Learning path" />
        <p className="font-display italic text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
              className={`${e.color} sticker sticker-hover rounded-4xl p-7 flex flex-col`}
            >
              <div className="text-5xl mb-4">{e.icon}</div>
              <h3 className="font-display font-black text-2xl leading-tight">{e.title}</h3>
              <p className="text-sm mt-2 text-muted-foreground">{e.where}</p>
              <div className="flex gap-2 mt-5 flex-wrap">
                <span className="bg-card border-[1.5px] border-ink px-3 py-1 rounded-full font-mono-tech text-[10px] uppercase">{e.when}</span>
                <span className="bg-ink text-cream px-3 py-1 rounded-full font-mono-tech text-[10px] uppercase">{e.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */

function Experience() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 grain-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHead num="04" title="Trajectory" tag="Experience" />
        <div className="mt-12 grid gap-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`${colorMap[e.color]} sticker rounded-4xl p-7 md:p-10 grid md:grid-cols-12 gap-6`}
            >
              <div className="md:col-span-4">
                <span className="font-mono-tech text-[10px] uppercase tracking-widest">{e.when}</span>
                <h3 className="font-display font-black text-3xl md:text-4xl mt-2 leading-none">{e.company}</h3>
                <p className="font-mono-tech text-xs uppercase mt-3 text-muted-foreground">{e.where}</p>
                <div className="mt-4 inline-block bg-ink text-cream px-3 py-1.5 rounded-full font-mono-tech text-[10px] uppercase">
                  {e.role}
                </div>
              </div>
              <ul className="md:col-span-8 space-y-3">
                {e.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1, duration: 0.5 }}
                    className="flex gap-3 text-[15px] leading-relaxed bg-card sticker rounded-2xl p-4"
                  >
                    <span className="text-primary font-bold shrink-0">→</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTS ---------- */

function Certs() {
  return (
    <section className="py-24 px-4 md:px-8 bg-ink text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHead num="05" title="Certified &amp; curious" tag="Certifications" invert />
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.org}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="border-[1.5px] border-cream/30 rounded-3xl p-5 hover:bg-cream hover:text-ink transition-colors"
            >
              <div className="font-display font-black text-2xl mb-3">{c.org}</div>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="text-sm flex gap-2">
                    <span className="text-primary shrink-0">◆</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* achievements */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-[1.5px] border-cream/30 rounded-3xl p-6 flex gap-4 items-start hover:bg-cream hover:text-ink transition-colors"
            >
              <span className="text-4xl shrink-0">{a.icon}</span>
              <div>
                <div className="font-display font-black text-xl md:text-2xl leading-tight mb-1">{a.title}</div>
                <p className="text-sm leading-relaxed opacity-80">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */

function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 relative overflow-hidden grain-bg">
      <div className="absolute top-10 left-10 size-64 bg-mint animate-blob opacity-70 -z-10" />
      <div className="absolute bottom-0 right-0 size-80 bg-peach animate-blob opacity-70 -z-10" style={{ animationDelay: "3s" }} />

      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-tech text-xs uppercase tracking-[0.3em] mb-6"
        >
          / say hi /
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl md:text-[10vw] leading-[0.85] tracking-tighter"
        >
          Got a wild <br />
          <span className="italic text-primary">idea</span>?
        </motion.h2>

        <motion.a
          href="mailto:prajaktaukirde576@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          data-cursor
          className="inline-block mt-10 bg-ink text-cream sticker sticker-hover rounded-full px-8 md:px-10 py-5 font-mono-tech uppercase tracking-widest text-xs md:text-sm break-all"
        >
          prajaktaukirde576@gmail.com →
        </motion.a>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <Sticker rotate={-4} className="bg-peach rounded-full px-6 py-3 text-xs">
            <a href="https://www.linkedin.com/in/prajakta-ukirde-395862381" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </Sticker>
          <Sticker rotate={3} className="bg-mint rounded-full px-6 py-3 text-xs">
            <a href="https://github.com/prajaktaukirde" target="_blank" rel="noreferrer">GitHub ↗</a>
          </Sticker>
          <Sticker rotate={-2} className="bg-sky rounded-full px-6 py-3 text-xs">
            <a href="tel:+919112480174">+91 91124 80174</a>
          </Sticker>
          <Sticker rotate={5} className="bg-lemon rounded-full px-6 py-3 text-xs" float={false}>
            Aurangabad, India
          </Sticker>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t-[1.5px] border-ink/20 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
          © Prajakta Ukirde · 2026 · Hand-animated with care
        </span>
        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
          M.G.M JNEC · CS + Cybersecurity
        </span>
      </footer>
    </section>
  );
}

/* ---------- SHARED ---------- */

function SectionHead({ num, title, tag, invert = false }: { num: string; title: string; tag: string; invert?: boolean }) {
  return (
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <span className={`font-mono-tech text-[10px] uppercase tracking-[0.3em] ${invert ? "text-cream/60" : "text-muted-foreground"}`}>
          {num} / {tag}
        </span>
        <h2
          className="font-display font-black text-5xl md:text-7xl leading-none mt-2 tracking-tighter"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div className={`font-display italic text-xl ${invert ? "text-cream/60" : "text-muted-foreground"}`}>
        ↓ scroll to explore
      </div>
    </div>
  );
}

/* ---------- ROOT ---------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <Hero />
      <MarqueeStrip />
      <Work />
      <Skills />
      <EducationSection />
      <Experience />
      <Certs />
      <Contact />
    </div>
  );
}
