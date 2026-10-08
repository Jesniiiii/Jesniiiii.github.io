import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Play,
  PieChart,
  ServerCog,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'

const PROFILE_IMAGE = '/me.jpeg'

type Project = {
  number: string
  title: string
  kicker: string
  description: string
  metric: string
  metricLabel: string
  accent: string
  tags: string[]
  highlights: string[]
  link?: string
  video?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'PowerPredict',
    kicker: 'Predictive energy analytics',
    description:
      'An AI-driven platform forecasting energy demand across 17 UK Power Networks LV feeders, with live anomaly detection and actionable maintenance intelligence.',
    metric: '15.93%',
    metricLabel: 'forecast MAPE',
    accent: 'lavender',
    tags: ['Python', 'Chronos-Bolt', 'LSTM', 'Kafka', 'FastAPI', 'React'],
    highlights: [
      'Zero-shot Chronos-Bolt outperformed a trained LSTM baseline',
      'R² score of 0.9469 across feeder forecasts',
      'Streaming pipeline, role-based access and email alerts',
    ],
    link: 'https://github.com/Jesniiiii/powerpredict',
  },
  {
    number: '02',
    title: 'Pravaha',
    kicker: 'Dam-break inundation modelling',
    description:
      'A geospatial flood intelligence platform for Tehri Dam, unifying elevation, population, land-cover, road and water data on one analysis-ready grid.',
    metric: '6',
    metricLabel: 'person team',
    accent: 'blue',
    tags: ['Python', 'PostGIS', 'Rasterio', 'FastAPI', 'Docker', 'GeoJSON'],
    highlights: [
      'Led data engineering and multi-source integration',
      'Designed the PostGIS schema and containerized setup',
      'Served flood extents with Shapefile and KML export',
    ],
    video: 'https://www.youtube.com/embed/lYMawp2qSOE',
  },
  {
    number: '03',
    title: 'PrediXa',
    kicker: 'Delay-risk early warning',
    description:
      'An explainable AI system that predicts land acquisition project delays and surfaces the operational drivers behind each risk score.',
    metric: '1K',
    metricLabel: 'records modelled',
    accent: 'peach',
    tags: ['CatBoost', 'SHAP', 'pandas', 'MongoDB', 'FastAPI', 'Faker'],
    highlights: [
      'Built the end-to-end analytical data layer',
      'Engineered compensation, dispute and R&R features',
      'Prepared explainable model outputs using SHAP',
    ],
    video: 'https://www.youtube.com/embed/l_heo9XXDpc',
  },
  {
    number: '04',
    title: 'KitaabKindness',
    kicker: 'Community book sharing',
    description:
      'A full-stack platform that helps readers share and discover books through a clear, reliable CRUD workflow.',
    metric: '4',
    metricLabel: 'core CRUD flows',
    accent: 'mint',
    tags: ['Node.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Built the complete application from database to interface',
      'Designed practical create, browse, update and delete flows',
      'Focused on simple and approachable community use',
    ],
    link: 'https://github.com/Jesniiiii/kitabbjii',
  },
]

const skillGroups = [
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    skills: ['EDA', 'Power BI', 'Data storytelling', 'Feature engineering', 'Time-series forecasting'],
  },
  {
    icon: Database,
    title: 'Data engineering',
    skills: ['ETL pipelines', 'Apache Kafka', 'PostgreSQL', 'PostGIS', 'InfluxDB', 'MongoDB'],
  },
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'SQL', 'JavaScript', 'Java', 'pandas', 'NumPy'],
  },
  {
    icon: Network,
    title: 'Machine learning',
    skills: ['Chronos-Bolt', 'LSTM', 'CatBoost', 'Random Forest', 'SHAP', 'Anomaly detection'],
  },
  {
    icon: ServerCog,
    title: 'Backend & cloud',
    skills: ['FastAPI', 'REST APIs', 'Docker', 'AWS basics', 'JWT auth', 'Git'],
  },
  {
    icon: PieChart,
    title: 'Security analytics',
    skills: ['Wazuh SIEM', 'Event analysis', 'VirusTotal', 'AbuseIPDB', 'Threat intelligence'],
  },
]

const experience = [
  {
    date: 'May — Jul 2026',
    role: 'Cyber Analyst Fellow',
    company: 'DeepCytes Cyber Labs UK',
    description:
      'Working at the intersection of security data and emerging threats: building IP enrichment modules, documenting identity event schemas and assessing threat patterns.',
    tags: ['SIEM pipelines', 'Threat intelligence', 'Event schemas'],
  },
  {
    date: 'Jan — Apr 2026',
    role: 'Data Analytics Intern',
    company: 'Imarticus Learning · Thane',
    description:
      'Applied Python, SQL and Power BI across end-to-end analysis workflows, from cleaning and schema design to exploratory analysis and interactive dashboards.',
    tags: ['Python', 'SQL', 'Power BI'],
  },
]

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Jesni Anna Paul — home">
      <span className="grid size-10 place-items-center rounded-full bg-ink text-sm font-extrabold text-cream transition-transform group-hover:-rotate-6">
        JA
      </span>
      <span className="hidden text-sm font-bold tracking-tight text-ink sm:block">Jesni Anna Paul</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Projects', 'Experience', 'Skills']

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-plum md:flex"
        >
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-ink/15 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/10 bg-cream px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="flex items-center justify-between rounded-2xl px-4 py-3 font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              {link} <ChevronRight size={17} />
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center justify-between rounded-2xl px-4 py-3 font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ChevronRight size={17} />
          </a>
        </nav>
      )}
    </header>
  )
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-5 top-16 hidden rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-soft sm:block">
        <div className="flex items-center gap-2 text-xs font-bold text-ink">
          <span className="size-2 rounded-full bg-mint" /> Open to internships
        </div>
      </div>
      <div className="absolute -right-3 -top-5 size-24 rounded-full bg-coral/70 blur-2xl" />
      <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-ink/10 bg-lavender">
        {PROFILE_IMAGE ? (
          <img src={PROFILE_IMAGE} alt="Jesni Anna Paul" className="size-full object-cover" />
        ) : (
          <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.9),transparent_35%),linear-gradient(145deg,#e8ddff,#ffdcd3)]">
            <div className="text-center">
              <span className="mx-auto grid size-28 place-items-center rounded-full border border-ink/10 bg-white/65 text-plum shadow-soft backdrop-blur">
                <UserRound size={44} strokeWidth={1.4} />
              </span>
              <p className="mt-5 text-sm font-bold text-ink">Your portrait goes here</p>
              <p className="mt-1 text-xs text-ink/50">Set PROFILE_IMAGE in App.tsx</p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute -bottom-6 -right-3 rounded-3xl border border-ink/10 bg-white p-4 shadow-soft sm:right-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-mint/30 text-ink">
            <BarChart3 size={19} />
          </span>
          <div>
            <p className="text-xs text-ink/45">Current focus</p>
            <p className="text-sm font-extrabold text-ink">Data that drives action</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="data-grid absolute inset-0 -z-10 opacity-50" />
      <div className="absolute left-[8%] top-36 -z-10 size-64 rounded-full bg-lavender/45 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-24 lg:pb-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-plum/15 bg-lavender/45 px-4 py-2 text-xs font-bold text-plum">
            <Sparkles size={14} /> Data analyst · Engineer · Storyteller
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
            Hi, I’m Jesni.
            <span className="mt-2 block font-serif text-[1.08em] font-medium italic text-plum">
              I make data useful.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink/62 sm:text-lg">
            Aspiring Data Analyst and B.Tech student building thoughtful dashboards, predictive
            systems and reliable data pipelines that turn complex signals into clear decisions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-plum"
            >
              Explore my work
              <ArrowDown size={17} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="mailto:jesanna2021@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3.5 text-sm font-bold text-ink transition hover:border-plum/30 hover:bg-lavender/30"
            >
              <Mail size={16} /> Get in touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-ink/50">
            <span className="flex items-center gap-2"><MapPin size={15} /> Navi Mumbai, India</span>
            <a className="flex items-center gap-2 transition hover:text-plum" href="https://github.com/Jesniiiii" target="_blank" rel="noreferrer">
              <Code2 size={15} /> GitHub
            </a>
            <a className="flex items-center gap-2 transition hover:text-plum" href="https://linkedin.com/in/jesni-anna-paul" target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={15} /> LinkedIn
            </a>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  )
}

function About() {
  const stats = [
    ['04', 'end-to-end projects'],
    ['17', 'energy feeders forecast'],
    ['06+', 'data technologies'],
  ]

  return (
    <section id="about" className="scroll-mt-24 border-y border-ink/10 bg-white/55">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
        <div>
          <p className="eyebrow">01 · About me</p>
          <h2 className="section-title mt-4">Curious by nature.<br />Analytical by choice.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-ink/70 sm:text-xl sm:leading-9">
            I’m an Electronics and Computer Science student who enjoys finding the story inside
            messy data. My work sits where <strong className="font-bold text-ink">analytics, machine
            learning and backend engineering</strong> meet—whether that means forecasting energy
            demand, mapping flood risk or making model decisions explainable.
          </p>
          <p className="mt-5 leading-7 text-ink/55">
            I care about robust pipelines just as much as the final chart. I’m currently seeking a
            data analytics or data engineering internship where I can learn quickly, collaborate
            closely and build things that matter.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-ink/10 bg-cream p-4 sm:p-6">
                <p className="font-display text-3xl font-extrabold tracking-tight text-plum sm:text-4xl">{value}</p>
                <p className="mt-2 text-xs leading-5 text-ink/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [activeVideo, setActiveVideo] = useState<{ title: string; video: string } | null>(null)

  const iconButtonClass =
    'grid size-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/55 text-ink transition-transform group-hover:-rotate-6 group-hover:scale-105'

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">02 · Selected work</p>
            <h2 className="section-title mt-4">Data, designed to<br />make a difference.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-ink/50">
            A selection of forecasting, geospatial, explainable AI and full-stack projects.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className={`project-card accent-${project.accent} group`}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink/40">
                    {project.number} · {project.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink">
                    {project.title}
                  </h3>
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className={iconButtonClass}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ title: project.title, video: project.video! })}
                    aria-label={`Watch ${project.title} demo`}
                    className={iconButtonClass}
                  >
                    <Play size={17} />
                  </button>
                )}
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-ink/62">{project.description}</p>
              <div className="my-7 flex items-end gap-3 border-y border-ink/10 py-5">
                <span className="font-display text-4xl font-extrabold tracking-tight text-ink">{project.metric}</span>
                <span className="pb-1 text-xs font-semibold text-ink/45">{project.metricLabel}</span>
              </div>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-xs leading-5 text-ink/65">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-plum" /> {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/10 bg-white/55 px-3 py-1.5 text-[11px] font-bold text-ink/60">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href="https://github.com/Jesniiiii" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink transition hover:bg-ink hover:text-white">
            <Code2 size={17} /> More on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-5"
          onClick={() => setActiveVideo(null)}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-white">
              <p className="font-bold">{activeVideo.title} · demo</p>
              <button type="button" onClick={() => setActiveVideo(null)} aria-label="Close video">
                <X size={22} />
              </button>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              {activeVideo.video.endsWith('.mp4') ? (
                <video src={activeVideo.video} controls autoPlay className="size-full" />
              ) : (
                <iframe
                  src={activeVideo.video}
                  title={`${activeVideo.title} demo`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  className="size-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:py-28">
        <div>
          <p className="eyebrow !text-coral">03 · Experience</p>
          <h2 className="section-title mt-4 !text-white">Learning by<br />building.</h2>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
            Practical experience across security analytics, business intelligence and data workflows.
          </p>
        </div>
        <div className="divide-y divide-white/12 border-y border-white/12">
          {experience.map((item) => (
            <article key={item.role} className="grid gap-5 py-9 sm:grid-cols-[140px_1fr]">
              <p className="text-xs font-bold uppercase tracking-wider text-coral">{item.date}</p>
              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold text-lavender">{item.company}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/65">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="eyebrow">04 · Toolkit</p>
          <h2 className="section-title mt-4">The tools behind the thinking.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/50">
            From raw records to reliable pipelines, intelligent models and decision-ready visuals.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article key={title} className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="grid size-11 place-items-center rounded-2xl bg-lavender/65 text-plum">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2 text-xs leading-5 text-ink/55">
                {skills.map((skill, index) => (
                  <span key={skill}>
                    {skill}{index < skills.length - 1 && <span className="ml-2 text-coral">·</span>}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="border-y border-ink/10 bg-white/55">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-ink/10 bg-cream p-7 sm:p-9">
          <span className="grid size-12 place-items-center rounded-2xl bg-coral/35 text-ink"><GraduationCap size={22} /></span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-plum">Education · 2023 — 2027</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink">B.Tech, Electronics & Computer Science</h2>
          <p className="mt-2 text-sm text-ink/55">Pillai College of Engineering, Maharashtra</p>
          <div className="mt-7 flex items-center justify-between rounded-2xl border border-ink/10 bg-white/65 p-4">
            <span className="text-xs font-semibold text-ink/50">Average SGPA · Sem 1–6</span>
            <span className="font-display text-xl font-extrabold text-plum">7.45</span>
          </div>
        </article>
        <article className="rounded-[2rem] border border-ink/10 bg-cream p-7 sm:p-9">
          <span className="grid size-12 place-items-center rounded-2xl bg-mint/35 text-ink"><BookOpen size={21} /></span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-plum">Certifications & learning</p>
          <ul className="mt-5 space-y-3">
            {[
              'SQL and Excel for Data & Business Analytics',
              'Microsoft Power BI: The Complete Guide',
              'Data Science Bootcamp 2026',
              'Full Stack Web Development Bootcamp',
              'DevOps & Advanced Tools Workshop',
            ].map((course) => (
              <li key={course} className="flex items-start gap-3 text-sm leading-6 text-ink/65">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral" /> {course}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-lavender/25" />
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-white text-plum shadow-soft">
          <Heart size={22} fill="currentColor" />
        </span>
        <p className="eyebrow mt-7">Have data. Need clarity?</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-[-0.045em] text-ink sm:text-6xl">
          Let’s build something useful together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink/55">
          I’m open to data analytics and data engineering internships, collaborations and conversations about interesting problems.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:jesanna2021@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-plum">
            <Mail size={17} /> jesanna2021@gmail.com
          </a>
          <a href="tel:+917039470989" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/55 px-7 py-4 text-sm font-bold text-ink transition hover:bg-white">
            <Phone size={17} /> +91 70394 70989
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
        <Logo />
        <p className="text-xs text-ink/40">Designed with curiosity. Built with care.</p>
        <div className="flex items-center gap-2">
          <a href="https://linkedin.com/in/jesni-anna-paul" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:bg-ink hover:text-white"><BriefcaseBusiness size={16} /></a>
          <a href="https://github.com/Jesniiiii" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:bg-ink hover:text-white"><Code2 size={16} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
