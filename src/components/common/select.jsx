import React from "react";

const Select = ({ name, lable, items, error, ...rest }) => {
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <select name={name} id={name} {...rest} className="form-control">
            <option value="">SELECT</option>
            {items.map(item => (
                <option key={item._id} value={item._id}>{item.name}</option>
            ))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Select;
