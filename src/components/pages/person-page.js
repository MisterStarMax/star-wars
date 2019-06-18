import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../untils';
import { ListPeople, PersonDetails } from '../sw-component';

const PersonPage = ({ history, match }) => {
  const { id } = match.params;
  return(
    <Row left={<ListPeople onSelectedItem={(itemid) => history.push(itemid)} />}
         right={<PersonDetails itemId={id}/>} />
  );
}

export default withRouter(PersonPage);
