import React from 'react';

const ListGroup = ({
    items,
    textProperty,
    valuePropety,
    selectedItem,
    onItemSelect
}) => {
    return(
        <ul className="list-group">
            {items.map(item => (
              <li
                onClick={() => onItemSelect(item)}
                key={item[valuePropety]}
                className={
                  item === selectedItem
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {item[textProperty]}
              </li>
            ))}
          </ul>
    );
};

ListGroup.defaultProps = {
    textProperty:"name",
    valuePropety:"_id"
}

export default ListGroup;