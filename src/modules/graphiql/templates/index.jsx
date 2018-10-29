import React from 'react';
import { render } from 'react-dom';

import './styles/style.css';
import './styles/graphiql.css';

import Routes from './routes';

render(<Routes />, document.getElementById('root'));
