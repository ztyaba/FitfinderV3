import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  GlobeAltIcon,
  MapPinIcon,
  TrophyIcon,
  UsersIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon, BoltIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { createPageUrl } from "@/utils";

const ease = [0.16, 1, 0.3, 1];

const navLinks = [
  { name: "Browse Coaches", to: "Browse", type: "navigate" },
  { name: "Find Matchups", to: "Versus", type: "navigate" },
  { name: "How it works", to: "how-it-works", type: "anchor" },
  { name: "Success stories", to: "testimonials", type: "anchor" },
];

const features = [
  {
    icon: AcademicCapIcon,
    title: "Personalized coach matches",
    description: "Pair with specialists who match your goals, sport, and timeline.",
  },
  {
    icon: ChartBarIcon,
    title: "Adaptive training plans",
    description: "Dynamic programming that adjusts with every milestone and assessment.",
  },
  {
    icon: CalendarDaysIcon,
    title: "Session scheduling",
    description: "Sync reminders, book instantly, and keep coaching on your calendar.",
  },
  {
    icon: GlobeAltIcon,
    title: "All-sport matchups",
    description: "Discover opponents across leagues, pickup runs, and weekend events.",
  },
  {
    icon: UsersIcon,
    title: "Community games",
    description: "Join local groups, drop-in runs, and rotating community competitions.",
  },
  {
    icon: TrophyIcon,
    title: "Versus challenges",
    description: "Launch team or solo challenges, track stats, and climb leaderboards.",
  },
  {
    icon: MapPinIcon,
    title: "Nearby alerts",
    description: "Get notified when new matchups or coaches appear around you.",
  },
  {
    icon: SparklesIcon,
    title: "Performance insights",
    description: "See skill gaps, matchup history, and progress from training to play.",
  },
];

const fadeSlideVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const floatingTransition = {
  duration: 5.5,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

export default function Landing() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const featuresRef = useRef(null);
  const splitRef = useRef(null);
  const howRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const splitInView = useInView(splitRef, { once: true, margin: "-100px" });
  const howInView = useInView(howRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const handleNavigate = (path) => {
    navigate(createPageUrl(path));
  };

  const handleAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => handleNavigate("Browse")}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 text-lg font-semibold text-slate-950">
              FF
            </span>
            <span className="text-lg font-semibold tracking-tight">FitFinder</span>
          </button>
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() =>
                  link.type === "navigate" ? handleNavigate(link.to) : handleAnchor(link.to)
                }
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => handleNavigate("Browse")}
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Launch app
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-100 transition hover:border-white/20 lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <BoltIcon className="h-6 w-6" />
          </button>
        </div>
        <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 z-50 flex justify-end">
            <DialogPanel className="flex h-full w-72 flex-col gap-6 border-l border-white/10 bg-slate-950/95 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 text-base font-semibold text-slate-950">
                    FF
                  </span>
                  <span className="text-base font-semibold">FitFinder</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-slate-100 transition hover:border-white/20"
                >
                  <span className="sr-only">Close menu</span>
                  <ArrowRightIcon className="h-5 w-5 rotate-180" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      setTimeout(() => {
                        if (link.type === "navigate") {
                          handleNavigate(link.to);
                        } else {
                          handleAnchor(link.to);
                        }
                      }, 200);
                    }}
                    className="text-left text-sm font-medium text-slate-200 transition hover:text-white"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => handleNavigate("Browse"), 200);
                }}
                className="mt-auto rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Launch app
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      </header>
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_55%)]" />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
            <div className="relative z-10 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-emerald-300"
              >
                <PlayCircleIcon className="h-4 w-4" />
                Elevate every session and matchup
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.1 }}
                className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Train smarter. Compete harder.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.2 }}
                className="mt-6 text-base text-slate-200 sm:text-lg"
              >
                FitFinder connects you with elite coaches for skill-building, conditioning, and structured programs while surfacing matchups and competitors across every sport so you improve faster through balanced training and live play.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.35 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => handleNavigate("Browse")}
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Find Coaches
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate("Versus")}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Find Matchups
                </button>
              </motion.div>
            </div>
            <div className="relative z-10 flex w-full justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={floatingTransition}
                  className="relative flex w-72 flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-5 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.35)]"
                >
                  <div className="rounded-2xl bg-slate-900/80 p-4 text-left">
                    <p className="text-sm font-medium text-emerald-300">Coach Session</p>
                    <p className="mt-1 text-xs text-slate-200">Speed & agility drills • Tuesday 6:00 AM</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-300">
                        JP
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">Jenna Park</p>
                        <p className="text-xs text-slate-400">USATF Certified Coach</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-sm font-medium text-sky-300">Pickup Alert</p>
                    <p className="mt-1 text-xs text-slate-200">3v3 Basketball • Tonight 7:30 PM</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Downtown Athletics</span>
                      <span>6 spots left</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-400/10 to-blue-500/20 p-4 text-left">
                    <p className="text-sm font-semibold text-white">New in your area</p>
                    <p className="mt-1 text-xs text-slate-100">Endurance cycling crew added a Saturday tempo ride.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.section
          ref={featuresRef}
          id="features"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={fadeSlideVariant}
          className="bg-slate-50 py-24 text-slate-900"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                One platform for training and competition
              </h2>
              <p className="mt-4 text-base text-slate-600">
                FitFinder keeps your coaching schedule, competitive calendar, and progress insights all in one place so you can elevate how you prepare and how you show up.
              </p>
            </div>
            <motion.div
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={fadeSlideVariant}
                    transition={{ duration: 0.6, ease, delay: 0.05 * index }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          ref={splitRef}
          initial="hidden"
          animate={splitInView ? "visible" : "hidden"}
          variants={fadeSlideVariant}
          className="bg-white py-24 text-slate-900"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
            <motion.div
              initial="hidden"
              animate={splitInView ? "visible" : "hidden"}
              variants={fadeSlideVariant}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="flex-1 rounded-3xl border border-slate-200 bg-slate-50/80 p-10 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-900">Train with the right coaches</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Build a coaching lineup that aligns to your goals, whether you are chasing podium finishes, sharpening fundamentals, or staying game-day ready.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Intelligent recommendations tailored to your sport and skill level
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Integrated messaging, scheduling, and video session links
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Track progress from every drill, workout, and assessment
                </li>
              </ul>
              <button
                type="button"
                onClick={() => handleNavigate("Browse")}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
              >
                Browse Coaches
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={splitInView ? "visible" : "hidden"}
              variants={fadeSlideVariant}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="flex-1 rounded-3xl border border-slate-200 bg-slate-50/80 p-10 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-900">Compete with the right opponents</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Stay active in your local scene with curated competitions, from casual pickup runs to marquee tournaments, and test your skills across every format.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                  Join nearby games, leagues, and community events instantly
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                  Filter by skill, availability, and competition intensity
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                  Sync leaderboards and matchup stats with your training insights
                </li>
              </ul>
              <button
                type="button"
                onClick={() => handleNavigate("Versus")}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                Find Matchups
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          ref={howRef}
          id="how-it-works"
          initial="hidden"
          animate={howInView ? "visible" : "hidden"}
          variants={fadeSlideVariant}
          className="bg-slate-900 py-24 text-slate-100"
        >
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How FitFinder brings your training and matchups together
            </h2>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {["Tell us how you train AND play.", "Get matched with coaches AND competitors across all activities.", "Book sessions, join matchups, and track your progress."].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={howInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease, delay: index * 0.15 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 text-slate-950">
                    {index + 1}
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-slate-200">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={testimonialsRef}
          id="testimonials"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={fadeSlideVariant}
          className="bg-slate-950 py-24"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Success stories from the FitFinder community</h2>
              <p className="mt-4 text-sm text-slate-300">
                Athletes, trainers, and competitors rely on FitFinder to keep them progressing—on the practice field and in the arena.
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-emerald-500/10"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&w=200&h=200&q=80"
                    alt="Coach testimonial"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold text-white">Alicia Navarro</p>
                    <p className="text-xs text-slate-400">@coachnavarro</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-200">
                  “FitFinder aligned me with sprinters who matched my coaching style and ambition. Every week we move from remote analysis to live sessions, and the integrated stat tracking shows their gains in real time.”
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.2 }}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-500/10"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=facearea&w=200&h=200&q=80"
                    alt="Matchup testimonial"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold text-white">Logan Pierce</p>
                    <p className="text-xs text-slate-400">@pierceplays</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-200">
                  “Versus keeps my crew in nonstop action. We’re joining soccer matchups midweek, launching endurance challenges on the weekend, and tracking every performance without juggling multiple apps.”
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeSlideVariant}
          className="bg-slate-900 py-24"
        >
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 px-8 py-16 text-center text-slate-100 shadow-[0_40px_80px_-30px_rgba(56,189,248,0.35)]">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Start training and competing with FitFinder.
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Connect with the right coaches, discover matchups across every sport, and keep your entire performance journey synced in one platform.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => handleNavigate("Browse")}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Find Coaches
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("Versus")}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Find Matchups
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
