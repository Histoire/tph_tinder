import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';

import SwipeableViews from 'react-swipeable-views';

import {showService} from "./components/services.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data : {
      "en": {
        "companies": {
          "communicable_disease_control": {
            "slug": "cdc",
            "name": "Communicable Disease Control",
            "services": [
              "Needle Exchange(The Works)",
              "Sexual Health Clinics",
              "Tuberculosis Prevention and Control"
            ],
            "goals": [
              "Prevent the spread of communicable disease form drug users and sex workers in Toronto",
              "Provide inclusive/non-judgmental/res pectful/confidential clinical services to all women and men and to those who experience barriers to accessing effective sexual health services through other service delivery routes",
              "To optimize the health of Toronto communities by working to prevent, control, and reduce the transmission of tuberculosis in Toronto"
            ],
            "offers": [
              "Services in a non-judgmental way that recognizes that people will use drugs, and tries to minimize the harm associated with their drug use",
              "Birth control counseling, free condoms, STD testing & treatment, etc.",
              ""
            ]
          },
          "child_health_development": {
              "slug": "cdh",
            "name": "Child Health and Development",
            "services": [
              "Maternal Infant Health",
              "Healthy Baby Healthy Children",
              "Early Years",
              "Early Abilities"
            ],
            "goals": [
              "Enabling individuals to achieve optimal preconception health, experience a healthy pregnancy, have the healthiest newborn (s) possible and achieve optimal breastfeeding",
              "Prevention and early intervention to help families promote healthy child development and help their children achieve their full potential ",
              "To foster the potential of children by strengthening families through parenting supports.",
              "Early childhood communication development"
            ],
            "offers": [
              "Prenatal group education, CPNP groups and Individual service, etc.",
              "Home visiting, Hospital Contact Assignment, Homeless At Risk Prenatal assignment, etc.",
              "Investing in Families, Peer Nutrition Program, etc.",
              "Infant Hearing Program, Blind Low-Vision Program, etc"
            ]
          }
        }
      },
      "fr": {
        "companies": {
          "communicable_disease_control": {
              "slug": "cdc",
            "name": "Contrôle des maladies transmissibles",
            "services": [
              "Service: Échange d'aiguilles (The Works)",
              "Cliniques de santé sexuelles",
              "Prévention et contrôle de la tuberculose"
            ],
            "goals": [
              "Prévenir la propagation des maladies transmissibles chez les consommateurs de drogues et les travailleurs du sexe à Toronto.",
              "Fournir des services cliniques inclusifs / sans jugement / respectueux / confidentiels à tous les hommes et toutes les femmes et à tous ceux qui éprouvent des difficultés à accéder à des services de santé sexuelle efficaces par d'autres voies de services.",
              "Optimiser la santé des collectivités de Toronto en travaillant à prévenir, contrôler et réduire la transmission de la tuberculose à Toronto."
            ],
            "offers": [
              "Des services sans porter de jugement qui reconnaissent que les gens vont consommer des drogue et qui tentent de minimiser les dommages associés à leur consommation de drogues.",
              "Counselling en contrôle des naissances, préservatifs gratuits, tests et traitement des MST, etc.",
              ""
            ]
          },
          "child_health_development": {
              "slug": "cdh",
            "name": "Santé et Développement d’Enfants",
            "services": [
              "Santé maternelle infantile",
              "Bébés en santé, enfants en santé",
              "Premières années",
              "Capacités précoces"
            ],
            "goals": [
              "Permettre aux individus de parvenir à une santé optimale avant la grossesse, de vivre une grossesse en santé, d'avoir un nouveau-né en bonne santé et d'atteindre un allaitement optimal",
              "Prévention et intervention précoce pour aider les familles à promouvoir le développement sain de l'enfant et aider ses enfants à réaliser leur potentiel entier",
              "Favoriser le potentiel des enfants en renforçant les familles grâce à des soutiens parentaux.",
              "développement de la communication dans l’enfance"
            ],
            "offers": [
              "Éducation prénatale en groupe, groupes du PCNP et service individuel, etc.",
              "Visites à domicile, assignation de contact avec un hôpital, assignation prénatale pour les sans-abri, etc.",
              "Investir dans les familles, Programme de nutrition par les pairs, etc.",
              "Programme d'audition infantile, Programme de basse vision aveugles, etc."
            ]
          }
        }
      }
    },
    "english": true,
    "done": false,
    "selected_branch": null
    }

    this.timePorary = this.timePorary.bind(this)
  }

  changeLanguage = function() {
    this.setState({
      "english": !this.state.english,
      "selected_branch": this.state.selected_branch ? ((this.state.selected_branch.slug === 'cdc') ?this.state.data[this.state.english ? 'fr' : 'en'].companies.communicable_disease_control : this.state.data[this.state.english ? 'fr' : 'en'].companies.child_health_development) : this.state.selected_branch
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

  selectOrg = function(org) {
    this.setState({
      "selected_branch": org
    })
  }

  render() {
    let {english, selected_branch} = this.state
    let companies = this.state.data[this.state.english ? 'en' : 'fr'].companies

    return (
      <div className="App">
        <div className="App-intro">
          <h2>TPH CONNECTS</h2>
          Select a <i><b>branch</b></i> to view their services
        </div>

        <div className="translations">
          <button onClick={() => this.changeLanguage()}>{english ? 'français' : 'english'}</button>
        </div>

        <div className="branches">
            <div onClick={() => this.selectOrg(companies.communicable_disease_control)} className={`App-header br`}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{companies.communicable_disease_control.name}</h1>
                {`${(selected_branch ? ((selected_branch.slug === 'cdc') ? '***' : '') : "")}`}
            </div>
            <div onClick={() => this.selectOrg(companies.child_health_development)} className={`App-header bl`}>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{companies.child_health_development.name}</h1>
              {`${(selected_branch ? ((selected_branch.slug === 'cdh') ? '***' : '') : "")}`}
            </div>
        </div>

        <SwipeableViews enableMouseEvents>
            {selected_branch ? showService(selected_branch, english) : <h1 className="white-text">{english ? "Select a branch above" : "Select une section en haut"}</h1>}
        </SwipeableViews>


      </div>
    );
  }
}

export default App;
