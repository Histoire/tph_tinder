import React from 'react';

export function showServices(services) {
  return (<h5>{services[1]}</h5>)
}

export function showGoals(goals) {
  return (<h5>{goals[1]}</h5>)
}

export function showOffers(offers) {
  return (<h5>{offers[1]}</h5>)
}

export function showService(company, e) {
    if(!company) return

    let result = company.services.map((s, i) => {
        return (
            <header className="service-content" key={i}>
                {i+1}/{company.services.length}
                <p>{e ? "Service name" : "Nom du service"}</p>
                <h1 className="App-title">{company.services[i]}</h1>

                <p>{e ? "What our goal is" : "Notre Objectif"}</p>
                <h1 className="App-title">{company.goals[i]}</h1>

                {company.offers[i] && <p>{e ? "What we offer" : "Notre offrands"}</p>}
                {company.offers[i] && <h1 className="App-title">{company.offers[i]}</h1>}
            </header>
        )
    })

    return result
}
