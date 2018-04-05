import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SwipeableViews from 'react-swipeable-views';

import {showServices, showGoals, showOffers} from "./components/services.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data : {
      "en": {
          "companies": [{
              "name": "Communicable Disease Control",
              "services": [
                "Needle Exchange(The Works)",
                "Sexual Health Clinics",
                "Tuberculosis Prevention and Control"
              ],
              "goals": [
                "prevent the spread of communicable disease form drug users and sex workers in Toronto",
                "provide inclusive/non-judgmental/res pectful/confidential clinical services to all women and men and to those who experience barriers to accessing effective sexual health services through other service delivery routes",
                "to optimize the health of Toronto communities by working to prevent, control, and reduce the transmission of tuberculosis in Toronto."
              ],
              "offers": [
                "services in a non-judgmental way that recognizes that people will use drugs, and tries to minimize the harm associated with their drug use.",
                "Birth control counseling, free condoms, STD testing & treatment, etc.",
                ""
              ]
          },
          {
              "name": "Child Health and Development",
              "services": [
                "Maternal Infant Health",
                "Healthy Baby Healthy Children",
                "Early Years",
                "Early Abilities"
              ],
              "goals": [
                "enabling individuals to achieve optimal preconception health, experience a healthy pregnancy, have the healthiest newborn (s) possible and achieve optimal breastfeeding",
                "prevention and early intervention to help families promote healthy child development and help their children achieve their full potential ",
                "to foster the potential of children by strengthening families through parenting supports.",
                "early childhood communication development"
              ],
              "offers": [
                "Prenatal group education, CPNP groups and Individual service, etc.",
                "Home visiting, Hospital Contact Assignment, Homeless At Risk Prenatal assignment, etc.",
                "Investing in Families, Peer Nutrition Program, etc.",
                "Infant Hearing Program, Blind Low-Vision Program, etc"
              ]
          }]
      },
      "fr": {

      }
    },
    "english": true,
    "done": false
    }

    this.timePorary = this.timePorary.bind(this)
  }

  changeLanguage = function() {
    this.setState({
      "english": !this.state.english
    })
  }

  doneChange = function() {
    this.setState({
      "done": true
    })
  }

  timePorary = function(done) {
    setTimeout(function () {
      this.doneChange()
    }.bind(this), 2000);

    if(this.state.done) {
      return (<p>BOOYA MOFOS</p>)
    }
  }

  render() {
    let data = 1

    return (
      <div className="App">
        <div className="App-intro">
          {showServices(this.state.data[this.state.english ? 'en' : 'fr'].companies[1].services, 1)}
          {showGoals(this.state.data[this.state.english ? 'en' : 'fr'].companies[1].goals, 1)}
          {showOffers(this.state.data[this.state.english ? 'en' : 'fr'].companies[1].offers, 1)}
          <button onClick={() => this.changeLanguage()}>{this.state.english ? 'english' : 'french'}</button>
        </div>
        <SwipeableViews enableMouseEvents>
          {this.timePorary()}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.timePorary()}</h1>
          </header>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </SwipeableViews>


      </div>
    );
  }
}

export default App;
