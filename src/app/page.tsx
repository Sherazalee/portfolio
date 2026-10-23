
"use client";

import { useState, type FormEvent } from "react";

const PROFILE = {
  name: "Sheraz Ali",
  email: "your-email@example.com",
  location: "Sargodha, Pakistan",
  website: "https://ghulamaliseo.com",
  // Put the uploaded photo in /public with this exact filename.
  photo: "/Sheeraz(1).jpg",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const achievements = [
  {
    number: "£15K",
    title: "SEO-Driven Revenue",
    detail: "Beds Hub, United Kingdom",
    description:
      "Revenue generated through organic search performance.",
  },
  {
    number: "10",
    suffix: "/day",
    title: "Daily Business Enquiries",
    detail: "Security Firm, Netherlands",
    description:
      "From zero inbound calls to around ten enquiries daily.",
  },
  {
    number: "3+",
    title: "Years in SEO",
    detail: "Strategy & Execution",
    description:
      "Practical experience across local and e-commerce SEO.",
  },
];

const expertise = [
  {
    index: "01",
    category: "SEARCH & GROWTH",
    title: "Search Engine Optimization",
    description:
      "I develop search strategies built around commercial intent, sustainable visibility, and measurable business outcomes. From technical foundations to content architecture, every decision has a purpose.",
    tags: [
      "Technical SEO",
      "Local SEO",
      "E-Commerce SEO",
      "Keyword Strategy",
      "SEO Audits",
      "Search Console",
    ],
  },
  {
    index: "02",
    category: "CUSTOMER ACQUISITION",
    title: "Local SEO & Lead Generation",
    description:
      "I help service-based businesses turn local searches into meaningful enquiries. My approach combines location targeting, Google Business Profile optimization, competitor research, and conversion-focused content.",
    tags: [
      "Google Business Profile",
      "Local Rankings",
      "Lead Generation",
      "Competitor Research",
      "Conversion Optimization",
    ],
  },
  {
    index: "03",
    category: "EMERGING TECHNOLOGY",
    title: "AI Agents & Automation",
    description:
      "I'm exploring how conversational AI, Python, and automation can make digital businesses more efficient. My focus is on practical systems, from intelligent chatbots to streamlined business workflows.",
    tags: [
      "Python",
      "AI Chatbots",
      "AI Agents",
      "Gemini API",
      "Prompt Engineering",
      "Automation",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "E-COMMERCE / UNITED KINGDOM",
    name: "Beds Hub",
    subtitle: "Turning organic visibility into revenue.",
    metric: "£15,000",
    metricLabel: "SEO-generated revenue",
    description:
      "Worked on search visibility and e-commerce optimization for a UK furniture and beds business. The focus was on commercially valuable searches, product discoverability, and improving the organic customer journey.",
    services: [
      "E-Commerce SEO",
      "Technical Analysis",
      "Commercial Keywords",
      "Organic Growth",
    ],
    theme: "dark",
  },
  {
    number: "02",
    category: "LOCAL SEO / NETHERLANDS",
    name: "Security Services",
    subtitle: "From zero calls to consistent enquiries.",
    metric: "10 / day",
    metricLabel: "Business enquiries",
    description:
      "Built organic search visibility for a Netherlands-based security business, helping transform an underperforming online presence into a source of approximately ten enquiries per day, starting from zero inbound calls.",
    services: [
      "Local SEO",
      "Search Visibility",
      "Lead Generation",
      "Location Targeting",
    ],
    theme: "light",
  },
  {
    number: "03",
    category: "LOCAL BUSINESS / PAKISTAN",
    name: "Dental Solutions",
    subtitle: "Building visibility where customers search.",
    metric: "Local",
    metricLabel: "Search-first strategy",
    description:
      "Developed an SEO-oriented website strategy for a dental clinic in Sargodha, combining service-page planning, local keyword targeting, WordPress development, and search-friendly website structure.",
    services: [
      "WordPress",
      "Local SEO",
      "Rank Math",
      "Website Strategy",
    ],
    theme: "light",
  },
];

function Arrow({
  diagonal = false,
  size = 18,
}: {
  diagonal?: boolean;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : (
        <>
          <path d="M4 12h16" />
          <path d="m14 6 6 6-6 6" />
        </>
      )}
    </svg>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? "bg-[#d5b48a]" : "bg-[#a17b53]"
        }`}
      />
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.23em] sm:text-xs ${
          light ? "text-[#d5b48a]" : "text-[#906b47]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "SEO Strategy",
    message: "",
  });
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (PROFILE.email === "your-email@example.com") {
      setNotice(
        "Replace the email placeholder in PROFILE with your email address to enable enquiries."
      );
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Enquiry: ${form.service}`
    );

    const body = encodeURIComponent(
      `Hello Sheraz,\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setNotice("Your email application should open with your message.");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f4ef] font-sans text-[#182a2b] antialiased selection:bg-[#ccad83]/40">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#142526]/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-[78px] max-w-[1380px] items-center justify-between px-6 md:px-10 lg:px-16">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Sheraz Ali Home"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-[#c9a67a]/60 font-serif text-xl font-bold text-[#d6b78f]">
              S
            </div>

            <span className="text-lg font-semibold tracking-[-0.04em] text-[#f5f2ec]">
              Sheraz Ali<span className="text-[#c9a67a]">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b6c1bc] transition-colors hover:text-[#e6c9a3]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-3 border border-[#c9a67a]/60 px-5 py-3 text-xs font-semibold tracking-wide text-[#e6c9a3] transition-all hover:bg-[#c9a67a] hover:text-[#142526] lg:inline-flex"
          >
            Discuss a Project <Arrow diagonal size={16} />
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-xl text-white lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#142526] px-6 py-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-sm text-[#f5f2ec] transition hover:text-[#d6b78f]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#142526] text-[#f6f4ef]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "140px 140px",
            }}
          />

          <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#547a6b]/10 blur-[130px]" />

          <div className="relative mx-auto grid min-h-[730px] max-w-[1380px] items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-16 lg:py-24">
            <div className="relative z-10">
              <div className="mb-10 flex flex-wrap items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#a8c7a1]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d0bd9f]">
                  SEO Strategist / Digital Growth Specialist
                </span>
              </div>

              <h1 className="max-w-[730px] font-serif text-[clamp(4rem,7.6vw,7.9rem)] leading-[0.99] tracking-[-0.065em]">
                Growth
                <br />
                isn't an
                <br />
                <span className="italic text-[#cbaa7f]">
                  accident.
                </span>
              </h1>

              <div className="mt-9 flex max-w-xl items-start gap-5">
                <span className="mt-2 hidden h-px w-12 shrink-0 bg-[#cbaa7f] sm:block" />
                <p className="text-base leading-[1.9] text-[#becbc5] sm:text-lg">
                  I'm <strong className="font-semibold text-white">Sheraz Ali.</strong>{" "}
                  I turn search visibility into business growth,
                  combining hands-on SEO expertise with a growing
                  focus on AI, chatbots, and intelligent automation.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#results"
                  className="group inline-flex items-center justify-between gap-8 bg-[#d0ae83] px-7 py-4 text-sm font-bold text-[#172927] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e2c49f]"
                >
                  Explore My Results
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow diagonal />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-5 border border-[#76867f] px-7 py-4 text-sm font-semibold text-[#f7f3eb] transition-all hover:border-[#d0ae83] hover:text-[#d0ae83]"
                >
                  Let's Connect
                  <Arrow />
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/15 pt-7">
                <div>
                  <p className="font-serif text-3xl text-[#e5c79e]">
                    £15K
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#a5b3ac]">
                    Organic Revenue
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#e5c79e]">
                    10 / Day
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#a5b3ac]">
                    Client Enquiries
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#e5c79e]">
                    3+ Years
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#a5b3ac]">
                    SEO Experience
                  </p>
                </div>
              </div>
            </div>

            {/* PREMIUM PORTRAIT */}
            <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
              <div className="absolute -right-4 -top-4 h-full w-full border border-[#d0ae83]/50 sm:-right-6 sm:-top-6" />

              <div className="relative aspect-[4/5] overflow-hidden bg-[#263b3b]">
                {!photoError ? (
                  <img
                    src={PROFILE.photo}
                    alt="Professional portrait of Sheraz Ali"
                    onError={() => setPhotoError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.035]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-serif text-[120px] text-[#d0ae83]">
                      SA
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142526]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-7 -left-3 max-w-[280px] border border-[#d0ae83]/20 bg-[#f3f0e8] p-5 text-[#182a2b] shadow-[0_24px_65px_rgba(0,0,0,0.2)] sm:-left-10 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#91724f]">
                  A little about me
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight">
                  Sheraz Ali
                </p>
                <p className="mt-2 text-xs leading-6 text-[#68716c]">
                  SEO, technology and ideas that move businesses forward.
                </p>
              </div>
            </div>
          </div>

          <div className="h-[5px] w-full bg-gradient-to-r from-[#b18a5e] via-[#e0c39e] to-[#b18a5e]" />
        </section>

        {/* EDITORIAL INTRODUCTION */}
        <section
          id="about"
          className="scroll-mt-24 bg-[#f6f4ef] py-24 sm:py-32"
        >
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.83fr_1.17fr] lg:gap-24">
            <div>
              <SectionLabel>01 / The Introduction</SectionLabel>

              <h2 className="mt-8 font-serif text-5xl leading-[1.1] tracking-[-0.055em] text-[#182a2b] sm:text-6xl">
                More than
                <br />
                <span className="italic text-[#a47d51]">
                  rankings.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-8 text-[#6b726f]">
                I believe successful SEO is measured by what
                happens after someone finds your business.
              </p>
            </div>

            <div className="lg:border-l lg:border-[#dedbd2] lg:pl-16">
              <p className="font-serif text-2xl leading-[1.6] tracking-[-0.015em] text-[#243b38] sm:text-3xl">
                Good digital strategy doesn't just attract traffic.
                It creates opportunities, starts conversations
                and generates meaningful revenue.
              </p>

              <div className="mt-9 space-y-6 text-[15px] leading-8 text-[#606d67]">
                <p>
                  I'm Sheraz Ali, an SEO strategist with over
                  three years of experience helping businesses
                  build stronger organic visibility. My work
                  spans local SEO, technical website optimization,
                  e-commerce search strategy, and lead generation.
                </p>

                <p>
                  I've worked across different markets, including
                  the United Kingdom, the Netherlands, and Pakistan.
                  My approach brings together commercial keyword
                  research, search intent, website structure,
                  content strategy, and performance analysis.
                </p>

                <p>
                  Alongside my SEO work, I'm developing my
                  expertise in artificial intelligence, Python,
                  chatbot development, and business automation.
                  I also have an Information Technology background
                  associated with the University of Sargodha.
                </p>
              </div>

              <div className="mt-9 grid gap-5 border-t border-[#dedbd2] pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#9b7954]">
                    Specialization
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#243b38]">
                    SEO & Organic Lead Generation
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#9b7954]">
                    Expanding Into
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#243b38]">
                    AI Agents & Intelligent Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS BAND */}
        <section className="bg-[#eae6dc] py-14">
          <div className="mx-auto grid max-w-[1240px] gap-8 px-6 md:grid-cols-3 md:gap-0 md:px-10">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`${
                  index !== 0
                    ? "border-t border-[#d4d0c6] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0"
                    : ""
                } ${index !== 2 ? "md:pr-8" : ""}`}
              >
                <p className="font-serif text-5xl tracking-tight text-[#1a3532] sm:text-6xl">
                  {achievement.number}
                  {achievement.suffix && (
                    <span className="ml-1 font-sans text-lg font-medium text-[#8b7151]">
                      {achievement.suffix}
                    </span>
                  )}
                </p>
                <h3 className="mt-4 text-sm font-bold text-[#1b3431]">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#a07a53]">
                  {achievement.detail}
                </p>
                <p className="mt-3 max-w-[270px] text-xs leading-6 text-[#6e746e]">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section
          id="expertise"
          className="scroll-mt-24 bg-[#f6f4ef] py-24 sm:py-32"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <SectionLabel>02 / What I Do</SectionLabel>
                <h2 className="mt-7 font-serif text-5xl leading-[1.1] tracking-[-0.055em] sm:text-6xl">
                  Expertise built
                  <br />
                  for <span className="italic text-[#a47d51]">impact.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-8 text-[#68726d]">
                Search expertise today. Intelligent technology
                for tomorrow. A thoughtful blend of strategy,
                creativity, and technical execution.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {expertise.map((item) => (
                <article
                  key={item.index}
                  className="group flex h-full flex-col border border-[#e5e0d6] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#b99a75] hover:shadow-[0_25px_60px_rgba(24,42,43,0.08)] sm:p-9"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#b69b7d]">
                      {item.index}.
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded8cb] text-[#81613f] transition-all group-hover:border-[#b69b7d] group-hover:bg-[#e9ddcd]">
                      <Arrow diagonal />
                    </div>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a17d53]">
                    {item.category}
                  </p>

                  <h3 className="mt-4 min-h-[70px] font-serif text-[30px] leading-[1.15] tracking-tight text-[#1b3431]">
                    {item.title}
                  </h3>

                  <p className="mt-6 flex-1 text-sm leading-8 text-[#6c746e]">
                    {item.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-2 border-t border-[#e9e5dd] pt-7">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#e2ded5] bg-[#f7f5ef] px-3 py-2 text-[11px] font-medium text-[#4c5b54] transition-colors group-hover:border-[#d3c2a9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section
          id="results"
          className="scroll-mt-24 bg-[#142526] py-24 text-[#f5f3ed] sm:py-32"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <SectionLabel light>
                  03 / Selected Work
                </SectionLabel>
                <h2 className="mt-7 font-serif text-5xl leading-[1.1] tracking-[-0.055em] sm:text-6xl">
                  Proof is in
                  <br />
                  the <span className="italic text-[#cdaa7f]">results.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-8 text-[#b7c3bc]">
                Selected examples of commercial SEO performance
                and website strategy across international markets.
              </p>
            </div>

            {/* FEATURED BEDS HUB CASE STUDY */}
            <article className="group relative mb-6 overflow-hidden border border-[#70877b]/35 bg-[#203735]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-[#cdaa7f]/10" />
              <div className="pointer-events-none absolute -bottom-52 right-20 h-[420px] w-[420px] rounded-full border border-[#cdaa7f]/10" />

              <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-16">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-serif text-2xl text-[#cdaa7f]">
                      01.
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#cfb898]">
                      Featured Case Study / United Kingdom
                    </span>
                  </div>

                  <h3 className="mt-9 font-serif text-4xl tracking-tight sm:text-5xl">
                    Beds Hub
                  </h3>

                  <p className="mt-3 text-base text-[#ddc19d]">
                    E-Commerce SEO & Revenue Growth
                  </p>

                  <p className="mt-7 max-w-xl text-sm leading-8 text-[#c1ccc5]">
                    Search engine optimization work focused on
                    connecting organic visibility with commercial
                    performance. Through keyword targeting,
                    product discoverability, website analysis,
                    and search-focused improvements, the
                    business generated approximately £15,000
                    in SEO-attributed revenue.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-2">
                    {projects[0].services.map((service) => (
                      <span
                        key={service}
                        className="border border-white/15 px-3 py-2 text-[11px] text-[#d4ddd6]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://bedshub.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-3 border-b border-[#cdaa7f] pb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ddc19d] transition hover:gap-5"
                  >
                    Visit Website <Arrow diagonal />
                  </a>
                </div>

                <div className="border border-[#d1b58a]/20 bg-[#142526]/55 p-8 sm:p-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d2b58c]">
                    Organic Search Performance
                  </p>

                  <p className="mt-8 font-serif text-[clamp(4.5rem,9vw,7.5rem)] leading-none tracking-[-0.06em] text-[#e8d1ae]">
                    £15k
                  </p>

                  <div className="mt-8 h-px w-full bg-[#d1b58a]/25" />

                  <p className="mt-6 text-lg font-medium text-white">
                    Revenue attributed to SEO
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#b5c4bb]">
                    A commercial outcome driven by the
                    organic search channel.
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#cdaa7f]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#cbb99e]">
                      E-Commerce / UK Market
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* OTHER CASE STUDIES */}
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="group flex flex-col border border-[#70877b]/35 bg-[#1d3332] p-8 transition-colors hover:border-[#cdaa7f]/60 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbaa80]">
                      02 / Netherlands
                    </span>

                    <h3 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                      Security Services
                    </h3>
                  </div>

                  <span className="font-serif text-2xl text-[#cbaa80]">
                    02.
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#d2ba96]">
                  Local SEO & Business Enquiries
                </p>

                <p className="mt-7 flex-1 text-sm leading-8 text-[#b9c7bf]">
                  Supported a Netherlands-based security firm
                  with local search optimization and lead
                  generation. The business went from zero
                  inbound calls to approximately ten enquiries
                  per day through improved online visibility.
                </p>

                <div className="mt-9 border-t border-white/15 pt-7">
                  <div className="flex items-end gap-4">
                    <p className="font-serif text-5xl tracking-tight text-[#e5c79e] sm:text-6xl">
                      0 → 10
                    </p>
                    <p className="pb-2 text-xs leading-5 text-[#c8d1c9]">
                      Enquiries
                      <br />
                      per day
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-[#a9b9af]">
                    From no inbound calls to consistent daily interest.
                  </p>
                </div>
              </article>

              <article className="group flex flex-col border border-[#70877b]/35 bg-[#1d3332] p-8 transition-colors hover:border-[#cdaa7f]/60 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbaa80]">
                      03 / Pakistan
                    </span>

                    <h3 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                      Dental Solutions
                    </h3>
                  </div>

                  <span className="font-serif text-2xl text-[#cbaa80]">
                    03.
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#d2ba96]">
                  Local SEO & Website Strategy
                </p>

                <p className="mt-7 flex-1 text-sm leading-8 text-[#b9c7bf]">
                  An SEO-oriented website project for a dental
                  clinic in Sargodha. The strategy focused on
                  location-specific search intent, service-page
                  structure, WordPress development, and helping
                  patients discover the right services online.
                </p>

                <div className="mt-9 border-t border-white/15 pt-7">
                  <p className="font-serif text-4xl tracking-tight text-[#e5c79e]">
                    Local First.
                  </p>
                  <p className="mt-4 text-xs leading-6 text-[#a9b9af]">
                    Relevant searches. Clear service information.
                    Better foundations for local discovery.
                  </p>
                </div>
              </article>
            </div>

            <p className="mt-7 text-xs leading-6 text-[#879b90]">
              Performance figures reflect reported client project
              outcomes and are not independently audited.
            </p>
          </div>
        </section>

        {/* SKILLS / TECHNICAL STACK */}
        <section className="bg-[#f6f4ef] py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>04 / Tools & Technology</SectionLabel>

                <h2 className="mt-8 font-serif text-5xl leading-[1.1] tracking-[-0.055em] sm:text-6xl">
                  The tools
                  <br />
                  behind the
                  <br />
                  <span className="italic text-[#a47d51]">thinking.</span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-8 text-[#6c746e]">
                  Technology is most valuable when it helps
                  solve the right problem. These are the
                  tools and technologies I work with
                  or continue to develop.
                </p>
              </div>

              <div className="space-y-0">
                {[
                  {
                    title: "SEO & Analytics",
                    number: "01",
                    tools: [
                      "SEMrush",
                      "Google Search Console",
                      "Google Analytics 4",
                      "Rank Math",
                      "Microsoft Clarity",
                      "Google Trends",
                    ],
                  },
                  {
                    title: "Web & E-Commerce",
                    number: "02",
                    tools: [
                      "WordPress",
                      "Shopify",
                      "Next.js",
                      "Tailwind CSS",
                      "HTML & CSS",
                      "JavaScript",
                      "GitHub",
                    ],
                  },
                  {
                    title: "AI & Development",
                    number: "03",
                    tools: [
                      "Python",
                      "Gemini API",
                      "AI Chatbots",
                      "Prompt Engineering",
                      "AI Agents",
                      "Flask",
                      "SQL",
                    ],
                  },
                ].map((category) => (
                  <div
                    key={category.number}
                    className="group border-b border-[#dedbd3] py-8 first:pt-0"
                  >
                    <div className="mb-5 flex items-center justify-between gap-5">
                      <h3 className="font-serif text-2xl text-[#203835] sm:text-3xl">
                        {category.title}
                      </h3>
                      <span className="text-sm text-[#a58a67]">
                        {category.number}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-[#e0ddd5] bg-[#fffcf7] px-4 py-2.5 text-xs font-medium text-[#455850] transition-all hover:border-[#b89b77] hover:bg-[#eee6d9]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI DIRECTION */}
        <section className="border-y border-[#dedbd3] bg-[#eae6dc] py-24">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <SectionLabel>05 / Looking Forward</SectionLabel>

              <h2 className="mt-8 font-serif text-5xl leading-[1.12] tracking-[-0.05em] text-[#1c3632] sm:text-6xl">
                SEO is where
                <br />
                I deliver.
                <br />
                <span className="italic text-[#99764f]">
                  AI is where
                  <br />
                  I'm building.
                </span>
              </h2>
            </div>

            <div>
              <p className="font-serif text-2xl leading-[1.6] text-[#263e38]">
                The next generation of digital growth will
                bring search, intelligent systems, and
                automation closer together.
              </p>

              <p className="mt-7 text-sm leading-8 text-[#68726a]">
                I'm building my understanding of AI-powered
                chatbots, conversational systems, Python,
                and API integrations. My goal is to help
                businesses not only attract the right people,
                but also respond faster, simplify operations,
                and create better customer experiences.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Conversational AI & Chatbot Development",
                  "Practical AI Automation for Businesses",
                  "Intelligent Lead Management Workflows",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-t border-[#d4cec2] pt-4"
                  >
                    <span className="font-serif text-lg text-[#9b7853]">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#2d443d]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 bg-[#f6f4ef] py-24 sm:py-32"
        >
          <div className="mx-auto grid max-w-[1240px] gap-14 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <SectionLabel>06 / Start a Conversation</SectionLabel>

              <h2 className="mt-8 font-serif text-5xl leading-[1.1] tracking-[-0.055em] text-[#182f2c] sm:text-6xl">
                Let's make
                <br />
                something
                <br />
                <span className="italic text-[#a17b50]">
                  happen.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-8 text-[#66716b]">
                Need an SEO strategy that delivers business
                value? Exploring a new website, digital
                growth opportunity, or AI idea? I'd be
                interested to hear about it.
              </p>

              <div className="mt-12 space-y-7">
                <div className="border-t border-[#dedbd3] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7954]">
                    Based In
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#243b35]">
                    {PROFILE.location}
                  </p>
                </div>

                <div className="border-t border-[#dedbd3] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7954]">
                    Professional Website
                  </p>
                  <a
                    href={PROFILE.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#243b35] transition hover:text-[#a17b50]"
                  >
                    ghulamaliseo.com <Arrow diagonal size={15} />
                  </a>
                </div>

                <div className="border-t border-[#dedbd3] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7954]">
                    Areas of Collaboration
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#243b35]">
                    SEO / Lead Generation / AI / Websites
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="border border-[#e3ddd2] bg-[#fffefa] p-7 shadow-[0_20px_65px_rgba(24,42,43,0.05)] sm:p-11">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7954]">
                    Project Enquiry
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-[#203835]">
                    Tell me your idea.
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#d9ccb9] text-[#a17b50] sm:flex">
                  <Arrow diagonal size={22} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#7b817b]">
                A few details are enough to start a conversation.
              </p>

              <form onSubmit={handleSubmit} className="mt-9 space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-[#32483f]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Full name"
                      className="mt-3 w-full border-b border-[#d7d3ca] bg-transparent px-0 py-3 text-sm text-[#243b35] outline-none transition placeholder:text-[#9da39c] focus:border-[#a17b50]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-[#32483f]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="mt-3 w-full border-b border-[#d7d3ca] bg-transparent px-0 py-3 text-sm text-[#243b35] outline-none transition placeholder:text-[#9da39c] focus:border-[#a17b50]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold text-[#32483f]"
                  >
                    What Can I Help With?
                  </label>

                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="mt-3 w-full border-b border-[#d7d3ca] bg-transparent px-0 py-3 text-sm text-[#243b35] outline-none focus:border-[#a17b50]"
                  >
                    <option>SEO Strategy</option>
                    <option>Local SEO & Lead Generation</option>
                    <option>E-Commerce SEO</option>
                    <option>Website Development</option>
                    <option>AI & Automation</option>
                    <option>General Collaboration</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#32483f]"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your business, goals, or project..."
                    className="mt-3 w-full resize-none border-b border-[#d7d3ca] bg-transparent px-0 py-3 text-sm leading-7 text-[#243b35] outline-none transition placeholder:text-[#9da39c] focus:border-[#a17b50]"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-[#1c3531] px-7 py-5 text-sm font-semibold text-white transition-all hover:bg-[#305249]"
                >
                  Prepare My Enquiry
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow diagonal />
                  </span>
                </button>

                {notice && (
                  <p
                    role="status"
                    className="text-sm leading-6 text-[#91683e]"
                  >
                    {notice}
                  </p>
                )}

                <p className="text-xs leading-6 text-[#858b85]">
                  This form opens your email application.
                  It does not store messages or send them
                  through a backend service.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="bg-[#dfd7c9] py-20">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-6 md:px-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8e6c47]">
                Strategy. Execution. Growth.
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#213a35] sm:text-4xl">
                Your next growth opportunity
                <br />
                starts with a conversation.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-8 bg-[#1c3531] px-7 py-5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#305249]"
            >
              Work With Sheraz <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#142526] py-14 text-[#f6f4ef]">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-start">
            <div>
              <a
                href="#home"
                className="font-serif text-3xl tracking-[-0.04em]"
              >
                Sheraz Ali<span className="text-[#d1af83]">.</span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#aebdb4]">
                SEO strategist with a passion for measurable
                growth, better digital experiences,
                and emerging AI technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-[#b6c3b9] transition-colors hover:text-[#d9ba90]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-[#82968a] sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Sheraz Ali.
              All rights reserved.
            </p>

            <p>
              Crafted with intention. Built with Next.js.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
