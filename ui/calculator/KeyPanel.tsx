import { Button } from 'components/Button';
import { calculatorKeys } from 'shared/configs/keyPanel';
import { useKeyPanel } from 'shared/hooks';
import style from 'ui/calculator/KeyPanel.module.scss';

import type { CalculatorKey, Converter, Equal, Numbers, Operator, Reset } from 'types';

const KeyPanel = () => {
  const { handleNumberInput, handleOperate, handleReset, handleConvertInput, handleEqualInput } = useKeyPanel();

  const handleKeyInput = (key: CalculatorKey) => {
    switch (key.type) {
      case 'reset':
        handleReset(key.label as Reset);
        break;
      case 'number':
        handleNumberInput(key.label as Numbers);
        break;
      case 'operator':
        handleOperate(key.label as Operator);
        break;
      case 'converter':
        handleConvertInput(key.label as Converter);
        break;
      case 'equal':
        handleEqualInput(key.label as Equal);
    }
  };

  return (
    <section className={style.container}>
      {calculatorKeys.map((item) => (
        <Button key={item.label} className={style.key} variant="text" onClick={() => handleKeyInput(item)}>
          {item.label}
        </Button>
      ))}
    </section>
  );
};

export default KeyPanel;
