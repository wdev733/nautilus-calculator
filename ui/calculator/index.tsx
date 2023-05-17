import style from 'ui/calculator/index.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

import KeyPanel from './KeyPanel';
import Result from './Result';

const CalculatorContainer = () => (
  <SectionContainer>
    <section className={style.container}>
      <Result />
      <KeyPanel />
    </section>
  </SectionContainer>
);

export default CalculatorContainer;
