import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import './styles/styles.css';
import './styles/routes.css';
import './styles/recipient.css';
import './styles/scenes.css';
import './styles/theme-extra.css';
import './styles/story.css';

createRoot(document.getElementById('root')).render(<App/>);
