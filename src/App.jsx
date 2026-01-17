import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "Beauty Parlor Booking System",
    subtitle: "Production-ready SaaS booking platform",
    bullets: [
      "RESTful APIs with Spring Boot and layered architecture",
      "JWT authentication and role-based authorization",
      "MySQL schema design and performance tuning",
    ],
  },
  {
    title: "Hospital Management System",
    subtitle: "Enterprise healthcare backend system",
    bullets: [
      "Patient, OPD/IPD, and pharmacy modules",
      "Spring Security with fine-grained RBAC",
      "SQL Server transactions and reporting workflows",
    ],
  },
];

export default function App() {
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation} strict>
        <Helmet>
          <title>Iliyas Dongri | Software Engineer - Backend</title>
          <meta name="description" content="Backend Software Engineer specializing in Java and Spring Boot." />
        </Helmet>

        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
          {/* Header */}
          <header className="max-w-6xl mx-auto px-6 py-16">
            <m.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
              <m.h1 variants={itemVariants} className="text-4xl md:text-5xl font-semibold">
                Iliyas Dongri
              </m.h1>
              <m.p variants={itemVariants} className="text-slate-300 text-lg">
                Software Engineer – Backend
              </m.p>
              <m.div variants={itemVariants} className="flex gap-4">
                <a href="https://github.com/iliyas883" className="underline hover:text-blue-400">GitHub</a>
                <a href="https://www.linkedin.com/in/iliyas-dongri" className="underline hover:text-blue-400">LinkedIn</a>
              </m.div>
            </m.div>
          </header>

          <main className="max-w-6xl mx-auto px-6 space-y-16">
            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
              <m.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <m.div variants={itemVariants} className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
                  <h3 className="text-xl font-medium">Aizts Infotech</h3>
                  <p className="text-slate-300 italic">Software Engineer – Backend</p>
                  <ul className="list-disc ml-6 mt-3 text-slate-400 space-y-2">
                    <li>Developed Spring Boot services and REST APIs</li>
                    <li>Implemented JWT authentication and RBAC</li>
                    <li>Handled SQL optimization and production debugging</li>
                  </ul>
                </m.div>
              </m.div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Projects</h2>
              <m.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                  <m.div key={p.title} variants={itemVariants} className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
                    <h3 className="text-xl font-medium">{p.title}</h3>
                    <p className="text-blue-400 text-sm mb-3">{p.subtitle}</p>
                    <ul className="list-disc ml-6 text-slate-400 text-sm space-y-1">
                      {p.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </m.div>
                ))}
              </m.div>
            </section>
          </main>

          <footer className="max-w-6xl mx-auto px-6 py-12 text-slate-500 text-sm">
            © {new Date().getFullYear()} Iliyas Dongri • Built with React & Tailwind
          </footer>
        </div>
      </LazyMotion>
    </HelmetProvider>
  );
}
