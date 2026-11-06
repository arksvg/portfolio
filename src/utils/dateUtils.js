/**
 * Date and Duration Utility Functions
 * Automatically calculates exact, up-to-date durations for past and present roles.
 */

/**
 * Parses date string ('YYYY-MM-DD' or 'YYYY-MM') into local Date object
 * avoiding UTC midnight timezone shifts.
 */
export function parseLocalDate(dateStr) {
  if (!dateStr) return new Date();
  if (typeof dateStr === 'string' && dateStr.includes('-')) {
    const parts = dateStr.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parts[2] ? parseInt(parts[2], 10) : 1;
    return new Date(year, month, day);
  }
  return new Date(dateStr);
}

/**
 * Calculates human-readable duration between two dates.
 * If endDateStr is null or undefined, calculates dynamically up to current day (new Date()).
 * Matches LinkedIn format exactly (e.g. '11 mos', '1 yr 2 mos', '4 yrs 3 mos', '6 mos', '4 yrs').
 */
export function calculateDuration(startDateStr, endDateStr = null) {
  const start = parseLocalDate(startDateStr);
  const end = endDateStr ? parseLocalDate(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1; // inclusive of start month

  if (months <= 0) {
    years -= 1;
    months += 12;
  }

  if (months === 12) {
    years += 1;
    months = 0;
  }

  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  }

  return parts.length > 0 ? parts.join(' ') : '1 mo';
}

/**
 * Formats a date into 'MMM YYYY' (e.g. 'Jan 2026')
 */
export function formatMonthYear(dateStr) {
  if (!dateStr) return 'Present';
  const d = parseLocalDate(dateStr);
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Returns formatted period string like:
 * 'Jan 2026 – Present · 11 mos' (dynamically updated daily)
 * 'Feb 2025 – Dec 2025 · 11 mos'
 */
export function getFormattedPeriod(startDateStr, endDateStr = null) {
  const start = formatMonthYear(startDateStr);
  const isCurrent = !endDateStr;
  const end = isCurrent ? 'Present' : formatMonthYear(endDateStr);
  const duration = calculateDuration(startDateStr, endDateStr);
  return `${start} – ${end} · ${duration}`;
}

/**
 * Checks if position is currently active
 */
export function isCurrentPosition(endDateStr) {
  return !endDateStr || endDateStr === 'Present';
}

/**
 * Calculates total career experience string dynamically
 */
export function getCareerExperience(startDateStr = '2021-01-01') {
  const start = parseLocalDate(startDateStr);
  const now = new Date();
  const diffYears = now.getFullYear() - start.getFullYear();
  return `${diffYears}+ Years`;
}

