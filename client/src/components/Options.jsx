import React from "react";

const Options = ({ data, selectOption }) => {
  return (
    <div className='options'>
      <div className='typewrite'>
        <h1 className='heading'>Hello, how can I help?</h1>
      </div>
      <div className='optionGrid'>
        {data.map((item) => {
          return (
            <div
              className='optionGridChild'
              key={item.id}
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
