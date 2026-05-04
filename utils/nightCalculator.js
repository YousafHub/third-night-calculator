export function calculateLastThirdOfNight(maghribTimeStr, fajrTimeStr) {
  const now = new Date();

  const [maghribHour, maghribMinute] = maghribTimeStr.split(":").map(Number);
  const [fajrHour, fajrMinute] = fajrTimeStr.split(":").map(Number);

  const maghrib = new Date(now);
  maghrib.setHours(maghribHour, maghribMinute, 0, 0);

  const fajr = new Date(now);
  fajr.setHours(fajrHour, fajrMinute, 0, 0);

  if (fajr <= maghrib) {
    fajr.setDate(fajr.getDate() + 1);
  }

  const nightDuration = fajr - maghrib;

  const lastThirdStart = new Date(fajr.getTime() - nightDuration / 3);

  return lastThirdStart;
}