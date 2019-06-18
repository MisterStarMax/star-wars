import React from 'react';
import { withDataDetails } from '../hoc'
import './item-details.css';

const Record = ({item, field, label}) => {
  return(
    <li>
      <span> {label}: </span>
      <span> {item[field]} </span>
    </li>
  );
}

export{
  Record
};

const ItemDetails = ({item, image, children }) => {
  return(
    <div className="person-details">
    <img src={image} alt={`${item.name}`} />
    <div className="info-person">
      <h2>{item.name}</h2>
      <ul>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { item })
          })
        }
      </ul>
    </div>
    </div>
  );
}

export default withDataDetails(ItemDetails);
