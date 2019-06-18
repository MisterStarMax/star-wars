import React from 'react';
import { withSwapiService } from '../hoc';
import ItemDetails, { Record } from '../item-details';

const Person = (props) => {
  return(
    <ItemDetails {...props}>
        <Record field={'gender'} label={'Gender'}/>
        <Record field={'birth'} label={'Birth Year'}/>
    </ItemDetails>
  );
}

const Planet = (props) => {
  return(
    <ItemDetails {...props}>
        <Record field={'population'} label={'Population'}/>
        <Record field={'rotationPeriod'} label={'Rotation Period'}/>
    </ItemDetails>
  );
}

const Starships = (props) => {
  return(
    <ItemDetails {...props}>
        <Record field={'model'} label={'Model'}/>
        <Record field={'starshipClass'} label={'Starship Class'}/>
        <Record field={'length'} label={'Length'}/>
    </ItemDetails>
  );
}

const mapMethodToPropsPerson = (service) => {
  return {
    getData: service.getPerson,
    getImageUrl: service.getImagePerson
  }
}

const PersonDetails = withSwapiService(mapMethodToPropsPerson)(Person);

const mapMethodToPropsPlanet = (service) => {
  return {
    getData: service.getPlanet,
    getImageUrl: service.getImagePlanet
  }
}

const PlanetDetails = withSwapiService(mapMethodToPropsPlanet)(Planet);

const mapMethodToPropsStarships = (service) => {
  return {
    getData: service.getStarship,
    getImageUrl: service.getImageStarship
  }
}

const StarshipsDetails = withSwapiService(mapMethodToPropsStarships)(Starships);

export {
  PersonDetails,
  PlanetDetails,
  StarshipsDetails
}
