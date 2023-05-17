import { useState } from 'react';

import actions from 'actions';
import BigNumber from 'bignumber.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectCalculationEquals } from 'selectors';
import calculatorTools from 'shared/tools/calculator';

import type { Converter, Equal, Numbers, Operator, Reset } from 'types';

export const useKeyPanel = () => {
  const dispatch = useDispatch();

  const equals = useSelector(selectCalculationEquals());

  const [number, setNumber] = useState('0');
  const [operator, setOperator] = useState<Operator | null>(null);

  /**
   * handler for C and CE
   * @param label
   */
  const handleReset = (label: Reset) => {
    setNumber('0');
    setOperator(null);
    dispatch(actions.updateResult(new BigNumber(0)));

    if (label === 'C') dispatch(actions.resetEquals());
  };

  const handleNumberInput = (label: Numbers) => {
    const newNumber = operator ? label.toString() : `${number}${label}`;
    if (operator) {
      setOperator(null);
    }

    setNumber(newNumber);
    dispatch(actions.updateResult(new BigNumber(newNumber)));
  };

  /**
   * handler for +- or . or <-
   * @param key
   */
  const handleConvertInput = (label: Converter) => {
    if (label === '+-') {
      const newNumber = number.startsWith('-') ? number.substring(1) : `-${number}`;
      setNumber(newNumber);

      dispatch(actions.updateResult(new BigNumber(newNumber)));
    }

    if (label === '<-') {
      let newNumber = number;
      if (newNumber.length > 1) {
        newNumber = number.substring(0, number.length - 1);
      } else {
        newNumber = '0';
      }

      setNumber(newNumber);
      dispatch(actions.updateResult(new BigNumber(newNumber)));
    }

    if (label === '.') {
      const newNumber = `${number}${label}`;

      setNumber(newNumber);
      dispatch(actions.updateResult(new BigNumber(newNumber)));
    }
  };

  /**
   * handle for =
   * @param key
   */
  const handleEqualInput = (key: Equal) => {
    if (key !== '=') return;

    const lastOperator = equals.length > 0 ? equals[equals.length - 1].operator : undefined;
    const newEqual = {
      value: new BigNumber(number),
      operator: operator ?? lastOperator,
    };

    dispatch(actions.addEquals(newEqual));

    const newResult = calculatorTools.calculateResultFromEquals([...equals, newEqual]);
    dispatch(actions.updateResult(newResult));
    dispatch(actions.resetEquals());
    setNumber(newResult.toString());
  };

  const handleOperate = (label: Operator) => {
    setOperator(label);

    const newEqual = {
      value: new BigNumber(number),
      operator: label,
    };

    dispatch(actions.addEquals(newEqual));

    if (equals.length > 0) {
      const newResult = calculatorTools.calculateResultFromEquals([...equals, newEqual]);
      dispatch(actions.updateResult(newResult));
    }
  };

  return {
    handleReset,
    handleNumberInput,
    handleOperate,
    handleConvertInput,
    handleEqualInput,
  };
};
