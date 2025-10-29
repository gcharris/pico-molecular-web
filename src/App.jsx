import './App.css'
import picoIcon from '../photos/pico-logo-icon.png'
import heroImage from '../photos/hero-patch-model.png'
import rithmLogo from '../photos/rithm-logo.png'
import teamPortrait from '../photos/team-portrait.png'
import appDashboard from '../photos/app-dashboard.png'
import patchExploded from '../photos/patch-exploded.png'
import lifestyleVisual from '../photos/lifestyle-visual.png'
import providerConsole from '../photos/provider-console.png'
import patientConfidence from '../photos/patient-confidence.png'
import ivfPartnership from '../photos/ivf-partnership.png'
import pcosRelief from '../photos/pcos-relief.png'
import dataScienceLayer from '../photos/data-science-layer.png'
import rithmLogoMark from '../photos/rithm-logo-mark.png'
import rithmLogoWordmark from '../photos/rithm-logo-wordmark.png'

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

function App() {
  return (
    <div className="bg-brand-light text-brand-dark">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-brand-glow/15 via-brand-accent/10 to-transparent blur-3xl" />

        <header className="relative z-10 border-b border-brand-light bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
            <a href="#home" className="inline-flex items-center gap-3">
              <img src={picoIcon} alt="Pico Molecular" className="h-10 w-10" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase text-white">
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
            <div className="absolute inset-0 bg-grid-dots [background-size:22px_22px] opacity-60" />
            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 text-white lg:py-28 lg:px-12">
              <div className="hero-brand-card">
                <div className="hero-logo-ring">
                  <img src={rithmLogoMark} alt="Rithm circular logo" />
                </div>
                <h2 className="hero-brand-name">Rithm</h2>
                <p className="hero-tagline">“There&apos;s method in our magic.”</p>
                <p className="hero-summary">
                  Continuous hormone intelligence you can wear. The flagship modality of Pico Molecular delivers clinical-grade endocrine visibility without daily lab work.
                </p>
                <div className="hero-cta">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-primary/90"
                  >
                    Request Early Access
                  </a>
                  <a
                    href="#platform"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-brand-light transition hover:border-brand-primary/60 hover:text-brand-primary"
                  >
                    Explore Platform
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
                <div className="flex-1 space-y-8">
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
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light/60">{stat.label}</p>
                          <p className="metric-value font-display text-3xl">{stat.value}</p>
                          <p className="text-xs">{stat.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
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

          <section className="feature-section">
            <div className="feature-container">
              <div className="feature-grid">
                <div className="feature-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light/60">Why it matters</p>
                  <h3>Painless, precise, breakthrough monitoring.</h3>
                  <ul>
                    <li className="flex items-start">
                      <span />
                      <span>Microneedle hydrogel array maintains stable biofluid access for days.</span>
                    </li>
                    <li className="flex items-start">
                      <span />
                      <span>Nanocomposite EAB sensors capture ultra-low hormone signatures in real time.</span>
                    </li>
                    <li className="flex items-start">
                      <span />
                      <span>AI biomarkers translate data into cycle forecasts, risk alerts, and care tasks.</span>
                    </li>
                  </ul>
                </div>

                <div className="feature-card feature-card--accent">
                  <div>
                    <p>
                      From signal capture to insight delivery, Rithm Patch orchestrates the data flow clinicians and members trust.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-4">
                    <a
                      href="#pipeline"
                      className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white/25"
                    >
                      Learn How It Works
                    </a>
                    <a href="#platform" className="text-xs font-semibold uppercase tracking-[0.35em] transition hover:text-white">
                      View Tech Specs →
                    </a>
                  </div>
                </div>

                <div className="feature-card feature-card--ghost">
                  <img src={rithmLogoWordmark} alt="Rithm Patch" />
                  <p>
                    Continuous hormone intelligence you can wear. The flagship modality of Pico Molecular delivers clinical-grade endocrine visibility without daily lab work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-10 max-w-3xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">From wear to wisdom in three clicks.</h2>
                <p className="mt-4 text-brand-muted">
                  Microneedle arrays, electrochemical EAB sensors, and AI biomarker engines work together to transform surface-level sampling into clinically meaningful hormone intelligence.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: '1',
                    title: 'Wear',
                    description: 'User applies the skin-friendly patch—microneedles painlessly access interstitial fluid in minutes.',
                  },
                  {
                    step: '2',
                    title: 'Connect',
                    description: 'Electrochemical aptamer-based sensors capture hormonal signals and stream encrypted data to the secure app.',
                  },
                  {
                    step: '3',
                    title: 'Know',
                    description: 'Edge + cloud AI translates biomarkers into daily, actionable analytics for members and care teams.',
                  },
                ].map((item) => (
                  <div key={item.step} className="relative rounded-3xl border border-brand-light bg-brand-light/70 p-8 shadow-sm">
                    <span className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-white shadow-lg">
                      {item.step}
                    </span>
                    <h3 className="mt-8 font-display text-2xl text-brand-dark">{item.title}</h3>
                    <p className="mt-4 text-sm text-brand-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-light/80">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-10 max-w-4xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Three protected innovation pillars.</h2>
                <p className="mt-4 text-brand-muted">
                  Each intellectual property aim anchors a different layer of the Rithm Patch stack, translating biochemical mastery into durable clinical value.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    heading: 'IP Aim 1',
                    title: 'Hydrogel microneedles',
                    description: 'Engineered for long, stable biofluid access with skin-friendly adhesion and day-long comfort.',
                  },
                  {
                    heading: 'IP Aim 2',
                    title: 'Nanocomposite EAB sensors',
                    description: 'Electrochemical aptamer-based sensing tuned for ultra-sensitive hormone capture at low concentrations.',
                  },
                  {
                    heading: 'IP Aim 3',
                    title: 'AI digital biomarkers',
                    description: 'Adaptive signal modeling converts raw hormone patterns into actionable insight and care pathways.',
                  },
                ].map((item) => (
                  <div key={item.heading} className="rounded-3xl border border-brand-light bg-white p-8 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{item.heading}</p>
                    <h3 className="mt-4 font-display text-2xl text-brand-dark">{item.title}</h3>
                    <p className="mt-4 text-sm text-brand-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
                  Inside the Patch
                </span>
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Layered engineering for trustworthy biosignals.</h2>
                <p className="text-brand-muted">
                  The Rithm Patch marries soft biointerfaces with ruggedized electronics so clinicians can trust every microvolt. Each layer is designed to stabilize data integrity from skin contact to cloud analytics.
                </p>
                <ul className="space-y-4 text-sm text-brand-dark/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span><strong>Hydrogel microneedles:</strong> Self-sealing microcolumns draw interstitial fluid while anti-biofouling coatings preserve signal clarity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span><strong>EAB sensor disc:</strong> Nanocomposite aptamers convert hormone binding events into stable electrochemical signatures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span><strong>Wireless module:</strong> Ultra-low-power telemetry syncs encrypted packets to the Pico Molecular data mesh in real time.</span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl border border-brand-light bg-brand-light/70 p-6 shadow-lg">
                <img src={patchExploded} alt="Exploded engineering view of the Rithm Patch" className="w-full object-contain" />
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-10 max-w-4xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Designed to unlock value for every stakeholder.</h2>
                <p className="mt-4 text-brand-muted">
                  Rithm Patch meets patients where they are, equips clinicians with precise decision support, and offers partners a defensible platform to scale.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-light bg-brand-light/70 shadow-sm">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={patientConfidence} alt="Member enjoying calm with hormone insight" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Patients</p>
                    <h3 className="font-display text-2xl text-brand-dark">Better diagnosis, less pain.</h3>
                    <p className="text-sm text-brand-muted">
                      Replace dense symptom journaling with effortless wear. Gentle microneedles eliminate repeated lab sticks while delivering real-time clarity for IVF, PMDD, and PCOS journeys.
                    </p>
                    <blockquote className="mt-auto text-sm italic text-brand-dark/70">“I finally understand my cycle without living at the lab.” — Anissa, 34</blockquote>
                  </div>
                </div>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-light bg-white shadow-sm">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={ivfPartnership} alt="Clinician partnership supporting IVF couple" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Clinicians</p>
                    <h3 className="font-display text-2xl text-brand-dark">Replace 80% of IVF blood draws.</h3>
                    <p className="text-sm text-brand-muted">
                      Continuous hormone panels deliver cycle visibility without daily venipuncture, freeing staff time and enhancing protocol responsiveness across reproductive endocrinology programs.
                    </p>
                    <blockquote className="mt-auto text-sm italic text-brand-dark/70">“Our IVF mornings run twice as smoothly with Rithm data in the chart.” — Dr. Patel, REI</blockquote>
                  </div>
                </div>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-light bg-brand-light/70 shadow-sm">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={pcosRelief} alt="Partner ecosystem celebrating hormone clarity" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Partners</p>
                    <h3 className="font-display text-2xl text-brand-dark">Unique IP, scalable HaaS.</h3>
                    <p className="text-sm text-brand-muted">
                      Combine differentiated IP with a hardware-as-a-service delivery model—recurring revenue, data network effects, and co-development opportunities across women’s health ecosystems.
                    </p>
                    <blockquote className="mt-auto text-sm italic text-brand-dark/70">“Rithm unlocked a premium tier for our women’s health benefit in one quarter.” — Serena, Employer Benefits Lead</blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-brand-light/70">
            <div className="mx-auto max-w-6xl gap-12 px-6 py-16 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
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

          <section className="bg-brand-light/70">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-8 max-w-4xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">See how Rithm compares.</h2>
                <p className="mt-4 text-brand-muted">
                  A side-by-side view of continuous hormone intelligence versus legacy lab workflows and emerging competitors.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-brand-light bg-white shadow-sm">
                <div className="grid grid-cols-4 bg-brand-dark text-white">
                  <div className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-light/70">Category</div>
                  <div className="px-6 py-4 text-lg font-semibold">Rithm Patch</div>
                  <div className="px-6 py-4 text-lg font-semibold">Blood Tests</div>
                  <div className="px-6 py-4 text-lg font-semibold">Level Zero Health (LZH)</div>
                </div>
                {[
                  {
                    label: 'Continuous Monitoring',
                    rithm: 'Yes — 24/7 hormone signal stream with AI coaching.',
                    blood: 'No — episodic draws capture isolated points.',
                    lzh: 'Partial — intermittent tracking, limited hormone scope.',
                  },
                  {
                    label: 'Pain Level',
                    rithm: 'Painless microneedle wear; no daily clinic visits.',
                    blood: 'Invasive venipuncture; recurrent appointments.',
                    lzh: 'Low — surface sensors, but narrow biomarker coverage.',
                  },
                  {
                    label: 'Data Intelligence',
                    rithm: 'Predictive digital biomarkers with clinician workflow integration.',
                    blood: 'Manual interpretation; delays between draw and action.',
                    lzh: 'Basic trend outputs, limited provider integrations.',
                  },
                  {
                    label: 'IP Moat',
                    rithm: 'Patented microneedles + EAB sensors + AI stack.',
                    blood: 'Commodity lab infrastructure.',
                    lzh: 'Software-first IP, hardware sourced from partners.',
                  },
                  {
                    label: 'Market Approach',
                    rithm: 'Hardware-as-a-service for clinics, employers, and research.',
                    blood: 'Fee-for-service diagnostics.',
                    lzh: 'Direct-to-consumer wellness focus.',
                  },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-4 border-t border-brand-light/60">
                    <div className="px-6 py-5 text-sm font-semibold uppercase tracking-wide text-brand-muted">{row.label}</div>
                    <div className="px-6 py-5 text-sm text-brand-dark/80">{row.rithm}</div>
                    <div className="px-6 py-5 text-sm text-brand-dark/80">{row.blood}</div>
                    <div className="px-6 py-5 text-sm text-brand-dark/80">{row.lzh}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="space-y-6">
                  <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Founder</h2>
                  <div className="rounded-3xl border border-brand-light bg-brand-light/70 p-8 shadow-sm">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl">
                        <img src={teamPortrait} alt="Pico Molecular founding team" className="h-full w-full object-cover" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-glow/20" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Founder & CEO</p>
                        <h3 className="mt-2 font-display text-3xl text-brand-dark">Alexandra Chen, PhD</h3>
                        <p className="mt-3 text-sm text-brand-muted">
                          Synthetic biologist and medical device engineer with a decade of experience translating biosensor IP into FDA-cleared products. Previously led biosignal R&D at leading CGM and fertility-tech companies.
                        </p>
                        <p className="mt-4 text-xs text-brand-muted">
                          Placeholder biography and photo — swap in official headshot and credential highlights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Scientific Advisors</h2>
                  <p className="text-sm text-brand-muted">
                    A multidisciplinary advisory board spanning reproductive endocrinology, biosensors, and AI safety.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { name: 'Dr. Priya Natarajan', detail: 'Reproductive Endocrinologist, Stanford Medicine', asset: '/photos/advisor-natarajan-placeholder.jpg' },
                      { name: 'Prof. Miguel Ortega', detail: 'Nanomaterials Lab, MIT', asset: '/photos/advisor-ortega-placeholder.jpg' },
                      { name: 'Dr. Hannah Liu', detail: 'Former FDA Digital Health Reviewer', asset: '/photos/advisor-liu-placeholder.jpg' },
                      { name: 'Prof. Julian Smith', detail: 'AI Assurance Lead, Oxford', asset: '/photos/advisor-smith-placeholder.jpg' },
                    ].map((advisor) => (
                      <div key={advisor.name} className="rounded-3xl border border-brand-light bg-brand-light/50 p-5 shadow-sm">
                        <div
                          className="h-20 w-full overflow-hidden rounded-2xl bg-cover bg-center"
                          style={{ backgroundImage: `url(${advisor.asset})` }}
                        />
                        <h3 className="mt-4 font-display text-xl text-brand-dark">{advisor.name}</h3>
                        <p className="mt-2 text-xs text-brand-muted">{advisor.detail}</p>
                        <p className="mt-3 text-[11px] text-brand-muted">Replace with official portraits or partner logos.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-16 grid gap-8 sm:grid-cols-2">
                <div className="rounded-3xl border border-brand-light bg-brand-light/70 p-8 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Vision</p>
                  <h3 className="mt-4 font-display text-2xl text-brand-dark">Continuous molecular intelligence for every body.</h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    Pico Molecular envisions a world where endocrine insight is ambient, proactive, and accessible — powering preventive care pathways across fertility, metabolic health, and healthy aging.
                  </p>
                </div>
                <div className="rounded-3xl border border-brand-light bg-white p-8 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Mission</p>
                  <h3 className="mt-4 font-display text-2xl text-brand-dark">Translate hormone signals into better outcomes.</h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    We engineer wearable biosensors and AI biomarkers that empower patients, equip clinicians, and unlock new standards of women’s health delivery.
                  </p>
                </div>
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
                    <div className="mt-8 rounded-2xl border border-dashed border-brand-primary/30 bg-brand-light/60 p-4 text-xs text-brand-muted">
                      Swap with product photography, prototype imagery, or program credentials.
                    </div>
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
                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition hover:text-brand-glow">
                      Configure track
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </section>

          <section id="contact" className="relative overflow-hidden bg-brand-dark text-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-glow/20" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:px-12">
              <div className="flex-1">
                <h2 className="font-display text-4xl sm:text-5xl">Let&apos;s build the future of hormone health together.</h2>
                <p className="mt-4 text-brand-light/80">
                  Share your program goals and we&apos;ll engineer a launch roadmap, integration plan, and success metrics tailored to your population.
                </p>
                <div className="mt-8 space-y-4 text-sm text-brand-light/80">
                  <p><strong>Email:</strong> partnerships@picomolecular.com</p>
                  <p><strong>Phone:</strong> +1 (415) 555-0128</p>
                  <p><strong>HQ:</strong> San Francisco, CA</p>
                </div>
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
          <section className="bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-12">
              <div className="rounded-3xl border border-brand-light bg-brand-light/60 p-10 shadow-sm">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Join our mission.</h2>
                <p className="mt-4 text-sm text-brand-muted">
                  Sign up for updates, partner inquiries, or demo requests. Let&apos;s collaborate on delivering hormone intelligence at scale.
                </p>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="mailto:josephine@picomolecular.com"
                    className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-primary/90"
                  >
                    josephine@picomolecular.com
                  </a>
                </div>
                <p className="mt-4 text-xs text-brand-muted">
                  Add marketing automation or CRM integrations when you&apos;re ready — the layout is built to host them.
                </p>
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