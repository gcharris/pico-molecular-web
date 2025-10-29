import './App.css'
import picoIcon from '../photos/pico-logo-icon.png'
import heroImage from '../photos/hero-patch-model.png'
import heroBackdrop from '../photos/hero-disc-backdrop.png'
import teamPortrait from '../photos/team-portrait.png'
import appDashboard from '../photos/app-dashboard.png'
import patchExploded from '../photos/patch-exploded.png'
import lifestyleVisual from '../photos/lifestyle-visual.png'
import providerConsole from '../photos/provider-console.png'
import patientConfidence from '../photos/patient-confidence.png'
import ivfPartnership from '../photos/ivf-partnership.png'
import partnersUnique from '../photos/partners-unique-haas.png'
import dataScienceLayer from '../photos/data-science-layer.png'
import rithmLogoMark from '../photos/rithm-logo-mark-transparent.png'
import rithmWord from '../photos/rithm-word-transparent.png'

const navigation = [
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#platform', label: 'Platform' },
  { href: '#validation', label: 'Validation' },
  { href: '#partners', label: 'Partners' },
]

const pillars = [
  {
    title: 'Continuous Endocrine Intelligence',
    bullets: [
      '24/7 biosensing with adaptive sampling across estrogen, progesterone, cortisol, and thyroid analogues.',
      'Signal normalization tuned to circadian, infradian, and lifestyle markers for real-world reliability.',
      'Secure baseline mapping in under 72 hours with ongoing trend detection and health alerts.',
    ],
  },
  {
    title: 'Clinical-Grade Wearable Experience',
    bullets: [
      'Skin-friendly hydrogel array engineered for multi-day wear without irritation.',
      'Replaceable patch ecosystem paired with a rechargeable core sensor pod.',
      'Motion-resilient adhesion with breathable materials designed for active routines.',
    ],
  },
  {
    title: 'Decision-Making Insight Stack',
    bullets: [
      'Predictive trend scoring to anticipate endocrine shifts before symptoms surface.',
      'Provider portal with configurable protocols, risk flags, and care pathways.',
      'Consumer app layered with clarity-first storytelling, personalized actions, and adherence support.',
    ],
  },
]

const pipeline = [
  {
    phase: '01',
    title: 'Capture',
    description:
      'Microfluidic channels collect sweat metabolites and interstitial markers in real time while on-body sensors track motion and temperature.',
  },
  {
    phase: '02',
    title: 'Translate',
    description:
      'Embedded signal processing isolates hormone signatures, denoises activity artifacts, and calibrates to personal baselines.',
  },
  {
    phase: '03',
    title: 'Model',
    description:
      'Edge AI generates predictive hormone rhythm maps and risk scores synced to the Pico Molecular data cloud.',
  },
  {
    phase: '04',
    title: 'Deliver',
    description:
      'Insights stream to clinicians and members with actionable recommendations, automation hooks, and compliance tracking.',
  },
]

const platformTiles = [
  {
    heading: 'Provider Console',
    items: [
      'Population dashboards with cohort stratification and trending alerts.',
      'EHR-friendly exports, HL7/FHIR integrations, and programmable care plans.',
      'Automated note summarization for time-savings and audit-ready documentation.',
    ],
    image: providerConsole,
    imageAlt: 'Provider console with cohort risk stratification and care plan tools',
    imageFit: 'object-cover',
  },
  {
    heading: 'Member App',
    items: [
      'Dynamic visualization of hormonal patterns, readiness scores, and cycle forecasts.',
      'Daily habit coaching tied to sleep, stress, nutrition, and medication adherence.',
      'Confident communication with secure messaging, labs tracking, and patch guidance.',
    ],
    image: appDashboard,
    imageAlt: 'Hormone insights mobile app interface',
    imageFit: 'object-cover',
  },
  {
    heading: 'Data Science Layer',
    items: [
      'Privacy-first architecture with encrypted data pipelines and consent controls.',
      'Model training sandbox with bias monitoring and clinician-in-the-loop oversight.',
      'API toolkit for research sponsors, pharma partners, and digital front doors.',
    ],
    image: dataScienceLayer,
    imageAlt: 'Data science governance with privacy, APIs, and clinician oversight',
    imageFit: 'object-contain',
  },
]

const validations = [
  'IRB-approved pilot cohorts across perimenopause, fertility preservation, and endocrine recovery programs.',
  'Biosensor repeatability validated against serum benchmarks with ±6% variance in controlled environments.',
  'Partnered with leading academic endocrine labs for longitudinal data sharing and assay refinement.',
  'Roadmapped FDA Breakthrough Device designation; ISO 13485 manufacturing alignment in progress.',
]

const partnerHighlights = [
  {
    title: 'Clinics & Virtual Care Networks',
    detail: 'Deploy Rithm Patch as a turnkey program with white-labeled care pathways and reimbursement guides.',
  },
  {
    title: 'Employers & Benefits Platforms',
    detail: 'Deliver hormone health as a core benefit with measurable outcomes and population-level reporting.',
  },
  {
    title: 'Life Sciences & Research Sponsors',
    detail: 'Unlock granular endocrine data streams for trials, companion diagnostics, and biomarker discovery.',
  },
]

const stats = [
  { label: 'Signal Fidelity', value: '96.4%', caption: 'Average hormone signature accuracy versus lab assays.' },
  { label: 'Wear Time', value: '72 hrs', caption: 'Comfort-tested continuous wear per disposable patch.' },
  { label: 'Insights Ready', value: '72 hrs', caption: 'Baseline calibration to actionable cycle guidance.' },
  { label: 'Care Efficiency', value: '4x', caption: 'Clinician time saved with automated summarization.' },
]

const featureHighlights = [
  {
    tone: 'navy',
    label: 'Why it matters',
    title: 'Painless, precise, breakthrough monitoring.',
    description:
      'Microneedle hydrogel access, nanocomposite sensing, and adaptive biomarkers converge so hormone care finally has reliable signal.',
    points: [
      'Microneedle hydrogel array maintains stable biofluid access for days without irritation.',
      'Nanocomposite EAB sensors capture ultra-low hormone signatures in real time.',
      'AI biomarkers translate trends into cycle forecasts, risk alerts, and guided care tasks.',
    ],
  },
  {
    tone: 'royal',
    label: 'How it flows',
    title: 'From capture to insight, orchestrated for clinicians.',
    description:
      'The Rithm Patch bridges wetware and software—automating acquisition, calibration, and delivery of endocrine intelligence.',
    points: [
      'Edge intelligence harmonizes biosignals before they leave the body.',
      'Cloud analytics layers protocols, population benchmarks, and personalization.',
      'Clinicians receive configurable alerts, visits, and summaries that slot into existing workflows.',
    ],
    cta: { href: '#pipeline', label: 'Learn how it works' },
  },
  {
    tone: 'dusk',
    label: 'What teams gain',
    title: 'Continuous hormone intelligence you can wear.',
    description:
      'Give members clarity every day while unlocking new services, revenue, and research partnerships.',
    points: [
      'Members move from symptom journaling to data-backed decisions.',
      'Clinics replace 80% of routine blood draws while boosting capacity.',
      'Partners layer unique IP and hardware-as-a-service into their platforms.',
    ],
  },
]

function App() {
  return (
    <div className="bg-brand-light text-brand-dark">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-brand-glow/15 via-brand-accent/10 to-transparent blur-3xl" />

        <header className="relative z-10 border-b border-brand-light bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
            <a href="#home" className="inline-flex items-center gap-4" aria-label="Pico Molecular">
              <img src={picoIcon} alt="Pico Molecular logo" className="h-12 w-auto" />
              <span className="hidden text-base font-semibold tracking-[0.32em] uppercase text-brand-dark sm:inline-flex lg:text-lg">
                Pico Molecular
              </span>
            </a>
            <div className="hidden items-center gap-8 text-sm font-medium text-brand-muted lg:flex">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-brand-primary">
                  {item.label}
                </a>
              ))}
        </div>
            <a
              href="#contact"
              className="hidden rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-primary/90 lg:inline-flex"
            >
              Request a Demo
            </a>
          </nav>
        </header>

        <main>
          <section id="home" className="relative isolate hero-section">
            <div
              className="hero-photo-bg"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,252,255,0.95) 50%, rgba(248,250,252,0.94) 100%), url(${heroBackdrop})`,
              }}
            />
            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 pt-20 pb-36 text-brand-dark lg:px-12 lg:pt-28 lg:pb-48">
              <div className="hero-brand">
                <img src={rithmLogoMark} alt="Rithm circular logo" className="hero-brand-mark" />
                <img src={rithmWord} alt="Rithm wordmark" className="hero-brand-word" />
                <p className="hero-tagline">“There&apos;s method in our magic.”</p>
                <p className="hero-summary">
                  Continuous hormone intelligence you can wear. The flagship modality of Pico Molecular delivers clinical-grade endocrine visibility without daily lab work.
                </p>
              </div>

              <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
                <div className="order-2 flex-1 space-y-8 lg:order-1">
                  <span className="hero-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                    Next-Gen Hormone Biosensing
                  </span>
                  <h1 className="hero-heading font-display">
                    The Rithm Patch: The CGM for Hormones
                  </h1>
                  <p className="hero-subtext max-w-2xl text-base sm:text-lg">
                    Continuous, real-time hormone insight for a new era in women&apos;s health.
                  </p>
                  <div className="hero-metrics">
                    <div className="grid gap-6 text-center sm:grid-cols-4">
                      {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-dark/50">{stat.label}</p>
                          <p className="metric-value font-display text-3xl">{stat.value}</p>
                          <p className="text-xs text-brand-dark/70">{stat.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 flex-1 lg:order-2">
                  <div className="relative mx-auto max-w-md">
                    <div className="absolute -top-10 -right-10 hidden h-24 w-24 rounded-full bg-gradient-to-br from-brand-primary/40 to-brand-glow/30 blur-2xl sm:block" />
                    <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-brand-primary/15 via-white/10 to-brand-accent/15 shadow-2xl">
                      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59,130,246,0.45), transparent 50%)' }} />
                      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-glow/25 via-brand-primary/15 to-transparent blur-3xl" />
                      <div className="relative flex aspect-[3/4] items-end justify-center p-6">
                        <img src={heroImage} alt="Person wearing the Rithm Patch" className="h-full w-full rounded-3xl object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="feature-section mt-32">
            <div className="feature-container">
              <div className="feature-grid">
                {featureHighlights.map((card) => (
                  <div key={card.title} className={`feature-card feature-card--${card.tone}`}>
                    <p className="feature-card__label">{card.label}</p>
                    <h3>{card.title}</h3>
                    <p className="feature-card__lead">{card.description}</p>
                    {card.points && (
                      <ul className="feature-card__list">
                        {card.points.map((point) => (
                          <li key={point}>
                            <span />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {card.cta && (
                      <a href={card.cta.href} className="feature-card__cta">
                        {card.cta.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-light/70 mt-8">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
              <div className="order-2 space-y-6 lg:order-1">
                <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
                  Everyday adherence
                </span>
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Designed for real lives, not just lab visits.</h2>
                <p className="text-brand-muted">
                  Members wear Rithm like a wellness accessory while clinicians receive the fidelity of a research instrument. The consumer-grade onboarding keeps adoption high; the medical backbone keeps data unquestionable.
                </p>
                <ul className="space-y-4 text-sm text-brand-dark/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    Seamless pairing with the mobile app delivers personalised nudges without disrupting daily flow.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    Automatic escalation routes keep providers informed the moment hormone volatility appears.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    APIs feed partner ecosystems—from fertility coaching to employer wellness dashboards.
                  </li>
                </ul>
              </div>
              <div className="order-1 mb-10 overflow-hidden rounded-3xl border border-brand-light bg-white shadow-glow lg:order-2 lg:mb-0">
                <img src={lifestyleVisual} alt="Person reviewing hormone insights from the Rithm Patch at home" className="w-full object-cover" />
              </div>
            </div>
          </section>

          <section id="pillars" className="bg-brand-light/80">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="mb-12 max-w-3xl">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Modular building blocks for hormone health programs.</h2>
                <p className="mt-4 text-brand-muted">
                  Pair the wearable with the service modules you need—from continuous monitoring to engagement and analytics flows.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex h-full flex-col rounded-3xl border border-brand-light bg-white p-8 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-dark">{pillar.title}</h3>
                    <ul className="mt-6 space-y-4 text-sm text-brand-muted">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pipeline" className="relative overflow-hidden bg-brand-dark text-white">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.4), transparent 45%)' }} />
            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
              <div className="mb-12 max-w-3xl">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
                  Capture → Translate → Model → Deliver
                </span>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl">The hormone rhythm pipeline engineered for real-world care.</h2>
                <p className="mt-4 text-brand-light/80">
                  Every layer is purpose-built to honor the variability of human biology while maintaining clinical confidence and operational efficiency.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-4">
                {pipeline.map((step) => (
                  <div key={step.phase} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-2">
                    <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-brand-primary/40 to-brand-glow/30 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="text-sm font-semibold text-brand-accent">{step.phase}</p>
                    <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                    <p className="mt-4 text-sm text-brand-light/70">{step.description}</p>
                  </div>
                ))}
          </div>
        </div>
      </section>

          <section id="platform" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
              <div className="mb-12 max-w-4xl">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">One platform that harmonizes clinicians, members, and researchers.</h2>
                <p className="mt-4 text-brand-muted">
                  Rithm Patch is more than a wearable. It&apos;s an intelligent operating system that turns raw biosignals into shared progress.
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                {platformTiles.map((tile) => (
                  <div key={tile.heading} className="flex h-full flex-col rounded-3xl border border-brand-light bg-brand-light/70 p-8 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-dark">{tile.heading}</h3>
                    <ul className="mt-6 space-y-4 text-sm text-brand-muted">
                      {tile.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {tile.image ? (
                      <div className="mt-8 overflow-hidden rounded-2xl border border-white/60 bg-white">
                        <img src={tile.image} alt={tile.imageAlt} className={`h-full w-full ${tile.imageFit ?? 'object-cover'}`} />
                      </div>
                    ) : (
                      <div className="mt-8 rounded-2xl border border-dashed border-brand-primary/30 bg-white/80 p-4 text-xs text-brand-muted">
                        Placeholder visualization zone — swap with product screenshots or motion graphics.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="validation" className="relative bg-brand-light/60">
            <div className="absolute inset-x-0 -top-10 mx-auto h-20 max-w-5xl rounded-full bg-gradient-to-r from-brand-primary/20 via-brand-glow/10 to-transparent blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
                  <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Clinically confident, regulation forward.</h2>
                  <p className="mt-4 text-brand-muted">
                    Built with scientists, clinicians, and regulators to meet rigorous performance standards from day one.
                  </p>
                  <ul className="mt-8 space-y-4 text-sm text-brand-dark/80">
                    {validations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary/15 text-xs font-semibold text-brand-primary">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <aside className="rounded-3xl border border-brand-light bg-white p-8 shadow-lg">
                  <h3 className="font-display text-2xl text-brand-dark">Program Blueprint</h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    Use this module to preview onboarding timelines, pilot study design, or regulatory milestones. Swap in your own visuals or infographics as they become available.
                  </p>
                  <div className="mt-6 space-y-4 text-sm text-brand-dark/70">
                    <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/60 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-muted">Milestone Snapshot</p>
                      <p className="mt-2 font-semibold">Q4 • Breakthrough Device submission ready</p>
                    </div>
                    <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/60 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-muted">Pilot Highlight</p>
                      <p className="mt-2 font-semibold">120 participants across three care sites</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section id="partners" className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="mb-10">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Partnership tracks tailored to your mission.</h2>
                <p className="mt-4 text-brand-muted">
                  Choose a modular launch plan or co-develop with Pico Molecular&apos;s applied science team.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {partnerHighlights.map((partner) => (
                  <div key={partner.title} className="rounded-3xl border border-brand-light bg-brand-light/60 p-6 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-dark">{partner.title}</h3>
                    <p className="mt-4 text-sm text-brand-muted">{partner.detail}</p>
                    <div className="mt-6 text-sm text-brand-muted/80">Collaborate with us to tailor deployment, pricing, and integrations for your organization.</div>
                  </div>
                ))}
          </div>
        </div>
      </section>

          <section id="contact" className="relative overflow-hidden bg-brand-dark text-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-glow/20" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:px-12">
              <div className="flex-1 space-y-6">
                <h2 className="font-display text-4xl sm:text-5xl">Let&apos;s build the future of hormone health together.</h2>
                <p className="mt-4 text-brand-light/80">
                  Share your program goals and we&apos;ll engineer a launch roadmap, integration plan, and success metrics tailored to your population.
                </p>
                <a
                  href="mailto:josephine@picomolecular.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact josephine@picomolecular.com
                </a>
              </div>
              <div className="flex-1">
                <form className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-sm font-medium text-brand-light/80">
                      Contact name
                      <input
                        type="text"
                        placeholder="Jordan Kim"
                        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                      />
                    </label>
                    <label className="text-sm font-medium text-brand-light/80">
                      Company
                      <input
                        type="text"
                        placeholder="Pico Molecular"
                        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                      />
                    </label>
                    <label className="text-sm font-medium text-brand-light/80">
                      Work email
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                      />
                    </label>
                    <label className="text-sm font-medium text-brand-light/80">
                      Program focus
                      <select className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white focus:border-brand-accent focus:outline-none">
                        <option value="" className="text-brand-dark">
                          Select
                        </option>
                        <option className="text-brand-dark">Perimenopause care</option>
                        <option className="text-brand-dark">Fertility support</option>
                        <option className="text-brand-dark">Endocrine recovery</option>
                        <option className="text-brand-dark">Research partnership</option>
                      </select>
                    </label>
                  </div>
                  <label className="mt-6 block text-sm font-medium text-brand-light/80">
                    Tell us more
                    <textarea
                      rows={4}
                      placeholder="Share goals, timeline, and success metrics."
                      className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                    />
                  </label>
                  <button
                    type="button"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:-translate-y-0.5 hover:bg-brand-light"
                  >
                    Submit interest
                  </button>
                  <p className="mt-4 text-xs text-brand-light/60">
                    This form is a visual placeholder. Connect to your preferred marketing automation or CRM when ready.
                  </p>
                </form>
              </div>
            </div>
          </section>

        </main>

        <footer className="border-t border-white/40 bg-white/80 py-10 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-brand-muted sm:flex-row lg:px-12">
            <p>&copy; {new Date().getFullYear()} Pico Molecular. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-brand-primary">Privacy</a>
              <a href="#security" className="hover:text-brand-primary">Security</a>
              <a href="#press" className="hover:text-brand-primary">Press Kit</a>
            </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App