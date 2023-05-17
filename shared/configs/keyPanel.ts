import type { CalculatorKey } from 'types';

export const calculatorKeys: CalculatorKey[] = [
  {
    label: 'CE',
    type: 'reset',
  },
  {
    label: 'C',
    type: 'reset',
  },
  {
    label: '<-',
    type: 'converter',
  },
  {
    label: '/',
    type: 'operator',
  },
  {
    label: 7,
    type: 'number',
  },
  {
    label: 8,
    type: 'number',
  },
  {
    label: 9,
    type: 'number',
  },
  {
    label: '*',
    type: 'operator',
  },
  {
    label: 4,
    type: 'number',
  },
  {
    label: 5,
    type: 'number',
  },
  {
    label: 6,
    type: 'number',
  },
  {
    label: '-',
    type: 'operator',
  },
  {
    label: 1,
    type: 'number',
  },
  {
    label: 2,
    type: 'number',
  },
  {
    label: 3,
    type: 'number',
  },
  {
    label: '+',
    type: 'operator',
  },
  {
    label: '+-',
    type: 'converter',
  },
  {
    label: 0,
    type: 'number',
  },
  {
    label: '.',
    type: 'converter',
  },
  {
    label: '=',
    type: 'equal',
  },
];
