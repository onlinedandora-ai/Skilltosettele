/**
 * Dynamic batch date utility to ensure urgency and cohort start dates
 * are always fresh, credible, and never in the past.
 */

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/**
 * Returns an upcoming date formatted as "Month Day, Year" (e.g. "October 12, 2026")
 * @param daysOffset How many days ahead from today (default 4 days)
 * @param preferWeekend If true, shifts the date to the next upcoming Saturday
 */
export function getUpcomingBatchDate(daysOffset: number = 5, preferWeekend: boolean = false): string {
  const target = new Date();
  target.setDate(target.getDate() + daysOffset);

  if (preferWeekend) {
    // 0 = Sun, 6 = Sat
    const day = target.getDay();
    if (day !== 6) {
      const daysUntilSaturday = (6 - day + 7) % 7;
      target.setDate(target.getDate() + (daysUntilSaturday === 0 ? 7 : daysUntilSaturday));
    }
  }

  const monthName = MONTHS[target.getMonth()];
  const dayNum = target.getDate();
  const year = target.getFullYear();

  return `${monthName} ${dayNum}, ${year}`;
}
