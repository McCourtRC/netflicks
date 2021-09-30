export enum Color {
  primary = '#E50914',
  secondary = '#141414',
  white = '#fff',
  gray = 'gray',
}

export enum Breakpoint {
  sm = '@media(min-width: 640px)',
  md = '@media(min-width: 768px)',
  lg = '@media(min-width: 1024px)',
  xl = '@media(min-width: 1280px)',
  xxl = '@media(min-width: 1536px)',
}

export enum BP {
  sm = Breakpoint.sm,
  md = Breakpoint.md,
  lg = Breakpoint.lg,
  xl = Breakpoint.xl,
  xxl = Breakpoint.xxl,
}

export enum BoxShadow {
  sm = 'box-shadow: 0 2px 8px -1px #05000076;',
  md = 'box-shadow: 0 5px 10px -1px #05000076;',
}
