import React from 'react';
import './Widget.css';

const Widget = ({ title, content }) => {
  return (
    <div className="widget">
      <h3 className="widget-title">{title}</h3>
      <div className="widget-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Widget;