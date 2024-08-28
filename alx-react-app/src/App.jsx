import React, {Component } from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProfile name="Alice" age="25" bio="loves hiking and photography" />
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;