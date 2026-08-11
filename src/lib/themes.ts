// src/lib/themes.ts
// Official Cell24x7 Royal Indigo Brand Palette (#4F46E5)
export const themes = {
  sunday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
  monday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
  tuesday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
  wednesday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
  thursday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
  friday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
  saturday: {
    '--color-background': '#ffffff',
    '--color-foreground': '#09090b',
    '--color-primary': '#4f46e5',
    '--color-accent': '#eef2ff',
  },
};

export function applyTheme(vars: Record<string, string>) {
  Object.entries(vars).forEach(([k, v]) =>
    document.documentElement.style.setProperty(k, v)
  );
}
