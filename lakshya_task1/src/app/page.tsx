import { ArrowRight, BarChart3, LockKeyhole, Zap } from "lucide-react";

const features = [
  {
    title: "Instant Deployment",
    description: "Deploy microservices and containers globally in seconds with automated CI/CD pipelines.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "End-to-end encryption, automated compliance checks, and advanced threat detection built-in.",
    icon: LockKeyhole,
  },
  {
    title: "Infinite Scalability",
    description: "Auto-scale your workloads dynamically based on traffic spikes without manual intervention.",
    icon: BarChart3,
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a className="text-xl font-bold text-blue-600" href="#top">NexusCloud</a>
          <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-blue-600" href="#features">Features</a>
            <a className="transition hover:text-blue-600" href="#about">About</a>
            <a className="transition hover:text-blue-600" href="#testimonials">Testimonials</a>
          </div>
          <a className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700" href="#contact">
            Get Started
          </a>
        </div>
      </nav>

      <section id="top" className="bg-gradient-to-b from-blue-50 to-white px-6 pb-20 pt-32 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Cloud operations, simplified</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">Scale Your Infrastructure with Confidence</h1>
          <p className="mb-8 text-lg text-slate-600 md:text-xl">Empower your development teams with lightning-fast cloud automation, robust security, and seamless scaling.</p>
          <div className="flex justify-center gap-4">
            <a className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700" href="#contact">Start Free Trial</a>
            <a className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50" href="#features">Learn More</a>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Built for momentum</p>
          <h2 className="text-3xl font-bold text-slate-900">Everything your team needs to move faster</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <Icon aria-hidden="true" className="mb-6 text-blue-600" size={28} />
              <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
              <p className="text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white px-6 py-16 text-center">
        <h2 className="mb-3 text-2xl font-bold">A clearer path from idea to impact</h2>
        <p className="mx-auto max-w-2xl text-slate-600">NexusCloud gives engineering teams a dependable foundation for shipping secure products without operational drag.</p>
      </section>

      <section id="testimonials" className="px-6 py-16 text-center">
        <blockquote className="mx-auto max-w-2xl text-xl font-medium text-slate-700">&ldquo;Our team spends less time managing infrastructure and more time building what customers need.&rdquo;</blockquote>
        <p className="mt-4 text-sm font-semibold text-slate-500">Maya Chen, VP Engineering</p>
      </section>

      <footer id="contact" className="bg-slate-900 px-6 py-12 text-center text-slate-400">
        <p className="mb-4">Ready to ship with confidence?</p>
        <a className="inline-flex items-center gap-2 font-semibold text-white hover:text-blue-300" href="mailto:hello@nexuscloud.example">Talk to our team <ArrowRight aria-hidden="true" size={16} /></a>
        <p className="mt-8 text-sm">&copy; 2026 NexusCloud Inc. Oasis Infobyte Internship Task 1.</p>
      </footer>
    </main>
  );
}