import React from 'react';
import { 
  Briefcase, GraduationCap, Calendar, 
  CheckCircle2, ShieldCheck, ExternalLink, 
  MapPin, Award, Building2, Clock 
} from 'lucide-react';
import { 
  professionalExperience, 
  academicExperience, 
  educationData, 
  certificationsData 
} from '../data/resume';
import { 
  getFormattedPeriod, 
  calculateDuration, 
  isCurrentPosition,
  formatMonthYear 
} from '../utils/dateUtils';

export default function Experience() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career Journey & Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
          Work & Academic Experience
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Cloud engineering progression at NexTurn, academic leadership with the National Service Scheme (NSS), education, and verified industry credentials.
        </p>
      </div>

      {/* 1. Professional Work Experience Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                Work Experience
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Full-time cloud engineering and front-end internships
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {professionalExperience.map((company) => {
            const hasMultiplePositions = company.positions && company.positions.length > 1;

            // Single Position Flat Card (No inner timeline box, e.g. Digital Falcons)
            if (!hasMultiplePositions) {
              const pos = company.positions[0];
              const isPosCurrent = isCurrentPosition(pos.endDate);
              const formattedPeriod = getFormattedPeriod(pos.startDate, pos.endDate);

              return (
                <div 
                  key={company.id}
                  className="p-6 md:p-8 rounded-2xl glow-border space-y-4 bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {company.logo ? (
                        <div className="w-13 h-13 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img
                            src={company.logo}
                            alt={company.company}
                            className="max-h-9 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-13 h-13 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0 flex items-center justify-center">
                          <Building2 className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                            {pos.role}
                          </h3>
                          {isPosCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              Present
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 flex-wrap">
                          <span className="font-bold text-zinc-900 dark:text-white">
                            {company.company}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            {pos.employmentType}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-zinc-400 inline" />
                            {pos.location || company.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 font-mono text-xs border border-zinc-200 dark:border-white/5 shrink-0 self-start sm:self-auto shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{formattedPeriod}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {pos.highlights && pos.highlights.length > 0 && (
                    <ul className="space-y-1.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 pt-1">
                      {pos.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills Pills */}
                  {pos.skills && pos.skills.length > 0 && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {pos.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-[11px] md:text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/40 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Multi-Position Grouped Timeline (e.g. NexTurn)
            const isCompanyCurrent = isCurrentPosition(company.endDate);
            const totalDuration = calculateDuration(company.startDate, company.endDate);
            const periodRange = `${formatMonthYear(company.startDate)} – ${isCompanyCurrent ? 'Present' : formatMonthYear(company.endDate)}`;

            return (
              <div 
                key={company.id}
                className="rounded-2xl glow-border bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 shadow-sm overflow-hidden"
              >
                {/* Company Header */}
                <div className="p-6 md:p-7 border-b border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {company.logo ? (
                        <div className="w-13 h-13 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img
                            src={company.logo}
                            alt={company.company}
                            className="max-h-9 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-13 h-13 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0 flex items-center justify-center">
                          <Building2 className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                          {company.company}
                        </h3>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{company.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/5 text-zinc-700 dark:text-zinc-300 font-mono text-xs border border-zinc-200 dark:border-white/10 shrink-0 shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{periodRange} · <strong className="text-indigo-600 dark:text-indigo-400">{totalDuration}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Nested Positions Timeline */}
                <div className="p-6 md:p-8 space-y-8 relative">
                  {/* Vertical connector line */}
                  <div 
                    className="absolute left-[33px] md:left-[41px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-500/40 to-transparent dark:from-indigo-400 dark:via-zinc-800 dark:to-transparent" 
                    aria-hidden="true"
                  />

                  {company.positions.map((pos) => {
                    const isPosCurrent = isCurrentPosition(pos.endDate);
                    const formattedPeriod = getFormattedPeriod(pos.startDate, pos.endDate);

                    return (
                      <div key={pos.id} className="relative flex items-start gap-4 md:gap-6 group">
                        {/* Timeline Node Dot */}
                        <div className="relative shrink-0 mt-1">
                          {isPosCurrent ? (
                            <div className="w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 flex items-center justify-center shadow-md">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-indigo-500 transition-colors flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 group-hover:bg-indigo-500 transition-colors"></span>
                            </div>
                          )}
                        </div>

                        {/* Position Details */}
                        <div className="flex-1 space-y-3 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-lg md:text-xl font-bold font-heading text-zinc-900 dark:text-white">
                                  {pos.role}
                                </h4>
                                {isPosCurrent && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                    Present
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5 flex-wrap">
                                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                  {pos.employmentType}
                                </span>
                                <span>•</span>
                                <span>{pos.location}</span>
                              </div>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 font-mono text-xs border border-zinc-200 dark:border-white/5 shrink-0 self-start sm:self-auto">
                              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                              <span>{formattedPeriod}</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          {pos.highlights && pos.highlights.length > 0 && (
                            <ul className="space-y-1.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 pt-1">
                              {pos.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Skills Pills */}
                          {pos.skills && pos.skills.length > 0 && (
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {pos.skills.map((s, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-[11px] md:text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/40 transition-colors"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Education & Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Education */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-500" />
            <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl glow-border space-y-3 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5 min-w-0 pr-2">
                    {edu.logo && (
                      <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm border border-zinc-200 dark:border-white/10 shrink-0 flex items-center justify-center overflow-hidden mt-0.5">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      {edu.cgpa ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[11px] font-bold border border-sky-500/20">
                          CGPA: {edu.cgpa}
                        </span>
                      ) : edu.status ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                          {edu.status}
                        </span>
                      ) : null}
                      <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-white mt-1.5 leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-0.5">
                        {edu.institution}
                      </div>
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
          </div>
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
                className="p-4 rounded-xl glow-border flex items-start justify-between gap-3 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-start gap-3.5 min-w-0 pr-2">
                  {cert.logo && (
                    <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-sm border border-zinc-200 dark:border-white/10 shrink-0 flex items-center justify-center overflow-hidden mt-0.5">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                      {cert.title}
                    </div>
                    <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {cert.issuer}
                    </div>
                    {cert.link && (
                      <div className="pt-2">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:underline transition-colors"
                        >
                          <span>Verify Certificate</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 shrink-0">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 3. Academic Experience & Social Leadership Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white">
              Academic Experience & Social Services
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              National Service Scheme (NSS) collegiate leadership and community trust editorial tenures
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {academicExperience.map((org) => {
            const hasMultiplePositions = org.positions && org.positions.length > 1;

            // Single Position Flat Card (e.g. Doyaraa Trust - Editor)
            if (!hasMultiplePositions) {
              const pos = org.positions[0];
              const formattedPeriod = getFormattedPeriod(pos.startDate, pos.endDate);

              return (
                <div 
                  key={org.id}
                  className="p-6 md:p-8 rounded-2xl glow-border space-y-4 bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {org.logo ? (
                        <div className="w-13 h-13 p-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img
                            src={org.logo}
                            alt={org.organization}
                            className="max-h-10 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-13 h-13 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0 flex items-center justify-center">
                          <Award className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                            {pos.role}
                          </h3>
                          {org.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                              {org.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 flex-wrap">
                          <span className="font-bold text-zinc-900 dark:text-white">
                            {org.organization}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            {pos.employmentType || pos.domain}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-zinc-400 inline" />
                            {org.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 font-mono text-xs border border-zinc-200 dark:border-white/10 shrink-0 self-start sm:self-auto shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{formattedPeriod}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {pos.highlights && pos.highlights.length > 0 && (
                    <ul className="space-y-1.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 pt-1">
                      {pos.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills Pills */}
                  {pos.skills && pos.skills.length > 0 && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {pos.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-[11px] md:text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/40 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Multi-Position Grouped Timeline (e.g. Saranathan NSS)
            const isOrgCurrent = isCurrentPosition(org.endDate);
            const totalDuration = calculateDuration(org.startDate, org.endDate);
            const periodRange = `${formatMonthYear(org.startDate)} – ${isOrgCurrent ? 'Present' : formatMonthYear(org.endDate)}`;

            return (
              <div 
                key={org.id}
                className="rounded-2xl glow-border bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 shadow-sm overflow-hidden"
              >
                {/* Organization Header */}
                <div className="p-6 md:p-7 border-b border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {org.logo ? (
                        <div className="w-13 h-13 p-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                          <img
                            src={org.logo}
                            alt={org.organization}
                            className="max-h-10 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-13 h-13 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0 flex items-center justify-center">
                          <Award className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                            {org.organization}
                          </h3>
                          {org.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                              {org.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-xs md:text-sm text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                          {org.subheading}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{org.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/5 text-zinc-700 dark:text-zinc-300 font-mono text-xs border border-zinc-200 dark:border-white/10 shrink-0 shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{periodRange} · <strong className="text-indigo-600 dark:text-indigo-400">{totalDuration}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Nested Positions Timeline */}
                <div className="p-6 md:p-8 space-y-8 relative">
                  <div 
                    className="absolute left-[33px] md:left-[41px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-500/40 to-transparent dark:from-indigo-400 dark:via-zinc-800 dark:to-transparent" 
                    aria-hidden="true"
                  />

                  {org.positions.map((pos) => {
                    const formattedPeriod = getFormattedPeriod(pos.startDate, pos.endDate);

                    return (
                      <div key={pos.id} className="relative flex items-start gap-4 md:gap-6 group">
                        {/* Timeline Node Dot */}
                        <div className="relative shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-indigo-500 transition-colors flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 group-hover:bg-indigo-500 transition-colors"></span>
                          </div>
                        </div>

                        {/* Position Details */}
                        <div className="flex-1 space-y-3 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <h4 className="text-lg md:text-xl font-bold font-heading text-zinc-900 dark:text-white">
                                {pos.role}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                  {pos.employmentType || pos.domain}
                                </span>
                              </div>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 font-mono text-xs border border-zinc-200 dark:border-white/5 shrink-0 self-start sm:self-auto">
                              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                              <span>{formattedPeriod}</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          {pos.highlights && pos.highlights.length > 0 && (
                            <ul className="space-y-1.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 pt-1">
                              {pos.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Skills Pills */}
                          {pos.skills && pos.skills.length > 0 && (
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {pos.skills.map((s, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-[11px] md:text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/40 transition-colors"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
