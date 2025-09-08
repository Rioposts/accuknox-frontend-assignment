import React from 'react';
import Widget from './Widget';
import useDashboardStore from '../store/dashboardStore';
import './Category.css';

const Category = ({ id: categoryId, title, widgets, onAddWidget }) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <section className="category">
      <h2 className="category-title">{title}</h2>
      <div className="widgets-grid">
  {widgets.map(widget => (
    <Widget
      key={widget.id}
      widget={widget} // Pass the whole widget object
      onRemove={() => removeWidget(categoryId, widget.id)}
    />
  ))}
  <div className="add-widget-placeholder" onClick={onAddWidget}>
    + Add Widget
  </div>
</div>
    </section>
  );
};

export default Category;