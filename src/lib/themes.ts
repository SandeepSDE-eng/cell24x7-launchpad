// src/lib/themes.ts
export const themes = {
  sunday: {
    '--color-background': '#fff0f6',
    '--color-foreground': '#2d0036',
    '--color-primary': '#ff66b2',
    '--color-accent': '#ffd6e8',
  },
  monday: {
    '--color-background': '#e8f5e9',
    '--color-foreground': '#1b5e20',
    '--color-primary': '#9be7a8',
    '--color-accent': '#dff6df',
  },
  tuesday: {
    '--color-background': '#e3f2fd',
    '--color-foreground': '#0d47a1',
    '--color-primary': '#a5d8ff',
    '--color-accent': '#d0ebff',
  },
  wednesday: {
    '--color-background': '#fffde7',
    '--color-foreground': '#7f6000',
    '--color-primary': '#ffe066',
    '--color-accent': '#fff3bf',
  },
  thursday: {
    '--color-background': '#f3f0ff',
    '--color-foreground': '#3d246c',
    '--color-primary': '#b197fc',
    '--color-accent': '#e5dbff',
  },
  friday: {
    '--color-background': '#e6fcf5',
    '--color-foreground': '#004d40',
    '--color-primary': '#63e6be',
    '--color-accent': '#b2f2bb',
  },
  saturday: {
    '--color-background': '#fff4e6',
    '--color-foreground': '#7f3d00',
    '--color-primary': '#ffa94d',
    '--color-accent': '#ffe0b2',
  },
};

export function applyTheme(vars: Record<string,string>) {
  Object.entries(vars).forEach(([k,v]) =>
    document.documentElement.style.setProperty(k, v),
  );
}
