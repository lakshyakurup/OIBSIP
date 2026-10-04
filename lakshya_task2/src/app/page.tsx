const projects = [
  {
    title: "NexusCloud Landing Page",
    description: "Modern SaaS landing page built with responsive design principles.",
    label: "OIBSIP Task 1",
  },
  {
    title: "Temperature Converter Utility",
    description: "Real-time temperature conversion tool with absolute zero validation.",
    label: "OIBSIP Task 3",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a className="text-xl font-bold text-blue-600" href="#about">Lakshya.dev</a>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a className="transition hover:text-blue-600" href="#about">About</a>
            <a className="transition hover:text-blue-600" href="#skills">Skills</a>
            <a className="transition hover:text-blue-600" href="#projects">Projects</a>
          </div>
        </div>
      </nav>

      <section id="about" className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 pb-20 pt-32 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Hello, I&apos;m Lakshya</p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Full-Stack Developer &amp; AICTE Intern</h1>
          <p className="mb-8 max-w-xl text-slate-600">Passionate about building scalable web applications with modern frameworks, strongly typed architecture, and clean UI/UX design.</p>
          <a className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700" href="#projects">View Projects</a>
        </div>
        <div aria-label="Lakshya Kurup initials" className="flex h-48 w-48 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white shadow-xl shadow-blue-600/20">LK</div>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Core Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-blue-700">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Python', 'UI/UX Design'].map((skill) => <span key={skill} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2">{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map(({ title, description, label }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="mb-4 text-slate-600">{description}</p>
                <span className="text-sm font-semibold text-blue-600">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 px-6 py-12 text-center text-slate-400"><p>&copy; 2026 Lakshya Kurup. Oasis Infobyte Internship Task 2.</p></footer>
    </main>
  );
}