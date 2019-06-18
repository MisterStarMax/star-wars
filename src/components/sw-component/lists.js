import React from 'react';
import { withDataList, withSwapiService } from '../hoc';
import { compose } from '../untils';
import List from '../list'

const withChildFunc = (fn) => (Wrapped) => {
  return (props) => {
    return(
      <Wrapped {...props} >
      {fn}
      </Wrapped>
    );
  }
}

const renderItem = ({ name }) => <span>{name}</span>

const mapMethodToPropsPeople = (service) => {
  return {
    getData: service.getAllPeople
  }
}

const mapMethodToPropsPlanets = (service) => {
  return {
    getData: service.getAllPlanets
  }
}

const mapMethodToPropsStarships = (service) => {
  return {
    getData: service.getAllStarships
  }
}

const ListPeople = compose(withSwapiService(mapMethodToPropsPeople),
                           withDataList,
                           withChildFunc(renderItem)
                          )(List);
const ListPlanets = compose(withSwapiService(mapMethodToPropsPlanets),
                           withDataList,
                           withChildFunc(renderItem)
                          )(List);
const ListStarships = compose(withSwapiService(mapMethodToPropsStarships),
                           withDataList,
                           withChildFunc(renderItem)
                          )(List);

export {
  ListPeople,
  ListPlanets,
  ListStarships
}
