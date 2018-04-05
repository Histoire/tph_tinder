import React from 'react';

export function showServices(services, current) {
  return (<h5>{services[current]}</h5>)
}

export function showGoals(goals, current) {
  return (<h5>{goals[current]}</h5>)
}

export function showOffers(offers, current) {
  return (<h5>{offers[current]}</h5>)
}
