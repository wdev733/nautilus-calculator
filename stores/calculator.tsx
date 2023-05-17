import { createSlice } from '@reduxjs/toolkit';
import actions from 'actions';
import BigNumber from 'bignumber.js';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { CalculationSegment } from 'types';

export interface CalculatorState {
  result: BigNumber;
  equals: CalculationSegment[];
}

const initialState: CalculatorState = {
  result: new BigNumber(0),
  equals: [],
};

const addEquals = (state: CalculatorState, action: PayloadAction<CalculationSegment>) => {
  state.equals.push(action.payload);
};

const resetEquals = (state: CalculatorState) => {
  state.equals = [];
};

const updateResult = (state: CalculatorState, action: PayloadAction<BigNumber>) => {
  state.result = action.payload;
};

export const calculatorSlice = createSlice({
  name: 'calculatorStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.addEquals, addEquals);
    builder.addCase(actions.resetEquals, resetEquals);
    builder.addCase(actions.updateResult, updateResult);
  },
});

export default calculatorSlice.reducer;
