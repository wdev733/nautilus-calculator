import BigNumber from 'bignumber.js';

import type { CalculationSegment } from 'types';

const convertCalculationEqualsToString = (equals: CalculationSegment[]) => {
  const numberAndOperators: string[] = [];

  for (const e of equals) {
    if (e.value) numberAndOperators.push(e.value.toString());
    if (e.operator) numberAndOperators.push(e.operator);
  }

  return numberAndOperators.join(' ');
};

const calculateResultFromEquals = (equals: CalculationSegment[]): BigNumber => {
  if (equals.length === 0) return new BigNumber(0);

  if (equals.length === 1) return new BigNumber(equals[0].value);

  let result = new BigNumber(equals[0].value);

  for (let i = 1; i < equals.length; i++) {
    if (equals[i - 1].operator === '+') {
      result = result.plus(equals[i].value);
    }
    if (equals[i - 1].operator === '-') {
      result = result.minus(equals[i].value);
    }
    if (equals[i - 1].operator === '*') {
      result = result.multipliedBy(equals[i].value);
    }
    if (equals[i - 1].operator === '/') {
      result = result.dividedBy(equals[i].value);
    }
  }

  return result;
};

const calculatorTools = {
  convertCalculationEqualsToString,
  calculateResultFromEquals,
};

export default calculatorTools;
