import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../untils';
import { ListPlanets, PlanetDetails } from '../sw-component';

const PlanetPage = ({ history, match }) => {
  const { id } = match.params;
  return(
    <Row left={<ListPlanets onSelectedItem={(itemId) => history.push(itemId)}/>}
                            right={<PlanetDetails itemId={id}/>} />
  );
};

export default withRouter(PlanetPage);
