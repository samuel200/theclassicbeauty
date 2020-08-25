import React, { useEffect } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToTop } from './components/ToTop';
import { Loader } from './components/Loader';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ContactPage from './components/ContactPage/ContactPage';
import VotePage from './components/VotePage/VotePage';
import ContestantPage from './components/VotePage/ContestantPage';

export const App = () => {
  useEffect(()=>{
    setTimeout(()=>{
      $("#loader").addClass("loader-exit");
      setTimeout(()=>{
        $("#loader").css({display: "none"})
      }, 500)
    },3000)
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/about" component={ AboutPage }/>
        <Route path="/how-it-works" component={ HowItWorks }/>
        <Route path="/contact" component={ ContactPage }/>
        <Route path="/vote" component={ VotePage }/>
        <Route path="/contestant/:id" component={ ContestantPage }/>
      </Switch>
      <ToTop/>
      <Loader />
    </Router>
  )
}
