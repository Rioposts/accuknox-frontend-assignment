import React from 'react';
import Widget from './Widget';
import useDashboardStore from '../store/dashboardStore'; // Import our store!
import './Category.css';

const Category = ({ id: categoryId, title, widgets }) => {
  // Get the 'removeWidget' action from our store
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <section className="category">
      <h2 className="category-title">{title}</h2>
      <div className="widgets-grid">
        {widgets.map(widget => (
          <Widget
            key={widget.id}
            categoryId={categoryId} // Pass down the category ID
            widgetId={widget.id}      // Pass down the widget ID
            title={widget.widgetTitle}
            content={widget.content}
            onRemove={() => removeWidget(categoryId, widget.id)} // Pass down the remove function
          />
        ))}
        <div className="add-widget-placeholder">
          + Add Widget
        </div>
      </div>
    </section>
  );
};

export default Category;