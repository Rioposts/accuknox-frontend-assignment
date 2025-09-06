import React from 'react';
import Widget from './Widget';
import './Category.css';

const Category = ({ title, widgets }) => {
  return (
    <section className="category">
      <h2 className="category-title">{title}</h2>
      <div className="widgets-grid">
        {widgets.map(widget => (
          <Widget key={widget.id} title={widget.widgetTitle} content={widget.content} />
        ))}
        <div className="add-widget-placeholder">
          + Add Widget
        </div>
      </div>
    </section>
  );
};

export default Category;