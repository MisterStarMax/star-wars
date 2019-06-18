import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../untils';
import { ListStarships, StarshipsDetails } from '../sw-component';

const StarshipsPage = ({ history, match }) => {
  const { id } = match.params;
  return(
    <Row left={<ListStarships onSelectedItem={(itemId) => history.push(itemId)}/>}
                            right={<StarshipsDetails itemId={id}/>} />
  );
};

export default withRouter(StarshipsPage);
