import {
  FileText, Headphones, Clapperboard, MessageCircle, Landmark, Building2,
  Flame, ListChecks, Upload, Sparkles, TrendingUp, GraduationCap, BookOpen, Briefcase,
} from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL, CONTACT_EMAIL } from "./config";

const features = [
  { icon: FileText, title: "DrillPad", text: "Upload a PDF or paste a link and get up to 50 practice questions, flashcards and quizzes from your own material." },
  { icon: Headphones, title: "Study podcasts", text: "Turn a chapter into an audio lesson you can listen to on the bus, at the gym, or before bed." },
  { icon: Clapperboard, title: "Lecture & whiteboard videos", text: "Short explainer videos generated from your notes, split into chapters with practice after each one." },
  { icon: MessageCircle, title: "Chat with your subject", text: "Ask questions about your materials and get answers grounded in what you uploaded." },
  { icon: Landmark, title: "BankReady", text: "Timed aptitude practice built around the tests banks use to screen graduates." },
  { icon: Building2, title: "Company Tracks", text: "Simulations that match each employer's screening format, including Shell, KPMG and PwC." },
  { icon: Flame, title: "Streaks & progress", text: "Daily streaks, streak freezes and study stats that keep you showing up." },
  { icon: ListChecks, title: "Study planner", text: "To-dos and reminders so revision is on your calendar, not just in your head." },
];

const personas = [
  { icon: BookOpen, title: "University students", text: "Managing several courses this semester and need to keep up with all of them." },
  { icon: GraduationCap, title: "Exam candidates", text: "Preparing for a specific exam or certification and want focused, repeatable practice." },
  { icon: Briefcase, title: "Graduates job hunting", text: "Getting ready for bank and company aptitude tests and assessment-centre rounds." },
];

const steps = [
  { icon: Upload, title: "Add your material", text: "Upload lecture notes, past questions or a link. Any subject, any exam." },
  { icon: Sparkles, title: "EduXL builds your study set", text: "Questions, flashcards, audio and video lessons, all made from your content." },
  { icon: TrendingUp, title: "Practise and track", text: "Drill daily, review what you missed, and watch your scores and streak grow." },
];

function StoreButtons({ center }) {
  const btns = [
    APP_STORE_URL && { href: APP_STORE_URL, label: "App Store" },
    PLAY_STORE_URL && { href: PLAY_STORE_URL, label: "Google Play" },
  ].filter(Boolean);

  if (btns.length === 0) {
    return (
      <p className={`m-0 text-sm text-slate-500 ${center ? "text-center" : ""}`}>
        Coming soon to iOS, Android and desktop.
      </p>
    );
  }
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      {btns.map((b) => (
        <a key={b.label} href={b.href} target="_blank" rel="noreferrer"
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-slate-700">
          Get it on {b.label}
        </a>
      ))}
    </div>
  );
}

function HeroMock() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-blue-900/10">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">ECO 201 · Quiz</span>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">🔥 12 days</span>
      </div>
      <p className="mb-4 mt-4 text-[15px] font-semibold leading-snug text-slate-900">
        If price rises from ₦200 to ₦250 and quantity demanded falls from 100 to 80, demand is…
      </p>
      {["Perfectly inelastic", "Unit elastic", "Inelastic", "Elastic"].map((o, i) => (
        <div key={o}
          className={`mb-2 rounded-xl border px-4 py-2.5 text-sm ${i === 1
            ? "border-blue-600 bg-blue-50 font-semibold text-blue-700"
            : "border-slate-200 text-slate-600"}`}>
          {o}
        </div>
      ))}
      <div className="mt-4 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/5 rounded-full bg-blue-600" />
        </div>
        <span className="text-xs text-slate-400">6 / 10</span>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="text-xl font-extrabold text-slate-900 no-underline">
            Edu<span className="text-blue-600">XL</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className="hidden text-slate-600 no-underline hover:text-slate-900 sm:inline">Features</a>
            <a href="#how" className="hidden text-slate-600 no-underline hover:text-slate-900 sm:inline">How it works</a>
            <a href="#download" className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white no-underline hover:bg-blue-700">Get the app</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              AI study companion 🇳🇬
            </span>
            <h1 className="mb-0 mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Turn your notes into practice that sticks.
            </h1>
            <p className="mb-8 mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
              EduXL turns your lecture notes, PDFs and past questions into quizzes, flashcards,
              podcasts and video lessons. It also gets you ready for the bank and company
              aptitude tests that come after graduation.
            </p>
            <StoreButtons />
          </div>
          <HeroMock />
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="m-0 text-center text-2xl font-bold sm:text-3xl">Built for every stage of the journey</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {personas.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mb-0 mt-4 text-lg font-semibold">{title}</h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="m-0 text-center text-2xl font-bold sm:text-3xl">Everything you need to study smarter</h2>
          <p className="mx-auto mb-0 mt-3 max-w-xl text-center text-slate-600">
            One app for coursework, exams and job assessments.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mb-0 mt-4 text-base font-semibold">{title}</h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="m-0 text-center text-2xl font-bold sm:text-3xl">How it works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Step {i + 1}</div>
              <h3 className="mb-0 mt-1 text-lg font-semibold">{title}</h3>
              <p className="mx-auto mb-0 mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 px-6 py-14 text-center text-white">
          <h2 className="m-0 text-2xl font-bold sm:text-3xl">Start your first study session today</h2>
          <p className="mx-auto mb-8 mt-3 max-w-lg text-blue-100">
            Upload one set of notes and see what EduXL makes from it.
          </p>
          <div className="rounded-2xl bg-white/95 px-4 py-4">
            <StoreButtons center />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} EduXL</span>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-500 no-underline hover:text-slate-900">{CONTACT_EMAIL}</a>
          )}
        </div>
      </footer>
    </div>
  );
}
