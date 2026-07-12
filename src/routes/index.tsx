import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------- data ---------- */

const ROLES = [
  "AI / ML Engineer",
  "Full-Stack Developer",
  "Cloud & Data Enthusiast",
  "Cybersecurity Minor",
  "Gen-AI Explorer",
];

const SKILLS = {
  Languages: ["Python", "Java", "JavaScript", "C++", "SQL"],
  "Frontend / Web": ["React.js", "HTML5", "CSS3", "Bootstrap", "Vite", "Streamlit"],
  "Backend / DB": ["Node.js", "Express.js", "MongoDB", "MySQL"],
  "AI / ML / GenAI": [
    "TensorFlow",
    "Scikit-learn",
    "Fuzzy Logic",
    "Transformers",
    "RAG",
    "LangChain",
    "Gemini API",
    "Vertex AI",
    "Prompt Eng.",
    "MLOps",
    "Responsible AI",
  ],
  "Cloud / DevOps": ["Google Cloud", "Oracle Cloud", "AWS", "Docker", "Git", "GitHub", "Vercel", "Netlify"],
  "Data / Analytics": ["Power BI", "Tableau", "Snowflake", "Pandas", "NumPy"],
};

const EXPERIENCE = [
  {
    company: "TrueVows App",
    role: "Full Stack Developer",
    where: "Remote",
    when: "Nov 2025 — Apr 2026",
    color: "peach",
    bullets: [
      "Built a scalable frontend with Next.js (App Router), TypeScript, Tailwind CSS & shadcn/ui — accessible, maintainable, modern patterns.",
      "Shipped core public pages — Home, About, Contact & Blog — optimised for performance, responsiveness & SEO.",
      "Streamlined collaboration through Git & GitHub — code reviews, feature rollouts and PR-based delivery.",
      "Deployed production builds on Vercel & Netlify — 40% faster load times and stronger SEO scores.",
    ],
  },
  {
    company: "Apna College",
    role: "Teaching Assistant (MERN Stack)",
    where: "Remote · Work from Home",
    when: "Jun 2026 — Oct 2026",
    color: "lemon",
    bullets: [
      "Solved 10–14 student doubts daily on the MERN stack via text solutions, debugging sessions and voice calls.",
      "Debugged full-stack JavaScript, React, Node.js, Express and MongoDB code while explaining concepts clearly.",
      "Maintained high availability during assigned time slots and cleared weekly backlogs to keep resolution rates on target.",
      "Earned consistent positive student ratings that directly fed into performance reviews and skill improvement.",
    ],
  },
];

const PROJECTS = [
  {
    name: "sFET",
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
    when: "2023 — Present",
    tag: "Minor in Cybersecurity",
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
    org: "Cisco · Infosys",
    items: [
      "Intro to Cyber Security — Cisco",
      "Programming Using Java — Infosys",
    ],
  },
];

const MARQUEE = [
  "Python", "Java", "React.js", "Node.js", "TensorFlow", "LangChain",
  "Gemini API", "Vertex AI", "RAG", "Fuzzy Logic", "Transformers",
  "AWS", "Oracle Cloud", "Snowflake", "Power BI", "Tableau", "Docker",
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
  const reveal = { initial: { y: "110%" }, whileInView: { y: 0 }, viewport: { once: true } };
  const typed = useTypewriter(ROLES);

  return (
    <section ref={heroRef} className="relative pt-24 pb-16 px-4 md:px-8 grain-bg overflow-hidden">
      {/* blob background */}
      <div className="absolute top-20 -left-20 size-[420px] bg-peach animate-blob animate-pulse-glow opacity-70 -z-10" />
      <div className="absolute -top-10 right-0 size-[320px] bg-mint animate-blob animate-pulse-glow opacity-70 -z-10" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 size-[260px] bg-lavender animate-blob animate-pulse-glow opacity-60 -z-10" style={{ animationDelay: "4s" }} />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto grid grid-cols-12 gap-3 md:gap-5">
        {/* NAME */}
        <div className="col-span-12 md:col-span-8 bg-card sticker rounded-4xl p-6 md:p-12 relative overflow-hidden">
          <div className="flex justify-between items-start mb-6 gap-2 flex-wrap">
            <span className="font-mono-tech text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground">
              (portfolio · vol_01) — 2026
            </span>
            <span className="flex items-center gap-2 text-[10px] md:text-[11px] font-mono-tech uppercase">
              <span className="size-2 bg-primary rounded-full animate-pulse-glow" /> Available
            </span>
          </div>

          <p className="font-mono-tech text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground mb-2">
            hi there, i'm
          </p>

          <h1 className="font-display font-black leading-[0.82] tracking-tighter text-[15vw] md:text-[9.5vw]">
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

          <div className="mt-6 flex items-center gap-2 flex-wrap">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest">i'm into →</span>
            <span className="font-display italic text-2xl md:text-3xl bg-lemon px-3 py-0.5 rounded-lg border-[1.5px] border-ink">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-ink align-middle ml-0.5 animate-pulse" />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
          >
            CSE '27 student with a{" "}
            <span className="bg-sky px-1.5 rounded-md">Cybersecurity</span> minor, building{" "}
            <span className="italic font-display">intelligent</span>, animated web experiences —
            from <span className="bg-lemon px-1.5 rounded-md">multi-agent AI</span> to{" "}
            <span className="bg-mint px-1.5 rounded-md">cloud-scale</span> data systems.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="#work"
              data-cursor
              className="bg-ink text-cream sticker rounded-full px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-wider hover:bg-primary transition-colors"
            >
              See my work →
            </a>
            <a
              href="mailto:prajaktaukirde576@gmail.com"
              data-cursor
              className="bg-card sticker rounded-full px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-wider hover:bg-lemon transition-colors"
            >
              ✉ Say hi
            </a>
          </div>

          {/* inner marquee */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap border-t-[1.5px] border-ink py-2 bg-mint">
            <div className="inline-block marquee-track font-mono-tech text-[11px] tracking-tight uppercase">
              {Array(2).fill(0).map((_, i) => (
                <span key={i}>
                  {["ai / ml engineer · ", "full-stack developer · ", "cs @ jnec '27 · ", "aurangabad, india · ", "open to work · "].join("").repeat(2)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PORTRAIT / MONOGRAM */}
        <motion.div
          ref={magnet.ref}
          style={{ x: magnet.x, y: magnet.y }}
          className="col-span-12 md:col-span-4 bg-primary sticker rounded-4xl p-6 relative overflow-hidden min-h-[280px] md:min-h-0 flex flex-col justify-between text-primary-foreground"
          data-cursor
        >
          <div className="absolute -bottom-16 -right-16 size-64 rounded-full border-[1.5px] border-primary-foreground/40 animate-spin-slow" />
          <div className="absolute -bottom-24 -right-24 size-80 rounded-full border-[1.5px] border-primary-foreground/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="flex justify-between items-start">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-80">The engineer</span>
            <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-80">'27</span>
          </div>
          <div className="relative z-10">
            <div className="font-display italic font-black text-[38vw] md:text-[14vw] leading-[0.75]">P</div>
            <div className="font-mono-tech text-[10px] uppercase mt-3 opacity-80">
              Aurangabad · Maharashtra
            </div>
            <div className="font-mono-tech text-[10px] uppercase mt-1 opacity-80">
              CS + Cybersecurity Minor
            </div>
          </div>
        </motion.div>

        {/* stat cards */}
        <div className="col-span-6 md:col-span-2 bg-lemon sticker rounded-4xl p-5 flex flex-col justify-between min-h-[140px]">
          <span className="font-mono-tech text-[10px] uppercase">Accuracy</span>
          <div className="font-display font-black text-5xl md:text-6xl leading-none">91%+</div>
          <span className="font-mono-tech text-[10px] uppercase text-muted-foreground">sFET model</span>
        </div>

        <div className="col-span-6 md:col-span-2 bg-sky sticker rounded-4xl p-5 flex flex-col justify-between min-h-[140px]">
          <span className="font-mono-tech text-[10px] uppercase">Certs</span>
          <div className="font-display font-black text-5xl md:text-6xl leading-none">12<span className="text-primary">+</span></div>
          <span className="font-mono-tech text-[10px] uppercase text-muted-foreground">Oracle · Google · Snowflake</span>
        </div>

        <div className="col-span-12 md:col-span-4 bg-card sticker rounded-4xl p-5 flex flex-col justify-between">
          <span className="font-mono-tech text-[10px] uppercase mb-2">Currently</span>
          <p className="font-display italic text-xl md:text-2xl leading-tight">
            Designing AI-driven advisory systems that fuse{" "}
            <span className="not-italic bg-primary text-primary-foreground px-1.5 rounded">fuzzy logic</span>,
            evolution & transformers.
          </p>
        </div>

        <a
          href="#work"
          className="col-span-12 md:col-span-4 bg-ink text-cream sticker rounded-4xl p-5 flex items-center justify-between group hover:bg-primary hover:text-primary-foreground transition-colors"
          data-cursor
        >
          <span className="font-display italic text-2xl md:text-4xl">See the work</span>
          <span className="size-12 rounded-full bg-primary text-primary-foreground grid place-items-center text-2xl group-hover:bg-cream group-hover:text-ink transition-all group-hover:rotate-45">↓</span>
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
