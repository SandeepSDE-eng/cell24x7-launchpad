import { useEffect } from 'react';
import { themes, applyTheme } from '../lib/themes';

function getDayKey() {
  return [
    'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
  ][new Date().getDay()];
}

export default function useAutoTheme() {
  useEffect(() => {
    const setToday = () => applyTheme(themes[getDayKey()]);
    // Also set body background and text color for full-site effect
    const vars = themes[getDayKey()];
    if (vars) {
      document.body.style.backgroundColor = vars['--color-background'] || '';
      document.body.style.color = vars['--color-foreground'] || '';
    }
    setToday();
    // schedule update at next midnight
    const now = new Date();
    const msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();
    const t = setTimeout(() => {
      setToday();
      setInterval(setToday, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
    return () => { clearTimeout(t); };
  }, []);
}
