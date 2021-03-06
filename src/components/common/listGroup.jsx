import React, { Component } from "react";
import _ from 'lodash'

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;
  
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            className={item.id === selectedItem.id ? "list-group-item active" : "list-group-item"}
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;
