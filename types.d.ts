import type BigNumber from 'bignumber.js';

interface DefaultComponentProps  {
  className?: string;
}

type MessageType =  'error' | 'success' | 'warning' | 'info'

interface MessageDetail {
  type: MessageType;
  content: string;
}

type CalculatorKeyType = 'number' | 'operator' | 'reset' | 'converter' | 'equal';

type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Operator = '+' | '-' | '*' | '/';
type Equal = '=';
type Converter = '+-' | '<-' | '.'
type Reset = 'C' | 'CE';

interface CalculatorKey {
  label: Numbers | Operator | Reset | Equal | Converter;
  type: CalculatorKeyType;
}

interface CalculationSegment {
  value: BigNumber,
  operator?: Operator,
}
