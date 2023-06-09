import type { PropsWithChildren } from 'react';

import Head from 'next/head';
import style from 'ui/main/Main.module.scss';

const MainContainer = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>Nautilus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
    <main>
      <section className={style.container}>
        <section className={style.pageContainer}>{children}</section>
      </section>
    </main>
  </>
);

export default MainContainer;
