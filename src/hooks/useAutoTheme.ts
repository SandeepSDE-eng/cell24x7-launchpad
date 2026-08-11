import { useEffect } from 'react';
import { themes, applyTheme } from '../lib/themes';

export default function useAutoTheme() {
  useEffect(() => {
    // Apply clean monochrome black and white theme
    applyTheme(themes.sunday);
    
    // Clear any legacy inline background overrides
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  }, []);
}
