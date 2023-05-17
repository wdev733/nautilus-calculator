import type { RootState } from 'stores';

export const selectCalculationResult = () => (state: RootState) => state.calculator.result;

export const selectCalculationEquals = () => (state: RootState) => state.calculator.equals;
