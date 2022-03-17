import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './common/components/NavigationBar/NavigationBar';
import Pages from './pages';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
