import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LOGOReact from './react.png';
import LOGOVite from './vite.svg';
import Counter from './Counter';

const App: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="main">
      <h1>+++ React TypeScript Webpack Starter Template +++</h1>
      <h2>{new Date().toLocaleDateString('ru')}</h2>
      <p>{t('userProfile.title')}</p>
      <h2>mode: {process.env.NODE_ENV}</h2>
      <div>
        <img src={LOGOReact} alt="React logo" width="120" />
        <img src={LOGOVite} alt="Vite logo" width="120" />
      </div>
      <Counter />
    </div>
  );
};

export default App;
