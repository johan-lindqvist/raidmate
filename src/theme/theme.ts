import { createTransition } from './utils';

export const theme = {
  colors: {
    text: {
      light: '#FFFFFF',
    },
    blue: {
      '50': '#00090D',
      '100': '#001219',
      '200': '#002630',
      '300': '#003946',
      '400': '#005F73',
      '500': '#0A9396',
      '600': '#94D2BD',
    },
    orange: {
      '400': '#D26D1F',
      '500': '#EE9B00',
    },
    wow: {
      // Classes
      deathKnight: '#C41E3A',
      demonHunter: '#A330C9',
      druid: '#FF7C0A',
      evoker: '#33937F',
      hunter: '#AAD372',
      mage: '#3FC7EB',
      monk: '#00FF98',
      paladin: '#F48CBA',
      priest: '#FFFFFF',
      rogue: '#FFF468',
      shaman: '#0070DD',
      warlock: '#8788EE',
      warrior: '#C69B6D',
      // Factions
      alliance: '#6699FF',
      horde: '#E02929',
      // Items
      poor: '#9D9D9D',
      common: '#FFFFFF',
      uncommon: '#1EFF00',
      rare: '#0070DD',
      epic: '#A335EE',
      legendary: '#FF8000',
      artifact: '#E6CC80',
      heirloom: '#00CCFF',
    },
    battlenet: {
      blue: '#0074E0',
      blueDark: '#003F7A',
      blueLight: '#47A6FF',
    },
  },
  spacing: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    xxl: '48px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  fontSize: {
    detail: '14px',
    paragraph: '16px',
    h3: '18px',
    h2: '24px',
    h1: '36px',
  },
  transition: createTransition,
} as const;

export type RaidmateTheme = typeof theme;
