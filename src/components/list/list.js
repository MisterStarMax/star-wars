import React from 'react';
import './list.css';

const List = (props) => {
  const { data, onSelectedItem, children: renderItem } = props;

  const items = data.map((item) => {
    const { id } = item;
    const lable = renderItem(item);
    return(
      <li className="" key={id} onClick={() => onSelectedItem(id)}>
        { lable }
      </li>
    )
  })

  return (
    <div className="list_items">
      <ul>{items}</ul>
    </div>
  );
}

export default List;
