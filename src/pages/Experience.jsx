import React from 'react';
import { 
  Briefcase, GraduationCap, Calendar, 
  CheckCircle2, ShieldCheck 
} from 'lucide-react';
import { 
  professionalExperience, 
  educationData, 
  certificationsData 
} from '../data/resume';

export default function Experience() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
          Work Experience
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Fullstack development experience with React, Java & Spring Boot, enterprise cloud architectures, and verified certifications.
        </p>
      </div>

      {/* Professional Experience Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-zinc-200 dark:border-white/10 ml-4 md:ml-6 space-y-8 pl-6 md:pl-8">
          {professionalExperience.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="absolute -left-[35px] md:-left-[43px] top-1 w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 flex items-center justify-center shadow-md">
                <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>

              <div className="p-6 md:p-8 rounded-2xl glow-border space-y-4 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {exp.company} • {exp.location}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 font-mono text-xs self-start sm:self-auto border border-zinc-200 dark:border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Education */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-500" />
            <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white">
              Education
            </h2>
          </div>

          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl glow-border space-y-3 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 pr-2">
                  {edu.status ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                      {edu.status}
                    </span>
                  ) : edu.cgpa ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[11px] font-bold border border-sky-500/20">
                      CGPA: {edu.cgpa}
                    </span>
                  ) : null}
                  <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-white mt-2">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {edu.institution}
                  </div>
                </div>

                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                {edu.details}
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white">
              Certifications
            </h2>
          </div>

          <div className="space-y-3">
            {certificationsData.map((cert, i) => (
              <div
                key={i}
                className="p-4 rounded-xl glow-border flex items-center justify-between gap-3 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm"
              >
                <div>
                  <div className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white">
                    {cert.title}
                  </div>
                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {cert.issuer}
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
