import React from 'react';
import './Widget.css';

const Widget = ({ title, content, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-title">{title}</h3>
        <button onClick={onRemove} className="remove-widget-btn">×</button>
      </div>
      <div className="widget-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Widget;