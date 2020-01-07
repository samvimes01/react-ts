/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import { TextStoreProvider } from './contextStore/TextStoreProvider';

import './App.css';

const HomePage = (props: RouteComponentProps): JSX.Element => <Home />;
const LayoutPage = (props: RouteComponentProps): JSX.Element => <Layout />;

const App: React.FC = () => {
  return (
    <TextStoreProvider>
      <Router className="app">
        <HomePage path="/" />
        <LayoutPage path="/layout" />
      </Router>
    </TextStoreProvider>
  );
};

export default App;
