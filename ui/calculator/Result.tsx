import { useSelector } from 'react-redux';
import { selectCalculationEquals, selectCalculationResult } from 'selectors';
import calculatorTools from 'shared/tools/calculator';
import style from 'ui/calculator/Result.module.scss';

const Result = () => {
  const result = useSelector(selectCalculationResult());
  const equals = useSelector(selectCalculationEquals());

  return (
    <section className={style.container}>
      <span className={style.equals}>{calculatorTools.convertCalculationEqualsToString(equals)}</span>
      <span className={style.result}>{result.toFormat()}</span>
    </section>
  );
};

export default Result;
