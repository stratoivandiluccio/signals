import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import MainPlain from './Main-plain';
import MainMemo from './Main-memo';
import MainSignals from './Main-signals';
import { measure } from './utils';

import './box.css';

const MainMap = {
  'plain': <MainPlain />,
  'memo': <MainMemo />,
  'signals': <MainSignals />
}
const version = 'plain' // plain, memo, signals

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Profiler id='app' onRender={measure}>
    { MainMap[version] }
  </Profiler>
);
