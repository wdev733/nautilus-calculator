import { createAction } from '@reduxjs/toolkit';

import type BigNumber from 'bignumber.js';
import type { CalculationSegment } from 'types';

export const addEquals = createAction('calculator/addEquals', (seg: CalculationSegment) => ({
  payload: seg,
}));

export const resetEquals = createAction('calculator/resetEquals', () => ({
  payload: {},
}));

export const updateResult = createAction('calculator/updateResult', (result: BigNumber) => ({
  payload: result,
}));
