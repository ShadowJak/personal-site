import type { MantineColorsTuple } from "@mantine/core";

export const sections = [
    {name: 'Technology', path: '/technology'},
    {name: 'Finance', path: '/finance'},
    {name: 'Myself', path: '/myself'},
]

export const TimespanInMonths = {
    MONTH: 1,
    QUARTER: 3,
    HALF: 6,
    YEAR: 12,
} as const;

export const pumpkin: MantineColorsTuple = [
  '#fff1e1',
  '#ffe2cb',
  '#ffc399',
  '#ffa263',
  '#ff8736',
  '#ff7518', // Pumpkin
  '#ff6c06',
  '#e45a00',
  '#cc4f00',
  '#b24200'
];

export const electricIndigo: MantineColorsTuple = [
  '#f5e9ff',
  '#e4cfff',
  '#c49bff',
  '#a364ff',
  '#8736ff',
  '#7518ff', // Electric Indigo
  '#6c07ff',
  '#5b00e5',
  '#5000cd',
  '#4400b5'
];

export const cyanLime: MantineColorsTuple = [
  '#e1ffee',
  '#caffe0',
  '#98ffc2',
  '#62ffa2',
  '#36ff87',
  '#18ff75', // Cyan Lime
  '#00ff6b',
  '#00e359',
  '#00ca4d',
  '#00af3e'
];