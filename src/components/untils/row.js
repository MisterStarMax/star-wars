import React from 'react';
import ErrorBoundry from '../error-boundry';

const Row = ({left, right}) => {
  return(
    <ErrorBoundry>
      <div className="row">
        <div className="left block">
          <ErrorBoundry>
            {left}
          </ErrorBoundry>
        </div>
        <div className="right block">
          <ErrorBoundry>
            {right}
          </ErrorBoundry>
        </div>
      </div>
    </ErrorBoundry>
  );
}

export default Row;
